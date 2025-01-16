System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, _dec, _class, _crd, ccclass, property, beginTest;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e07feca+rVMvrLIC365T74/", "beginTest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("beginTest", beginTest = (_dec = ccclass('beginTest'), _dec(_class = class beginTest extends Component {
        onLoad() {}

        start() {
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
//# sourceMappingURL=01cb1de5b4f3673d37f23c71f872ff1e0c8ec45a.js.map