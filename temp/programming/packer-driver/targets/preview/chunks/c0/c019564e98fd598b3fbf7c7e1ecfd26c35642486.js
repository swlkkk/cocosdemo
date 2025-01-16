System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, wiperLeft;

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

      _cclegacy._RF.push({}, "8662fTgj4pJCLaXNGrV5v2w", "wiperLeft", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wiperLeft", wiperLeft = (_dec = ccclass('wiperLeft'), _dec(_class = class wiperLeft extends Component {
        constructor() {
          super(...arguments);
          this.wileft = null;
        }

        start() {
          var wiper = this.node.getChildByName('wiper_l');
          this.rotationWiper(wiper);
        }

        rotationWiper(node) {
          var roteLeft = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, -45)
          }, {
            easing: 'linear'
          });
          var roteZero = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          });
          var roteRight = tween().to(1.5, {
            eulerAngles: new Vec3(0, 0, 45)
          }, {
            easing: 'linear'
          });
          this.wileft = tween(node).then(roteLeft).then(roteZero).then(roteRight).then(roteZero).union().repeatForever();
          this.wileft.start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c019564e98fd598b3fbf7c7e1ecfd26c35642486.js.map