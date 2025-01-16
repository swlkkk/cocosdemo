System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Prefab, resources, Sprite, Vec3, UITransform, SpriteFrame, instantiate, NodePool, Label, _decorator, Component, Node, tween, MeshRenderer, Material, spin, coinCreate, jpScorets, ddlts, xmlts, lineAnimate, AllAnimate, gameCore, lxts, jpts, flashPicts, labelts, hyts, ddlhyts, xmlAnim, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, machine;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfspin(extras) {
    _reporterNs.report("spin", "./spin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjpScorets(extras) {
    _reporterNs.report("jpScorets", "./jpScorets", _context.meta, extras);
  }

  function _reportPossibleCrUseOfddlts(extras) {
    _reporterNs.report("ddlts", "./ddlts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfxmlts(extras) {
    _reporterNs.report("xmlts", "./xmlts", _context.meta, extras);
  }

  function _reportPossibleCrUseOflineAnimate(extras) {
    _reporterNs.report("lineAnimate", "./lineAnimate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAllAnimate(extras) {
    _reporterNs.report("AllAnimate", "./AllAnimate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCore(extras) {
    _reporterNs.report("gameCore", "./gameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOflxts(extras) {
    _reporterNs.report("lxts", "./lxts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjpts(extras) {
    _reporterNs.report("jpts", "./jpts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfflashPicts(extras) {
    _reporterNs.report("flashPicts", "./flashPicts", _context.meta, extras);
  }

  function _reportPossibleCrUseOflabelts(extras) {
    _reporterNs.report("labelts", "./labelts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhyts(extras) {
    _reporterNs.report("hyts", "./hyts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfddlhyts(extras) {
    _reporterNs.report("ddlhyts", "./ddlhyts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfxmlAnim(extras) {
    _reporterNs.report("xmlAnim", "./xmlAnim", _context.meta, extras);
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
      SpriteFrame = _cc.SpriteFrame;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
      Label = _cc.Label;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      tween = _cc.tween;
      MeshRenderer = _cc.MeshRenderer;
      Material = _cc.Material;
    }, function (_unresolved_2) {
      spin = _unresolved_2.spin;
    }, function (_unresolved_3) {
      coinCreate = _unresolved_3.coinCreate;
    }, function (_unresolved_4) {
      jpScorets = _unresolved_4.jpScorets;
    }, function (_unresolved_5) {
      ddlts = _unresolved_5.ddlts;
    }, function (_unresolved_6) {
      xmlts = _unresolved_6.xmlts;
    }, function (_unresolved_7) {
      lineAnimate = _unresolved_7.lineAnimate;
    }, function (_unresolved_8) {
      AllAnimate = _unresolved_8.AllAnimate;
    }, function (_unresolved_9) {
      gameCore = _unresolved_9.gameCore;
    }, function (_unresolved_10) {
      lxts = _unresolved_10.lxts;
    }, function (_unresolved_11) {
      jpts = _unresolved_11.jpts;
    }, function (_unresolved_12) {
      flashPicts = _unresolved_12.flashPicts;
    }, function (_unresolved_13) {
      labelts = _unresolved_13.labelts;
    }, function (_unresolved_14) {
      hyts = _unresolved_14.hyts;
    }, function (_unresolved_15) {
      ddlhyts = _unresolved_15.ddlhyts;
    }, function (_unresolved_16) {
      xmlAnim = _unresolved_16.xmlAnim;
    }, function (_unresolved_17) {
      i18n = _unresolved_17;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7b8f56NqVPQZRrd3pEdzpW", "machine", undefined);

      __checkObsolete__(['Prefab', 'resources', 'Sprite', 'Vec3', 'UITransform', 'SpriteFrame', 'instantiate', 'NodePool', 'Label', '_decorator', 'Component', 'Node', 'tween', 'MeshRenderer', 'Material']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("machine", machine = (_dec = ccclass('machine'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Prefab), _dec7 = property(Prefab), _dec8 = property(Prefab), _dec9 = property(Prefab), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Material), _dec14 = property(Material), _dec15 = property(Material), _dec16 = property(Material), _dec17 = property(Material), _dec18 = property(Material), _dec(_class = (_class2 = class machine extends Component {
        constructor() {
          super(...arguments);

          // 滚动图片预制，节点池以及图片路径（图片需要放在resources文件夹下）
          _initializerDefineProperty(this, "item", _descriptor, this);

          _initializerDefineProperty(this, "lineitem", _descriptor2, this);

          this.itemNodePool = new NodePool();
          this.itemSpritePathArray = ["turntable/Act_shoes/spriteFrame", // 鞋子(0)
          "turntable/Act_target/spriteFrame", // 箭靶(1)
          "turntable/Act_trumpet/spriteFrame", // 喇叭(2)
          "turntable/Act_ball/spriteFrame", // 绿球(3)
          "turntable/Act_drum/spriteFrame", // 蛋糕(4)
          "turntable/Act_camp/spriteFrame", // 马戏团(5)
          "turntable/Act_monocycle/spriteFrame", // 独轮车(6)
          "turntable/Act_ongg/spriteFrame", // 气球(7)
          "turntable/Act_clown/spriteFrame" // 小丑(8)
          ];

          _initializerDefineProperty(this, "hyItem", _descriptor3, this);

          _initializerDefineProperty(this, "lxItem", _descriptor4, this);

          _initializerDefineProperty(this, "xmlItem", _descriptor5, this);

          _initializerDefineProperty(this, "ddlhy", _descriptor6, this);

          _initializerDefineProperty(this, "jpItem", _descriptor7, this);

          _initializerDefineProperty(this, "ddlsetItem", _descriptor8, this);

          // 三个窗口槽节点
          _initializerDefineProperty(this, "windowLayout1", _descriptor9, this);

          _initializerDefineProperty(this, "windowLayout2", _descriptor10, this);

          _initializerDefineProperty(this, "windowLayout3", _descriptor11, this);

          // 各个窗口中滚动的图片数量
          this.num1 = 12;
          this.num2 = 15;
          this.num3 = 18;
          // 是否是第一次滚动
          this.isFirstRoll = true;
          // 是否正在滚动
          this.isRolling = false;
          // 初始jp连线奖
          this.jpline = [0, 1, 2, 3, 4, 5, 6, 7];
          // 剔除jp连线奖
          this.jplineOut = [];
          // 普通连线奖
          this.randomsub = null;
          // 连线奖中奖图案
          this.randomicon = null;
          // 中奖结果
          this.adone = [];
          this.adtwo = [];
          this.adthree = [];
          this.spriteArr = [];

          _initializerDefineProperty(this, "m1", _descriptor12, this);

          _initializerDefineProperty(this, "m2", _descriptor13, this);

          _initializerDefineProperty(this, "m3", _descriptor14, this);

          _initializerDefineProperty(this, "m4", _descriptor15, this);

          _initializerDefineProperty(this, "m5", _descriptor16, this);

          _initializerDefineProperty(this, "m6", _descriptor17, this);

          this.main = null;
          this.mini1 = null;
          this.mini2 = null;

          // 从数组中删除特定元素
          this.filterArray = (arr, num) => arr.filter(item => item !== num);
        }

        onLoad() {
          // 预加载资源
          this.itemSpritePathArray.forEach(spritePath => {
            resources.preload(spritePath, SpriteFrame);
          });

          if (i18n._language == 'tc') {
            this.main = this.m1;
            this.mini1 = this.m2;
            this.mini2 = this.m3;
          } else {
            this.main = this.m4;
            this.mini1 = this.m5;
            this.mini2 = this.m6;
          } // 抽奖设置


          this.setAward(8);
        }

        start() {
          setTimeout(() => {
            this.onHandleClicked(8);
          }, 1500);
        } // 从数组中随机取值


        getRandomArrayElements(arr, count) {
          var shuffled = arr.slice(0),
              i = arr.length,
              min = i - count,
              temp,
              index;

          while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index]; //即值交换

            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
          }

          return shuffled.slice(min);
        }

        // 初始化奖项
        setAward(type, subtype) {
          var spinAct = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
            error: Error()
          }), spin) : spin); // 先清空子节点，回收预制

          while (this.windowLayout1.children.length > 0) {
            this.itemNodePool.put(this.windowLayout1.children[this.windowLayout1.children.length - 1]);
          }

          while (this.windowLayout2.children.length > 0) {
            this.itemNodePool.put(this.windowLayout2.children[this.windowLayout2.children.length - 1]);
          }

          while (this.windowLayout3.children.length > 0) {
            this.itemNodePool.put(this.windowLayout3.children[this.windowLayout3.children.length - 1]);
          } // 重设窗口Layout位置


          this.windowLayout1.setPosition(0, -5.7, 0);
          this.windowLayout2.setPosition(0, -5.7, 0);
          this.windowLayout3.setPosition(0, -5.7, 0);
          /* 此处是设置最终结果逻辑 */

          var index1Arr = [];
          var index2Arr = [];
          var index3Arr = [];

          if (type == 1) {
            // jp1连线奖为每一数列第二个均为小丑
            this.jplineOut = this.jpline;
            /* 1 */

            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            index1Arr[1] = 8;
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
            /* 2 */

            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            index2Arr[1] = 8;
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
            /* 3 */

            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            index3Arr[1] = 8;
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
          } else if (type == 2) {
            // jp2连线奖为每一数列第一个均为小丑
            this.jplineOut = this.jpline;
            /* 1 */

            index1Arr[0] = 8;
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
            /* 2 */

            index2Arr[0] = 8;
            index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1]);
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
            /* 3 */

            index3Arr[0] = 8;
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
          } else if (type == 3) {
            // jp3连线奖为每一数列第三个均为小丑
            this.jplineOut = this.jpline;
            /* 1 */

            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
            index1Arr[2] = 8;
            /* 2 */

            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
            index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1]);
            index2Arr[2] = 8;
            /* 3 */

            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
            index3Arr[2] = 8;
          } else if (type == 4) {
            // 全盘奖
            // 测试随机挑选一个图案作为全盘奖
            var randomPrize = Math.floor(Math.random() * 8);
            /* 1 */

            index1Arr[0] = randomPrize;
            index1Arr[1] = randomPrize;
            index1Arr[2] = randomPrize;
            /* 2 */

            index2Arr[0] = randomPrize;
            index2Arr[1] = randomPrize;
            index2Arr[2] = randomPrize;
            /* 3 */

            index3Arr[0] = randomPrize;
            index3Arr[1] = randomPrize;
            index3Arr[2] = randomPrize;
          } else if (type == 5) {
            // 普通连线奖
            this.jplineOut = this.jpline;

            if (subtype == 1) {
              // 随机选一排连线奖
              this.randomsub = Math.floor(Math.random() * 3);
              this.randomicon = spinAct.lineType[0];
              this.jplineOut = this.filterArray(this.jplineOut, this.randomicon);

              if (this.randomsub == 0) {
                /* 1 */
                index1Arr[0] = this.randomicon;
                index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
                index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
                /* 2 */

                index2Arr[0] = this.randomicon;
                index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1]);
                index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
                /* 3 */

                index3Arr[0] = this.randomicon;
                index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
                index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
              } else if (this.randomsub == 1) {
                /* 1 */
                index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                index1Arr[1] = this.randomicon;
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
                index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
                /* 2 */

                index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                index2Arr[1] = this.randomicon;
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
                index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
                /* 3 */

                index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                index3Arr[1] = this.randomicon;
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
                index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
              } else if (this.randomsub == 2) {
                /* 1 */
                index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
                index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
                index1Arr[2] = this.randomicon;
                /* 2 */

                index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
                index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1]);
                index2Arr[2] = this.randomicon;
                /* 3 */

                index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
                index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
                index3Arr[2] = this.randomicon;
              }
            } else if (subtype == 2) {
              // 随机选二排连线奖
              this.randomsub = this.getRandomArrayElements([0, 1, 2], 2);
              this.randomicon = spinAct.lineType;

              if (this.randomsub.indexOf(0) == -1) {
                /* 1 */
                index1Arr[1] = this.randomicon[0];
                index1Arr[2] = this.randomicon[1];
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0]);
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1]);
                index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
                /* 2 */

                index2Arr[1] = this.randomicon[0];
                index2Arr[2] = this.randomicon[1];
                index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
                /* 3 */

                index3Arr[1] = this.randomicon[0];
                index3Arr[2] = this.randomicon[1];
                index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
              } else if (this.randomsub.indexOf(1) == -1) {
                /* 1 */
                index1Arr[0] = this.randomicon[0];
                index1Arr[2] = this.randomicon[1];
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0]);
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1]);
                index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
                /* 2 */

                index2Arr[0] = this.randomicon[0];
                index2Arr[2] = this.randomicon[1];
                index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1]);
                /* 3 */

                index3Arr[0] = this.randomicon[0];
                index3Arr[2] = this.randomicon[1];
                index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
              } else if (this.randomsub.indexOf(2) == -1) {
                /* 1 */
                index1Arr[0] = this.randomicon[0];
                index1Arr[1] = this.randomicon[1];
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0]);
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1]);
                index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
                /* 2 */

                index2Arr[0] = this.randomicon[0];
                index2Arr[1] = this.randomicon[1];
                index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
                /* 3 */

                index3Arr[0] = this.randomicon[0];
                index3Arr[1] = this.randomicon[1];
                index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
                this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
              }
            } else {
              // 三排连线奖
              this.randomicon = spinAct.lineType;
              this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0]);
              this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1]);
              this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[2]);
              /* 1 */

              index1Arr[0] = this.randomicon[0];
              index1Arr[1] = this.randomicon[1];
              index1Arr[2] = this.randomicon[2];
              /* 2 */

              index2Arr[0] = this.randomicon[0];
              index2Arr[1] = this.randomicon[1];
              index2Arr[2] = this.randomicon[2];
              /* 3 */

              index3Arr[0] = this.randomicon[0];
              index3Arr[1] = this.randomicon[1];
              index3Arr[2] = this.randomicon[2];
            }
          } else if (type == 6) {
            // 叠叠乐
            this.jplineOut = this.jpline;
            /* 1 */

            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0]);
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
            index1Arr[2] = 8;
            /* 2 */

            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            index2Arr[1] = 8;
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
            /* 3 */

            index3Arr[0] = 8;
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2]);
          } else if (type == 7) {
            // 小玛丽
            this.jplineOut = this.jpline;
            /* 1 */

            index1Arr[0] = 8;
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1]);
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2]);
            /* 2 */

            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            index2Arr[1] = 8;
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0]);
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2]);
            /* 3 */

            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0]);
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0];
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1]);
            index3Arr[2] = 8;
          } else if (type == 8) {
            // 正常滚动随机赋值
            var {
              a,
              b,
              c
            } = this.generateArrays();
            index1Arr = [a[0], b[0], c[0]];
            index2Arr = [a[1], b[1], c[1]];
            index3Arr = [a[2], b[2], c[2]];
          } // 第一竖排结果


          var item1Arr = [this.spawnItem(this.itemSpritePathArray[index1Arr[0]]), this.spawnItem(this.itemSpritePathArray[index1Arr[1]]), this.spawnItem(this.itemSpritePathArray[index1Arr[2]])]; // 第二竖排结果

          var item2Arr = [this.spawnItem(this.itemSpritePathArray[index2Arr[0]]), this.spawnItem(this.itemSpritePathArray[index2Arr[1]]), this.spawnItem(this.itemSpritePathArray[index2Arr[2]])]; // 第三竖排结果

          var item3Arr = [this.spawnItem(this.itemSpritePathArray[index3Arr[0]]), this.spawnItem(this.itemSpritePathArray[index3Arr[1]]), this.spawnItem(this.itemSpritePathArray[index3Arr[2]])];
          this.adone = item1Arr;
          this.adtwo = item2Arr;
          this.adthree = item3Arr; // 第一竖排结果添加

          this.windowLayout1.addChild(item1Arr[0]);
          this.windowLayout1.addChild(item1Arr[1]);
          this.windowLayout1.addChild(item1Arr[2]); // 第二竖排结果添加

          this.windowLayout2.addChild(item2Arr[0]);
          this.windowLayout2.addChild(item2Arr[1]);
          this.windowLayout2.addChild(item2Arr[2]); // 第三竖排结果添加

          this.windowLayout3.addChild(item3Arr[0]);
          this.windowLayout3.addChild(item3Arr[1]);
          this.windowLayout3.addChild(item3Arr[2]);
          this.replenishItem();
        } // 后续添加 将上面的num1,num2和num3减去3(展示几张减去几张)是为了留出三张图片以供显示结果
        // 每个竖排随机填充三张图片补充空缺


        replenishItem() {
          // 往每个窗口添加一定数量图片 第三个窗口滚动最久、图片设置最多
          for (var i = 0; i < this.num1 - 3; i++) {
            var item = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()]);
            this.windowLayout1.addChild(item);
          }

          for (var _i = 0; _i < this.num2 - 3; _i++) {
            var _item = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()]);

            this.windowLayout2.addChild(_item);
          }

          for (var _i2 = 0; _i2 < this.num3 - 3; _i2++) {
            var _item2 = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()]);

            this.windowLayout3.addChild(_item2);
          }

          var path1Arr = [this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()]];
          var path2Arr = [this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()]];
          var path3Arr = [this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()], this.itemSpritePathArray[this.getRandomIndex()]]; // 第一竖排补充

          this.windowLayout1.addChild(this.spawnItem(path1Arr[0]));
          this.windowLayout1.addChild(this.spawnItem(path1Arr[1]));
          this.windowLayout1.addChild(this.spawnItem(path1Arr[2])); // 第二竖排补充

          this.windowLayout2.addChild(this.spawnItem(path2Arr[0]));
          this.windowLayout2.addChild(this.spawnItem(path2Arr[1]));
          this.windowLayout2.addChild(this.spawnItem(path2Arr[2])); // 第三竖排补充

          this.windowLayout3.addChild(this.spawnItem(path3Arr[0]));
          this.windowLayout3.addChild(this.spawnItem(path3Arr[1]));
          this.windowLayout3.addChild(this.spawnItem(path3Arr[2]));
        }

        spawnItem(spritePath) {
          // 生成预制体
          var item = null;

          if (this.itemNodePool.size() > 0) {
            item = this.itemNodePool.get();
          } else {
            item = instantiate(this.item);
          } // 设置图片


          if (spritePath == 'turntable/Act_shoes/spriteFrame') {
            if (this.spriteArr[0] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[0] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[0];
            }
          } else if (spritePath == 'turntable/Act_target/spriteFrame') {
            if (this.spriteArr[1] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[1] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[1];
            }
          } else if (spritePath == 'turntable/Act_trumpet/spriteFrame') {
            if (this.spriteArr[2] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[2] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[2];
            }
          } else if (spritePath == 'turntable/Act_ball/spriteFrame') {
            if (this.spriteArr[3] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[3] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[3];
            }
          } else if (spritePath == 'turntable/Act_drum/spriteFrame') {
            if (this.spriteArr[4] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[4] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[4];
            }
          } else if (spritePath == 'turntable/Act_camp/spriteFrame') {
            if (this.spriteArr[5] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[5] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[5];
            }
          } else if (spritePath == 'turntable/Act_monocycle/spriteFrame') {
            if (this.spriteArr[6] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[6] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[6];
            }
          } else if (spritePath == 'turntable/Act_ongg/spriteFrame') {
            if (this.spriteArr[7] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[7] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[7];
            }
          } else if (spritePath == 'turntable/Act_clown/spriteFrame') {
            if (this.spriteArr[8] == null) {
              resources.load(spritePath, SpriteFrame, (err, asset) => {
                this.spriteArr[8] = asset;
                item.getComponent(Sprite).spriteFrame = asset;
              });
            } else {
              item.getComponent(Sprite).spriteFrame = this.spriteArr[8];
            }
          } // 设置图片大小


          item.getComponent(UITransform).width = 3.8;
          item.getComponent(UITransform).height = 3.8;
          return item;
        }

        generateUniqueArray() {
          var arr = [];

          while (arr.length < 3) {
            var num = Math.floor(Math.random() * 9); // 随机生成 0 到 8 之间的数

            if (arr.length < 2 || arr[0] !== num || arr[1] !== num) {
              // 确保不完全相同
              arr.push(num);
            }
          }

          return arr;
        }

        generateArrays() {
          var a, b, c;
          var valid = false;

          while (!valid) {
            a = this.generateUniqueArray();
            b = this.generateUniqueArray();
            c = this.generateUniqueArray();

            if ((a[0] !== b[1] || b[1] !== c[2] || a[0] !== c[2]) && (a[2] !== b[1] || a[2] !== c[0] || b[1] !== c[0])) {
              valid = true;
            }
          }

          return {
            a,
            b,
            c
          };
        } // 生成线条预制体


        spawnLine(type, subtype) {
          var lialionLine = this.node.parent.getChildByName('liaisonLine');

          if (type == 1) {
            // jp1连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
              lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setPosition(0, 0, 0);
              lialionLine.addChild(lineitem);
            }
          } else if (type == 2) {
            // jp2连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
              lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setPosition(0, 3.5, 0);
              lialionLine.addChild(lineitem);
            }
          } else if (type == 3) {
            // jp3连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
              lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setPosition(0, -3.6, 0);
              lialionLine.addChild(lineitem);
            }
          } else if (type == 4) {
            // 全盘奖
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
              lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setPosition(0, 0, 0);
              lialionLine.addChild(lineitem);
            }

            if (lialionLine.getChildByName('lineitem2') != null) {
              lialionLine.getChildByName('lineitem2').setPosition(0, 3.5, 0);
              lialionLine.getChildByName('lineitem2').active = true;
            } else {
              var lineitem2 = instantiate(this.lineitem);
              lineitem2.name = 'lineitem2';
              lineitem2.setPosition(0, 3.5, 0);
              lialionLine.addChild(lineitem2);
            }

            if (lialionLine.getChildByName('lineitem3') != null) {
              lialionLine.getChildByName('lineitem3').setPosition(0, -3.6, 0);
              lialionLine.getChildByName('lineitem3').active = true;
            } else {
              var lineitem3 = instantiate(this.lineitem);
              lineitem3.name = 'lineitem3';
              lineitem3.setPosition(0, 3.5, 0);
              lialionLine.addChild(lineitem3);
            }

            if (lialionLine.getChildByName('lineitem4') != null) {
              lialionLine.getChildByName('lineitem4').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem4').setScale(new Vec3(1.2, 1.2, 1));
              lialionLine.getChildByName('lineitem4').setRotationFromEuler(0, 0, 35);
              lialionLine.getChildByName('lineitem4').active = true;
            } else {
              var lineitem4 = instantiate(this.lineitem);
              lineitem4.name = 'lineitem4';
              lineitem4.setScale(new Vec3(1.2, 1.2, 1));
              lineitem4.setRotationFromEuler(0, 0, 35);
              lineitem4.setPosition(0, 0, 0);
              lialionLine.addChild(lineitem4);
            }

            if (lialionLine.getChildByName('lineitem5') != null) {
              lialionLine.getChildByName('lineitem5').setScale(new Vec3(1.2, 1.2, 1));
              lialionLine.getChildByName('lineitem5').setRotationFromEuler(0, 0, -35);
              lialionLine.getChildByName('lineitem5').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem5').active = true;
            } else {
              var lineitem5 = instantiate(this.lineitem);
              lineitem5.name = 'lineitem5';
              lineitem5.setScale(new Vec3(1.2, 1.2, 1));
              lineitem5.setRotationFromEuler(0, 0, -35);
              lineitem5.setPosition(0, 0, 0);
              lialionLine.addChild(lineitem5);
            }
          } else if (type == 5) {
            // 普通连线奖
            if (subtype == 1) {
              if (this.randomsub == 0) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, 3.5, 0);
                  lialionLine.addChild(lineitem);
                }
              } else if (this.randomsub == 1) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, 0, 0);
                  lialionLine.addChild(lineitem);
                }
              } else if (this.randomsub == 2) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, -3.6, 0);
                  lialionLine.addChild(lineitem);
                }
              }
            } else if (subtype == 2) {
              if (this.randomsub[0] == 0) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, 3.5, 0);
                  lialionLine.addChild(lineitem);
                }
              } else if (this.randomsub[0] == 1) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, 0, 0);
                  lialionLine.addChild(lineitem);
                }
              } else if (this.randomsub[0] == 2) {
                if (lialionLine.getChildByName('lineitem') != null) {
                  lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                  lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0);
                  lialionLine.getChildByName('lineitem').active = true;
                } else {
                  var lineitem = instantiate(this.lineitem);
                  lineitem.name = 'lineitem';
                  lineitem.setPosition(0, -3.6, 0);
                  lialionLine.addChild(lineitem);
                }
              }

              if (this.randomsub[1] == 0) {
                if (lialionLine.getChildByName('lineitem1') != null) {
                  lialionLine.getChildByName('lineitem1').setPosition(0, 3.5, 0);
                  lialionLine.getChildByName('lineitem1').active = true;
                } else {
                  var lineitem1 = instantiate(this.lineitem);
                  lineitem1.name = 'lineitem1';
                  lineitem1.setPosition(0, 3.5, 0);
                  lialionLine.addChild(lineitem1);
                }
              } else if (this.randomsub[1] == 1) {
                if (lialionLine.getChildByName('lineitem1') != null) {
                  lialionLine.getChildByName('lineitem1').setPosition(0, 0, 0);
                  lialionLine.getChildByName('lineitem1').active = true;
                } else {
                  var lineitem1 = instantiate(this.lineitem);
                  lineitem1.name = 'lineitem1';
                  lineitem1.setPosition(0, 0, 0);
                  lialionLine.addChild(lineitem1);
                }
              } else if (this.randomsub[1] == 2) {
                if (lialionLine.getChildByName('lineitem1') != null) {
                  lialionLine.getChildByName('lineitem1').setPosition(0, -3.6, 0);
                  lialionLine.getChildByName('lineitem1').active = true;
                } else {
                  var lineitem1 = instantiate(this.lineitem);
                  lineitem1.name = 'lineitem1';
                  lineitem1.setPosition(0, -3.6, 0);
                  lialionLine.addChild(lineitem1);
                }
              }
            } else if (subtype == 3) {
              if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0);
                lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
                lialionLine.getChildByName('lineitem').active = true;
              } else {
                var lineitem = instantiate(this.lineitem);
                lineitem.name = 'lineitem';
                lineitem.setPosition(0, 0, 0);
                lialionLine.addChild(lineitem);
              }

              if (lialionLine.getChildByName('lineitem2') != null) {
                lialionLine.getChildByName('lineitem2').setPosition(0, 3.5, 0);
                lialionLine.getChildByName('lineitem2').active = true;
              } else {
                var lineitem2 = instantiate(this.lineitem);
                lineitem2.name = 'lineitem2';
                lineitem2.setPosition(0, 3.5, 0);
                lialionLine.addChild(lineitem2);
              }

              if (lialionLine.getChildByName('lineitem3') != null) {
                lialionLine.getChildByName('lineitem3').setPosition(0, -3.6, 0);
                lialionLine.getChildByName('lineitem3').active = true;
              } else {
                var lineitem3 = instantiate(this.lineitem);
                lineitem3.name = 'lineitem3';
                lineitem3.setPosition(0, -3.6, 0);
                lialionLine.addChild(lineitem3);
              }
            }
          } else if (type == 6) {
            // 叠叠乐
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 32);
              lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setPosition(0, 0, 0);
              lineitem.setRotationFromEuler(0, 0, 32);
              lialionLine.addChild(lineitem);
            }
          } else if (type == 7) {
            // 小玛丽
            if (lialionLine.getChildByName('lineitem') != null) {
              lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, -32);
              lialionLine.getChildByName('lineitem').setPosition(0, 0, 0);
              lialionLine.getChildByName('lineitem').active = true;
            } else {
              var lineitem = instantiate(this.lineitem);
              lineitem.name = 'lineitem';
              lineitem.setRotationFromEuler(0, 0, -32);
              lineitem.setPosition(0, 0, 0);
              lialionLine.addChild(lineitem);
            }
          }
        }

        getRandomIndex() {
          // 随机获取一张图片的索引
          var index = Math.floor(Math.random() * this.itemSpritePathArray.length);
          return index;
        }

        onHandleClicked(type, subtype) {
          if (this.isRolling) {
            return;
          } // 设置为正在滚动


          this.isRolling = true; // 设置窗口滚动内容，第一次滚动时已在start()中设置

          if (this.isFirstRoll) {
            this.isFirstRoll = false;
            this.normalAnimation();
          } else {
            this.setAward(type, subtype);
            var itemHeight = this.windowLayout1.children[0].getComponent(UITransform).height;
            var jpSw = this.node.parent.getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
              error: Error()
            }), jpScorets) : jpScorets);
            tween(this.windowLayout1).by(0.6, {
              position: new Vec3(0, -this.num1 * itemHeight, 0)
            }, {
              easing: 'sineInOut'
            }).start();
            tween(this.windowLayout2).by(0.8, {
              position: new Vec3(0, -this.num2 * itemHeight, 0)
            }, {
              easing: 'sineInOut'
            }).start();
            tween(this.windowLayout3).by(1, {
              position: new Vec3(0, -this.num3 * itemHeight, 0)
            }, {
              easing: 'sineInOut'
            }).call(() => {
              var coinDo = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate);

              if (coinDo.winning) {
                var sprite = this.node.parent.parent.getChildByName('mainScreen').getComponent(MeshRenderer);

                if (type == 1) {
                  // jp1中奖处理
                  this.spawnLine(1);
                  this.spinSwitch(false);
                  this.adone[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adtwo[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adthree[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false;

                    if (this.node.parent.getChildByName('jpAnim') != null) {
                      this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                        error: Error()
                      }), jpts) : jpts).updateImg(3);
                      this.node.parent.getChildByName('jpAnim').active = true;
                    } else {
                      // 生成jp奖画面
                      var jpshow = instantiate(this.jpItem);
                      jpshow.setPosition(-343.017, -597.996, 26.08);
                      this.node.parent.addChild(jpshow);
                    }

                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score = coinDo.zjCoins;
                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score1 = coinDo.zjCoins;
                    coinDo.autoTarget = coinDo.zjCoins;
                    coinDo.autoCast();
                  }, 500);
                } else if (type == 2) {
                  // jp2中奖处理
                  this.spawnLine(2);
                  this.spinSwitch(false);
                  this.adone[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adtwo[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adthree[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false;

                    if (this.node.parent.getChildByName('jpAnim') != null) {
                      this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                        error: Error()
                      }), jpts) : jpts).updateImg(4);
                      this.node.parent.getChildByName('jpAnim').active = true;
                    } else {
                      // 生成jp奖画面
                      var jpshow = instantiate(this.jpItem);
                      jpshow.setPosition(-343.017, -597.996, 26.08);
                      this.node.parent.addChild(jpshow);
                    }

                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score = coinDo.zjCoins;
                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score1 = coinDo.zjCoins;
                    coinDo.autoTarget = coinDo.zjCoins;
                    coinDo.autoCast();
                  }, 500);
                } else if (type == 3) {
                  // jp3中奖处理
                  this.spawnLine(3);
                  this.spinSwitch(false);
                  this.adone[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adtwo[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adthree[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false; // 生成jp奖画面

                    if (this.node.parent.getChildByName('jpAnim') != null) {
                      this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                        error: Error()
                      }), jpts) : jpts).updateImg(5);
                      this.node.parent.getChildByName('jpAnim').active = true;
                    } else {
                      // 生成jp奖画面
                      var jpshow = instantiate(this.jpItem);
                      jpshow.setPosition(-343.017, -597.996, 26.08);
                      this.node.parent.addChild(jpshow);
                    }

                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score = coinDo.zjCoins;
                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score1 = coinDo.zjCoins;
                    coinDo.autoTarget = coinDo.zjCoins;
                    coinDo.autoCast();
                  }, 500);
                } else if (type == 4) {
                  // jp全盘奖
                  this.spawnLine(4);
                  this.spinSwitch(false);
                  this.adone[0].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adone[1].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adone[2].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adtwo[0].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adtwo[1].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adtwo[2].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adthree[0].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adthree[1].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  this.adthree[2].addComponent(_crd && AllAnimate === void 0 ? (_reportPossibleCrUseOfAllAnimate({
                    error: Error()
                  }), AllAnimate) : AllAnimate);
                  var alllineFlash = setInterval(() => {
                    if (!this.node.parent.getChildByName('liaisonLine').active) {
                      setTimeout(() => {
                        this.node.parent.getChildByName('liaisonLine').active = true;
                      }, 125);
                    } else {
                      setTimeout(() => {
                        this.node.parent.getChildByName('liaisonLine').active = false;
                      }, 125);
                    }
                  }, 125);
                  setTimeout(() => {
                    clearInterval(alllineFlash);
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false;
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem2').active = false;
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem3').active = false;
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem4').active = false;
                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem5').active = false;

                    if (this.node.parent.getChildByName('jpAnim') != null) {
                      this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                        error: Error()
                      }), jpts) : jpts).updateImg(6);
                      this.node.parent.getChildByName('jpAnim').active = true;
                    } else {
                      // 生成jp奖画面
                      var jpshow = instantiate(this.jpItem);
                      jpshow.setPosition(-343.017, -597.996, 26.08);
                      this.node.parent.addChild(jpshow);
                    }

                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score = coinDo.zjCoins;
                    this.node.parent.getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
                      error: Error()
                    }), jpts) : jpts).score1 = coinDo.zjCoins;
                    coinDo.autoTarget = coinDo.zjCoins;
                    coinDo.autoCast();
                  }, 5000);
                } else if (type == 5) {
                  this.spinSwitch(false); // 普通连线奖

                  if (subtype == 1) {
                    this.spawnLine(5, 1);
                    this.adone[this.randomsub].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[this.randomsub].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[this.randomsub].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                  } else if (subtype == 2) {
                    this.spawnLine(5, 2);
                    this.adone[this.randomsub[0]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adone[this.randomsub[1]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[this.randomsub[0]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[this.randomsub[1]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[this.randomsub[0]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[this.randomsub[1]].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                  } else if (subtype == 3) {
                    this.spawnLine(5, 3);
                    this.adone[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adone[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adone[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adtwo[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                    this.adthree[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                      error: Error()
                    }), lineAnimate) : lineAnimate);
                  }

                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    if (this.node.parent.getChildByName('lxshow') != null) {
                      this.node.parent.getChildByName('lxshow').active = true;
                    } else {
                      // 生成获奖展示界面
                      var lxshow = instantiate(this.lxItem);
                      lxshow.setPosition(-345.051, -597.314, 26.08);
                      this.node.parent.addChild(lxshow);
                    } // 当前获奖的全部金币数量


                    jpSw.getScore = coinDo.zjCoins;
                    coinDo.autoTarget = coinDo.zjCoins;

                    if (subtype == 1) {
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score = coinDo.zjCoins;
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score1 = coinDo.zjCoins;
                      this.lineFlash(this.randomicon, true);
                    } else if (subtype == 2) {
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score = coinDo.zjCoins;
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score1 = coinDo.zjCoins;
                      this.lineFlash(this.randomicon[0], true);
                      this.lineFlash(this.randomicon[1], true);
                    } else if (subtype == 3) {
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score = coinDo.zjCoins;
                      this.node.parent.getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                        error: Error()
                      }), lxts) : lxts).score1 = coinDo.zjCoins;
                      this.lineFlash(this.randomicon[0], true);
                      this.lineFlash(this.randomicon[1], true);
                      this.lineFlash(this.randomicon[2], true);
                    }

                    coinDo.autoCast();
                  }, 500);
                } else if (type == 6) {
                  // 叠叠乐
                  this.spawnLine(6);
                  this.spinSwitch(false);
                  this.adone[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adtwo[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adthree[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    if (this.node.parent.getChildByName('ddlshow') != null) {
                      this.node.parent.getChildByName('ddlshow').active = true;
                      this.node.parent.getChildByName('ddlshow').getComponent(_crd && ddlhyts === void 0 ? (_reportPossibleCrUseOfddlhyts({
                        error: Error()
                      }), ddlhyts) : ddlhyts).rotationPlate();
                      this.node.parent.getChildByName('ddlshow').getComponent(_crd && ddlhyts === void 0 ? (_reportPossibleCrUseOfddlhyts({
                        error: Error()
                      }), ddlhyts) : ddlhyts).rotationPlate1();
                    } else {
                      // 生成欢迎叠叠乐界面
                      var ddlshow = instantiate(this.ddlhy);
                      ddlshow.setPosition(-345.051, -597.314, 26.08);
                      this.node.parent.addChild(ddlshow);
                    }

                    setTimeout(() => {
                      coinDo.ddlSwitch = true;
                      this.node.parent.getChildByName('ddlshow').active = false;
                      this.node.parent.getChildByName('ddlshow').getComponent(_crd && ddlhyts === void 0 ? (_reportPossibleCrUseOfddlhyts({
                        error: Error()
                      }), ddlhyts) : ddlhyts).recoverPosition();
                      this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false;
                      this.node.getChildByName('Window1').getChildByName('Layout1').removeAllChildren();
                      this.node.getChildByName('Window2').getChildByName('Layout2').removeAllChildren();
                      this.node.getChildByName('Window3').getChildByName('Layout3').removeAllChildren();
                      sprite.setSharedMaterial(this.mini2, 0);
                      this.node.parent.getChildByName('out').active = false;
                      this.node.parent.getChildByName('light_node').active = false;
                      this.node.parent.getChildByName('ddlgame').active = true;
                      this.node.parent.parent.parent.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                        error: Error()
                      }), gameCore) : gameCore).shiningAll();
                      this.ddlcountDown();
                    }, 2300);
                  }, 500);
                } else if (type == 7) {
                  // 小玛丽
                  this.spawnLine(7);
                  this.spinSwitch(false);
                  this.adone[0].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adtwo[1].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  this.adthree[2].addComponent(_crd && lineAnimate === void 0 ? (_reportPossibleCrUseOflineAnimate({
                    error: Error()
                  }), lineAnimate) : lineAnimate);
                  setTimeout(() => {
                    this.node.parent.getChildByName('liaisonLine').active = false;
                    setTimeout(() => {
                      this.node.parent.getChildByName('liaisonLine').active = true;
                    }, 125);
                  }, 125);
                  setTimeout(() => {
                    if (this.node.parent.getChildByName('hyshow') != null) {
                      this.node.parent.getChildByName('hyshow').active = true;
                      this.node.parent.getChildByName('hyshow').getComponent(_crd && hyts === void 0 ? (_reportPossibleCrUseOfhyts({
                        error: Error()
                      }), hyts) : hyts).rotationPlate();
                      this.node.parent.getChildByName('hyshow').getComponent(_crd && hyts === void 0 ? (_reportPossibleCrUseOfhyts({
                        error: Error()
                      }), hyts) : hyts).rotationPlate1();
                    } else {
                      // 生成欢迎小玛丽界面
                      var hyshow = instantiate(this.hyItem);
                      hyshow.setPosition(-345.051, -597.314, 26.08);
                      this.node.parent.addChild(hyshow);
                    }

                    setTimeout(() => {
                      coinDo.xmlSwitch = true;
                      this.node.parent.getChildByName('hyshow').active = false;
                      this.node.parent.getChildByName('hyshow').getComponent(_crd && hyts === void 0 ? (_reportPossibleCrUseOfhyts({
                        error: Error()
                      }), hyts) : hyts).recoverPosition();
                      this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false;
                      this.node.getChildByName('Window1').getChildByName('Layout1').removeAllChildren();
                      this.node.getChildByName('Window2').getChildByName('Layout2').removeAllChildren();
                      this.node.getChildByName('Window3').getChildByName('Layout3').removeAllChildren();
                      sprite.setSharedMaterial(this.mini1, 0);
                      this.node.parent.getChildByName('out').active = false;
                      this.node.parent.getChildByName('light_node').active = false;
                      this.node.parent.getChildByName('xmlgame').active = true;
                      this.node.parent.parent.parent.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                        error: Error()
                      }), gameCore) : gameCore).shiningAll();

                      if (this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim') != null) {
                        this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim').active = true;
                        this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim').getComponent(_crd && xmlAnim === void 0 ? (_reportPossibleCrUseOfxmlAnim({
                          error: Error()
                        }), xmlAnim) : xmlAnim).switchOne(true);
                      } else {
                        // 生成小玛丽动画
                        var xmlshow = instantiate(this.xmlItem);
                        xmlshow.setPosition(0, 0, 0);
                        this.node.parent.getChildByName('xmlgame').addChild(xmlshow);
                      }

                      this.xmlcountDown();
                    }, 2300);
                  }, 500);
                }
              }

              setTimeout(() => {
                this.isRolling = false;

                if (coinDo.allowed) {
                  coinDo.allowed = false;
                  this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                    error: Error()
                  }), spin) : spin).setprize(coinDo.awardType);
                } else {
                  if (coinDo.winning || coinDo.activeClosed) {
                    return;
                  } else {
                    var sp = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                      error: Error()
                    }), spin) : spin);

                    if (sp.spinNum > 0) {
                      // 发送抽奖消息
                      sp.goSpinmess();

                      if (sp.spinNum > 4) {
                        sp.spinNum--;
                      } else {
                        sp.delLight();
                        sp.spinNum--;
                      }
                    }
                  }
                }
              }, 500);
            }).start();
          }
        } // 默认执行一次的假动画


        normalAnimation() {
          var itemHeight = this.windowLayout1.children[0].getComponent(UITransform).height;
          tween(this.windowLayout1).by(0.6, {
            position: new Vec3(0, -this.num1 * itemHeight, 0)
          }, {
            easing: 'sineInOut'
          }).start();
          tween(this.windowLayout2).by(0.8, {
            position: new Vec3(0, -this.num2 * itemHeight, 0)
          }, {
            easing: 'sineInOut'
          }).start();
          tween(this.windowLayout3).by(1, {
            position: new Vec3(0, -this.num3 * itemHeight, 0)
          }, {
            easing: 'sineInOut'
          }).call(() => {
            setTimeout(() => {
              this.isRolling = false;

              if (!this.node) {
                return;
              }

              var coinDo = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate);

              if (coinDo.allowed) {
                coinDo.allowed = false;
                this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                  error: Error()
                }), spin) : spin).setprize(coinDo.awardType);
              } else {
                if (coinDo.winning || coinDo.activeClosed) {
                  return;
                } else {
                  var sp = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                    error: Error()
                  }), spin) : spin);

                  if (sp.spinNum > 0) {
                    // 发送抽奖消息
                    sp.goSpinmess();

                    if (sp.spinNum > 4) {
                      sp.spinNum--;
                    } else {
                      sp.delLight();
                      sp.spinNum--;
                    }
                  }
                }
              }
            }, 500);
          }).start();
        } // 游戏转盘重置


        doRestore() {
          var sprite = this.node.parent.parent.getChildByName('mainScreen').getComponent(MeshRenderer);
          sprite.setSharedMaterial(this.main, 0);
          this.node.parent.getChildByName('out').active = true;
          this.node.parent.getChildByName('light_node').active = true;
          this.onHandleClicked(8);
        } // 小玛丽倒计时处理


        xmlcountDown() {
          var xmlgame = this.node.parent.getChildByName('xmlgame').getComponent(_crd && xmlts === void 0 ? (_reportPossibleCrUseOfxmlts({
            error: Error()
          }), xmlts) : xmlts);
          var xmlti = this.node.parent.getChildByName('xmlgame').getChildByName('xmlTime');
          var coinDo = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);
          xmlti.getComponent(Label).string = '10';
          xmlti.active = true;
          coinDo.xmltimer = setInterval(() => {
            if (Number(xmlti.getComponent(Label).string) > 0 && coinDo.xmlnum < 1) {
              xmlti.getComponent(Label).string = (Number(xmlti.getComponent(Label).string) - 1).toString();
            } else {
              if (coinDo.xmlnum != 1) {
                coinDo.xmlnum += 1;
                xmlgame.toRoll(xmlgame.startIndex);
                setTimeout(() => {
                  xmlgame.resultarr = coinDo.xmlcoinArr;
                  xmlgame.stopPos = xmlgame.resultarr[0];
                  var isover = setInterval(() => {
                    if (xmlgame.isover) {
                      clearInterval(isover);
                      coinDo.autoTarget = coinDo.zjCoins; // 当前获奖的全部金币数量

                      this.node.parent.getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
                        error: Error()
                      }), jpScorets) : jpScorets).getScore = coinDo.zjCoins;
                      coinDo.autoCast();
                    }
                  }, 1000);
                }, 3000);
              }

              clearInterval(coinDo.xmltimer);
            }
          }, 1000);
        } // 叠叠乐倒计时处理


        ddlcountDown() {
          var ddlti = this.node.parent.getChildByName('ddlgame').getChildByName('ddltime');
          var ddlto = this.node.parent.getChildByName('ddlgame').getChildByName('ddltotal');
          var ddlgame = this.node.parent.getChildByName('ddlgame').getComponent(_crd && ddlts === void 0 ? (_reportPossibleCrUseOfddlts({
            error: Error()
          }), ddlts) : ddlts);
          var coinDo = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);
          ddlti.getComponent(Label).string = '60';
          ddlto.getComponent(Label).string = '6';
          ddlti.active = true;
          ddlto.active = true;
          coinDo.ddltimer = setInterval(() => {
            if (Number(ddlti.getComponent(Label).string) > 0 && ddlgame.awardTotal > 0) {
              ddlti.getComponent(Label).string = (Number(ddlti.getComponent(Label).string) - 1).toString();
            } else {
              clearInterval(coinDo.ddltimer);
              coinDo.ddlauto = true;

              if (ddlgame.awardTotal > 0) {
                coinDo.ddlOne = setInterval(() => {
                  if (ddlgame.awardTotal > 0) {
                    coinDo.ddlOnce();
                  } else {
                    clearInterval(coinDo.ddlOne);

                    if (coinDo.autoTimer == null) {
                      if (this.node.parent.getChildByName('ddlset') != null) {
                        this.node.parent.getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0';
                        this.node.parent.getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0';
                        this.node.parent.getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0';
                        this.node.parent.getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = '';
                        this.node.parent.getChildByName('ddlset').active = true;
                      } else {
                        // 生成结算分数界面
                        var ddlset = instantiate(this.ddlsetItem);
                        ddlset.setPosition(-345.051, -597.314, 26.08);
                        this.node.parent.addChild(ddlset);
                      } // 结算ddl总分数


                      coinDo.getddlsort();
                    }
                  }
                }, 1500);
              } else {
                if (coinDo.autoTimer == null) {
                  if (this.node.parent.getChildByName('ddlset') != null) {
                    this.node.parent.getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0';
                    this.node.parent.getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0';
                    this.node.parent.getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0';
                    this.node.parent.getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = '';
                    this.node.parent.getChildByName('ddlset').active = true;
                  } else {
                    // 生成结算分数界面
                    var ddlset = instantiate(this.ddlsetItem);
                    ddlset.setPosition(-345.051, -597.314, 26.08);
                    this.node.parent.addChild(ddlset);
                  } // 结算ddl总分数


                  coinDo.getddlsort();
                }
              }
            }
          }, 1000);
        } // spin停止运动


        spinSwitch(type) {
          var spinAction = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin');

          if (!type) {
            var Mless = setInterval(() => {
              if (spinAction.position.x >= 39.4) {
                clearInterval(Mless);
                spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                  error: Error()
                }), spin) : spin).spinAc.pause();
              }
            }, 5);
          } else {
            spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
              error: Error()
            }), spin) : spin).spinAc.resume();
            console.log('当前状态1' + spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
              error: Error()
            }), spin) : spin).spinAc._finalAction._paused);
            var spIter = setInterval(() => {
              console.log('当前状态2' + spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                error: Error()
              }), spin) : spin).spinAc._finalAction._paused);

              if (spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                error: Error()
              }), spin) : spin).spinAc._finalAction._paused) {
                spinAction.getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
                  error: Error()
                }), spin) : spin).spinAc.resume();
              } else {
                clearInterval(spIter);
              }
            }, 1000);
          }
        } // 连线奖对应奖项闪烁开关


        lineFlash(num, type) {
          // 闪屏图片
          var flashPic = this.node.parent.getChildByName('flashNode').getComponent(_crd && flashPicts === void 0 ? (_reportPossibleCrUseOfflashPicts({
            error: Error()
          }), flashPicts) : flashPicts); // 闪屏数字

          var flashLabel = this.node.parent.getChildByName('labels').getComponent(_crd && labelts === void 0 ? (_reportPossibleCrUseOflabelts({
            error: Error()
          }), labelts) : labelts);
          flashPic.doFlashLine(num, type);
          flashLabel.dolabelLine(num, type);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lineitem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hyItem", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lxItem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "xmlItem", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ddlhy", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "jpItem", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "ddlsetItem", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "windowLayout1", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Node();
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "windowLayout2", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Node();
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "windowLayout3", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Node();
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "m1", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "m2", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "m3", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "m4", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "m5", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "m6", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=825ccfa462765121dcd2c5c1d34d2e1e0684a740.js.map