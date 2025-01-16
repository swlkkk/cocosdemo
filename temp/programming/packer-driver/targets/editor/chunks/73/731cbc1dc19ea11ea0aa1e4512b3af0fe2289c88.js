System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, wiperRight;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f0a9qLCdJMJKESxXLwMkXh", "wiperRight", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wiperRight", wiperRight = (_dec = ccclass('wiperRight'), _dec(_class = class wiperRight extends Component {
        constructor(...args) {
          super(...args);
          this.wiRight = null;
        }

        start() {
          var wiper = this.node.getChildByName('wiper_r');
          this.rotationWiper(wiper);
        }

        rotationWiper(node) {
          let roteLeft = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, -45)
          }, {
            easing: 'linear'
          });
          let roteZero = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          });
          let roteRight = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, 45)
          }, {
            easing: 'linear'
          });
          this.wiRight = tween(node).then(roteLeft).then(roteZero).then(roteRight).then(roteZero).union().repeatForever();
          this.wiRight.start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=731cbc1dc19ea11ea0aa1e4512b3af0fe2289c88.js.map