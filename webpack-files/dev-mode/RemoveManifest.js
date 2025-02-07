const HTMLWebpackPlugin = require("html-webpack-plugin");

class AddManifest {
  apply(compiler) {
    compiler.hooks.compilation.tap("AddManifest", (compilation) => {
      HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "AddManifest",
        (data, cb) => {
            data.html = data.html.replace(/<link\s+[^>]*rel=["']manifest["'][^>]*>/gi, '');
          cb(null, data);
        }
      );
    });
  }
}

module.exports = AddManifest;
