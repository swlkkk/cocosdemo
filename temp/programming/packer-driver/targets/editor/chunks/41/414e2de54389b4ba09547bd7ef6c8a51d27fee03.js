System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, hyts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "89e2dLjGCxLAKTEIDkuwkc2", "hyts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("hyts", hyts = (_dec = ccclass('hyts'), _dec(_class = class hyts extends Component {
        start() {
          this.rotationPlate();
          this.rotationPlate1();
        }

        rotationPlate() {
          let mr = tween().to(1, {
            position: new Vec3(0, 1.188, 0)
          }, {
            easing: 'expoIn'
          });
          let ml = tween().to(1, {
            position: new Vec3(4.88, 1.188, 0)
          }, {
            easing: 'expoIn'
          });
          tween(this.node.getChildByName('Sprite')).then(mr).delay(0.3).then(ml).repeat(1).start();
        }

        rotationPlate1() {
          let mr = tween().to(1, {
            position: new Vec3(0, -1, 0)
          }, {
            easing: 'expoIn'
          });
          let ml = tween().to(1, {
            position: new Vec3(-6, -1, 0)
          }, {
            easing: 'expoIn'
          });
          tween(this.node.getChildByName('Sprite1')).then(mr).delay(0.3).then(ml).repeat(1).start();
        } // 恢复原有位置


        recoverPosition() {
          setTimeout(() => {
            this.node.getChildByName('Sprite').setPosition(-4.8, 1.188, 0);
            this.node.getChildByName('Sprite1').setPosition(6, -1, 0);
          }, 200);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=414e2de54389b4ba09547bd7ef6c8a51d27fee03.js.map