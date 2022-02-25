// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import nuvalence from './assets/nuvalence.png';

export default create({
  base: 'light',
  brandTitle: 'React Cookbook',
  brandUrl: 'https://nuvalence.io',
  brandImage: nuvalence,
});
