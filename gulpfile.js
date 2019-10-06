const gulp = require('gulp');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const postcssImport = require('postcss-import');
const postcssCssnext = require('postcss-cssnext');
const less = require('gulp-less');
const newer = require('gulp-newer');
const del = require('del');
const image = require('gulp-image');

gulp.task('browser-sync', function(done) {
  browserSync.init({
    proxy: "barberian.html", //domain in Open Server
    notify: false
  });
  done();
});

function reload(done){
  browserSync.reload();
  done();
}

gulp.task("less", function(done){
  var processors = [
    postcssImport,
    postcssCssnext
  ];
  return gulp.src([
      'src/css/*.less',
      '!src/css/_*.less',
    ])
    .pipe(less({
      strictMath: 'on'}))
    .pipe(postcss(processors))
    .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
    .pipe(gulp.dest('build/css'))
  done();
});

gulp.task('csslibs', function(done) {
  gulp.src('src/css/libs/*.css')
    .pipe(gulp.dest('build/css/libs'));
  done();
});

//------------------------------------------------------
// HTML settings
var htmlPath = {
  src: 'src/**/*.html',
  build: 'build/'
};
// HTML task
gulp.task('html', () => {
  return gulp.src(htmlPath.src)
    .pipe(newer(htmlPath.build))
    .pipe(gulp.dest(htmlPath.build))
});

gulp.task('fonts', function(done) {
  gulp.src('src/fonts/**/*')
    .pipe(gulp.dest('build/fonts/'));
  done();
});

gulp.task('img',function(done){
  return gulp.src([
      'src/img/**/*', 'src/*.ico'],  
      {base: 'src/'})
  .pipe(gulp.dest('./build/'));
});

gulp.task('js', function(done) {
  gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js/'));
  done();
});

gulp.task('watch', function(done) {
  gulp.watch('src/*.html', gulp.series('html', reload));
  gulp.watch('src/css/*.less', gulp.series('less', reload));
  gulp.watch('src/css/*.css', gulp.series('csslibs', reload));
  gulp.watch(['src/img/*', 'src/*.ico'], gulp.series('img', reload));
  gulp.watch('src/fonts/*', gulp.series('fonts', reload));
  gulp.watch('src/js/*.js', gulp.series('js', reload));
  done();
});

gulp.task('imagemin', function(done) {
  gulp.src('src/img/*')
    .pipe(image())
    .pipe(gulp.dest('build/img'))
  done();
});


gulp.task('del', function(done) {
  (async () => {
    const deletedPaths = await del(['build/**', '!build']);
     console.log('Deleted files and folders:\n', deletedPaths.join('\n'));
})();
  done();
});

gulp.task('default', gulp.series('img', 'fonts', 'less', 'csslibs', 'js', 'html', 'browser-sync', 'watch'));
gulp.task('build', gulp.series('img', 'fonts', 'less', 'csslibs', 'js', 'html', 'imagemin'));
