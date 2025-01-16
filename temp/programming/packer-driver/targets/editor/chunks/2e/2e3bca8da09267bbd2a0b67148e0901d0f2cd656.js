System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, resources, Sprite, Vec3, UITransform, instantiate, NodePool, SpriteAtlas, Label, _decorator, Component, Node, tween, flashPicts, labelts, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, ddlts;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfflashPicts(extras) {
    _reporterNs.report("flashPicts", "./flashPicts", _context.meta, extras);
  }

  function _reportPossibleCrUseOflabelts(extras) {
    _reporterNs.report("labelts", "./labelts", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      SpriteAtlas = _cc.SpriteAtlas;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
    }, function (_unresolved_2) {
      flashPicts = _unresolved_2.flashPicts;
    }, function (_unresolved_3) {
      labelts = _unresolved_3.labelts;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9f562/8EHpLoashO6tfia71", "ddlts", undefined);

      __checkObsolete__(['Prefab', 'resources', 'Sprite', 'Vec3', 'UITransform', 'SpriteFrame', 'instantiate', 'NodePool', 'SpriteAtlas', 'Label']);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ddlts", ddlts = (_dec = ccclass('ddlts'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Prefab), _dec11 = property(Prefab), _dec(_class = (_class2 = class ddlts extends Component {
        constructor(...args) {
          super(...args);
          // 叠叠乐各个奖项累计数量
          this.award1 = 0;
          // 鞋
          this.award2 = 0;
          // 箭靶
          this.award3 = 0;
          // 喇叭
          this.award4 = 0;
          // 球
          this.award5 = 0;
          // 蛋糕
          this.award6 = 0;
          // 马戏团
          this.award7 = 0;
          // 独轮车
          this.award8 = 0;

          // 气球
          // 三个窗口槽节点
          _initializerDefineProperty(this, "adLayout1", _descriptor, this);

          _initializerDefineProperty(this, "adLayout2", _descriptor2, this);

          _initializerDefineProperty(this, "adLayout3", _descriptor3, this);

          _initializerDefineProperty(this, "adLayout4", _descriptor4, this);

          _initializerDefineProperty(this, "adLayout5", _descriptor5, this);

          _initializerDefineProperty(this, "adLayout6", _descriptor6, this);

          _initializerDefineProperty(this, "adLayout7", _descriptor7, this);

          _initializerDefineProperty(this, "adLayout8", _descriptor8, this);

          _initializerDefineProperty(this, "aditem", _descriptor9, this);

          this.itemNodePool = new NodePool();

          _initializerDefineProperty(this, "numitem", _descriptor10, this);

          this.alttype1 = null;
          this.alttype2 = null;
          this.alttype3 = null;
          this.alttype4 = null;
          this.alttype5 = null;
          this.alttype6 = null;
          this.alttype7 = null;
          this.alttype8 = null;
          this.alttype9 = null;
          this.alttype10 = null;
          this.alttype11 = null;
          this.alttype12 = null;
          this.alttype13 = null;
          this.alttype14 = null;
          this.awardTotal = 6;
        }

        start() {
          resources.load("ddl", SpriteAtlas, (err, atlas) => {
            this.alttype1 = atlas.getSpriteFrame('03UI_17PileUp_1');
            this.alttype2 = atlas.getSpriteFrame('03UI_17PileUp_2');
            this.alttype3 = atlas.getSpriteFrame('03UI_17PileUp_3');
            this.alttype4 = atlas.getSpriteFrame('03UI_17PileUp_4');
            this.alttype5 = atlas.getSpriteFrame('03UI_17PileUp_5');
            this.alttype6 = atlas.getSpriteFrame('03UI_17PileUp_6');
            this.alttype7 = atlas.getSpriteFrame('03UI_17PileUp_7');
            this.alttype8 = atlas.getSpriteFrame('03UI_17PileUp_8');
            this.alttype9 = atlas.getSpriteFrame('03UI_20PBouns_1');
            this.alttype10 = atlas.getSpriteFrame('03UI_20PBouns_2');
            this.alttype11 = atlas.getSpriteFrame('03UI_20PBouns_3');
            this.alttype12 = atlas.getSpriteFrame('03UI_20PBouns_4');
            this.alttype13 = atlas.getSpriteFrame('03UI_20PBouns_5');
            this.alttype14 = atlas.getSpriteFrame('03UI_20PBouns_6');
          });
        }

        addAward(type) {
          // 提前添加倍率节点
          if (this.node.getChildByName('numNode') != null) {
            if (!this.node.getChildByName('numNode').active) {
              this.node.getChildByName('numNode').active = true;
            }
          } else {
            let item = null;
            item = instantiate(this.numitem);
            item.setPosition(new Vec3(0, 0, 0));
            this.node.addChild(item);
          }

          if (this.awardTotal <= 0) {
            return;
          }

          let ddlto = this.node.getChildByName('ddltotal');

          if (type == 0) {
            this.award1 += 1;
            this.adLayout1.addChild(this.spawnItem(1));
            setTimeout(() => {
              this.returnNum(this.award1, 0);
            }, 1000);
          } else if (type == 1) {
            this.award2 += 1;
            this.adLayout2.addChild(this.spawnItem(2));
            setTimeout(() => {
              this.returnNum(this.award2, 1);
            }, 1000);
          } else if (type == 2) {
            this.award3 += 1;
            this.adLayout3.addChild(this.spawnItem(3));
            setTimeout(() => {
              this.returnNum(this.award3, 2);
            }, 1000);
          } else if (type == 3) {
            this.award4 += 1;
            this.adLayout4.addChild(this.spawnItem(4));
            setTimeout(() => {
              this.returnNum(this.award4, 3);
            }, 1000);
          } else if (type == 4) {
            this.award5 += 1;
            this.adLayout5.addChild(this.spawnItem(5));
            setTimeout(() => {
              this.returnNum(this.award5, 4);
            }, 1000);
          } else if (type == 5) {
            this.award6 += 1;
            this.adLayout6.addChild(this.spawnItem(6));
            setTimeout(() => {
              this.returnNum(this.award6, 5);
            }, 1000);
          } else if (type == 6) {
            this.award7 += 1;
            this.adLayout7.addChild(this.spawnItem(7));
            setTimeout(() => {
              this.returnNum(this.award7, 6);
            }, 1000);
          } else if (type == 7) {
            this.award8 += 1;
            this.adLayout8.addChild(this.spawnItem(8));
            setTimeout(() => {
              this.returnNum(this.award8, 7);
            }, 1000);
          }

          this.awardTotal -= 1;
          ddlto.getComponent(Label).string = this.awardTotal.toString();
          this.animationAward(type);
        } // 移动动画


        animationAward(type) {
          // 闪屏图片
          let flashPic = this.node.parent.getChildByName('flashNode').getComponent(_crd && flashPicts === void 0 ? (_reportPossibleCrUseOfflashPicts({
            error: Error()
          }), flashPicts) : flashPicts); // 闪屏数字

          let flashLabel = this.node.parent.getChildByName('labels').getComponent(_crd && labelts === void 0 ? (_reportPossibleCrUseOflabelts({
            error: Error()
          }), labelts) : labelts);

          if (type == 0) {
            tween(this.adLayout1.children[this.award1 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award1) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(0);
              flashLabel.dolabelThree(0);
            }).start();
          } else if (type == 1) {
            tween(this.adLayout2.children[this.award2 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award2) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(1);
              flashLabel.dolabelThree(1);
            }).start();
          } else if (type == 2) {
            tween(this.adLayout3.children[this.award3 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award3) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(2);
              flashLabel.dolabelThree(2);
            }).start();
          } else if (type == 3) {
            tween(this.adLayout4.children[this.award4 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award4) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(3);
              flashLabel.dolabelThree(3);
            }).start();
          } else if (type == 4) {
            tween(this.adLayout5.children[this.award5 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award5) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(4);
              flashLabel.dolabelThree(4);
            }).start();
          } else if (type == 5) {
            tween(this.adLayout6.children[this.award6 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award6) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(5);
              flashLabel.dolabelThree(5);
            }).start();
          } else if (type == 6) {
            tween(this.adLayout7.children[this.award7 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award7) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(6);
              flashLabel.dolabelThree(6);
            }).start();
          } else if (type == 7) {
            tween(this.adLayout8.children[this.award8 - 1]).by(1, {
              position: new Vec3(0, -(6 - this.award8) * 1.06, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              flashPic.doFlashThree(7);
              flashLabel.dolabelThree(7);
            }).start();
          }
        }

        spawnItem(type) {
          // 生成预制体
          let item = null;

          if (this.itemNodePool.size() > 0) {
            item = this.itemNodePool.get();
          } else {
            item = instantiate(this.aditem);
          } // 设置图片


          if (type == 1) {
            item.getComponent(Sprite).spriteFrame = this.alttype1;
          } else if (type == 2) {
            item.getComponent(Sprite).spriteFrame = this.alttype2;
          } else if (type == 3) {
            item.getComponent(Sprite).spriteFrame = this.alttype3;
          } else if (type == 4) {
            item.getComponent(Sprite).spriteFrame = this.alttype4;
          } else if (type == 5) {
            item.getComponent(Sprite).spriteFrame = this.alttype5;
          } else if (type == 6) {
            item.getComponent(Sprite).spriteFrame = this.alttype6;
          } else if (type == 7) {
            item.getComponent(Sprite).spriteFrame = this.alttype7;
          } else if (type == 8) {
            item.getComponent(Sprite).spriteFrame = this.alttype8;
          } // 设置图片大小


          item.getComponent(UITransform).width = 1.16;
          item.getComponent(UITransform).height = 1.06;
          return item;
        } // 清除数据


        clearAd() {
          this.award1 = 0;
          this.award2 = 0;
          this.award3 = 0;
          this.award4 = 0;
          this.award5 = 0;
          this.award6 = 0;
          this.award7 = 0;
          this.award8 = 0;
          this.awardTotal = 6;

          while (this.adLayout1.children.length > 0) {
            this.adLayout1.children[this.adLayout1.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout1.children[this.adLayout1.children.length - 1]);
          }

          while (this.adLayout2.children.length > 0) {
            this.adLayout2.children[this.adLayout2.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout2.children[this.adLayout2.children.length - 1]);
          }

          while (this.adLayout3.children.length > 0) {
            this.adLayout3.children[this.adLayout3.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout3.children[this.adLayout3.children.length - 1]);
          }

          while (this.adLayout4.children.length > 0) {
            this.adLayout4.children[this.adLayout4.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout4.children[this.adLayout4.children.length - 1]);
          }

          while (this.adLayout5.children.length > 0) {
            this.adLayout5.children[this.adLayout5.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout5.children[this.adLayout5.children.length - 1]);
          }

          while (this.adLayout6.children.length > 0) {
            this.adLayout6.children[this.adLayout6.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout6.children[this.adLayout6.children.length - 1]);
          }

          while (this.adLayout7.children.length > 0) {
            this.adLayout7.children[this.adLayout7.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout7.children[this.adLayout7.children.length - 1]);
          }

          while (this.adLayout8.children.length > 0) {
            this.adLayout8.children[this.adLayout8.children.length - 1].setPosition(0, 0, 0);
            this.itemNodePool.put(this.adLayout8.children[this.adLayout8.children.length - 1]);
          }

          this.clearNum();
          this.node.getChildByName('numNode').active = false;
        }

        returnNum(num, type) {
          if (num == 1) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype9;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype9;
            }
          } else if (num == 2) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype10;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype10;
            }
          } else if (num == 3) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype11;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype11;
            }
          } else if (num == 4) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype12;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype12;
            }
          } else if (num == 5) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype13;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype13;
            }
          } else if (num == 6) {
            if (type == 0) {
              this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 1) {
              this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 2) {
              this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 3) {
              this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 4) {
              this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 5) {
              this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 6) {
              this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype14;
            } else if (type == 7) {
              this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype14;
            }
          }
        }

        clearNum() {
          this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = null;
          this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = null;
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "adLayout1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "adLayout2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "adLayout3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "adLayout4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "adLayout5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "adLayout6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "adLayout7", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "adLayout8", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return new Node();
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "aditem", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "numitem", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e3bca8da09267bbd2a0b67148e0901d0f2cd656.js.map