import { huesList } from './colorList';

export const stringifyHsl = (hue, saturation, value) => {
  return `hsl(${hue}, ${saturation}%, ${value}%)`;
};

export const getTintValue = (tintName, colorName, saturationType) => {
  if (!tintName) return null;

  const hue = getColorDefinitionByName(colorName);
  const sat = getSaturationOfHue(hue, saturationType);
  const tint = sat.tints.find((t) => t.tintName === tintName);
  return tint.tintValue;
};

export const getColorDefinitionByName = (name) => {
  const ret = huesList.find((h) => h.name === name);
  if (!ret) {
    throw new Error(`Invalid hue name ${name} passed to getColorDefinitionByName`);
  }
  return ret;
};

const getSaturationOfHue = (colorDefinition, saturationType) => {
  const sat = colorDefinition[saturationType];
  if (!sat) {
    return colorDefinition;
  }
  return sat;
};
