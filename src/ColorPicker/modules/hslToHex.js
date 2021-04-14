import { colord } from 'colord';
import { stringifyHsl } from './colorHelpers';

export const hslToHexString = (h, s, l) => {
  const hslString = stringifyHsl(h, s, l);
  return colord(hslString).toHex();
};
