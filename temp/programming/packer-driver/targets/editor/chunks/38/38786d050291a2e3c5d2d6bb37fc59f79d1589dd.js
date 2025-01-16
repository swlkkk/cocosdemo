System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, resources, SpriteFrame, instantiate, Label, xmlAnim, lxts, machine, flashPicts, labelts, i18n, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, xmlts;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfxmlAnim(extras) {
    _reporterNs.report("xmlAnim", "./xmlAnim", _context.meta, extras);
  }

  function _reportPossibleCrUseOflxts(extras) {
    _reporterNs.report("lxts", "./lxts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmachine(extras) {
    _reporterNs.report("machine", "./machine", _context.meta, extras);
  }

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
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      xmlAnim = _unresolved_2.xmlAnim;
    }, function (_unresolved_3) {
      lxts = _unresolved_3.lxts;
    }, function (_unresolved_4) {
      machine = _unresolved_4.machine;
    }, function (_unresolved_5) {
      flashPicts = _unresolved_5.flashPicts;
    }, function (_unresolved_6) {
      labelts = _unresolved_6.labelts;
    }, function (_unresolved_7) {
      i18n = _unresolved_7;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fd611+vhYdDrJkM9PITe871", "xmlts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'resources', 'SpriteFrame', 'instantiate', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("xmlts", xmlts = (_dec = ccclass('xmlts'), _dec2 = property(Sprite), _dec(_class = (_class2 = class xmlts extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "girds", _descriptor, this);

          this.itemSpritePathArray = ["xml/03UI_16Circular_9", // out
          "xml/03UI_16Circular_1", // 鞋子
          "xml/03UI_16Circular_2", // 箭靶
          "xml/03UI_16Circular_3", // 喇叭
          "xml/03UI_16Circular_4", // 球
          "xml/03UI_16Circular_5", // 蛋糕
          "xml/03UI_16Circular_9", // out
          "xml/03UI_16Circular_6", // 马戏团
          "xml/03UI_16Circular_7", // 独轮车
          "xml/03UI_16Circular_8", // 气球
          "xml/03UI_16Circular_9", // out
          "xml/03UI_16Circular_1", // 鞋子
          "xml/03UI_16Circular_2", // 箭靶
          "xml/03UI_16Circular_3", // 喇叭
          "xml/03UI_16Circular_4", // 球
          "xml/03UI_16Circular_5", // 蛋糕
          "xml/03UI_16Circular_9", // out
          "xml/03UI_16Circular_6", // 马戏团
          "xml/03UI_16Circular_7", // 独轮车
          "xml/03UI_16Circular_8" // 气球
          ];
          this.startIndex = 0;
          this.stopTime = 300;
          //setTimeout时间间隔，控制速度
          this.rollingTimer = null;
          this.stopPos = -1;
          // 抽奖结果的位置
          this.isover = false;
          this.resultarr = [];
          // 结果数组
          this.xmloutArr = [];
          this.xmlscore = 0;
        }

        onLoad() {
          // 预加载资源
          this.itemSpritePathArray.forEach(spritePath => {
            resources.preload(spritePath, SpriteFrame);
          });

          for (let i = 0; i < 20; i++) {
            resources.load(this.itemSpritePathArray[i], SpriteFrame, (err, asset) => {
              if (i == 0) {
                this.girds[i].spriteFrame = asset;
              }

              this.xmloutArr[i] = asset;
            });
          }
        }

        start() {}

        toRoll(pos) {
          let xmlanim = this.node.getChildByName('xmlAnim').getComponent(_crd && xmlAnim === void 0 ? (_reportPossibleCrUseOfxmlAnim({
            error: Error()
          }), xmlAnim) : xmlAnim);
          xmlanim.switchOne(false);
          xmlanim.switchThree(1, true);

          if (this.stopTime > 50) {
            this.stopTime -= 30;
          }

          this.rollingTimer = setTimeout(() => {
            this.rotatePrize(pos);

            if (this.stopPos === -1) {
              this.toRoll(this.startIndex % 20);
              this.startIndex++;
            } else {
              this.getToStop(pos);
            }
          }, this.stopTime);
        }

        getToStop(pos) {
          if (this.stopTime < 100) {
            this.stopTime += 25;
          } else {
            this.stopTime = 30;
          }

          if (pos !== this.stopPos) {
            // 不是当前奖品
            this.rollingTimer = setTimeout(() => {
              this.rotatePrize(pos);
              this.getToStop(this.startIndex % 20);
              this.startIndex++;
            }, this.stopTime);
          } else if (pos === this.stopPos) {
            setTimeout(() => {
              this.rotatePrize(pos);

              if (this.stopPos == 0 || this.stopPos == 6 || this.stopPos == 10 || this.stopPos == 16) {
                // 转到out结束游戏
                this.isover = true;
                clearTimeout(this.rollingTimer);
                let xmlanim = this.node.getChildByName('xmlAnim').getComponent(_crd && xmlAnim === void 0 ? (_reportPossibleCrUseOfxmlAnim({
                  error: Error()
                }), xmlAnim) : xmlAnim);
                xmlanim.switchThree(1, false);
                xmlanim.switchThree(2, true);
                let mcts = this.node.parent.getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
                  error: Error()
                }), machine) : machine);

                if (this.node.parent.getChildByName('lxshow') != null) {
                  this.node.parent.getChildByName('lxshow').active = true;
                } else {
                  // 生成获奖展示界面
                  let lxshow = instantiate(mcts.lxItem);
                  lxshow.setPosition(-345.051, -597.314, 26.08);
                  this.node.parent.addChild(lxshow);
                }

                this.node.parent.getChildByName('bottom_fun').getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tyc');
                this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                  error: Error()
                }), lxts) : lxts).score = this.xmlscore;
                this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                  error: Error()
                }), lxts) : lxts).score1 = this.xmlscore;
              } else {
                let xmlanim = this.node.getChildByName('xmlAnim').getComponent(_crd && xmlAnim === void 0 ? (_reportPossibleCrUseOfxmlAnim({
                  error: Error()
                }), xmlAnim) : xmlAnim);
                this.retunxmlScore(pos);
                xmlanim.switchThree(1, false);
                xmlanim.switchTwo(true); // 闪屏图片

                let flashPic = this.node.parent.getChildByName('flashNode').getComponent(_crd && flashPicts === void 0 ? (_reportPossibleCrUseOfflashPicts({
                  error: Error()
                }), flashPicts) : flashPicts); // 闪屏数字

                let flashLabel = this.node.parent.getChildByName('labels').getComponent(_crd && labelts === void 0 ? (_reportPossibleCrUseOflabelts({
                  error: Error()
                }), labelts) : labelts);

                if (pos == 1 || pos == 11) {
                  flashPic.doFlashThree(0);
                  flashLabel.dolabelThree(0);
                } else if (pos == 2 || pos == 12) {
                  flashPic.doFlashThree(1);
                  flashLabel.dolabelThree(1);
                } else if (pos == 3 || pos == 13) {
                  flashPic.doFlashThree(2);
                  flashLabel.dolabelThree(2);
                } else if (pos == 4 || pos == 14) {
                  flashPic.doFlashThree(3);
                  flashLabel.dolabelThree(3);
                } else if (pos == 5 || pos == 15) {
                  flashPic.doFlashThree(4);
                  flashLabel.dolabelThree(4);
                } else if (pos == 7 || pos == 17) {
                  flashPic.doFlashThree(5);
                  flashLabel.dolabelThree(5);
                } else if (pos == 8 || pos == 18) {
                  flashPic.doFlashThree(6);
                  flashLabel.dolabelThree(6);
                } else if (pos == 9 || pos == 19) {
                  flashPic.doFlashThree(7);
                  flashLabel.dolabelThree(7);
                }

                setTimeout(() => {
                  this.stopTime = 300;
                  this.rollingTimer = null;
                  this.resultarr.splice(0, 1);
                  this.stopPos = -1;
                  this.toRoll(this.startIndex % 20);
                  xmlanim.switchThree(1, true);
                  xmlanim.switchTwo(false);
                  setTimeout(() => {
                    this.stopPos = this.resultarr[0];
                  }, 3000);
                }, 1000);
              }
            }, this.stopTime);
          }
        } // 清除存储数据


        clearxml() {
          this.isover = false;
          this.startIndex = 0;
          this.stopTime = 300;
          this.rollingTimer = null;
          this.stopPos = -1;
          this.resultarr = [];
          this.xmlscore = 0;
          this.node.getChildByName('xmlscore').getComponent(Label).string = '00000';

          for (let i = 0; i < this.girds.length; i++) {
            if (i == 0) {
              this.girds[i].spriteFrame = this.xmloutArr[i];
            } else {
              this.girds[i].spriteFrame = null;
            }
          }
        } // 控制图片显示隐藏


        rotatePrize(index) {
          for (let i = 0; i < this.girds.length; i++) {
            if (i === index) {
              this.girds[index].spriteFrame = this.xmloutArr[i];
            } else {
              this.girds[i].spriteFrame = null;
            }
          }
        }

        fillter(number) {
          if (number < 10) {
            return '0000' + number.toString();
          } else if (number >= 10 && number < 100) {
            return '000' + number.toString();
          } else if (number >= 100 && number < 1000) {
            return '00' + number.toString();
          } else if (number >= 1000 && number < 10000) {
            return '0' + number.toString();
          } else if (number >= 10000) {
            return number.toString();
          }
        }

        retunxmlScore(type) {
          if (type == 1 || type == 11) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 2 || type == 12) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 3 || type == 13) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 4 || type == 14) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 5 || type == 15) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 7 || type == 17) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 8 || type == 18) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          } else if (type == 9 || type == 19) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string);
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "girds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38786d050291a2e3c5d2d6bb37fc59f79d1589dd.js.map