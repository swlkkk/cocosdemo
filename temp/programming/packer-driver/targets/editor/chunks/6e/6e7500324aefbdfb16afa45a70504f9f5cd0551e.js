System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, SpriteFrame, Sprite, _dec, _class, _crd, ccclass, property, outSprite;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25d35hv4SNMAo4BdlLRmNra", "outSprite", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'resources', 'SpriteFrame', 'Sprite', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("outSprite", outSprite = (_dec = ccclass('outSprite'), _dec(_class = class outSprite extends Component {
        constructor(...args) {
          super(...args);
          this.itemSpritePathArray = ["turntable/Act_shoes/spriteFrame", // 鞋子(0)
          "turntable/Act_target/spriteFrame", // 箭靶(1)
          "turntable/Act_trumpet/spriteFrame", // 喇叭(2)
          "turntable/Act_ball/spriteFrame", // 绿球(3)
          "turntable/Act_drum/spriteFrame", // 蛋糕(4)
          "turntable/Act_camp/spriteFrame", // 马戏团(5)
          "turntable/Act_monocycle/spriteFrame", // 独轮车(6)
          "turntable/Act_ongg/spriteFrame" // 气球(7)
          ];
          this.outsymbol = null;
          this.out = [];
        }

        onLoad() {
          this.itemSpritePathArray.forEach(spritePath => {
            resources.preload(spritePath, SpriteFrame);
          });

          for (let i = 0; i < 8; i++) {
            resources.load(this.itemSpritePathArray[i], SpriteFrame, (err, asset) => {
              this.out[i] = asset;
            });
          }
        }

        start() {// setTimeout(() => {
          //     this.createPicture(7)
          // }, 300);
        } // 生成出局图


        createPicture(num) {
          this.outsymbol = num;
          this.node.getChildByName('outpicPre').getComponent(Sprite).spriteFrame = this.out[num];
          this.node.getChildByName('outpicPre').active = true;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6e7500324aefbdfb16afa45a70504f9f5cd0551e.js.map