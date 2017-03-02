/**
 * Created by keilc on 3/03/2017.
 */
var gulp = require('gulp');
var ts = require('gulp-typescript');

// gulp-typescript
gulp.task('default', function () {
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

gulp.task('watch', ['default'], function() {
  gulp.watch(['src/**/*.ts', '!node_modules/**'], ['default']);
});
