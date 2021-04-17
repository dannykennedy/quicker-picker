import { parseColorString } from "./colorEncode";
import { hName } from "./colorNames";

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
