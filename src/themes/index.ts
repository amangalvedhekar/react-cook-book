import {colors} from './colors';

const breakpoints =  ["600px", "900px", "1200px", "1800px"];
export const defaultTheme = {
  space: [0, 4, 8, 16, 32, 48, 56],
  fontSizes: [10,12, 14, 16, 24, 40, 64],
  fontWeights: [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ],
  borders: ['2px solid', '4px solid', '6px solid', '8px solid', '10px solid' ],
  radii: [ 0, 2, 4, 6, 8, 10, 12, 16 ],
  fonts: {
   body: 'Poppins',
   heading: 'Poppins',
  },
  colors,
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  breakpoints,
  mediaQueries: {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[1]})`,
    large: `@media screen and (min-width: ${breakpoints[2]})`,
  }
};
