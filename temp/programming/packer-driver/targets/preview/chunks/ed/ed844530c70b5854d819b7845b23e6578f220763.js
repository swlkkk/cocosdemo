System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider, _dec, _class, _crd, ccclass, property, cubeTsone;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxCollider = _cc.BoxCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c377b9ZwQdDT51oH6+pLF45", "cubeTso", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider', 'ITriggerEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("cubeTsone", cubeTsone = (_dec = ccclass('cubeTso'), _dec(_class = class cubeTsone extends Component {
        constructor() {
          super(...arguments);
          // 亮起图标
          this.channel = null;
        }

        start() {
          // 监听触发事件
          var collider = this.node.getComponent(BoxCollider);
          collider.on('onTriggerExit', this.onTriggerEnter, this);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ed844530c70b5854d819b7845b23e6578f220763.js.map