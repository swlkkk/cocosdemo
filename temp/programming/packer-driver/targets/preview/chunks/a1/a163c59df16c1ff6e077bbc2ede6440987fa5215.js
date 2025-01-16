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
        constructor() {
          super(...arguments);
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
          var _this = this;

          this.itemSpritePathArray.forEach(spritePath => {
            resources.preload(spritePath, SpriteFrame);
          });

          var _loop = function _loop(i) {
            resources.load(_this.itemSpritePathArray[i], SpriteFrame, (err, asset) => {
              _this.out[i] = asset;
            });
          };

          for (var i = 0; i < 8; i++) {
            _loop(i);
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
//# sourceMappingURL=a163c59df16c1ff6e077bbc2ede6440987fa5215.js.map