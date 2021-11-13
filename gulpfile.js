global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),
    sass: require('gulp-sass')(require('sass')),
    path: {
        serverDir: './app/build',
        tasks: require('./gulp/config'),
        src: {
            html: './app/src/*.html',
            style: './app/src/styles/*.*',
            js: './app/src/scripts/*.js',
            img: './app/src/img/**/*.{jpg,jpeg,png,jfif,webp,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        },
        build: {
            html: './app/build/',
            style: './app/build/styles/',
            js: './app/build/scripts/',
            img: './app/build/img/',
            fonts: './app/build/fonts/'
        },
        watch: {
            html: ['./app/src/*.html', './app/src/view/*.html'],
            style: './app/src/styles/**/*.*',
            js: './app/src/**/*.js',
            img: './app/src/img/**/*.{jpg,jpeg,png,jfif,webp,svg}',
            fonts: './app/src/fonts/**/**/*.*'
        }
    },
    tasks: {
        default: ['html', 'style', 'fonts', 'img', 'js', 'watch', 'serve'],
        build: ['html', 'style', 'fonts', 'img', 'js']
    }
}

$.path.tasks.forEach(taskPath => require(taskPath)());

for (const value in $.tasks) {
    $.gulp.task(value, $.gulp.series($.gulp.parallel(...$.tasks[value])))
}
