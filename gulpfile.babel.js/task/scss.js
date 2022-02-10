import gulp from "gulp";

// Конфигурация
import app from "../config/app.js";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import rename from "gulp-rename";
import size from "gulp-size";
import sassCompiler from "sass";
import gulpSass from "gulp-sass";
import sassGlob from "gulp-sass-glob";
import webpCss from "gulp-webp-css";

const sass = gulpSass(sassCompiler);

// Обработка scss
export default () => {
    return gulp.src(path.scss.src, {sourcemaps: app.isDev})
        .pipe(
            plumber({
                errorHandler: notify.onError((error) => ({
                    title: "SCSS",
                    message: error.message,
                })),
            })
        )
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(webpCss())
        .pipe(autoprefixer())
        .pipe(size({title: "main.css"}))
        .pipe(gulp.dest(path.scss.build, {sourcemaps: app.isDev}))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(size({title: "main.min.css"}))
        .pipe(gulp.dest(path.scss.build, {sourcemaps: app.isDev}))
};
