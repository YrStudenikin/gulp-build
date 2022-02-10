import gulp from "gulp";

// Конфигурация
import app from "../config/app.js";
import path from "../config/path.js";

// Плагины
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import newer from "gulp-newer";
import fonter from "gulp-fonter";
import ttf2woff2 from "gulp-ttf2woff2";

// Обработка шрифтов
const fonts = () => {
    return (
        gulp.src(path.fonts.src)
            .pipe(
                plumber({
                    errorHandler: notify.onError((error) => ({
                        title: "Fonts",
                        message: error.message,
                    })),
                })
            )
            .pipe(newer(path.fonts.build))
            .pipe(fonter(app.fonter))
            .pipe(gulp.dest(path.fonts.build))
            .pipe(ttf2woff2())
            .pipe(gulp.dest(path.fonts.build)))
};

module.exports = fonts;
