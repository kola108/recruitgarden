const   gulp            = require('gulp'),
        less            = require('gulp-less'),
        uglify          = require('gulp-uglify-es').default,
        cssnano         = require('gulp-cssnano'),
        rename          = require('gulp-rename'),
        imagemin        = require('gulp-imagemin'),        
        autoprefixer    = require('gulp-autoprefixer'),
        connect         = require('gulp-connect');

gulp.task('less', function () {
    return gulp.src(['./less/*.less', '!./less/variables.less'])
        .pipe(less())
        .pipe(autoprefixer({overrideBrowserslist: ['last 20 versions', '> 1%', 'ie 8', 'ie 7'], cascade: false }))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../dist/css'))
        .pipe(connect.reload())
});

gulp.task('js-minify', function () {
    return gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('../dist/js'))
        .pipe(connect.reload())
});

gulp.task('img', function () {
    return gulp.src('./images/**/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgPlugins: [{removeViewBox: false}],
            // use: [pngquant()]
        }))
        .pipe(gulp.dest('../dist/img'));
});

gulp.task('webserver', function() {
    connect.server({
      livereload: true,
      root: ['..', '.dist']
    });
  });

gulp.task('build', gulp.series('less', 'js-minify', 'img'));

gulp.task('watch', function () {
    connect.server({
        livereload: true,
        root: '../dist'
      });
    gulp.watch('.', gulp.series('less', 'js-minify', 'img'));
});
