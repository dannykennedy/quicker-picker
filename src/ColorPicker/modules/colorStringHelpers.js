import { parseColorString } from './colorEncode';
import { colorNames } from './colorNames';

export const colorStringsAreEqual = (colorStringA, colorStringB) => {
  if (colorStringA === colorStringB) return true;

  const colorNameA = parseColorString(colorStringA).color;
  const colorNameB = parseColorString(colorStringB).color;
  return colorNameA === colorNameB;
};

export const isMetallic = (colorString) => {
  const { color } = parseColorString(colorString);
  const isMetal =
    color === colorNames.GOLD || color === colorNames.SILVER || color === colorNames.BRONZE;
  return isMetal;
};
