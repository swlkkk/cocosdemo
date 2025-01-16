System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, ddlhyts;

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

      _cclegacy._RF.push({}, "89280Ap0JxOX4V7ztgw00HZ", "ddlhyts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ddlhyts", ddlhyts = (_dec = ccclass('ddlhyts'), _dec(_class = class ddlhyts extends Component {
        start() {
          this.rotationPlate();
          this.rotationPlate1();
        }

        rotationPlate() {
          var mr = tween().to(1, {
            position: new Vec3(0, 1.188, 0)
          }, {
            easing: 'expoIn'
          });
          var ml = tween().to(1, {
            position: new Vec3(4.88, 1.188, 0)
          }, {
            easing: 'expoIn'
          });
          tween(this.node.getChildByName('Sprite')).then(mr).delay(0.3).then(ml).repeat(1).start();
        }

        rotationPlate1() {
          var mr = tween().to(1, {
            position: new Vec3(0, -1, 0)
          }, {
            easing: 'expoIn'
          });
          var ml = tween().to(1, {
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
//# sourceMappingURL=0f72d93061a09f445c60b235b1a6973cffd8b85d.js.map