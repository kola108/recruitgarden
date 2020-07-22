const   gulp            = require('gulp'),
        less            = require('gulp-less'),
        uglify          = require('gulp-uglify-es').default,
        cssnano         = require('gulp-cssnano'),
        rename          = require('gulp-rename'),
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

gulp.task('html', function () {
    return gulp.src('../dist/*.html')
        .pipe(connect.reload())
})

gulp.task('build', gulp.series('less', 'js-minify'));

gulp.task('watch', function () {
    connect.server({
        livereload: true,
        root: '../dist'
      });
    gulp.watch('../dist/*.html', gulp.task('html'));
    gulp.watch('./less/*.less', gulp.task('less'));
    gulp.watch('./js/*.js', gulp.task('js-minify'));
});
