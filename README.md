# Developers information

## Let's start

- From the very beginning you have to install all node packages for Gulp
- For this type in a console `npm run init` in the root dir of the project (Recruitgarden)


## Gulp build

- For ruing gulp build task type in a console `npm run build` in the root dir of the project (Recruitgarden)
- This task will change and generates distributive code (min.css, min.js, compressed images) only once per task


## Gulp watching

- For ruing gulp watching service type in a console `npm run watch` in the root dir of the project (Recruitgarden)
- This service will constantly watch changes and generates distributive code (min.css, min.js, compressed images)
- For stoping the watch process press `ctrl + c`


## Live server for Gulp

- Every time when you are starting gulp watching service automatically you running a live server for Gulp, which allows you to observe the development process in runtime. For this after starting gulp watching service go to the browser and in address url input `http://localhost:8080/`


## Less variables

For general colors and paddings use `variables.less` in `Recruitgarden/dev/less/variables.less` file. Every less file (for example `home.less`) should include this file (example: `@import 'variables.less';`)


## Fonts declarations

Every font should have a declaration in `Recruitgarden/dev/less/variables.less` file.

