import gulp from "gulp";

// Конфигурация
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import fileInclude from "gulp-file-include";
import webpHtml from "gulp-webp-html";
import prettyHtml from "gulp-pretty-html";

export default () => {
    return gulp.src(path.html.src)
        .pipe(
            plumber({
                errorHandler: notify.onError((error) => ({
                    title: "HTML",
                    message: error.message,
                })),
            })
        )
        .pipe(
            fileInclude({
                prefix: "@",
            })
        )
        .pipe(webpHtml())
        .pipe(prettyHtml())
        .pipe(gulp.dest(path.html.build))
};