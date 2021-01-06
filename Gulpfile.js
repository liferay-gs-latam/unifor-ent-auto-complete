const gulp = require('gulp')
const clean = require('gulp-clean')
const babel = require('gulp-babel')
const es2015 = require('babel-preset-es2015')
const uglify = require('gulp-uglify')
const config = {
  dist: './dist',
  src: './src/**/*.js'
}

gulp.task('clean', () => gulp.src(config.dist).pipe(clean()))

gulp.task('build', ['clean'], () => {
  return gulp.src(config.src)
            .pipe(babel({ presets: [es2015] }))
            .pipe(uglify())
            .pipe(gulp.dest(config.dist))
})

gulp.task('default', ['build'])
