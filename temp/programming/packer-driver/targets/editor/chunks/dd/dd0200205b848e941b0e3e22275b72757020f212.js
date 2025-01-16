System.register(["cc", "i18next", "cc/env", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, createInstance, EDITOR, BUILD, PREVIEW, game, assetManager, ResourceDataManager, mainName, pluginName, L10nManager, _class, l10n;

  _export("L10nManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      assetManager = _cc.assetManager;
    }, function (_i18next) {
      createInstance = _i18next.createInstance;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
      BUILD = _ccEnv.BUILD;
      PREVIEW = _ccEnv.PREVIEW;
    }, function (_unresolved_) {
      ResourceDataManager = _unresolved_.default;
    }, function (_unresolved_2) {
      mainName = _unresolved_2.mainName;
      pluginName = _unresolved_2.pluginName;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "2856a7GSV9Fbb53nOimJ33J", "l10n-manager", undefined);
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      // @ts-ignore


      __checkObsolete__(['game', 'assetManager']);

      _export("L10nManager", L10nManager = class L10nManager {
        constructor() {
          /**
           * @zh
           * i18n 实例
           * @en
           * i18next instance
           */
          this._intl = undefined;
          this._options = {};
          this.resourceList = void 0;
          this.resourceBundle = {};
          this.resourceDataManager = void 0;
          this.resourceDataManager = new ResourceDataManager();
        }

        isInitialized() {
          var _this$_intl$isInitial, _this$_intl;

          return (_this$_intl$isInitial = (_this$_intl = this._intl) == null ? void 0 : _this$_intl.isInitialized) != null ? _this$_intl$isInitial : false;
        }

        async createIntl(options) {
          var _ref, _localStorageLanguage, _options$fallbackLang, _options$resources;

          const reloadResult = await this.reloadResourceData();

          if (!reloadResult) {
            return;
          }

          this._options = options;
          this._intl = createInstance();
          let localStorageLanguage = undefined;

          if (BUILD && !PREVIEW) {
            var _l10n$_options$localS;

            localStorageLanguage = localStorage.getItem((_l10n$_options$localS = l10n['_options'].localStorageLanguageKey) != null ? _l10n$_options$localS : L10nManager.LOCAL_STORAGE_LANGUAGE_KEY);
            localStorageLanguage = this.checkLanguage(localStorageLanguage);
          }

          const defaultLanguage = (_ref = (_localStorageLanguage = localStorageLanguage) != null ? _localStorageLanguage : options.language) != null ? _ref : this.resourceList.defaultLanguage;
          const fallbackLanguage = (_options$fallbackLang = options.fallbackLanguage) != null ? _options$fallbackLang : this.resourceList.fallbackLanguage;
          const resources = (_options$resources = options.resources) != null ? _options$resources : this.resourceBundle;
          const i18nextOptions = {
            lng: defaultLanguage,
            fallbackLng: fallbackLanguage,
            resources: { ...resources
            },
            ns: L10nManager.ALLOW_NAMESPACE,
            defaultNS: L10nManager.DEFAULT_NAMESPACE,
            initImmediate: false,
            load: 'currentOnly'
          };
          await this._intl.init(i18nextOptions);
          this.setAssetOverrideMap(resources[defaultLanguage][L10nManager.ASSET_NAMESPACE]);
        }

        checkLanguage(language) {
          if (!language || language.length === 0 || language === 'null' || language === null || language === 'undefined' || language === undefined) {
            return undefined;
          }

          if (this.resourceList && this.resourceList.languages.length > 0 && this.resourceList.languages.find(it => it === language)) {
            return language;
          }

          return undefined;
        }

        cloneIntl(options) {
          if (!this._intl) {
            throw new Error('i18next not init, please use \'l10n.createIntl\'');
          }

          this._intl = this._intl.cloneInstance(options);
        }

        async reloadResourceData() {
          var _this$resourceList$la, _this$resourceList, _this$resourceList2;

          this.resourceList = await this.resourceDataManager.readResourceList();

          if (!this.resourceList) {
            console.log(`[${pluginName}] not found translate language list, skip init l10n`);
            return false;
          }

          this.resourceBundle = await this.resourceDataManager.readResourceBundle((_this$resourceList$la = (_this$resourceList = this.resourceList) == null ? void 0 : _this$resourceList.languages) != null ? _this$resourceList$la : []);

          if (!((_this$resourceList2 = this.resourceList) != null && _this$resourceList2.defaultLanguage)) {
            console.log(`[${pluginName}] not found translate language data, skip init l10n`);
            return false;
          }

          return true;
        }
        /** 初始化 i18next */


        config(options) {
          this.cloneIntl(options);
        }

        async changeLanguage(language) {
          if (!language) {
            console.warn(`[${pluginName}] invalid language tag`);
            return;
          }

          console.log(`[${pluginName}] will change language to`, language);

          if (this._intl) {
            if (this.currentLanguage) {
              this.releaseOverrideMap(this.resourceBundle[this.currentLanguage][L10nManager.ASSET_NAMESPACE]);
            }

            await this._intl.changeLanguage(language);
            this.setAssetOverrideMap(this.resourceBundle[language][L10nManager.ASSET_NAMESPACE]);

            if (!EDITOR) {
              localStorage.setItem(L10nManager.LOCAL_STORAGE_LANGUAGE_KEY, language);
              console.log(`[${pluginName}] game will restart`);
              game.restart();
            }
          } else {
            console.log(`[${pluginName}] language data not load, please confirm whether the language data is included in the build`);
          }
        }

        t(key, options) {
          var _this$_intl$isInitial2, _this$_intl2;

          if (!((_this$_intl$isInitial2 = (_this$_intl2 = this._intl) == null ? void 0 : _this$_intl2.isInitialized) != null ? _this$_intl$isInitial2 : false)) return key;
          return this._intl.t(key, options);
        }
        /**
         * 实验性功能暂不开放
         * 数字类ICU
         */


        tn(value, options) {
          var _this$_intl$isInitial3, _this$_intl3, _this$_intl4;

          if (!((_this$_intl$isInitial3 = (_this$_intl3 = this._intl) == null ? void 0 : _this$_intl3.isInitialized) != null ? _this$_intl$isInitial3 : false)) return value.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            } else if (typeof cloneOptions[key] === 'number' && cloneOptions[key] === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.NumberFormat((_this$_intl4 = this._intl) == null ? void 0 : _this$_intl4.language, cloneOptions).format(value);
        }
        /**
         * 实验性功能暂不开放
         * 日期/时刻类ICU
         */


        td(date, options) {
          var _this$_intl$isInitial4, _this$_intl5, _this$_intl6;

          if (!((_this$_intl$isInitial4 = (_this$_intl5 = this._intl) == null ? void 0 : _this$_intl5.isInitialized) != null ? _this$_intl$isInitial4 : false)) return date.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.DateTimeFormat((_this$_intl6 = this._intl) == null ? void 0 : _this$_intl6.language, cloneOptions).format(date);
        }
        /**
         * 实验性功能暂不开放
         * 时长类ICU
         */


        tt(value, unit, options) {
          var _this$_intl$isInitial5, _this$_intl7, _this$_intl8;

          if (!((_this$_intl$isInitial5 = (_this$_intl7 = this._intl) == null ? void 0 : _this$_intl7.isInitialized) != null ? _this$_intl$isInitial5 : false)) return value.toString();
          const cloneOptions = {};
          Object.assign(cloneOptions, options);

          for (const key of Object.keys(cloneOptions)) {
            if (typeof cloneOptions[key] === 'string' && cloneOptions[key].length === 0) {
              delete cloneOptions[key];
            }
          }

          return new Intl.RelativeTimeFormat((_this$_intl8 = this._intl) == null ? void 0 : _this$_intl8.language, cloneOptions).format(value, unit);
        }
        /**
         * 实验性功能暂不开放
         * 数组类ICU
         */


        tl(value) {
          var _this$_intl$isInitial6, _this$_intl9, _this$_intl10;

          if (!((_this$_intl$isInitial6 = (_this$_intl9 = this._intl) == null ? void 0 : _this$_intl9.isInitialized) != null ? _this$_intl$isInitial6 : false)) return value.toString();
          return new Intl.ListFormat((_this$_intl10 = this._intl) == null ? void 0 : _this$_intl10.language).format(value);
        }

        exists(key) {
          var _this$_intl$exists, _this$_intl11;

          return (_this$_intl$exists = (_this$_intl11 = this._intl) == null ? void 0 : _this$_intl11.exists(key)) != null ? _this$_intl$exists : false;
        }

        get currentLanguage() {
          var _this$_intl$language, _this$_intl12;

          return (_this$_intl$language = (_this$_intl12 = this._intl) == null ? void 0 : _this$_intl12.language) != null ? _this$_intl$language : '';
        }

        get languages() {
          var _this$resourceList$la2, _this$resourceList3;

          return (_this$resourceList$la2 = (_this$resourceList3 = this.resourceList) == null ? void 0 : _this$resourceList3.languages) != null ? _this$resourceList$la2 : [];
        }

        direction(language) {
          return (language ? new Intl.Locale(language) : new Intl.Locale(this._intl.language)).textInfo().direction;
        }

        on(event, callback) {
          var _this$_intl13;

          (_this$_intl13 = this._intl) == null || _this$_intl13.on(event, callback);
        }

        off(event, callback) {
          var _this$_intl14;

          (_this$_intl14 = this._intl) == null || _this$_intl14.off(event, callback);
        }

        getResourceBundle(language, namespace) {
          var _this$_intl15;

          return (_this$_intl15 = this._intl) == null ? void 0 : _this$_intl15.getResourceBundle(language, namespace);
        }

        setAssetOverrideMap(assetNamespace) {
          for (const key of Object.keys(assetNamespace)) {
            assetManager.assetsOverrideMap.set(key, assetNamespace[key]);
          }
        }

        releaseOverrideMap(assetNamespace) {
          for (const key of Object.keys(assetNamespace)) {
            assetManager.assetsOverrideMap.delete(key);
          }
        }

      });

      _class = L10nManager;
      L10nManager.LOCAL_STORAGE_LANGUAGE_KEY = `${mainName}/language`;
      L10nManager.DEFAULT_NAMESPACE = 'translation';
      L10nManager.ASSET_NAMESPACE = 'asset';
      L10nManager.ALLOW_NAMESPACE = [_class.DEFAULT_NAMESPACE, _class.ASSET_NAMESPACE];
      L10nManager.l10n = new _class();
      l10n = L10nManager.l10n;

      _export("default", l10n);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=dd0200205b848e941b0e3e22275b72757020f212.js.map