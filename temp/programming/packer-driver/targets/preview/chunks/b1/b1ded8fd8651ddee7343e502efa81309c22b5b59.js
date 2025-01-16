System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, input, Input, game, Game, Vec3, RigidBody, instantiate, Label, sys, native, poolManager, gameCore, machine, ddlts, xmlts, lxts, jpts, xmlAnim, socketApi, spin, maints, jpScorets, encrypt, socketFun, MD5, awardCl, i18n, popcontrol, dcountChange, autoDropTs, AudioMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, coinCreate;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgameCore(extras) {
    _reporterNs.report("gameCore", "./gameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmachine(extras) {
    _reporterNs.report("machine", "./machine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfddlts(extras) {
    _reporterNs.report("ddlts", "./ddlts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfxmlts(extras) {
    _reporterNs.report("xmlts", "./xmlts", _context.meta, extras);
  }

  function _reportPossibleCrUseOflxts(extras) {
    _reporterNs.report("lxts", "./lxts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjpts(extras) {
    _reporterNs.report("jpts", "./jpts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfxmlAnim(extras) {
    _reporterNs.report("xmlAnim", "./xmlAnim", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketApi(extras) {
    _reporterNs.report("socketApi", "./Socket/socketApi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfspin(extras) {
    _reporterNs.report("spin", "./spin", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmaints(extras) {
    _reporterNs.report("maints", "./maints", _context.meta, extras);
  }

  function _reportPossibleCrUseOfjpScorets(extras) {
    _reporterNs.report("jpScorets", "./jpScorets", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencrypt(extras) {
    _reporterNs.report("encrypt", "./Api/encrypt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsocketFun(extras) {
    _reporterNs.report("socketFun", "./Socket/socketFun", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "./Api/MD5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfawardCl(extras) {
    _reporterNs.report("awardCl", "./awardCl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopcontrol(extras) {
    _reporterNs.report("popcontrol", "./popcontrol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdcountChange(extras) {
    _reporterNs.report("dcountChange", "./dcountChange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfautoDropTs(extras) {
    _reporterNs.report("autoDropTs", "./autoDropTs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAudioMgr(extras) {
    _reporterNs.report("AudioMgr", "./AudioMgr", _context.meta, extras);
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
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      input = _cc.input;
      Input = _cc.Input;
      game = _cc.game;
      Game = _cc.Game;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      sys = _cc.sys;
      native = _cc.native;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      gameCore = _unresolved_3.gameCore;
    }, function (_unresolved_4) {
      machine = _unresolved_4.machine;
    }, function (_unresolved_5) {
      ddlts = _unresolved_5.ddlts;
    }, function (_unresolved_6) {
      xmlts = _unresolved_6.xmlts;
    }, function (_unresolved_7) {
      lxts = _unresolved_7.lxts;
    }, function (_unresolved_8) {
      jpts = _unresolved_8.jpts;
    }, function (_unresolved_9) {
      xmlAnim = _unresolved_9.xmlAnim;
    }, function (_unresolved_10) {
      socketApi = _unresolved_10.socketApi;
    }, function (_unresolved_11) {
      spin = _unresolved_11.spin;
    }, function (_unresolved_12) {
      maints = _unresolved_12.maints;
    }, function (_unresolved_13) {
      jpScorets = _unresolved_13.jpScorets;
    }, function (_unresolved_14) {
      encrypt = _unresolved_14.encrypt;
    }, function (_unresolved_15) {
      socketFun = _unresolved_15.socketFun;
    }, function (_unresolved_16) {
      MD5 = _unresolved_16.MD5;
    }, function (_unresolved_17) {
      awardCl = _unresolved_17.awardCl;
    }, function (_unresolved_18) {
      i18n = _unresolved_18;
    }, function (_unresolved_19) {
      popcontrol = _unresolved_19.popcontrol;
    }, function (_unresolved_20) {
      dcountChange = _unresolved_20.dcountChange;
    }, function (_unresolved_21) {
      autoDropTs = _unresolved_21.autoDropTs;
    }, function (_unresolved_22) {
      AudioMgr = _unresolved_22.AudioMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00325j4xMhPsoTPNm0H86r1", "coinCreate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'input', 'Input', 'game', 'Game', 'Vec3', 'RigidBody', 'instantiate', 'Label', 'sys', 'native']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("coinCreate", coinCreate = (_dec = ccclass('coinCreate'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class coinCreate extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "preCoin", _descriptor, this);

          //金币预制体
          _initializerDefineProperty(this, "ndCoinParent", _descriptor2, this);

          //金币父节点
          this.intervalEnd = 0;
          // socket变量
          this.ws = null;
          this.websocket = null;
          this.winning = false;
          this.autoTimer = null;
          this.autoNumber = 0;
          this.autoTarget = 0;
          this.awardType = -1;
          // 当前奖项(0:连线奖; 1:小玛丽; 2:叠叠乐; 3:jp1; 4:jp2; 5:jp3; 6:全盘奖)
          this.xmlSwitch = false;
          // 小玛丽特殊开关
          this.xmltime = 0;
          // 小玛丽投币时间
          this.xmlnum = 0;
          // 小玛丽点击次数
          this.xmltimer = null;
          // 小玛丽60s倒计时
          this.ddlSwitch = false;
          // 叠叠乐特殊开关
          this.ddltime = 0;
          // 叠叠乐投币时间
          this.ddltimer = null;
          // 叠叠乐倒计时
          this.ddlOne = null;
          this.ddlauto = false;
          // 中奖金币
          this.zjCoins = null;
          // ddl总中奖金额
          this.ddlscore = 0;
          this.ddlArr = {};
          this.ddlycArr = {};
          // 小玛丽数组
          this.xmlcoinArr = null;
          this.xmlOut = [0, 6, 10, 16];
          // 上机信息
          this.userId = null;
          this.billId = null;
          this.recordId = null;
          this.channelCount = null;
          // 防止卡币
          this.isDropMessageNotBack = false;
          this.isConnecting = false;
          // 断线重连
          this.isReConnecting = false;
          this.reConnectTimer = null;
          this.reCountNum = null;
          // 用户金币
          this.userCoins = null;
          // 用户信息
          this.userData = null;
          this.token = null;
          // wsuuid
          this.wsuuid = null;
          this.wssaltLen = Math.round(8 * Math.random() + 8);
          this.wssalt = null;
          // 上机后命令
          this.websocketFnc = null;
          // 特殊处理
          this.allowed = false;
          this.no = 0;
          this.price = 0;
          // 上🐔状态
          this.isDroped = false;
          this.vpinitRes = null;
          this.Md5 = null;
          // 当前投币次数状态
          this.dropStatus = 1;
          // 一次3币计时器
          this.dropThree = null;
          this.dropThreeCount = 0;
          // 自动投币
          this.autoStatus = false;
          this.autoCount = 1;
          this.autoSpeed = 1;
          this.autoTips = false;
          this.autoftm = null;
          this.autostm = null;
          this.autottm = null;
          // 进入房间就开启5分钟倒计时
          this.fiveTime = 300;
          this.fiveTimer = null;
          // 全局声音控制
          this.soundApi = null;
          this.soundStatus = false;
          this.activeClosed = false;
          this.Api = null;
          this.getMessage = false;
          this.getMessageTimer = null;
          this.getMessageCount = 0;

          this.reConnect = () => {
            this.reCountNum++;

            if (this.reCountNum >= 5) {
              clearTimeout(this.reConnectTimer);
              this.isReConnecting = false;
              this.reCountNum = null;
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlTips(false);
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlError(true);
            } else {
              this.websocketControlInit(this.vpinitRes.ws, true);
            }
          };
        }

        onLoad() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            // 获取声音
            this.soundStatus = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getSound", "()Z");
          }
        }

        start() {
          if (this.soundStatus) {
            this.playMusic('music/bgMusic');
          } else {
            this.soundStatus = false;
          }

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            native.bridge.onNative = (arg0, arg1) => {
              if (arg0 == 'cocos_update_user') {
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                  error: Error()
                }), popcontrol) : popcontrol).controlCharge(false);
                this.userData = JSON.parse(arg1);
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins);
                this.userCoins = this.userData.coins;
              }

              return;
            };
          }

          window.addEventListener('offline', () => {
            if (!this.isReConnecting && !this.activeClosed) {
              this.isDropMessageNotBack = false;

              if (this.autoStatus) {
                this.autoStatus = false;
                this.autoSwitch();
              }

              if (this.winning) {
                if (this.autoTimer != null) {
                  clearInterval(this.autoTimer);
                }
              }

              this.isReConnecting = true;
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlTips(true);
              setTimeout(() => {
                this.tryConnect();
              }, 5000);
            }
          });
          /* 正常投币 */

          input.on(Input.EventType.TOUCH_END, this.touchEnd, this);
          /* 小玛丽 */

          input.on(Input.EventType.TOUCH_END, this.xmltouchEnd, this);
          /* 叠叠乐 */

          input.on(Input.EventType.TOUCH_END, this.ddltouchEnd, this);
          game.on(Game.EVENT_HIDE, () => {
            // 用户在自动投币就停止
            if (this.autoStatus) {
              this.autoStatus = false;
              this.autoSwitch();
            } // 进入后台处于中奖出币状态


            if (this.winning) {
              if (this.autoTimer != null) {
                clearInterval(this.autoTimer);
              }
            }

            game.pause();
          });
          game.on(Game.EVENT_SHOW, () => {
            setTimeout(() => {
              game.resume(); // 从后台返回处于中奖出币状态

              if (this.winning) {
                if (this.autoTimer != null && !this.isReConnecting) {
                  this.autoCast();
                }
              }
            }, 500);
          }, this);

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "reqProducts", "()V");
          }

          this.getUser();
          this.openFive();
          setTimeout(() => {
            if (this.node && this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active) {
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active = false;
            }
          }, 3000);
        }

        releaseAny() {
          input.off(Input.EventType.TOUCH_END, this.touchEnd, this);
          input.off(Input.EventType.TOUCH_END, this.xmltouchEnd, this);
          input.off(Input.EventType.TOUCH_END, this.ddltouchEnd, this);
          game.off(Game.EVENT_HIDE);
          game.off(Game.EVENT_SHOW);

          if (this.soundApi != null) {
            this.soundApi.stop();
            this.node.parent.getChildByName('__audioMgr__').destroy();
          }
        }

        openFive() {
          this.fiveTimer = setInterval(() => {
            if (this.fiveTime > 1) {
              this.fiveTime = this.fiveTime - 1;

              if (this.fiveTime <= 60) {
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('down_count').getComponent(Label).string = this.fiveTime + 's';

                if (!this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = true;
                }

                if (this.fiveTime <= 5) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + '';

                  if (!this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = true;
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = true;
                  }
                }
              }
            } else {
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false;
              clearInterval(this.fiveTimer);
              this.fiveTimer = null;
              this.fiveTime = 300;
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlTime(true);
            }
          }, 1000);
        } // 获取用户信息


        getUser() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.userData = JSON.parse(native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getUser", "()Ljava/lang/String;"));
            this.token = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getToken", "()Ljava/lang/String;");
            this.vpinitRes = JSON.parse(native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getVpinit", "()Ljava/lang/String;"));
            this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins);
            this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_node').getChildByName('mess_label').getComponent(Label).string = this.vpinitRes.price + i18n.t('cocos.bc');

            if (this.userData.vip > 0) {
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('vip_box').active = true;
            }

            this.getVpinit();
          }
        } // 获取上机信息


        getVpinit() {
          var res = this.vpinitRes;
          this.price = res.price;
          this.recordId = res.record._id;
          this.wsuuid = res.record.uuid;
          var PM = this.node.getChildByName('Main');
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score1 = res.record.channel_count[0];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score2 = res.record.channel_count[1];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score3 = res.record.channel_count[2];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score4 = res.record.channel_count[3];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score5 = res.record.channel_count[4];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score6 = res.record.channel_count[5];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score7 = res.record.channel_count[6];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score8 = res.record.channel_count[7];
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score9 = res.record.jp1;
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score10 = res.record.jp2;
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score11 = res.record.jp3;
          PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
            error: Error()
          }), maints) : maints).score12 = res.record.all;
          this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
            error: Error()
          }), gameCore) : gameCore).starting1 = res.record.channel_light[0];
          this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
            error: Error()
          }), gameCore) : gameCore).starting2 = res.record.channel_light[1];
          setTimeout(() => {
            this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
              error: Error()
            }), gameCore) : gameCore).changeChannel();
          }, 500);

          if (this.websocket == null) {
            this.websocket = new (_crd && socketApi === void 0 ? (_reportPossibleCrUseOfsocketApi({
              error: Error()
            }), socketApi) : socketApi)();
            this.wssalt = new (_crd && encrypt === void 0 ? (_reportPossibleCrUseOfencrypt({
              error: Error()
            }), encrypt) : encrypt)().generateUUID(this.wssaltLen);
            this.websocketFnc = new (_crd && socketFun === void 0 ? (_reportPossibleCrUseOfsocketFun({
              error: Error()
            }), socketFun) : socketFun)();
            this.Md5 = new (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
              error: Error()
            }), MD5) : MD5)();
            this.websocketControlInit(res.ws);
          }
        }

        websocketControlInit(url, isReConnect) {
          if (this.vpinitRes.salt) {
            var ts = Date.now();
            var signdata = this.Md5.md5("id=" + this.userData._id + "&uuid=" + this.wsuuid + "&ts=" + ts + "&type=3" + "&key=" + this.vpinitRes.salt);
            this.ws = new WebSocket(url + "?nonce=" + this.token + "&id=" + this.userData._id + "&uuid=" + this.wsuuid + "&type=3&ts=" + ts + "&sign=" + signdata + "&sl=" + this.wssaltLen);
          } else {
            this.ws = new WebSocket(url + "?uuid=" + this.wsuuid + "&sl=" + this.wssaltLen);
          }

          if (this.isConnecting) {
            return;
          }

          if (isReConnect) {
            this.websocket.websocket_resign(this.userData._id, this.userData.uid, this.userData.vip, this.token, this.wsuuid, this.wssalt, this.recordId, this.billId).then(res => {
              this.websocket.websocket_openListen(this.ws, res);
            });
          } else {
            this.websocket.websocket_sign(this.userData._id, this.userData.uid, this.userData.vip, this.token, this.wsuuid, this.wssalt, this.recordId).then(res => {
              this.websocket.websocket_openListen(this.ws, res);
            });
          }

          this.websocket.websocket_messageListen(this.ws, this.wsuuid, this.wssaltLen, res => {
            var PM = this.node.getChildByName('Main');
            var MC = PM.getChildByName('Canvas').getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
              error: Error()
            }), machine) : machine);
            var SP = this.node.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
              error: Error()
            }), spin) : spin);
            console.log('收到socket返回消息');
            console.log(JSON.stringify(res));

            if (res.hasOwnProperty('status') && res.status == 'failed') {
              if (res.code != 11004) {
                if (this.autoStatus && res.action != 4) {
                  this.autoStatus = false;
                  this.autoSwitch();
                }

                return;
              }
            } else {
              // 获取用户真实金币
              if (res.hasOwnProperty("user_coins")) {
                this.userCoins = res.user_coins;
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(res.user_coins);
              }

              if (res.action == 0) {
                if (isReConnect) {
                  // 断线重连
                  if (this.isReConnecting) {
                    this.no = res.no;
                    this.isDropMessageNotBack = false;
                    this.isDroped = true;
                    clearTimeout(this.reConnectTimer);
                    this.isReConnecting = false;
                    this.reCountNum = null;
                    this.isConnecting = true;
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                      error: Error()
                    }), popcontrol) : popcontrol).controlTips(false);

                    if (this.winning) {
                      if (this.autoTimer != null) {
                        this.autoCast();
                      }
                    }
                  }
                }
              } else if (res.action == 1) {
                this.no = res.no;
                this.isConnecting = true;
                this.billId = res.bill_id;
              } else if (res.action == 2) {
                this.isDroped = true;

                if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false;
                }

                if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = false;
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = false;
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + '';
                }

                this.fiveTime = 300;
                this.setVircoin();
                this.playMusic('music/coinDrop');
                this.isDropMessageNotBack = false;
                PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                  error: Error()
                }), maints) : maints).score9 = res.jp.jp1;
                PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                  error: Error()
                }), maints) : maints).score10 = res.jp.jp2;
                PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                  error: Error()
                }), maints) : maints).score11 = res.jp.jp3;
                PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                  error: Error()
                }), maints) : maints).score12 = res.jp.all;

                if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active = false;
                }
              } else if (res.action == 3) {
                if (this.channelCount == 0) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score1 = res.channel_count[0];
                } else if (this.channelCount == 1) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score2 = res.channel_count[1];
                } else if (this.channelCount == 2) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score3 = res.channel_count[2];
                } else if (this.channelCount == 3) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score4 = res.channel_count[3];
                } else if (this.channelCount == 4) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score5 = res.channel_count[4];
                } else if (this.channelCount == 5) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score6 = res.channel_count[5];
                } else if (this.channelCount == 6) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score7 = res.channel_count[6];
                } else if (this.channelCount == 7) {
                  PM.getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
                    error: Error()
                  }), maints) : maints).score8 = res.channel_count[7];
                }

                this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                  error: Error()
                }), gameCore) : gameCore).resertChannel();
                this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                  error: Error()
                }), gameCore) : gameCore).starting1 = res.channel_light[0];
                this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                  error: Error()
                }), gameCore) : gameCore).starting2 = res.channel_light[1];
                setTimeout(() => {
                  this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                    error: Error()
                  }), gameCore) : gameCore).changeChannel();
                }, 50);
              } else if (res.action == 4) {
                this.playMusic('music/spinrotMs');

                if (res.type == -1 || res.code == 11004) {
                  // 没奖
                  this.awardType = -1;
                  MC.onHandleClicked(8);
                } else {
                  if (this.winning) {
                    return;
                  }

                  if (this.autoStatus) {
                    this.autoStatus = false;
                    this.autoSwitch();
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(_crd && autoDropTs === void 0 ? (_reportPossibleCrUseOfautoDropTs({
                      error: Error()
                    }), autoDropTs) : autoDropTs).clearAutoStatus();
                  } // 5分倒计时关闭


                  if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false;
                  }

                  if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = false;
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = false;
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + '';
                  }

                  clearInterval(this.fiveTimer);
                  this.fiveTime = 300;
                  this.fiveTimer = null; // 出奖状态设置

                  this.winning = true;
                  this.zjCoins = res.prize.coins;
                  this.awardType = res.type;

                  if (MC.isRolling) {
                    this.allowed = true;
                  }

                  if (res.type == 0) {
                    // 连线奖
                    SP.lineType = res.prize.line_type;
                    SP.lineNum = res.prize.line_type.length;
                    SP.setprize(0); // 中连线奖播放一次连线声音

                    this.playMusic('music/lineMs');
                  } else if (res.type == 1) {
                    // 小玛丽
                    if (this.dropStatus == 3) {
                      this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_count').getComponent(_crd && dcountChange === void 0 ? (_reportPossibleCrUseOfdcountChange({
                        error: Error()
                      }), dcountChange) : dcountChange).changeDrop();
                    }

                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.zdcj');
                    var outnum = this.xmlOut[Math.floor(Math.random() * this.xmlOut.length)];
                    var xmlxz = res.prize.xmlArr;
                    xmlxz.push(outnum);
                    this.xmlcoinArr = xmlxz;
                    SP.setprize(1); // 先停止背景音乐再开启小玛丽背景音乐

                    this.playMusic('music/xmlMs');
                  } else if (res.type == 2) {
                    // 叠叠乐
                    if (this.dropStatus == 3) {
                      this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_count').getComponent(_crd && dcountChange === void 0 ? (_reportPossibleCrUseOfdcountChange({
                        error: Error()
                      }), dcountChange) : dcountChange).changeDrop();
                    }

                    this.ddlArr = JSON.parse(JSON.stringify(res.prize.ddl));
                    this.ddlycArr = JSON.parse(JSON.stringify(res.prize.ddl));
                    this.ddlscore = res.prize.coins;
                    SP.setprize(2); // 先停止背景音乐再开启叠叠乐背景音乐

                    this.playMusic('music/ddlMs');
                  } else if (res.type == 3) {
                    // jp1
                    SP.setprize(3); // 先停止背景音乐再开启jp1背景音乐

                    this.playMusic('music/jpNormal');
                  } else if (res.type == 4) {
                    // jp2
                    SP.setprize(4); // 先停止背景音乐再开启jp2背景音乐

                    this.playMusic('music/jpNormal');
                  } else if (res.type == 5) {
                    // jp3
                    SP.setprize(5); // 先停止背景音乐再开启jp3背景音乐

                    this.playMusic('music/jpNormal');
                  } else if (res.type == 6) {
                    // jpAll
                    SP.setprize(6); // 先停止背景音乐再开启jpall背景音乐

                    this.playMusic('music/jpAll');
                  }
                }
              } else if (res.action == 5) {
                PM.getChildByName('Canvas').getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
                  error: Error()
                }), jpScorets) : jpScorets).allScore = res.get_coins;
              } else if (res.action == 6) {
                this.activeClosed = true;

                if (this.getMessageTimer != null) {
                  clearInterval(this.getMessageTimer);
                }

                this.websocket.websocket_close(this.ws);

                if (this.isDroped) {
                  this.isDroped = false;
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getChildByName('settle_node').getChildByName('symbol_node').getChildByName('award_node').getComponent(_crd && awardCl === void 0 ? (_reportPossibleCrUseOfawardCl({
                    error: Error()
                  }), awardCl) : awardCl).freshData(PM.getChildByName('Canvas').getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
                    error: Error()
                  }), jpScorets) : jpScorets).allScore, res.prize, this.price);
                } else {
                  if (sys.os == sys.OS.ANDROID && sys.isNative) {
                    this.releaseAny();
                    this.node.active = false;
                    this.node.parent.getChildByName('GameOver').active = true;
                    setTimeout(() => {
                      sys.garbageCollect();
                      game.end();
                    }, 1500);
                  } else {
                    game.end();
                  }
                }
              }
            }
          });
          this.websocket.websocket_closeListen(this.ws, res => {
            if (!this.isReConnecting && !this.activeClosed) {
              if (this.autoStatus) {
                this.autoStatus = false;
                this.autoSwitch();
              }

              if (this.winning) {
                if (this.autoTimer != null) {
                  clearInterval(this.autoTimer);
                }
              }

              this.isReConnecting = true;
              this.isDroped = false;
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlTips(true);
              setTimeout(() => {
                this.tryConnect();
              }, 5000);
            }
          });
          this.websocket.websocket_errorListen(this.ws, res => {
            if (!this.isReConnecting) {
              if (this.autoStatus) {
                this.autoStatus = false;
                this.autoSwitch();
              }

              if (this.winning) {
                if (this.autoTimer != null) {
                  clearInterval(this.autoTimer);
                }
              }

              this.isReConnecting = true;
              this.isDroped = false;
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlTips(true);
              setTimeout(() => {
                this.tryConnect();
              }, 5000);
            }
          });
        }

        tryConnect() {
          this.isConnecting = false;
          setTimeout(() => {
            this.reConnect();
          }, 1000);
          this.reConnectTimer = setTimeout(() => {
            this.tryConnect();
          }, 3500);
        }

        // 触摸结束
        touchEnd() {
          if (!this.isConnecting) {
            return;
          }

          if (this.autoStatus) {
            return;
          }

          if (this.winning) {
            return;
          }

          if (this.dropStatus == 1) {
            if (Date.now() - this.intervalEnd <= 260) {
              return;
            }

            this.intervalEnd = Date.now();
            this.ws_fnc_dropping();
          } else if (this.dropStatus == 3) {
            if (this.dropThreeCount == 0) {
              this.dropThreeCount += 3;

              if (this.dropThree == null) {
                this.dropThree = setInterval(() => {
                  this.dropThreeCount--;

                  if (this.dropThreeCount < 1) {
                    clearInterval(this.dropThree);
                    this.dropThree = null;
                  }

                  this.ws_fnc_dropping();
                }, 333);
              }
            }
          }
        } // 设置虚拟金币


        setVircoin() {
          var nodePar = this.node.getChildByName('coinpool').children;

          if (nodePar.length >= 1 && 49.15 - nodePar[nodePar.length - 1].position.x <= 2.44 && 94.93 - nodePar[nodePar.length - 1].position.y <= 2.4) {
            console.log('卡币了');
            (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
              error: Error()
            }), poolManager) : poolManager).instance.putNode(nodePar[nodePar.length - 1]);
            return;
          }

          var coin = (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.getNode(this.preCoin, this.ndCoinParent);
          coin.setPosition(49.15, 94.93, 26.3);
          coin.setRotationFromEuler(90, 0, 0);
          coin.getComponent(RigidBody).useCCD = true;
          coin.getComponent(RigidBody).setLinearVelocity(new Vec3(-50, 0, 0));
        } // 自动投币


        autoCast() {
          var lx = null;
          var gs = null;
          var jp = null;

          if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow')) {
            lx = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
              error: Error()
            }), lxts) : lxts);
          }

          if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore')) {
            gs = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
              error: Error()
            }), jpScorets) : jpScorets);
          }

          if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim')) {
            jp = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(_crd && jpts === void 0 ? (_reportPossibleCrUseOfjpts({
              error: Error()
            }), jpts) : jpts);
          }

          this.autoTimer = setInterval(() => {
            if (this.autoNumber >= this.autoTarget) {
              this.closeAuto();
            } else {
              this.setVircoin();
              this.autoNumber += 1;

              if (this.awardType == 0) {
                // 连线奖出币总数量
                lx.score1 = lx.score1 - 1;
                gs.getScore = gs.getScore - 1;
              } else if (this.awardType == 1) {
                // 小玛丽出币总数量
                lx.score1 = lx.score1 - 1;
                gs.getScore = gs.getScore - 1;
              } else if (this.awardType == 2) {
                // 叠叠乐出币总数量
                lx.score1 = lx.score1 - 1;
                gs.getScore = gs.getScore - 1;
              } else if (this.awardType == 3) {
                // jp1出币总数量
                jp.score1 = jp.score1 - 1;
              } else if (this.awardType == 4) {
                // jp2出币总数量
                jp.score1 = jp.score1 - 1;
              } else if (this.awardType == 5) {
                // jp3出币总数量
                jp.score1 = jp.score1 - 1;
              } else if (this.awardType == 6) {
                // jpAll出币总数量
                jp.score1 = jp.score1 - 1;
              }
            }
          }, 260);
        }

        closeAuto() {
          var Can = this.node.getChildByName('Main').getChildByName('Canvas');
          var domachine = Can.getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
            error: Error()
          }), machine) : machine);
          var spinDm = this.node.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(_crd && spin === void 0 ? (_reportPossibleCrUseOfspin({
            error: Error()
          }), spin) : spin);
          clearInterval(this.autoTimer);
          this.autoTimer = null;
          this.autoNumber = 0;
          this.autoTarget = 0; // 普通连线奖处理

          if (Can.getChildByName('lxshow') != null && Can.getChildByName('lxshow').active) {
            Can.getChildByName('lxshow').active = false;
          } // 红线处理


          if (Can.getChildByName('liaisonLine').getChildByName('lineitem') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem').active = false;
          }

          if (Can.getChildByName('liaisonLine').getChildByName('lineitem1') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem1').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem1').active = false;
          }

          if (Can.getChildByName('liaisonLine').getChildByName('lineitem2') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem2').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem2').active = false;
          }

          if (Can.getChildByName('liaisonLine').getChildByName('lineitem3') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem3').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem3').active = false;
          } // jp1、2、3、all处理


          if (Can.getChildByName('jpAnim') != null && Can.getChildByName('jpAnim').active) {
            Can.getChildByName('jpAnim').active = false;
          }

          if (spinDm.lineNum == 1) {
            domachine.lineFlash(domachine.randomicon, false);
          } else if (spinDm.lineNum == 2) {
            domachine.lineFlash(domachine.randomicon[0], false);
            domachine.lineFlash(domachine.randomicon[1], false);
          } else if (spinDm.lineNum == 3) {
            domachine.lineFlash(domachine.randomicon[0], false);
            domachine.lineFlash(domachine.randomicon[1], false);
            domachine.lineFlash(domachine.randomicon[2], false);
          }

          if (this.ddlSwitch) {
            var ddlgame = Can.getChildByName('ddlgame');
            this.ddlSwitch = false;
            this.ddlauto = false;
            this.ddltimer = null;
            this.ddlOne = null;
            this.ddlscore = 0;
            ddlgame.getChildByName('ddltime').active = false;
            ddlgame.getChildByName('ddltotal').active = false;
            ddlgame.getComponent(_crd && ddlts === void 0 ? (_reportPossibleCrUseOfddlts({
              error: Error()
            }), ddlts) : ddlts).clearAd();
            ddlgame.active = false;
            this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
              error: Error()
            }), gameCore) : gameCore).noShining();
            setTimeout(() => {
              this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                error: Error()
              }), gameCore) : gameCore).agShining();
            }, 50);
          }

          if (this.xmlSwitch) {
            var xmlgame = Can.getChildByName('xmlgame');
            this.xmlSwitch = false;
            this.xmlnum = 0;
            xmlgame.getChildByName('xmlTime').active = false;
            xmlgame.getChildByName('xmlAnim').active = false;
            xmlgame.getChildByName('xmlAnim').getComponent(_crd && xmlAnim === void 0 ? (_reportPossibleCrUseOfxmlAnim({
              error: Error()
            }), xmlAnim) : xmlAnim).recoverAll();
            xmlgame.getComponent(_crd && xmlts === void 0 ? (_reportPossibleCrUseOfxmlts({
              error: Error()
            }), xmlts) : xmlts).clearxml();
            xmlgame.active = false;
            this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
              error: Error()
            }), gameCore) : gameCore).noShining();
            setTimeout(() => {
              this.node.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
                error: Error()
              }), gameCore) : gameCore).agShining();
            }, 50);
          }

          domachine.doRestore();
          domachine.spinSwitch(true);
          domachine.randomicon = null;
          domachine.randomsub = null;

          if (this.awardType == 3) {
            this.node.getChildByName('Main').getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
              error: Error()
            }), maints) : maints).score9 = 500;
          } else if (this.awardType == 4) {
            this.node.getChildByName('Main').getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
              error: Error()
            }), maints) : maints).score10 = 1000;
          } else if (this.awardType == 5) {
            this.node.getChildByName('Main').getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
              error: Error()
            }), maints) : maints).score11 = 2000;
          } else if (this.awardType == 6) {
            this.node.getChildByName('Main').getComponent(_crd && maints === void 0 ? (_reportPossibleCrUseOfmaints({
              error: Error()
            }), maints) : maints).score12 = 3000;
          } // 音乐处理


          if (this.awardType !== 0) {
            if (this.soundStatus) {
              this.soundApi.stop();
              this.playMusic('music/bgMusic');
            }
          }

          this.awardType = -1;
          this.winning = false;
          spinDm.lineNum = null;
          spinDm.lineType = null; // 中奖结束重新开启5分倒计时

          this.openFive();
        } // 小玛丽投币


        xmltouchEnd() {
          if (!this.xmlSwitch) {
            return;
          }

          if (this.xmlnum >= 1) {
            // 小玛丽只允许点击一次
            return;
          }

          if (Date.now() - this.xmltime <= 260) {
            return;
          }

          this.xmltime = Date.now();
          this.xmlnum += 1;
          var xmlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('xmlgame').getComponent(_crd && xmlts === void 0 ? (_reportPossibleCrUseOfxmlts({
            error: Error()
          }), xmlts) : xmlts);
          xmlgame.toRoll(xmlgame.startIndex);
          setTimeout(() => {
            xmlgame.resultarr = this.xmlcoinArr;
            xmlgame.stopPos = xmlgame.resultarr[0];
            var isover = setInterval(() => {
              if (xmlgame.isover) {
                clearInterval(isover);
                this.autoTarget = this.zjCoins; // 当前获奖的全部金币数量

                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
                  error: Error()
                }), jpScorets) : jpScorets).getScore = this.zjCoins;
                this.autoCast();
              }
            }, 1000);
          }, 3000);
        } // 叠叠乐投币


        ddltouchEnd() {
          var ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(_crd && ddlts === void 0 ? (_reportPossibleCrUseOfddlts({
            error: Error()
          }), ddlts) : ddlts);
          var domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
            error: Error()
          }), machine) : machine);

          if (!this.ddlSwitch) {
            return;
          }

          if (this.ddlauto) {
            return;
          }

          if (Date.now() - this.ddltime <= 560) {
            return;
          }

          this.ddltime = Date.now();

          if (ddlgame.awardTotal > 0) {
            this.ddlOnce();
          } else {
            this.ddlauto = true;
            clearInterval(this.ddltimer);
            clearInterval(this.ddlOne);

            if (this.autoTimer == null) {
              if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset') != null) {
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0';
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0';
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0';
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = '';
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = true;
              } else {
                // 生成结算分数界面
                var ddlset = instantiate(domachine.ddlsetItem);
                ddlset.setPosition(-345.051, -597.314, 26.08);
                this.node.getChildByName('Main').getChildByName('Canvas').addChild(ddlset);
              } // 结算ddl总分数


              this.getddlsort();
            }
          }
        } // 自动投币


        autoSwitch(spchange) {
          if (!this.autoStatus) {
            this.autoSpeed = 1;

            if (this.autoftm != null) {
              clearInterval(this.autoftm);
            }

            if (this.autostm != null) {
              clearInterval(this.autostm);
            }

            if (this.autottm != null) {
              clearInterval(this.autottm);
            }
          } else {
            if (spchange != null) {
              if (spchange == 1) {
                if (this.autottm != null) {
                  clearInterval(this.autottm);
                }

                this.autoftm = setInterval(() => {
                  this.ws_fnc_dropping();
                }, 1000);
              } else if (spchange == 2) {
                if (this.autoftm != null) {
                  clearInterval(this.autoftm);
                }

                this.autostm = setInterval(() => {
                  this.ws_fnc_dropping();
                }, 500);
              } else if (spchange == 3) {
                if (this.autostm != null) {
                  clearInterval(this.autostm);
                }

                this.autottm = setInterval(() => {
                  this.ws_fnc_dropping();
                }, 333);
              }
            } else {
              // 自动投币每次打开必定是一秒一币状态
              this.autoftm = setInterval(() => {
                this.ws_fnc_dropping();
              }, 1000);
            }
          }
        } // 下机按钮


        closeOut() {
          if (this.isConnecting) {
            // 出奖中的话关闭出奖
            if (this.autoTimer != null) {
              this.closeAuto();
            }

            if (this.autoStatus) {
              this.autoStatus = false;
              this.autoSwitch();
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(_crd && autoDropTs === void 0 ? (_reportPossibleCrUseOfautoDropTs({
                error: Error()
              }), autoDropTs) : autoDropTs).clearAutoStatus();
            } // 清除倒计时


            clearInterval(this.fiveTimer);
            var sendData = this.websocketFnc.ws_userout();
            this.websocket.websocket_sendMessage(sendData, this.ws, this.wsuuid, this.wssalt);

            if (this.getMessageTimer == null) {
              this.getMessageTimer = setInterval(() => {
                if (this.getMessageCount < 4 && !this.getMessage) {
                  this.getMessageCount += 1;
                } else if (this.getMessageCount >= 4 && !this.getMessage) {
                  clearInterval(this.getMessageTimer);
                  this.getMessageCount = 0;
                  this.getMessageTimer = null;
                  this.getMessage = false;
                  this.activeClosed = true;

                  if (sys.os == sys.OS.ANDROID && sys.isNative) {
                    this.releaseAny();
                    this.node.active = false;
                    this.node.parent.getChildByName('GameOver').active = true;
                    setTimeout(() => {
                      sys.garbageCollect();
                      game.end();
                    }, 1500);
                  } else {
                    game.end();
                  }
                }
              }, 1000);
            }
          } else {
            this.activeClosed = true;

            if (sys.os == sys.OS.ANDROID && sys.isNative) {
              this.releaseAny();
              this.node.active = false;
              this.node.parent.getChildByName('GameOver').active = true;
              setTimeout(() => {
                sys.garbageCollect();
                game.end();
              }, 1500);
            } else {
              game.end();
            }
          }
        } // 发送投币信息


        ws_fnc_dropping() {
          if (this.isDropMessageNotBack) {
            return;
          }

          if (this.userCoins < this.price) {
            if (this.autoStatus) {
              this.autoStatus = false;
              this.autoSwitch();
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(_crd && autoDropTs === void 0 ? (_reportPossibleCrUseOfautoDropTs({
                error: Error()
              }), autoDropTs) : autoDropTs).clearAutoStatus();
            }

            if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getChildByName('balance_node').active == false) {
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlBalance(true);
            }

            return;
          }

          var sendData = this.websocketFnc.ws_dropcoin();
          this.isDropMessageNotBack = true;
          this.websocket.websocket_sendMessage(sendData, this.ws, this.wsuuid, this.wssalt);
        }

        getddlsort() {
          var domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
            error: Error()
          }), machine) : machine);
          var obj_key = [];
          var obj_value = [];

          for (var key in this.ddlycArr) {
            obj_key.push(key);
            obj_value.push(this.ddlycArr[key]);
          }

          var ddllength = Object.keys(this.ddlycArr).length;
          var ddlsess = setInterval(() => {
            if (ddllength > 0) {
              this.returnddlSet(obj_key[Object.keys(this.ddlycArr).length - ddllength], obj_value[Object.keys(this.ddlycArr).length - ddllength]);
            } else {
              clearInterval(ddlsess);
              this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = false;
              setTimeout(() => {
                if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow') != null) {
                  this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').active = true;
                } else {
                  var lxshow = instantiate(domachine.lxItem);
                  lxshow.setPosition(-345.051, -597.314, 26.08);
                  this.node.getChildByName('Main').getChildByName('Canvas').addChild(lxshow);
                }

                this.autoTarget = this.ddlscore;
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                  error: Error()
                }), lxts) : lxts).score = this.ddlscore;
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(_crd && lxts === void 0 ? (_reportPossibleCrUseOflxts({
                  error: Error()
                }), lxts) : lxts).score1 = this.ddlscore; // 当前获奖的全部金币数量

                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(_crd && jpScorets === void 0 ? (_reportPossibleCrUseOfjpScorets({
                  error: Error()
                }), jpScorets) : jpScorets).getScore = this.zjCoins;
                setTimeout(() => {
                  this.autoCast();
                }, 50);
              }, 250);
            }

            ddllength--;
          }, 500);
        } // 叠叠乐计算展示


        returnddlSet(key, val) {
          var score = null;
          var ddlsetA = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset');

          if (key == '0') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '1') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '2') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '3') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '4') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '5') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '6') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          } else if (key == '7') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string;

            if (val == 1) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string);
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '1';
            } else if (val == 2) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 3;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '3';
            } else if (val == 3) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 6;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '6';
            } else if (val == 4) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 10;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '10';
            } else if (val == 5) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 20;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '20';
            } else if (val == 6) {
              score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 30;
              ddlsetA.getChildByName('Label1').getComponent(Label).string = '30';
            }
          }

          ddlsetA.getChildByName('Label2').getComponent(Label).string = score.toString();
          ddlsetA.getChildByName('Label3').getComponent(Label).string = score + Number(ddlsetA.getChildByName('Label3').getComponent(Label).string);
        } // 叠叠乐单次掉落


        ddlOnce() {
          var pKey = Object.keys(this.ddlArr);
          var mr = Math.floor(Math.random() * pKey.length);
          var ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(_crd && ddlts === void 0 ? (_reportPossibleCrUseOfddlts({
            error: Error()
          }), ddlts) : ddlts);

          if (this.ddlArr[pKey[mr]] > 0 && this.ddlArr[pKey[mr]] != 1) {
            ddlgame.addAward(Number(pKey[mr]));
            this.ddlArr[pKey[mr]]--;
          } else if (this.ddlArr[pKey[mr]] == 1) {
            ddlgame.addAward(Number(pKey[mr]));
            delete this.ddlArr[pKey[mr]];
          }
        } // 金额过滤


        fillter(val) {
          var num;

          if (val > 999999) {
            num = Math.floor(val / 10000) + '万';
          } else {
            num = Math.floor(val);
          }

          return num.toString();
        } // 播放音乐


        playMusic(musicType) {
          if (!this.soundStatus) {
            return;
          } // 注册一个全局音乐控制类


          if (this.soundApi == null) {
            this.soundApi = new (_crd && AudioMgr === void 0 ? (_reportPossibleCrUseOfAudioMgr({
              error: Error()
            }), AudioMgr) : AudioMgr)();
          }

          if (musicType == 'music/bgMusic') {
            this.soundApi.play(musicType, 1, true);
          } else if (musicType == 'music/coinDrop') {
            this.soundApi.playOneShot(musicType, 1);
          } else if (musicType == 'music/spinrotMs') {
            this.soundApi.playOneShot(musicType, 1);
          } else if (musicType == 'music/lineMs') {
            this.soundApi.playOneShot(musicType, 1);
          } else if (musicType == 'music/xmlMs') {
            this.soundApi.stop();
            this.soundApi.play(musicType, 1, true);
          } else if (musicType == 'music/ddlMs') {
            this.soundApi.stop();
            this.soundApi.play(musicType, 1, true);
          } else if (musicType == 'music/jpNormal') {
            this.soundApi.stop();
            this.soundApi.play(musicType, 1, true);
          } else if (musicType == 'music/jpAll') {
            this.soundApi.stop();
            this.soundApi.play(musicType, 1, true);
          } else if (musicType == 'music/awardMs') {
            this.soundApi.playOneShot(musicType, 1);
          } else if (musicType == 'music/spinMs') {
            this.soundApi.playOneShot(musicType, 1);
          }
        } // 关闭重连错误离开房间


        closewlErr() {
          clearInterval(this.fiveTimer);
          this.activeClosed = true;
          this.websocket.websocket_close(this.ws);
          this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol).controlError(false);

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.releaseAny();
            this.node.active = false;
            this.node.parent.getChildByName('GameOver').active = true;
            setTimeout(() => {
              sys.garbageCollect();
              game.end();
            }, 1500);
          } else {
            game.end();
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "preCoin", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ndCoinParent", [_dec3], {
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
//# sourceMappingURL=b1ded8fd8651ddee7343e502efa81309c22b5b59.js.map