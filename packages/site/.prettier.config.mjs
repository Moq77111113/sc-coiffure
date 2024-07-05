import adonis from '@adonisjs/prettier-config';
import classnames from 'prettier-plugin-classnames';
import tailwind from 'prettier-plugin-tailwindcss';

export default {
  ...adonis,
  ...tailwind,
  ...classnames,
  plugins: ['prettier-plugin-tailwindcss'],
};
