import { colors } from '../tailwindcss/primer-colors';
import { rgbaToHex, type RGBAString } from '../../utils';

const primerNamedColors = Object.entries(colors).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key.split('color-')[1]]: Array.from({ length: 10 }).map(() => (value.startsWith('#') ? value : rgbaToHex(value as RGBAString))),
  }),
  {},
);

export { primerNamedColors };
