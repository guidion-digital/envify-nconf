'use strict';

const GLOBAL = require('./gulp/config/gulpConfig');
var runSequence = require('run-sequence');

const gulp = require('gulp');

//gulp tasks
gulp.task('clean', require(GLOBAL.dirs.gulp + 'clean')(GLOBAL, gulp));
gulp.task('lint', ['clean'], require(GLOBAL.dirs.gulp + 'lint')(GLOBAL, gulp));
gulp.task('build', (cb) => runSequence('lint', 'build:compile', 'build:copy', cb));
gulp.task('build:compile', require(GLOBAL.dirs.gulp + 'build')(GLOBAL, gulp));
gulp.task('build:copy', require(GLOBAL.dirs.gulp + 'copy')(GLOBAL, gulp));
gulp.task('default');
