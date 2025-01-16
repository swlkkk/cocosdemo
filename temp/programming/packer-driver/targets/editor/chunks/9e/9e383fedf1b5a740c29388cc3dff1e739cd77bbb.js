System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, initLightts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3b149BahFNZ4n8EwAjIvXk", "initLightts", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("initLightts", initLightts = (_dec = ccclass('initLightts'), _dec(_class = class initLightts extends Component {
        start() {} // 添加启动点


        addLight() {
          this.node.getChildByName('initLight').active = true;
        } // 删除启动点


        deLight() {
          this.node.getChildByName('initLight').active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e383fedf1b5a740c29388cc3dff1e739cd77bbb.js.map