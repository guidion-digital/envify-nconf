(function () {
    'use strict';

    module.exports = function (GLOBAL, gulp) {
        const gulpCopy = require('gulp-copy');
        var sourceFiles = [GLOBAL.dirs.testbase + 'mock/*'];
        var destination = GLOBAL.dirs.dist.testbase + 'mock';

        return function () {
            return gulp
            .src(sourceFiles)
            .pipe(gulp.dest(destination))
        }
    }
})();