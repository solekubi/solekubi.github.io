// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: "/",
  outputDir: "dist",
  lintOnSave: process.env.NODE_ENV !== "production",
  devServer: {
    overlay: {
      warnings: true,
      errors: true,
    },
    // proxy: {
    //   "/api": {
    //     target: "http://localhost:3000",
    //     pathRewrite: { "^/api": "" },
    //   },
    // },
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        additionalData: `@use "~/@/css/variables.sass" as *`,
      },
      scss: {
        additionalData: `@use "~/@/css/variables.sass" as *;`,
      },
    },
  },
  chainWebpack: (config) => {
    const path = require("path")
    config.module
      .rule("pug")
      .test(/\.pug$/)
      .use("pug-plain-loader")
      .loader("pug-plain-loader")
    config.resolve.alias.delete("@")
    config.resolve.alias.set("/@", path.join(__dirname, "src"))
  },
}
