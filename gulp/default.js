'use strict';

import gulp from 'gulp';
import sequence from 'run-sequence';

gulp.task('default', (cb) => (
  sequence('clean', ['build', 'flow-remove-types'], cb)
));
