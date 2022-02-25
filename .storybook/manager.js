// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import storybookTheme from './storybookTheme';

addons.setConfig({
  theme: {...storybookTheme, ...themes.dark,},
});