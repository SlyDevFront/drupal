# NittyGritty is a starter theme for Drupal 8

## Features
- Gulp, combines and minifies styles and js
- Bootstrap 4 (SCSS source + space for your own Bootstrap variables and styles)
- Fontawesome
- BrowserSync
- Imagemin
- Twig


## Thank you
This theme consists partially of work and ideas of:
- [Atlas Starter Theme for Drupal 8](https://github.com/j-hannah/atlas) by John Hannah
- [Understrap Wordpress Theme](https://github.com/understrap/understrap) by Holger Koenemann and his contributors

## Installation

Next, install dependencies using npm by running the following command in the root of your theme folder:

1. [Perform the classic Drupal 8-ish theme installation and activate it](https://www.drupal.org/docs/8/extending-drupal-8/installing-themes)
2. Open your terminal and navigate to `{YOUR_DRUPAL_ROOT}/themes/nitty-gritty-theme`
3. Run `npm install`, `gulp copy-assets` will beperformed automatically, so you don't have to

## Usage

You can also watch for any changes to your files by running:

- `gulp watch`
- `gulp watch-bs`
- `gulp copy-assets`

+ Put your custom Bootstrap variables into `/sass/theme/_theme_variables.scss`
+ Put your custom styles into `/sass/theme/_theme.scss`
+ Put your custom js into `/src/js/custom-javascript.js`

## License

GNU GPL version 2
