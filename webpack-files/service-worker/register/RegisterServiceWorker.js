const HTMLWebpackPlugin = require("html-webpack-plugin");

class RegisterServiceWorker {
  apply(compiler) {
    compiler.hooks.compilation.tap("RegisterServiceWorker", (compilation) => {
      HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "RegisterServiceWorker",
        (data, cb) => {
          const swScriptTag = `<script defer="defer">
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', () => {
                navigator.serviceWorker.register('/service-worker.js').then(registration => {
              }).catch(registrationError => {console.log('SW registration failed: ', registrationError);});
              });
            }
          </script>`;
          data.html = data.html.replace(`</body>`, `${swScriptTag}</body>`);
          cb(null, data);
        }
      );
    });
  }
}

module.exports = RegisterServiceWorker;
