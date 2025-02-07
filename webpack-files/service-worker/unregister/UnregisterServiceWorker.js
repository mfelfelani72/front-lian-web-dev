const HTMLWebpackPlugin = require("html-webpack-plugin");

class UnregisterServiceWorker {
  apply(compiler) {
    compiler.hooks.compilation.tap("UnregisterServiceWorker", (compilation) => {
      HTMLWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        "UnregisterServiceWorker",
        (data, cb) => {
          const swScriptTag = 
          `<script defer="defer">
            window.addEventListener("load", () => {
              navigator.serviceWorker.getRegistrations().then((registrations) => {
                for (let registration of registrations) {
                  registration.unregister();
                }
              });
            });

            const clearCacheStorage =() => {
              if ("caches" in window) {
                caches
                  .keys()
                  .then((cacheNames) => {
                    cacheNames.forEach((cacheName) => {
                      caches.delete(cacheName);
                    });
                  })
                  .then(() => {
                    console.log("All cache storage cleared");
                  })
                  .catch((error) => {
                    console.error("Error clearing cache storage:", error);
                  });
              } else {
                console.log("Cache storage is not supported in this browser");
              }
            }

            clearCacheStorage();
          </script>`;
          data.html = data.html.replace(`</body>`, `${swScriptTag}</body>`);
          cb(null, data);
        }
      );
    });
  }
}

module.exports = UnregisterServiceWorker;
