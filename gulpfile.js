var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// var sassInclude = ['node-modules', require('bourbon-neat').includePaths];
var neat = require('node-neat').includePaths;
var bourbon = require('bourbon-neat').includePaths;

// console.log(neat);

gulp.task('sass', function(){
  return gulp.src('scss/styles.scss')
    .pipe(sass({
      includePaths: ['styles'].concat(neat)
    })) // Using gulp-sass
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']); 
  gulp.watch('*.html', browserSync.reload);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  });
});