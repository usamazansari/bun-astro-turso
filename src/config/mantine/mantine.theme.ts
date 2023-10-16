import { createTheme, type MantineColorsTuple } from '@mantine/core';
import { primerLightColors } from './primer-light.color';
import { primerNamedColors } from './primer-named.color';

const theme = createTheme({
  colors: {
    white: Array.from({ length: 10 }).map(() => '#FFFFFF') as unknown as MantineColorsTuple,
    transparent: Array.from({ length: 10 }).map(() => '#FFFFFF00') as unknown as MantineColorsTuple,
    black: Array.from({ length: 10 }).map(() => '#1F2328') as unknown as MantineColorsTuple,
    ...primerLightColors,
    ...primerNamedColors,
  },
  primaryColor: 'accent-fg',
});

export { theme };
