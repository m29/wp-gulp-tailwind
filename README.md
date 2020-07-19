# WP Gulp Tailwind
This is a starter WordPress theme which includes [Tailwind CSS](https://tailwindcss.com/), [Gulp](https://gulpjs.com/) and [PurgeCSS](https://purgecss.com/). This theme does not include styles of its own and expects the user to create its own design.

## Installation
Use the following commands to download and install the theme:

```bash
git clone git@github.com:m29/wp-gulp-tailwind.git
cd wp-gulp-tailwind
```

## Usage
The CSS file is placed in ```assets/css``` directory which includes the tailwind CSS. You can write your own CSS in this file below the three tailwind directives.

If you are using yarn, run the following commands to install dependencies and create compiled CSS
```bash
yarn
yarn add global gulp
gulp css
```

If you are using npm, run the following commands to install dependencies and create compiled CSS
```bash
npm install
npm i -g gulp
gulp css
```


```gulp css``` command will look for HTML tags and CSS selectors that are being used in the project in all the PHP files and will remove any unused CSS, create a minified CSS file in the ```assets/build``` directory.

To automatically create output CSS file whenever there is a change in style.css, a PHP file or tailwind.config.js use the below command:
```bash
gulp watch
```

## Important Links
1. [Tailwind Configuration](https://tailwindcss.com/docs/configuration/)
2. [PurgeCSS Configuration](https://purgecss.com/configuration.html)
3. [PurgeCSS Whitelisting](https://purgecss.com/whitelisting.htm)
