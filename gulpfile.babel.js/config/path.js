const pathSrc = "./src";
const pathBuild = "./build";

export default {
    root: pathBuild,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        build: pathBuild,
    },

    css: {
        src: pathSrc + "/css/*.css",
        watch: pathSrc + "/css/**/*.css",
        build: pathBuild + "/css",
    },

    scss: {
        src: pathSrc + "/scss/*.scss",
        watch: pathSrc + "/scss/**/*.scss",
        build: pathBuild + "/css",
    },

    js: {
        src: pathSrc + "/js/*.js",
        watch: pathSrc + "/js/**/*.js",
        build: pathBuild + "/js",
    },

    img: {
        src: pathSrc + "/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/img/**/*.{png,jpg,jpeg,gif,svg}",
        build: pathBuild + "/img",
    },

    fonts: {
        src: pathSrc + "/fonts/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/fonts/**/*.{ttf,otf,eot,otc,ttc,woff,woff2,svg}",
        build: pathBuild + "/fonts",
    },
}