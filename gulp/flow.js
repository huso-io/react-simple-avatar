'use strict';

import gulp from 'gulp';
import removeFlowType from 'flow-remove-types';
import through2 from 'through2';
import config from 'config';

gulp.task('flow-remove-types', () => (
  gulp
  .src(config.get('gulp.entry') + '*.js')
  .pipe(through2.obj((file, enc, cb) => {
    file.contents = new Buffer(removeFlowType(file.contents.toString('utf8')).toString())
    cb(null, file);
  }))
  .pipe(gulp.dest(config.get('gulp.output.es6')))
));
