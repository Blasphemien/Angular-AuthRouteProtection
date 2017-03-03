/**
 * Created by keilc on 3/03/2017.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tslint = require("gulp-tslint");
const jshint = require('gulp-jshint');

// gulp-typescript
gulp.task('typescript', function () {
  return gulp.src(['src/**/*.ts', '!node_modules/**'])
    .pipe(ts({
      noImplicitAny: false,
    }))
    .pipe(gulp.dest(function(file) {
      return file.base;
    }));
});

// gulp-jshint
gulp.task('lint', function() {
  return gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// or requiring in ES5


gulp.task("tslint", function(){
  gulp.src(['src/**/*.js', '!node_modules/**'])
    .pipe(tslint({
      formatter: "verbose"
    }))
    .pipe(tslint.report('default'));
});

gulp.task('watch', ['typescript'], function() {
  gulp.watch(['src/**/*.ts', '!node_modules/**'], ['typescript']);
});
