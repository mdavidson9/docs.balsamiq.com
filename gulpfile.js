// LOAD
var gulp = require("gulp"),
  util = require("gulp-util"),
  sass = require("gulp-sass"),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  del = require('del'),
  sitemap = require('gulp-sitemap'),
  watch = require('gulp-watch'),
  log = util.log,
  capitalize = require('title-capitalization'),
  fs = require('fs');

// TASKS

// Build CSS
gulp.task("sass", function(){
  log("Generate CSS files " + (new Date()).toString());
    gulp.src('./src/sass/**/*.scss')
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer("last 2 version","safari 5", "ie 8", "ie 9"))
    .pipe(gulp.dest("./src/build-css"))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('./themes/docs-balsamiq-com/static/css'))
    .pipe(notify({ message: 'Sass task complete' }));
});

// Minify JS
gulp.task('js', function() {
  log("Minify JS files " + (new Date()).toString());
  gulp.src('./src/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('dbc.js'))
    .pipe(gulp.dest('./src/build-js/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./themes/docs-balsamiq-com/static/js'))
    .pipe(notify({ message: 'JS Minify task complete' }));
});

// Get SASS CONFIG from balsamiq.com
gulp.task('getsassconfig', function() {
  log("Get Includes from balsamiq.com " + (new Date()).toString());
  gulp.src('../balsamiq.com/sass/modules/_config.scss')
    .pipe(gulp.dest('./src/sass/modules/'))
    .pipe(notify({ message: 'Get SASS CONFIG file task complete' }));
});

// Generate Sitemap for Search Engines
gulp.task('sitemap', function () {
  gulp.src('public/**/*.html')
      .pipe(sitemap({
          siteUrl: 'https://docs.balsamiq.com'
      }))
      .pipe(gulp.dest('./public'));
});

gulp.task('capitalize', function() {
  function walkSync(dir, filelist) {
    var files = fs.readdirSync(dir);
    files.forEach(function(file) {
      if (fs.statSync(dir + '/' + file).isDirectory()) {
        walkSync(dir + '/' + file, filelist);
      }
      else {
        fs.readFile(dir+"/"+file, 'utf8', function(err, data) {
          if (err) throw err;

          var orig = data;

          data = data.replace(/title: "(.*)"\n/, function(a, b) {
            return 'title: "'+capitalize(b)+'"\n';
          });

          data = data.replace(/(\#+) (.*)\n/g, function(a, b, c) {
            return b+" "+capitalize(c)+"\n";
          });

          if (orig !== data) {
            fs.writeFile(dir+"/"+file, data, function(err) {
              if (err) {
                return log(err);
              }
              log(dir+"/"+file+" capitalized.");
            });
          }
        });
      }
    });
  };

  walkSync('./content');
});

// Clean
gulp.task('clean', function(cb) {
  del(['./src/build-css','./src/build-js','./themes/docs-balsamiq-com/static/css', './themes/docs-balsamiq-com/static/js', './public/sitemap.xml'], cb)
});

// Default
gulp.task('default', ['clean'], function() {
  gulp.start('capitalize', 'sass', 'js', 'sitemap');
});
// Dev (CSS/JS Only)
gulp.task('dev', ['clean'], function() {
  gulp.start('sass', 'js');
});

// WATCH
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  // Watch .js files
  gulp.watch('./src/js/**/*.js', ['js']);

  gulp.watch('./content/**/*.md', ['capitalize']);
});
