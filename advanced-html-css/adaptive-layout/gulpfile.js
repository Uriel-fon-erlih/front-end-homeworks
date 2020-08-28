let { src, dest } = require('gulp');
let gulp = require('gulp');
let syncBrowser = require('browser-sync').create();
let fileInclude = require('gulp-file-include');
let scss = require('gulp-sass');
let webphtml = require('gulp-webp-html');
let destruction = require('del');
let autoprefixer = require('gulp-autoprefixer');
let cssClean = require('gulp-clean-css');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify-es').default;
let imagemin = require('gulp-imagemin');
let webp = require('gulp-webp');
let groupMedia = require('gulp-group-css-media-queries');

let projectFolder = "dist";
let sourceFolder = "src";

let path = {
	build: {
		html: './',
		css: projectFolder + "/css/",
		javascript: projectFolder + "/javascript/",
		image: projectFolder + "/images/",
		fonts: projectFolder + "/fonts/",
	},
	src: {
		html: [sourceFolder + "/*.html", "!" + sourceFolder + "/_*.html"],
		css: sourceFolder + "/sass/style.scss",
		javascript: sourceFolder + "/javascript/index.js",
		image: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
		fonts: sourceFolder + "/fonts/**/*.ttf",
	},
	watch: {
		html: sourceFolder + "/**/*.html",
		css: sourceFolder + "/sass/**/*.scss",
		javascript: sourceFolder + "/javascript/**/*.js",
		image: sourceFolder + "/images/**/*.{jpg,png,svg,gif,ico,webp}",
	},
	clean: "./" + projectFolder + "/"
}

function browserSync() {
	syncBrowser.init({
		server: {
			baseDir: path.build.html
		},
		port: 5500,
		notify: false
	})
}

function html() {
	return src(path.src.html)
		.pipe(fileInclude())
		.pipe(webphtml())
		.pipe(dest(path.build.html))
		.pipe(syncBrowser.stream())
}

function css() {
	return src(path.src.css)
		.pipe(scss({ outputStyle: "expanded" }))
		.pipe(groupMedia())
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 5 versions"],
			cascade: true
		}))
		.pipe(dest(path.build.css))
		.pipe(cssClean())
		.pipe(rename({ extname: ".min.css" }))
		.pipe(dest(path.build.css))
		.pipe(syncBrowser.stream())
}

function javaScript() {
	return src(path.src.javascript)
		.pipe(fileInclude())
		.pipe(dest(path.build.javascript))
		.pipe(uglify())
		.pipe(rename({ extname: ".min.js" }))
		.pipe(dest(path.build.javascript))
		.pipe(syncBrowser.stream())
}

function images() {
	return src(path.src.image)
		.pipe(webp({ quality: 70 }))
		.pipe(dest(path.build.image))
		.pipe(src(path.src.image))
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			interlaced: true,
			optimizationLevel: 3 // 0 to 7
		}))
		.pipe(dest(path.build.image))
		.pipe(syncBrowser.stream())
}

function watchFiles() {
	gulp.watch([path.watch.html], html);
	gulp.watch([path.watch.css], css);
	gulp.watch([path.watch.javascript], javaScript);
	gulp.watch([path.watch.image], images);
}

function clean() {
	return destruction(path.clean);
}

let build = gulp.series(clean, gulp.parallel(javaScript, css, html, images));
let dev = gulp.parallel(build, watchFiles, browserSync);

exports.default = dev;
