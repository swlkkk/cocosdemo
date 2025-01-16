System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, native, i18n, _dec, _class, _crd, ccclass, property, beginVs;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      sys = _cc.sys;
      native = _cc.native;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f6f7DGkzlIV5YKDIJTsAyZ", "beginVs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'sys', 'native', 'assetManager', 'game', 'loader']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("beginVs", beginVs = (_dec = ccclass('beginVs'), _dec(_class = class beginVs extends Component {
        onLoad() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            let lang = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getLanguage", "()Ljava/lang/String;");

            if (lang.indexOf('zh') == -1) {
              i18n.init('en');
              i18n.updateSceneRenderers();
            }
          } else if (sys.isNative && (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX)) {
            native.bridge.onNative = (arg0, arg1) => {
              if (arg0 == 'cocos_lang') {
                let lang = arg1;

                if (lang.indexOf('zh') == -1) {
                  i18n.init('en');
                  i18n.updateSceneRenderers();
                }
              }

              return;
            };

            native.bridge.sendToNative('native_lang');
          }
        }

        start() {
          director.preloadScene("scene", err => {
            if (err) {
              console.log('加载失败');
              return;
            }

            try {
              director.loadScene("scene");
            } catch (error) {
              console.log(error);
            }
          });
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bdd11ec6c941b6f204f1d1aeaefdd0e0ea2f24c6.js.map