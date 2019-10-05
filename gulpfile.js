let gulp = require('gulp');
let plumber = require('gulp-plumber');
let notify = require('gulp-notify');
let pug = require('gulp-pug');
let browserSync = require('browser-sync');
let postcss = require('gulp-postcss');
let postcssImport = require('postcss-import');
let postcssCssnext = require('postcss-cssnext');
let less = require('gulp-less');

const del = require('del');

// for image optimization
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
    .pipe(less())
    .pipe(postcss(processors))
    .on('error', function (err) {
            console.log(err.toString());
            this.emit('end');
        })
    .pipe(gulp.dest('./build/css'))
  done();
});

gulp.task('csslibs', function(done) {
  gulp.src('src/css/libs/*.css')
    .pipe(gulp.dest('build/css/libs'));
  done();
});

gulp.task('pug', function(done) {
  return gulp.src(['src/*.pug', '!src/_*.pug'])
    .pipe(plumber())
    .pipe(pug({
      pretty: true
    }))
    .on("error", notify.onError(function(error){
        return "Message to the notifier: " + error.message;
    }))
    .pipe(gulp.dest('build'));
  done();
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
  gulp.watch('src/*.pug', gulp.series('pug', reload));
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



gulp.task('default', gulp.series('img', 'fonts', 'less', 'csslibs', 'js', 'pug', 'browser-sync', 'watch'));
gulp.task('build', gulp.series('img', 'fonts', 'less', 'csslibs', 'js', 'pug', 'imagemin'));
