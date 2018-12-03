var gulp = require("gulp");
/*var pug = require("gulp-pug");
var less = require("gulp-less");
var minifyCSS = require("gulp-csso");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
*/
const htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var pump = require('pump');
let cleanCSS = require('gulp-clean-css');

/*
 
*/
gulp.task('minify', () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('dist'));
});

gulp.task('minify-css', () => {
  return gulp.src('assets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('fonts', () => {
  return gulp.src('assets/fonts/*.ttf')
    .pipe(gulp.dest('dist/assets/fonts'));
});

gulp.task('images', () => {
  return gulp.src('assets/images/*.png')
    .pipe(gulp.dest('dist/assets/images'));
});

gulp.task('compress', function (cb) {
    pump([
          gulp.src('assets/lib/*.js'),
          uglify(),
          gulp.dest('dist')
      ],
      cb
    );
  });

//gulp.task("default", ["html", "css", "js"]);
gulp.task("default", ["minify", "compress", "minify-css", "fonts", "images"]);