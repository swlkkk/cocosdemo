System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, lightNode;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36d81vmTtNF66Mu/TWP7aUz", "lightNode", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("lightNode", lightNode = (_dec = ccclass('lightNode'), _dec(_class = class lightNode extends Component {
        start() {
          console.log('lightnode初始化');
        }

        spinLight(type) {
          if (type == 'add') {
            if (!this.node.getChildByName('Sprite').active) {
              this.node.getChildByName('Sprite').active = true;
            } else if (!this.node.getChildByName('Sprite1').active) {
              this.node.getChildByName('Sprite1').active = true;
            } else if (!this.node.getChildByName('Sprite2').active) {
              this.node.getChildByName('Sprite2').active = true;
            } else if (!this.node.getChildByName('Sprite3').active) {
              this.node.getChildByName('Sprite3').active = true;
            }
          } else {
            if (this.node.getChildByName('Sprite3').active) {
              this.node.getChildByName('Sprite3').active = false;
            } else if (this.node.getChildByName('Sprite2').active) {
              this.node.getChildByName('Sprite2').active = false;
            } else if (this.node.getChildByName('Sprite1').active) {
              this.node.getChildByName('Sprite1').active = false;
            } else if (this.node.getChildByName('Sprite').active) {
              this.node.getChildByName('Sprite').active = false;
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a0192347474fdb356cd9c89e997b5208041a8dfd.js.map