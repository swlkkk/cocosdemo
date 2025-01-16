System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, tween, Label, _dec, _class, _crd, ccclass, property, scoreAn;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dda33GCgyNK3Zd6HSTfLNZw", "scoreAn", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Vec3', 'tween', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("scoreAn", scoreAn = (_dec = ccclass('scoreAn'), _dec(_class = class scoreAn extends Component {
        constructor(...args) {
          super(...args);
          this.targetPos = new Vec3(0, 0, 0);
          this.jumpStep = 50;
          this.scoreAc = null;
          this.scoreCount = 0;
        }

        start() {}

        scoreAn(price) {
          if (this.scoreAc == null) {
            this.node.active = true;
            Vec3.add(this.targetPos, this.node.position, new Vec3(0, this.jumpStep, 0));
            let outSide = tween().to(0.25, {
              position: this.targetPos
            }, {
              easing: 'linear'
            });
            this.scoreAc = tween(this.node).then(outSide).call(() => {
              this.scoreAc = null;
              this.node.active = false;
              this.node.setPosition(0, -403.081, 0);
              this.targetPos = new Vec3(0, 0, 0);

              if (this.scoreCount > 0) {
                this.node.getChildByName('Label').getComponent(Label).string = '+' + this.scoreCount * price;
                this.scoreCount = 0;
                this.scoreAn(price);
              } else {
                this.node.getChildByName('Label').getComponent(Label).string = '+' + 1 * price;
                this.scoreCount = 0;
              }
            }).start();
          } else {
            this.scoreCount++;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1a8c3eb7e36473b5c1fdb8b725d07a5e9cc19ecf.js.map