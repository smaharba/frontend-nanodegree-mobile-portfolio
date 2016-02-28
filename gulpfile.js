// include gulp
var gulp = require('gulp');
 

// include plug-ins
var changed = require('gulp-changed');

var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');


// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// minify new images
gulp.task('imagemin', function() {
  var imgSrc = './src/images/**/*',
      imgDst = './build/images';
      
  gulp.src(imgSrc)
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
    
});

// minify new or changed HTML pages
gulp.task('htmlpage', function() {
  var htmlSrc = './src/*.html',
      htmlDst = './build';
      
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
    });

/*
	//waarom werkt dit niet?
gulp.task('htmlpage', function() {
  var htmlSrc = './src/views/*.html',
      htmlDst = './build/views/';
          
  gulp.src(htmlSrc)
    .pipe(changed(htmlDst))
    .pipe(minifyHTML())
    .pipe(gulp.dest(htmlDst));
});
*/



// JS concat, strip debugging and minify
//This example passes an array of filenames to gulp.src(); I want main.js to appear at the top of the production file followed by all other JavaScript files in any order. As usual, we can run this task using: gulp scripts
gulp.task('scripts', function() {
  gulp.src(['./src/scripts/main.js','./src/scripts/*.js'])
    .pipe(concat('main.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('./build/scripts/'));
});

// CSS concat, auto-prefix and minify
//The autoprefixer plug-in is passed a string or array indicating the level of browser support — in this case, we want the current and previous versions of all mainstream browsers. It looks up each property at caniuse.com and adds additional vendor-prefixed properties when necessary.
gulp.task('styles', function() {
  gulp.src(['./src/styles/*.css'])
    .pipe(concat('styles.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./build/styles/'));
});

// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles']);

//watch for changes
gulp.task('watch', function () {
	gulp.watch('./src/*.html', ['htmlpage']);
	gulp.watch('./src/scripts/*.js', ['scripts']);
	gulp.watch('./src/styles/*.css', ['styles']);
	});

/*
// default gulp task
gulp.task('default', ['imagemin', 'htmlpage', 'scripts', 'styles'], function() {
  // watch for HTML changes
  gulp.watch('./src/*.html', function() {
    gulp.run('htmlpage');
  });

  // watch for JS changes
  gulp.watch('./src/scripts/*.js', function() {
    gulp.run('jshint', 'scripts');
  });

  // watch for CSS changes
  gulp.watch('./src/styles/*.css', function() {
    gulp.run('styles');
  });

});*/