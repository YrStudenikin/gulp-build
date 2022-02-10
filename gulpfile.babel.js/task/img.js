import gulp from "gulp";

// Конфигурация
import app from "../config/app.js";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import imagemin from "gulp-imagemin";
import newer from "gulp-newer";
import webp from "gulp-webp";
import gulpIf from "gulp-if";

// Обработка картинок
const img = () => {
    return gulp.src(path.img.src)
        .pipe(
            plumber({
                errorHandler: notify.onError((error) => ({
                    title: "Image",
                    message: error.message,
                })),
            })
        )
        .pipe(newer(path.img.build))
        .pipe(webp())
        .pipe(gulp.dest(path.img.build))
        .pipe(gulp.src(path.img.src))
        .pipe(newer(path.img.build))
        .pipe(gulpIf(app.isProd, imagemin(app.imagemin)))
        .pipe(gulp.dest(path.img.build))
};

module.exports = img;
