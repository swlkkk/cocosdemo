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
            var lang = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getLanguage", "()Ljava/lang/String;");

            if (lang.indexOf('zh') == -1) {
              i18n.init('en');
              i18n.updateSceneRenderers();
            }
          }
        }

        start() {
          setTimeout(() => {
            director.loadScene("scene");
          }, 1500);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a751d05657e9b3204459626eae2a21e2d3c13a.js.map