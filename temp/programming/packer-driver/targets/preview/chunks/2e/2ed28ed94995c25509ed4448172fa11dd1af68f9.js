System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, _dec, _class, _crd, ccclass, property, AllAnimate;

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

      _cclegacy._RF.push({}, "f4fb6doVjVLFItiJdaBfYGm", "AllAnimate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AllAnimate", AllAnimate = (_dec = ccclass('AllAnimate'), _dec(_class = class AllAnimate extends Component {
        start() {
          this.rotation(this.node);
        }

        rotation(node) {
          var ml = tween().to(0.1, {
            eulerAngles: new Vec3(0, 0, -4)
          }, {
            easing: 'linear'
          });
          var mz = tween().to(0.1, {
            eulerAngles: new Vec3(0, 0, 0)
          }, {
            easing: 'linear'
          });
          var mr = tween().to(0.1, {
            eulerAngles: new Vec3(0, 0, 4)
          }, {
            easing: 'linear'
          });
          tween(node).then(ml).then(mz).then(mr).then(mz).union().repeat(13).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ed28ed94995c25509ed4448172fa11dd1af68f9.js.map