System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, wiperLeft;

  function _reportPossibleCrUseOftween(extras) {
    _reporterNs.report("tween", "../tween", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tween = _unresolved_2.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8662fTgj4pJCLaXNGrV5v2w", "wiperLeft", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wiperLeft", wiperLeft = (_dec = ccclass('wiperLeft'), _dec(_class = class wiperLeft extends Component {
        constructor(...args) {
          super(...args);
          this.wileft = null;
        }

        start() {
          var wiper = this.node.getChildByName('wiper_l');
          this.rotationWiper(wiper);
        }

        rotationWiper(node) {
          let roteLeft = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, -45)
          }, {
            easing: 'linear'
          });
          let roteZero = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          });
          let roteRight = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, 45)
          }, {
            easing: 'linear'
          });
          this.wileft = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)(node).then(roteLeft).then(roteZero).then(roteRight).then(roteZero).union().repeatForever();
          this.wileft.start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=501d92c0d0af2b0d42fb18990b8ee29064024a28.js.map