System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, i18n, _dec, _class, _crd, ccclass, property, xmlAnim;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Animation = _cc.Animation;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a3b09emO0lAiKDjXcfkIW0F", "xmlAnim", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("xmlAnim", xmlAnim = (_dec = ccclass('xmlAnim'), _dec(_class = class xmlAnim extends Component {
        start() {
          this.switchOne(true);
        } // 控制第一个剪辑动画


        switchOne(control) {
          let xmlAnimate = this.node.getComponent(Animation);

          if (control) {
            this.node.getChildByName('Sprite').active = true;

            if (i18n._language == 'tc') {
              xmlAnimate.play('xmlanimate');
            } else {
              xmlAnimate.play('xmlanimate_en');
            }
          } else {
            this.node.getChildByName('Sprite').active = false;
            xmlAnimate.stop();
          }
        } // 控制第二个剪辑动画


        switchTwo(control) {
          let xmlAnimate = this.node.getComponent(Animation);

          if (control) {
            this.node.getChildByName('Sprite1').active = true;

            if (i18n._language == 'tc') {
              xmlAnimate.play('xmlanimate');
            } else {
              xmlAnimate.play('xmlanimate_en');
            }
          } else {
            this.node.getChildByName('Sprite1').active = false;
            xmlAnimate.stop();
          }
        } // 控制按下和结束


        switchThree(num, control) {
          if (num == 1) {
            if (control) {
              this.node.getChildByName('Sprite2').active = true;
            } else {
              this.node.getChildByName('Sprite2').active = false;
            }
          } else if (num == 2) {
            if (control) {
              this.node.getChildByName('Sprite3').active = true;
            } else {
              this.node.getChildByName('Sprite3').active = false;
            }
          }
        }

        recoverAll() {
          this.node.getChildByName('Sprite').active = false;
          this.node.getChildByName('Sprite1').active = false;
          this.node.getChildByName('Sprite2').active = false;
          this.node.getChildByName('Sprite3').active = false;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=acc64abdb67c05ce7058c1bf6efc1506724ca1ea.js.map