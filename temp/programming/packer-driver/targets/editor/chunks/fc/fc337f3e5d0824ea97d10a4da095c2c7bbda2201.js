System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, native, sys, game, _dec, _class, _crd, ccclass, property, qualityts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      native = _cc.native;
      sys = _cc.sys;
      game = _cc.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a8064JJesJNJqr10YfLNZ3l", "qualityts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'native', 'sys', 'game', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("qualityts", qualityts = (_dec = ccclass('qualityts'), _dec(_class = class qualityts extends Component {
        start() {
          if (sys.isNative && (sys.os == sys.OS.IOS || sys.os == sys.OS.OSX)) {
            native.bridge.sendToNative('native_end');
          } else {
            game.end();
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc337f3e5d0824ea97d10a4da095c2c7bbda2201.js.map