System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, SpriteAtlas, resources, SpriteRenderer, _dec, _class, _crd, ccclass, property, gameCore;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      SpriteAtlas = _cc.SpriteAtlas;
      resources = _cc.resources;
      SpriteRenderer = _cc.SpriteRenderer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c8cf2q33ahJball8SgvbyIm", "gameCore", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'SpriteFrame', 'SpriteAtlas', 'resources', 'SpriteRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("gameCore", gameCore = (_dec = ccclass('gameCore'), _dec(_class = class gameCore extends Component {
        constructor() {
          super(...arguments);
          // 初始化通道变量
          this.starting1 = null;
          this.starting2 = null;
          // 通道图案变量
          this.altpic1 = null;
          this.altpic2 = null;
          this.altpic3 = null;
          this.altpic4 = null;
          this.altpic5 = null;
          this.altpic6 = null;
          this.altpic7 = null;
          this.altpic8 = null;
          this.altpic9 = null;
          this.altpic10 = null;
          this.altpic11 = null;
          this.altpic12 = null;
          this.altpic13 = null;
          this.altpic14 = null;
          this.altpic15 = null;
          this.altpic16 = null;
        }

        start() {
          this.loadAtlas();
        } // 给通道变量赋值


        loadAtlas() {
          resources.load("bg01", SpriteAtlas, (err, atlas) => {
            this.altpic1 = atlas.getSpriteFrame('bg_25');
            this.altpic2 = atlas.getSpriteFrame('bg_24');
            this.altpic3 = atlas.getSpriteFrame('bg_23');
            this.altpic4 = atlas.getSpriteFrame('bg_22');
            this.altpic5 = atlas.getSpriteFrame('bg_21');
            this.altpic6 = atlas.getSpriteFrame('bg_20');
            this.altpic7 = atlas.getSpriteFrame('bg_19');
            this.altpic8 = atlas.getSpriteFrame('bg_18');
            this.altpic9 = atlas.getSpriteFrame('bg_17');
            this.altpic10 = atlas.getSpriteFrame('bg_16');
            this.altpic11 = atlas.getSpriteFrame('bg_15');
            this.altpic12 = atlas.getSpriteFrame('bg_14');
            this.altpic13 = atlas.getSpriteFrame('bg_13');
            this.altpic14 = atlas.getSpriteFrame('bg_12');
            this.altpic15 = atlas.getSpriteFrame('bg_11');
            this.altpic16 = atlas.getSpriteFrame('bg_10');
          });
        } // 修改通道


        changeChannel() {
          if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic1;
          } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic2;
          } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic3;
          } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic4;
          } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic5;
          } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic6;
          } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic7;
          } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic8;
          }

          if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic1;
          } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic2;
          } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic3;
          } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic4;
          } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic5;
          } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic6;
          } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic7;
          } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic8;
          }
        } // 重置通道


        resertChannel() {
          if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic9;
          } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic10;
          } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic11;
          } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic12;
          } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic13;
          } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic14;
          } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic15;
          } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic16;
          }

          if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic9;
          } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic10;
          } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic11;
          } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic12;
          } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic13;
          } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic14;
          } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic15;
          } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic16;
          }
        } // 叠叠乐、小玛丽期间全部亮灯


        shiningAll() {
          this.node.getChildByName('channel0').getComponent(SpriteRenderer).spriteFrame = this.altpic1;
          this.node.getChildByName('channel1').getComponent(SpriteRenderer).spriteFrame = this.altpic2;
          this.node.getChildByName('channel2').getComponent(SpriteRenderer).spriteFrame = this.altpic3;
          this.node.getChildByName('channel3').getComponent(SpriteRenderer).spriteFrame = this.altpic4;
          this.node.getChildByName('channel4').getComponent(SpriteRenderer).spriteFrame = this.altpic5;
          this.node.getChildByName('channel5').getComponent(SpriteRenderer).spriteFrame = this.altpic6;
          this.node.getChildByName('channel6').getComponent(SpriteRenderer).spriteFrame = this.altpic7;
          this.node.getChildByName('channel7').getComponent(SpriteRenderer).spriteFrame = this.altpic8;
        }

        noShining() {
          this.node.getChildByName('channel0').getComponent(SpriteRenderer).spriteFrame = this.altpic9;
          this.node.getChildByName('channel1').getComponent(SpriteRenderer).spriteFrame = this.altpic10;
          this.node.getChildByName('channel2').getComponent(SpriteRenderer).spriteFrame = this.altpic11;
          this.node.getChildByName('channel3').getComponent(SpriteRenderer).spriteFrame = this.altpic12;
          this.node.getChildByName('channel4').getComponent(SpriteRenderer).spriteFrame = this.altpic13;
          this.node.getChildByName('channel5').getComponent(SpriteRenderer).spriteFrame = this.altpic14;
          this.node.getChildByName('channel6').getComponent(SpriteRenderer).spriteFrame = this.altpic15;
          this.node.getChildByName('channel7').getComponent(SpriteRenderer).spriteFrame = this.altpic16;
        }

        agShining() {
          if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic1;
          } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic2;
          } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic3;
          } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic4;
          } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic5;
          } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic6;
          } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic7;
          } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic8;
          }

          if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic1;
          } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic2;
          } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic3;
          } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic4;
          } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic5;
          } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic6;
          } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic7;
          } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic8;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dfab3d782519779996123baa3aed608cfa3de718.js.map