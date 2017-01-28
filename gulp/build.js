'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import config from 'config';

gulp.task('build', () => (
  gulp.src(config.get('gulp.entry') + '**/*.js')
      .pipe(babel())
      .pipe(gulp.dest(config.get('gulp.output.dist')))
));
