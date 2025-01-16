System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, wiperRight;

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

      _cclegacy._RF.push({}, "4f0a9qLCdJMJKESxXLwMkXh", "wiperRight", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("wiperRight", wiperRight = (_dec = ccclass('wiperRight'), _dec(_class = class wiperRight extends Component {
        constructor() {
          super(...arguments);
          this.wiRight = null;
        }

        start() {
          var wiper = this.node.getChildByName('wiper_r');
          this.rotationWiper(wiper);
        }

        rotationWiper(node) {
          var roteLeft = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, -45)
          }, {
            easing: 'linear'
          });
          var roteZero = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          });
          var roteRight = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)().to(1.5, {
            eulerAngles: new Vec3(0, 0, 45)
          }, {
            easing: 'linear'
          });
          this.wiRight = (_crd && tween === void 0 ? (_reportPossibleCrUseOftween({
            error: Error()
          }), tween) : tween)(node).then(roteLeft).then(roteZero).then(roteRight).then(roteZero).union().repeatForever();
          this.wiRight.start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e9b05649d4bd0bcb65e65252a57cdf0c70d1cb24.js.map