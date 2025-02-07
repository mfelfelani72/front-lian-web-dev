const HTMLWebpackPlugin = require("html-webpack-plugin");

class DevModeBanner {
  apply(compiler) {
    compiler.hooks.compilation.tap("DevModeBanner", (compilation) => {
      HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "DevModeBanner",
        (data, cb) => {
          data.html = data.html.replace(
            `<body><div id="root"></div>`,
            `<body><div class="dev-banner">You are in Dev Mode</div> <div class="mt" id="root"></div>`
          );
          cb(null, data);
        }
      );
    });
  }
}

module.exports = DevModeBanner;
