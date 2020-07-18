# Developers information

## Let's start

- From the very beging you have to install all node packacges for Gulp
- From this type in a console `npm run init` in the root dir of the project (Recruitgarden)


## Gulp build

- For ruing gulp build task type in a console `npm run build` in the root dir of the project (Recruitgarden)
- This task will changes and generates distributive code (min.css, min.js, compressed images) only once per task


## Gulp watching

- For ruing gulp wathing service type in a console `npm run watch` in the root dir of the project (Recruitgarden)
- This service will constantly watching changes and generates distributive code (min.css, min.js, compressed images)
- For stoping the watch process press `ctrl + c`


## Less variables

For general colors and paddings use `variables.less` in `Recruitgarden/dev/less/variables.less` file. Every less file (for example `home.less`) should include this file (example: `@import 'variables.less';`)


## Fonts declarations

Every font should have a declaration in `Recruitgarden/dev/less/fonts.less` file. Every less file (for example `home.less`) should include the file `fonts.min.css` (example: `@import url("fonts.min.css");`)


## Images 

Every image should be in `Recruitgarden/dev/images` folder because gulp will compress them and put into `Recruitgarden/dixt/img`

