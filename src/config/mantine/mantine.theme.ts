import { createTheme, type MantineColorsTuple } from '@mantine/core';
import { primerLightColors } from './primer-light.color';

const theme = createTheme({
  colors: {
    white: Array.from({ length: 10 }).map(() => '#ffffff') as unknown as MantineColorsTuple,
    transparent: Array.from({ length: 10 }).map(() => '#ffffff00') as unknown as MantineColorsTuple,
    black: Array.from({ length: 10 }).map(() => '#1f2328') as unknown as MantineColorsTuple,
    ...primerLightColors,
  },
});

export { theme };
