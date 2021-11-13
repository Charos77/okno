module.exports = () =>
    $.gulp.task('js', () => {
        return $.gulp.src($.path.src.js)
            .pipe($.gp.babel())
            .pipe($.gp.rename({extname: '.min.js'}))
            .pipe($.gulp.dest($.path.build.js))
            .on('end', $.bs.reload)
    }
    )