import gulp from "gulp";
import browserSync from "browser-sync";

// Конфигурация
import app from "./config/app.js";
import path from "./config/path.js";

// Задачи
import clear from "./task/clear.js";
import html from "./task/html.js";
import scss from "./task/scss.js";
import js from "./task/js.js";
import img from "./task/img.js";
import fonts from "./task/fonts.js";

// Сервер
const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root,
        },
    });
};

// Наблюдение
const watcher = () => {
    gulp.watch(path.html.watch, html).on("all", browserSync.reload);
    gulp.watch(path.scss.watch, scss).on("all", browserSync.reload);
    gulp.watch(path.js.watch, js).on("all", browserSync.reload);
    gulp.watch(path.img.watch, img).on("all", browserSync.reload);
    gulp.watch(path.fonts.watch, fonts).on("all", browserSync.reload);
};

const build = gulp.series(
    clear,
    gulp.parallel(html, scss, js, img, fonts)
);

const dev = gulp.series(
    build,
    gulp.parallel(watcher, server)
);

// Задачи
export {html};
export {scss};
export {js};
export {img};
export {fonts};

// Сборка
export default app.isProd ? build : dev;
