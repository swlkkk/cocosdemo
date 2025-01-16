System.register(["cc", "cc/env", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BUILD, EDITOR, assetManager, settings, Settings, mainName, pluginName, resourceBundlePath, resourceListPath, runtimeBundleName, ResourceDataManager;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
      settings = _cc.settings;
      Settings = _cc.Settings;
    }, function (_ccEnv) {
      BUILD = _ccEnv.BUILD;
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_) {
      mainName = _unresolved_.mainName;
      pluginName = _unresolved_.pluginName;
      resourceBundlePath = _unresolved_.resourceBundlePath;
      resourceListPath = _unresolved_.resourceListPath;
      runtimeBundleName = _unresolved_.runtimeBundleName;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "0a95a0kirtJnJnMnZWSRaFn", "resource-data-manager", undefined); // @ts-ignore


      __checkObsolete__(['AssetManager', 'assetManager', 'JsonAsset', 'settings', 'Settings']);

      _export("default", ResourceDataManager = class ResourceDataManager {
        readResourceList() {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (EDITOR) {
              return Editor.Message.request(mainName, 'get-resource-list');
            } else if (BUILD) {
              console.log("[" + pluginName + "] this is build env");
              return _this.runtimeLoad(resourceListPath);
            } else {
              return _this.previewLoad(resourceListPath);
            }
          })();
        }

        readResourceBundle(tags) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (EDITOR) {
              return _this2.editorLoad(tags);
            } else if (BUILD) {
              return _this2.runtimeLoad(resourceBundlePath);
            } else {
              return _this2.previewLoad(resourceBundlePath);
            }
          })();
        }
        /**
         * 编辑器模式下使用
         * @param locales
         */


        editorLoad(locales) {
          return _asyncToGenerator(function* () {
            return Editor.Message.request(mainName, 'get-resource-bundle', locales);
          })();
        }
        /**
         * 构建后运行时使用
         * @param fileName
         */


        runtimeLoad(fileName) {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            var bundle = yield _this3.getBundle(runtimeBundleName);
            if (!bundle) return undefined;
            var jsonAsset = yield _this3.getResource(bundle, fileName);
            if (!jsonAsset || !jsonAsset.json) return undefined;
            return jsonAsset.json;
          })();
        }
        /**
         * 浏览器预览使用
         * @param urlPath
         */


        previewLoad(urlPath) {
          return _asyncToGenerator(function* () {
            try {
              return yield (yield fetch(mainName + "/" + urlPath)).json();
            } catch (e) {
              return undefined;
            }
          })();
        }

        checkBundle(bundleName) {
          return _asyncToGenerator(function* () {
            var queryResult = settings.querySettings(Settings.Category.ASSETS, 'preloadBundles');
            var bundle = queryResult == null ? void 0 : queryResult.find(it => it.bundle === bundleName);
            return !!bundle;
          })();
        }

        getBundle(bundleName) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              assetManager.loadBundle(bundleName, (error, bundle) => {
                if (error) {
                  resolve(undefined);
                } else {
                  resolve(bundle);
                }
              });
            });
          })();
        }

        getResource(bundle, resourceName) {
          return _asyncToGenerator(function* () {
            return new Promise(resolve => {
              bundle.load(resourceName, (error, asset) => {
                if (error) {
                  resolve(undefined);
                } else {
                  resolve(asset);
                }
              });
            });
          })();
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a09f3e8e5f6e8bd73f311699d5d28ae5eb5d9368.js.map