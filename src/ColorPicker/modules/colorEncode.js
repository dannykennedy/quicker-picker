import { colorList } from './colorList';
import { stringifyHsl } from './colorHelpers';

export const stringifyColor = (name, fromSimpleColor, hsl) => {
  return `${name} (${fromSimpleColor}) ${hsl}`;
};

// Parse a color string to a color object
export const parseColorString = (colorString) => {
  const regex = /([a-zA-Z- ]+)\(([a-zA-Z- ]+)\) ([A-Za-z0-9#]+)/;
  const found = colorString.match(regex);

  if (!found) {
    return {
      color: '',
      fromSimpleColor: '',
      hex: '',
    };
  }

  const [color, fromSimpleColor, hex] = found.slice(1, found.length).map((x) => x.trim());

  const ret = {
    color,
    fromSimpleColor,
    hex,
  };
  return ret;
};

export const colorStringToHsl = (colorString) => {
  const { color } = parseColorString(colorString);

  const match = colorList[color];

  if (!match) {
    console.log('Faulty colorString', colorString);
    throw new Error(`No color found matching ${color}, in colorString ${colorString}`);
  }

  return stringifyHsl(...match.hsl);
};
