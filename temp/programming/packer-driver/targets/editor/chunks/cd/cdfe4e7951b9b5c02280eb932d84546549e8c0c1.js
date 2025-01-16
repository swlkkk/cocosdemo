System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, game, _dec, _class, _crd, ccclass, property, qualityts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
      game = _cc.game;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "333ffOBqNtAGqpmW+iQ5rvr", "qualityts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'native', 'sys', 'game', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("qualityts", qualityts = (_dec = ccclass('qualityts'), _dec(_class = class qualityts extends Component {
        start() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            setTimeout(() => {
              sys.garbageCollect();
              game.end();
            }, 1000);
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
//# sourceMappingURL=cdfe4e7951b9b5c02280eb932d84546549e8c0c1.js.map