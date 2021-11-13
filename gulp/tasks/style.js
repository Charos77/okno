module.exports = () =>
    $.gulp.task('style', () => {
        return $.gulp.src($.path.src.style)
            .pipe($.sass())
            .pipe($.gp.autoprefixer())
            .pipe($.gp.groupCssMediaQueries())
            // .pipe($.sass({ outputStyle: 'expended' }))
            .pipe($.gp.rename({ extname: '.min.css' }))
            .pipe($.gulp.dest($.path.build.style))
            .on('end', $.bs.reload)
    }
    )