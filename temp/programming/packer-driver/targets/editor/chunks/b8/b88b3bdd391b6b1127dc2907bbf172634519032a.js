System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, native, i18n, _dec, _class, _crd, ccclass, property, beginTest;

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

      _cclegacy._RF.push({}, "e07feca+rVMvrLIC365T74/", "beginvs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'sys', 'native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("beginTest", beginTest = (_dec = ccclass('beginvs'), _dec(_class = class beginTest extends Component {
        onLoad() {}

        start() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            // 获取系统语言
            let lang = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getLanguage", "()Ljava/lang/String;");

            if (lang.indexOf('zh') == '-1') {
              i18n.init('en');
              i18n.updateSceneRenderers();
            }
          }

          sys.localStorage.setItem('firstLoad', 'true');
          director.loadScene("scene");
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b88b3bdd391b6b1127dc2907bbf172634519032a.js.map