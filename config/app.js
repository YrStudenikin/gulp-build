// Наличие аргумента в командном процессе
const isProd = process.argv.includes("--production");
const isDev = !isProd;

module.exports = {
    isProd: isProd,
    isDev: isDev,

    webpack: {
        mode: isProd ? "production" : "development"
    }
}