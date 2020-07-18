const path = require("path");
const { name } = require("./package");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");

const productionGzipExtensions = ["js", "css"];

function resolve(dir) {
  return path.join(__dirname, dir);
}
const port = 8081; // dev port

module.exports = {
  publicPath: "/GHSS",

  outputDir: "GHSS",
  assetsDir: "static",
  filenameHashing: true,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port,
    overlay: {
      warnings: false,
      errors: true
    },
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require("postcss-plugin-px2rem")({
            rootValue: 19.2, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
            unitPrecision: 5, //允许REM单位增长到的十进制数字。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
        ]
      },
      sass: {
        prependData: `@import "@/styles/index.scss";`
      }
    }
  },
  parallel: false,
  chainWebpack: config => {
    // 鼠标指针样式
    config.module
      .rule("mouse")
      .test(/\.(ico|cur)(\?.*)?$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "[path][name].[ext]"
      })
      .end();

    config.module
      .rule("worker")
      .test(/\.worker\.js$/)
      .use("worker-loader")
      .loader("worker-loader")
      .options({
        inline: true
      })
      .end();
    config.module.rule("js").exclude.add(/\.worker\.js$/);

    config.output.globalObject("this");

    config.plugin("html").tap(args => {
      if (process.env.NODE_ENV === "development") {
        args[0].favicon = path.resolve("public/favicon_dev.ico");
      }
      return args;
    });

    // use svg
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.include
      .add(resolve("src/icon/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      })
      .end();
    // image exclude svg
    const imagesRule = config.module.rule("images");
    imagesRule
      .test(/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/)
      .exclude.add(resolve("src/icon/svg"))
      .end();
  },
  // 自定义webpack配置
  configureWebpack: {
    devtool:
      process.env.NODE_ENV === "development"
        ? "cheap-module-eval-source-map"
        : "",
    // optimization: {
    //   minimizer: [
    //     new UglifyJsPlugin({
    //       uglifyOptions: {
    //         compress: {
    //           warnings: false,
    //           drop_console: false,
    //           drop_debugger: true,
    //         },
    //       },
    //       parallel: true,
    //       sourceMap: true,
    //     }),
    //   ],
    // },
    // gzip
    plugins:
      process.env.NODE_ENV === "production"
        ? [
            new CompressionPlugin({
              filename: "[path].gz[query]",
              algorithm: "gzip",
              test: new RegExp(
                "\\.(" + productionGzipExtensions.join("|") + ")$"
              ),
              threshold: 10240,
              minRatio: 0.8
            })
          ]
        : [],
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    output: {
      // 把子应用打包成 umd 库格式
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
};
