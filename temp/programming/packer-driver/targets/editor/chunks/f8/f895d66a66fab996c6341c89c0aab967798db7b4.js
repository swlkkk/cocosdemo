System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, game, _dec, _class, _crd, ccclass, property, test;

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

      _cclegacy._RF.push({}, "5e1eb+ilwNNGqxWyXX/f0s8", "test", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys', 'game']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("test", test = (_dec = ccclass('test'), _dec(_class = class test extends Component {
        start() {}

        closeOut() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.node.active = false;
            this.node.parent.getChildByName('GameOver').active = true;
            setTimeout(() => {
              game.end();
            }, 1500);
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
//# sourceMappingURL=f895d66a66fab996c6341c89c0aab967798db7b4.js.map