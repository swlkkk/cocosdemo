System.register(["cc", "cc/env", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, BUILD, EDITOR, assetManager, settings, Settings, mainName, pluginName, resourceBundlePath, resourceListPath, runtimeBundleName, ResourceDataManager;

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
        async readResourceList() {
          if (EDITOR) {
            return Editor.Message.request(mainName, 'get-resource-list');
          } else if (BUILD) {
            console.log(`[${pluginName}] this is build env`);
            return this.runtimeLoad(resourceListPath);
          } else {
            return this.previewLoad(resourceListPath);
          }
        }

        async readResourceBundle(tags) {
          if (EDITOR) {
            return this.editorLoad(tags);
          } else if (BUILD) {
            return this.runtimeLoad(resourceBundlePath);
          } else {
            return this.previewLoad(resourceBundlePath);
          }
        }
        /**
         * 编辑器模式下使用
         * @param locales
         */


        async editorLoad(locales) {
          return Editor.Message.request(mainName, 'get-resource-bundle', locales);
        }
        /**
         * 构建后运行时使用
         * @param fileName
         */


        async runtimeLoad(fileName) {
          const bundle = await this.getBundle(runtimeBundleName);
          if (!bundle) return undefined;
          const jsonAsset = await this.getResource(bundle, fileName);
          if (!jsonAsset || !jsonAsset.json) return undefined;
          return jsonAsset.json;
        }
        /**
         * 浏览器预览使用
         * @param urlPath
         */


        async previewLoad(urlPath) {
          try {
            return await (await fetch(`${mainName}/${urlPath}`)).json();
          } catch (e) {
            return undefined;
          }
        }

        async checkBundle(bundleName) {
          const queryResult = settings.querySettings(Settings.Category.ASSETS, 'preloadBundles');
          const bundle = queryResult == null ? void 0 : queryResult.find(it => it.bundle === bundleName);
          return !!bundle;
        }

        async getBundle(bundleName) {
          return new Promise(resolve => {
            assetManager.loadBundle(bundleName, (error, bundle) => {
              if (error) {
                resolve(undefined);
              } else {
                resolve(bundle);
              }
            });
          });
        }

        async getResource(bundle, resourceName) {
          return new Promise(resolve => {
            bundle.load(resourceName, (error, asset) => {
              if (error) {
                resolve(undefined);
              } else {
                resolve(asset);
              }
            });
          });
        }

      });

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a09f3e8e5f6e8bd73f311699d5d28ae5eb5d9368.js.map