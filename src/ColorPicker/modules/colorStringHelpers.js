import { parseColorString } from "./colorEncode";
import { hName } from "./colorNames";
import { colord } from "colord";

export const stringifyHsl = (hue, saturation, value) => {
  return `hsl(${hue}, ${saturation}%, ${value}%)`;
};

export const hslToHexString = (h, s, l) => {
  const hslString = stringifyHsl(h, s, l);
  return colord(hslString).toHex();
};

export const colorStringsAreEqual = (colorStringA, colorStringB) => {
  if (colorStringA === colorStringB) return true;

  const colorNameA = parseColorString(colorStringA).color;
  const colorNameB = parseColorString(colorStringB).color;
  return colorNameA === colorNameB;
};

export const isMetallic = (colorString) => {
  const { color } = parseColorString(colorString);
  const isMetal =
    color === hName.GOLD || color === hName.SILVER || color === hName.BRONZE;
  return isMetal;
};
