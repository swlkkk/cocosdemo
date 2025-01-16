System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, _dec, _class, _crd, ccclass, property, scoreAn;

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

      _cclegacy._RF.push({}, "dda33GCgyNK3Zd6HSTfLNZw", "scoreAn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scoreAn", scoreAn = (_dec = ccclass('scoreAn'), _dec(_class = class scoreAn extends Component {
        constructor() {
          super(...arguments);
          this.targetPos = new Vec3();
          this.jumpStep = 50;
          this.scoreAc = null;
        }

        start() {}

        scoreAn() {
          if (this.scoreAc == null) {
            this.node.active = true;
            Vec3.add(this.targetPos, this.node.position, new Vec3(0, this.jumpStep, 0));
            var outSide = tween().to(0.2, {
              position: this.targetPos
            }, {
              easing: 'linear'
            });
            this.scoreAc = tween(this.node).then(outSide).call(() => {
              this.scoreAc = null;
              this.node.active = false;
              this.node.setPosition(0, -403.081, 0);
              this.targetPos = new Vec3();
            }).start();
          } else {
            this.scoreAc.stop();
            this.scoreAc = null;
            this.node.setPosition(0, -403.081, 0);
            this.targetPos = new Vec3();
            this.node.active = false;
            this.reagin();
          }
        }

        reagin() {
          this.node.active = true;
          Vec3.add(this.targetPos, this.node.position, new Vec3(0, this.jumpStep, 0));
          var outSide = tween().to(0.2, {
            position: this.targetPos
          }, {
            easing: 'linear'
          });
          this.scoreAc = tween(this.node).then(outSide).call(() => {
            this.scoreAc = null;
            this.node.active = false;
            this.node.setPosition(0, -403.081, 0);
            this.targetPos = new Vec3();
          }).start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=589e361f3fd7de742cc7aefb0b6f120d6f7e493e.js.map