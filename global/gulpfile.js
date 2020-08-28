const mediaGroup = require('gulp-group-css-media-queries');
const renameFile = require('gulp-rename');
const webpCss = require('gulp-webp-css');
const uglifyJs = require('gulp-uglify-es').default;
const woff = require('gulp-ttf2woff');
const sass = require('gulp-sass');
const autoPrefix = require('gulp-autoprefixer');
const webp = require('gulp-webp');
const minImage = require('gulp-imagemin');
const spriteSvg = require('gulp-svg-sprite');
const cssClean = require('gulp-clean-css');
const deletion = require('del');
const liveServer = require('browser-sync').create();
const gulp = require('gulp');
const webpHtml = require('gulp-webp-html');
const include = require('gulp-file-include');
const woff2 = require('gulp-ttf2woff2');
const sourceFolder = 'source';
const buildFolder = 'build';

const path = {
	build: {
		html: buildFolder + '/',
		css: buildFolder + '/css',
		javascript: buildFolder + '/javascript',
		images: buildFolder + '/images',
		fonts: buildFolder + '/fonts',
	},
	src: {
		html: [sourceFolder + '/*.html', '!' + sourceFolder + '/_*.html'],
		css: sourceFolder + '/sass/style.scss',
		javascript: sourceFolder + '/javascript/index.js',
		images: sourceFolder + '/images/**/*.{jpg,png,svg,gif,ico,webp}',
		fonts: sourceFolder + '/fonts/*.ttf',
	},
	watch: {
		html: sourceFolder + '/**/*.html',
		css: sourceFolder + '/sass/**/*.scss',
		javascript: sourceFolder + '/javascript/**/*.js',
		images: sourceFolder + '/images/**/*.{jpg,png,svg,gif,ico,webp}',
	},
	clean: './' + buildFolder + '/'
}

function goLive() {
	liveServer.init({
		server: {
			baseDir: './' + buildFolder + '/'
		},
		port: 5555,
		notify: false
	})
}

function html() {
	return gulp.src(path.src.html)
		.pipe(include())
		.pipe(webpHtml())
		.pipe(gulp.dest(path.build.html))
		.pipe(liveServer.stream())
}

function css() {
	return gulp.src(path.src.css)
		.pipe(sass({ outputStyle: 'expanded' }))
		.pipe(mediaGroup())
		.pipe(autoPrefix({
			overrideBrowserslist: ["last 5 versions"],
			cascade: true
		}))
		.pipe(webpCss({
			webpClass: '',
			noWebpClass: '.no-webp'
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(cssClean())
		.pipe(renameFile({ extname: ".min.css" }))
		.pipe(gulp.dest(path.build.css))
		.pipe(liveServer.stream())
}

function javascript() {
	return gulp.src(path.src.javascript)
		.pipe(include())
		.pipe(gulp.dest(path.build.javascript))
		.pipe(uglifyJs())
		.pipe(renameFile({ extname: ".min.js" }))
		.pipe(gulp.dest(path.build.javascript))
		.pipe(liveServer.stream())
}

function images() {
	gulp.src(path.src.images)
		.pipe(webp({ quality: 70 }))
		.pipe(gulp.dest(path.build.images))
	return gulp.src(path.src.images)
		.pipe(minImage({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 3 // 0 to 7
		}))
		.pipe(gulp.dest(path.build.images))
		.pipe(liveServer.stream())
}

function fonts() {
	gulp.src(path.src.fonts)
		.pipe(woff())
		.pipe(gulp.dest(path.build.fonts))
	return gulp.src(path.src.fonts)
		.pipe(woff2())
		.pipe(gulp.dest(path.build.fonts))
}

gulp.task('svgSprite', function () { //!запуск gulp svgSprite
	return gulp.src([sourceFolder + '/images/icon-sprite/*.svg']) // icon-sprite папка где будут находиться sprite
		.pipe(spriteSvg({
			mode: {
				stack: {
					sprite: "../icons/icons.svg", // file name
					example: true // ++ создаёт пример html
				}
			},
		}))
		.pipe(dest(path.build.images))
})

function watchFiles() {
	gulp.watch([path.watch.html], html)
	gulp.watch([path.watch.css], css)
	gulp.watch([path.watch.javascript], javascript)
	gulp.watch([path.watch.images], images)
}

function clean() {
	return deletion(path.clean)
}

const build = gulp.series(clean, gulp.parallel(javascript, css, html, images, fonts));
const watch = gulp.parallel(build, watchFiles, goLive);

exports.default = watch;
