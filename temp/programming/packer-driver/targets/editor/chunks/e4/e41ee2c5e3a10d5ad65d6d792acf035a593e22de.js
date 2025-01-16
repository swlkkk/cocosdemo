System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, game, sys, _dec, _class, _crd, ccclass, property, coinCreate;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      game = _cc.game;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00325j4xMhPsoTPNm0H86r1", "coinCreate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'input', 'Input', 'game', 'Game', 'Vec3', 'RigidBody', 'instantiate', 'Label', 'sys', 'native', 'director']);

      ({
        ccclass,
        property
      } = _decorator); // import { poolManager } from './poolManager';
      // import { gameCore } from './gameCore';
      // import { machine } from './machine';
      // import { ddlts } from './ddlts';
      // import { xmlts } from './xmlts';
      // import { lxts } from './lxts';
      // import { jpts } from './jpts';
      // import { xmlAnim } from './xmlAnim';
      // import { socketApi } from './Socket/socketApi';
      // import { apiRequest } from './Api/apiRequest';
      // import { spin } from './spin';
      // import { maints } from './maints';
      // import { jpScorets } from './jpScorets';
      // import { encrypt } from './Api/encrypt';
      // import { socketFun } from './Socket/socketFun';
      // import { MD5 } from './Api/MD5';
      // import { awardCl } from './awardCl';
      // import * as i18n from 'db://i18n/LanguageData';
      // import { popcontrol } from './popcontrol';
      // import { dcountChange } from './dcountChange';
      // import { autoDropTs } from './autoDropTs';
      // import { AudioMgr } from './AudioMgr'

      _export("coinCreate", coinCreate = (_dec = ccclass('coinCreate'), _dec(_class = class coinCreate extends Component {
        // @property(Prefab)
        // preCoin: Prefab = null; //金币预制体
        // @property(Node)
        // ndCoinParent: Node = null!; //金币父节点
        // intervalEnd: number = 0
        // // socket变量
        // ws = null;
        // websocket = null;
        // winning = false;
        // autoTimer = null;
        // autoNumber = 0;
        // autoTarget = 0;
        // awardType = -1; // 当前奖项(0:连线奖; 1:小玛丽; 2:叠叠乐; 3:jp1; 4:jp2; 5:jp3; 6:全盘奖)
        // xmlSwitch = false; // 小玛丽特殊开关
        // xmltime = 0; // 小玛丽投币时间
        // xmlnum = 0; // 小玛丽点击次数
        // xmltimer = null; // 小玛丽60s倒计时
        // ddlSwitch = false; // 叠叠乐特殊开关
        // ddltime = 0; // 叠叠乐投币时间
        // ddltimer = null; // 叠叠乐倒计时
        // ddlOne = null;
        // ddlauto = false;
        // // 中奖金币
        // zjCoins = null
        // // ddl总中奖金额
        // ddlscore = 0
        // ddlArr = {}
        // ddlycArr = {}
        // // 小玛丽数组
        // xmlcoinArr = null
        // xmlOut = [0, 6, 10, 16]
        // // 上机信息
        // userId = null
        // billId = null
        // recordId = null
        // channelCount = null
        // // 防止卡币
        // isDropMessageNotBack = false
        // // 断线重连
        // isConnecting = false
        // isReConnecting = false
        // reConnectTimer = null
        // reCountNum = null
        // // 用户金币
        // userCoins = null
        // // 用户信息
        // userData = null
        // token = null
        // // wsuuid
        // wsuuid = null;
        // wssaltLen = Math.round(8 * Math.random() + 8)
        // wssalt = null;
        // // 上机后命令
        // websocketFnc = null;
        // // 特殊处理
        // allowed = false
        // no = 0
        // price = 0
        // // 上级状态
        // isDroped = false
        // vpinitRes = null
        // Md5 = null
        // // 当前投币次数状态
        // dropStatus = 1
        // // 一次3币计时器
        // dropThree = null
        // dropThreeCount = 0
        // // 自动投币
        // autoStatus = false
        // autoCount = 1
        // autoSpeed = 1
        // autoTips = false
        // autoftm = null
        // autostm = null
        // autottm = null
        // // 进入房间就开启5分钟倒计时
        // fiveTime = 300
        // fiveTimer = null
        // // 全局声音控制
        // soundApi = null
        // soundStatus: boolean = false
        // activeClosed = false
        // soLink = false
        // Api = null
        onLoad() {}

        start() {
          console.log('coincreate这个地方初始化'); // if (sys.os == sys.OS.ANDROID && sys.isNative) {
          //     // 获取声音
          //     let a = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getSound", "()Z");
          //     this.soundStatus = true
          //     if (this.soundStatus) {
          //         this.playMusic('music/bgMusic')
          //     } else {
          //         this.soundStatus = false
          //     }
          //     native.bridge.onNative = (arg0: string, arg1: string): void => {
          //         if (arg0 == 'cocos_update_user') {
          //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(popcontrol).controlCharge(false)
          //             this.userData = JSON.parse(arg1)
          //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('vip_box').getChildByName('Label').getComponent(Label).string = this.userData.vip
          //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins)
          //         }
          //         return;
          //     }
          // }
          // window.addEventListener('offline', () => {
          //     if (!this.isReConnecting) {
          //         this.isDropMessageNotBack = false
          //         if (this.autoStatus) {
          //             this.autoStatus = false
          //             this.autoSwitch()
          //         }
          //         if (this.winning) {
          //             if (this.autoTimer != null) {
          //                 clearInterval(this.autoTimer)
          //             }
          //         }
          //         this.isReConnecting = true
          //         setTimeout(() => {
          //             this.tryConnect();
          //         }, 5000);
          //     }
          // });
          // // /* 正常投币 */
          // input.on(Input.EventType.TOUCH_END, this.touchEnd, this)
          // // /* 小玛丽 */
          // input.on(Input.EventType.TOUCH_END, this.xmltouchEnd, this)
          // // /* 叠叠乐 */
          // input.on(Input.EventType.TOUCH_END, this.ddltouchEnd, this)
          // game.on(Game.EVENT_HIDE, () => {
          //     // 用户在自动投币就停止
          //     if (this.autoStatus) {
          //         this.autoStatus = false
          //         this.autoSwitch()
          //     }
          //     // 进入后台处于中奖出币状态
          //     if (this.winning) {
          //         if (this.autoTimer != null) {
          //             clearInterval(this.autoTimer)
          //         }
          //     }
          //     game.pause();
          // })
          // game.on(Game.EVENT_SHOW, () => {
          //     setTimeout(() => {
          //         game.resume();
          //         // 从后台返回处于中奖出币状态
          //         if (this.winning) {
          //             if (this.autoTimer != null && !this.isReConnecting) {
          //                 this.autoCast()
          //             }
          //         }
          //     }, 500);
          // }, this);
          // this.getUser()
          // this.openFive()
          // setTimeout(() => {
          //     if (this.node && this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active) {
          //         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active = false
          //     }
          // }, 3000);
        }

        releaseAny() {// console.log('这些清除');
          // input.off(Input.EventType.TOUCH_END, this.touchEnd, this)
          // input.off(Input.EventType.TOUCH_END, this.xmltouchEnd, this)
          // input.off(Input.EventType.TOUCH_END, this.ddltouchEnd, this)
          // game.off(Game.EVENT_HIDE)
          // game.off(Game.EVENT_SHOW)
          // if (this.soundApi != null) {
          //     console.log('声音组件卸载');
          //     this.soundApi.stop()
          //     this.node.parent.getChildByName('__audioMgr__').destroy()
          // }
        } // openFive() {
        //     this.fiveTimer = setInterval(() => {
        //         if (this.fiveTime > 1) {
        //             this.fiveTime = this.fiveTime - 1
        //             if (this.fiveTime <= 60) {
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('down_count').getComponent(Label).string = this.fiveTime + 's'
        //                 if (!this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = true
        //                 }
        //                 if (this.fiveTime <= 5) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + ''
        //                     if (!this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = true
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = true
        //                     }
        //                 }
        //             }
        //         } else {
        //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false
        //             clearInterval(this.fiveTimer)
        //             this.fiveTimer = null
        //             this.fiveTime = 300
        //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(popcontrol).controlTime(true)
        //         }
        //     }, 1000)
        // }
        // // 获取用户信息
        // getUser() {
        //     const body = {
        //         mobile: '11011110022',
        //         vericode: '123456',
        //     }
        //     if (this.Api == null) {
        //         this.Api = new apiRequest()
        //         this.Api.post('user/loginByVericodeForWeb', body,
        //             res => {
        //                 this.userData = res.user;
        //                 this.token = res.token;
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('vip_box').getChildByName('Label').getComponent(Label).string = this.userData.vip
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins)
        //                 this.Api.post('vp/init', { token: this.token, mode_id: '666277af914d731376793a6c' },
        //                     resvp => {
        //                         this.vpinitRes = resvp
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_node').getChildByName('mess_label').getComponent(Label).string = this.vpinitRes.price + i18n.t('cocos.bc')
        //                         this.getVpinit()
        //                     }, resvp => { },
        //                 );
        //             }, res => { },
        //         );
        //     }   
        //     // if (sys.os == sys.OS.ANDROID && sys.isNative) {
        //     //     this.userData = JSON.parse(native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getUser", "()Ljava/lang/String;"));
        //     //     this.token = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getToken", "()Ljava/lang/String;");
        //     //     this.vpinitRes = JSON.parse(native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getVpinit", "()Ljava/lang/String;"));
        //     //     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('vip_box').getChildByName('Label').getComponent(Label).string = this.userData.vip
        //     //     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins)
        //     //     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_node').getChildByName('mess_label').getComponent(Label).string = this.vpinitRes.price + i18n.t('cocos.bc')
        //     //     let tag = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getTag", "()I");
        //     //     if (tag == 1) {
        //     //         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('room_style').getChildByName('Label').getComponent(Label).string = i18n.t('cocos.cjc')
        //     //     } else if (tag == 2) {
        //     //         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('room_style').getChildByName('Label').getComponent(Label).string = i18n.t('cocos.zjc')
        //     //     } else {
        //     //         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('room_style').getChildByName('Label').getComponent(Label).string = i18n.t('cocos.gjc')
        //     //     }
        //     //     this.getVpinit()
        //     // } else {
        //     //     const body = {
        //     //         mobile: '11011110022',
        //     //         vericode: '123456',
        //     //     }
        //     //     if (this.Api == null) {
        //     //         this.Api = new apiRequest()
        //     //         this.Api.post('user/loginByVericodeForWeb', body,
        //     //             res => {
        //     //                 this.userData = res.user;
        //     //                 this.token = res.token;
        //     //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('avatarBox').getChildByName('vip_box').getChildByName('Label').getComponent(Label).string = this.userData.vip
        //     //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(this.userData.coins)
        //     //                 this.Api.post('vp/init', { token: this.token, mode_id: '666277af914d731376793a6c' },
        //     //                     resvp => {
        //     //                         this.vpinitRes = resvp
        //     //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_node').getChildByName('mess_label').getComponent(Label).string = this.vpinitRes.price + i18n.t('cocos.bc')
        //     //                         this.getVpinit()
        //     //                     }, resvp => { },
        //     //                 );
        //     //             }, res => { },
        //     //         );
        //     //     }
        //     // }
        // }
        // // 获取上机信息
        // getVpinit() {
        //     var res = this.vpinitRes
        //     this.price = res.price
        //     this.recordId = res.record._id
        //     this.wsuuid = res.record.uuid
        //     let PM = this.node.getChildByName('Main')
        //     PM.getComponent(maints).score1 = res.record.channel_count[0]
        //     PM.getComponent(maints).score2 = res.record.channel_count[1]
        //     PM.getComponent(maints).score3 = res.record.channel_count[2]
        //     PM.getComponent(maints).score4 = res.record.channel_count[3]
        //     PM.getComponent(maints).score5 = res.record.channel_count[4]
        //     PM.getComponent(maints).score6 = res.record.channel_count[5]
        //     PM.getComponent(maints).score7 = res.record.channel_count[6]
        //     PM.getComponent(maints).score8 = res.record.channel_count[7]
        //     PM.getComponent(maints).score9 = res.record.jp1
        //     PM.getComponent(maints).score10 = res.record.jp2
        //     PM.getComponent(maints).score11 = res.record.jp3
        //     PM.getComponent(maints).score12 = res.record.all
        //     this.node.getComponent(gameCore).starting1 = res.record.channel_light[0]
        //     this.node.getComponent(gameCore).starting2 = res.record.channel_light[1]
        //     setTimeout(() => {
        //         this.node.getComponent(gameCore).changeChannel()
        //     }, 500);
        //     if (this.websocket == null) {
        //         this.websocket = new socketApi();
        //         this.wssalt = new encrypt().generateUUID(this.wssaltLen)
        //         this.websocketFnc = new socketFun()
        //         this.Md5 = new MD5()
        //         this.websocketControlInit(res.ws)
        //     }
        // }
        // websocketControlInit(url: string, isReConnect?: boolean) {
        //     if (this.vpinitRes.salt) {
        //         let ts = Date.now()
        //         let signdata = this.Md5.md5("id=" + this.userData._id + "&uuid=" + this.wsuuid + "&ts=" + ts + "&type=3" + "&key=" + this.vpinitRes.salt)
        //         this.ws = new WebSocket(`${url}?nonce=${this.token}&id=${this.userData._id}&uuid=${this.wsuuid}&type=3&ts=${ts}&sign=${signdata}&sl=${this.wssaltLen}`);
        //     } else {
        //         this.ws = new WebSocket(`${url}?uuid=${this.wsuuid}&sl=${this.wssaltLen}`);
        //     }
        //     if (this.isConnecting) {
        //         return;
        //     }
        //     if (isReConnect) {
        //         this.websocket.websocket_resign(
        //             this.userData._id,
        //             this.userData.uid,
        //             this.userData.vip,
        //             this.token,
        //             this.wsuuid,
        //             this.wssalt,
        //             this.recordId,
        //             this.billId,
        //         ).then((res) => {
        //             this.websocket.websocket_openListen(this.ws, res)
        //         })
        //     } else {
        //         this.websocket.websocket_sign(
        //             this.userData._id,
        //             this.userData.uid,
        //             this.userData.vip,
        //             this.token,
        //             this.wsuuid,
        //             this.wssalt,
        //             this.recordId,
        //         ).then((res) => {
        //             this.websocket.websocket_openListen(this.ws, res)
        //         })
        //     }
        //     this.websocket.websocket_messageListen(this.ws, this.wsuuid, this.wssaltLen, res => {
        //         let PM = this.node.getChildByName('Main')
        //         let MC = PM.getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        //         let SP = this.node.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
        //         console.log('收到socket返回消息');
        //         console.log(JSON.stringify(res));
        //         if (res.hasOwnProperty('status') && res.status == 'failed' && res.code != 11004) {
        //             if (this.autoStatus && res.action != 4) {
        //                 this.autoStatus = false
        //                 this.autoSwitch()
        //             }
        //             return
        //         } else {
        //             // 获取用户真实金币
        //             if (res.hasOwnProperty("user_coins")) {
        //                 this.userCoins = res.user_coins
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('user_property').getChildByName('click_box').getChildByName('coin_label').getComponent(Label).string = this.fillter(res.user_coins)
        //             }
        //             if (res.action == 0) {
        //                 if (isReConnect) {
        //                     // 断线重连
        //                     if (this.isReConnecting) {
        //                         this.no = res.no
        //                         this.isDropMessageNotBack = false
        //                         this.isDroped = true
        //                         clearTimeout(this.reConnectTimer);
        //                         this.isReConnecting = false;
        //                         if (this.winning) {
        //                             if (this.autoTimer != null) {
        //                                 this.autoCast()
        //                             }
        //                         }
        //                     }
        //                 }
        //             } else if (res.action == 1) {
        //                 this.no = res.no
        //                 this.isConnecting = true
        //                 this.billId = res.bill_id
        //                 this.soLink = true
        //             } else if (res.action == 2) {
        //                 this.isDroped = true
        //                 if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false
        //                 }
        //                 if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = false
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = false
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + ''
        //                 }
        //                 this.fiveTime = 300
        //                 this.setVircoin();
        //                 this.playMusic('music/coinDrop')
        //                 this.isDropMessageNotBack = false;
        //                 PM.getComponent(maints).score9 = res.jp.jp1
        //                 PM.getComponent(maints).score10 = res.jp.jp2
        //                 PM.getComponent(maints).score11 = res.jp.jp3
        //                 PM.getComponent(maints).score12 = res.jp.all
        //                 if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('kb_node').active = false
        //                 }
        //             } else if (res.action == 3) {
        //                 if (this.channelCount == 0) {
        //                     PM.getComponent(maints).score1 = res.channel_count[0]
        //                 } else if (this.channelCount == 1) {
        //                     PM.getComponent(maints).score2 = res.channel_count[1]
        //                 } else if (this.channelCount == 2) {
        //                     PM.getComponent(maints).score3 = res.channel_count[2]
        //                 } else if (this.channelCount == 3) {
        //                     PM.getComponent(maints).score4 = res.channel_count[3]
        //                 } else if (this.channelCount == 4) {
        //                     PM.getComponent(maints).score5 = res.channel_count[4]
        //                 } else if (this.channelCount == 5) {
        //                     PM.getComponent(maints).score6 = res.channel_count[5]
        //                 } else if (this.channelCount == 6) {
        //                     PM.getComponent(maints).score7 = res.channel_count[6]
        //                 } else if (this.channelCount == 7) {
        //                     PM.getComponent(maints).score8 = res.channel_count[7]
        //                 }
        //                 this.node.getComponent(gameCore).resertChannel()
        //                 this.node.getComponent(gameCore).starting1 = res.channel_light[0]
        //                 this.node.getComponent(gameCore).starting2 = res.channel_light[1]
        //                 setTimeout(() => {
        //                     this.node.getComponent(gameCore).changeChannel()
        //                 }, 50);
        //             } else if (res.action == 4) {
        //                 this.playMusic('music/spinrotMs')
        //                 if (res.type == -1 || res.code == 11004) {
        //                     // 没奖
        //                     this.awardType = -1
        //                     MC.onHandleClicked(8)
        //                 } else {
        //                     if (this.winning) {
        //                         return
        //                     }
        //                     if (this.autoStatus) {
        //                         this.autoStatus = false
        //                         this.autoSwitch()
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(autoDropTs).clearAutoStatus()
        //                     }
        //                     // 5分倒计时关闭
        //                     if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active) {
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').active = false
        //                     }
        //                     if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active) {
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').active = false
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_tips').active = false
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('time_down').getChildByName('folly_count').getComponent(Label).string = this.fiveTime + ''
        //                     }
        //                     clearInterval(this.fiveTimer)
        //                     this.fiveTime = 300
        //                     this.fiveTimer = null
        //                     // 出奖状态设置
        //                     this.winning = true
        //                     this.zjCoins = res.prize.coins
        //                     this.awardType = res.type
        //                     if (MC.isRolling) {
        //                         this.allowed = true
        //                     }
        //                     if (res.type == 0) {
        //                         // 连线奖
        //                         SP.lineType = res.prize.line_type
        //                         SP.lineNum = res.prize.line_type.length
        //                         SP.setprize(0)
        //                         // 中连线奖播放一次连线声音
        //                         this.playMusic('music/lineMs')
        //                     } else if (res.type == 1) {
        //                         // 小玛丽
        //                         if (this.dropStatus == 3) {
        //                             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_count').getComponent(dcountChange).changeDrop()
        //                         }
        //                         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.zdcj')
        //                         let outnum = this.xmlOut[Math.floor(Math.random() * this.xmlOut.length)]
        //                         let xmlxz = res.prize.xmlArr
        //                         xmlxz.push(outnum)
        //                         this.xmlcoinArr = xmlxz
        //                         SP.setprize(1)
        //                         // 先停止背景音乐再开启小玛丽背景音乐
        //                         this.playMusic('music/xmlMs')
        //                     } else if (res.type == 2) {
        //                         // 叠叠乐
        //                         if (this.dropStatus == 3) {
        //                             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('drop_count').getComponent(dcountChange).changeDrop()
        //                         }
        //                         this.ddlArr = JSON.parse(JSON.stringify(res.prize.ddl))
        //                         this.ddlycArr = JSON.parse(JSON.stringify(res.prize.ddl))
        //                         this.ddlscore = res.prize.coins
        //                         SP.setprize(2)
        //                         // 先停止背景音乐再开启叠叠乐背景音乐
        //                         this.playMusic('music/ddlMs')
        //                     } else if (res.type == 3) {
        //                         // jp1
        //                         SP.setprize(3)
        //                         // 先停止背景音乐再开启jp1背景音乐
        //                         this.playMusic('music/jpNormal')
        //                     } else if (res.type == 4) {
        //                         // jp2
        //                         SP.setprize(4)
        //                         // 先停止背景音乐再开启jp2背景音乐
        //                         this.playMusic('music/jpNormal')
        //                     } else if (res.type == 5) {
        //                         // jp3
        //                         SP.setprize(5)
        //                         // 先停止背景音乐再开启jp3背景音乐
        //                         this.playMusic('music/jpNormal')
        //                     } else if (res.type == 6) {
        //                         // jpAll
        //                         SP.setprize(6)
        //                         // 先停止背景音乐再开启jpall背景音乐
        //                         this.playMusic('music/jpAll')
        //                     }
        //                 }
        //             } else if (res.action == 5) {
        //                 PM.getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).allScore = res.get_coins
        //             } else if (res.action == 6) {
        //                 this.activeClosed = true
        //                 this.websocket.websocket_close(this.ws)
        //                 if (this.isDroped) {
        //                     this.isDroped = false
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getChildByName('settle_node').getChildByName('symbol_node').getChildByName('award_node').getComponent(awardCl).freshData(PM.getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).allScore, res.prize)
        //                 } else {
        //                     if (sys.os == sys.OS.ANDROID && sys.isNative) {
        //                         this.releaseAny()
        //                         this.node.active = false;
        //                         this.node.parent.getChildByName('GameOver').active = true
        //                         setTimeout(() => {
        //                             game.end();
        //                         }, 1500);
        //                     } else {
        //                         game.end()
        //                     }
        //                 }
        //             }
        //         }
        //     })
        //     this.websocket.websocket_closeListen(this.ws, res => {
        //         if (!this.isReConnecting && !this.activeClosed) {
        //             if (this.autoStatus) {
        //                 this.autoStatus = false
        //                 this.autoSwitch()
        //             }
        //             if (this.winning) {
        //                 if (this.autoTimer != null) {
        //                     clearInterval(this.autoTimer)
        //                 }
        //             }
        //             this.isReConnecting = true
        //             this.isDroped = false
        //             setTimeout(() => {
        //                 this.tryConnect();
        //             }, 5000);
        //         }
        //     })
        //     this.websocket.websocket_errorListen(this.ws, res => {
        //         if (!this.isReConnecting) {
        //             if (this.autoStatus) {
        //                 this.autoStatus = false
        //                 this.autoSwitch()
        //             }
        //             if (this.winning) {
        //                 if (this.autoTimer != null) {
        //                     clearInterval(this.autoTimer)
        //                 }
        //             }
        //             this.isReConnecting = true
        //             this.isDroped = false
        //             setTimeout(() => {
        //                 this.tryConnect();
        //             }, 5000);
        //         }
        //     })
        // }
        // tryConnect() {
        //     this.isConnecting = false;
        //     setTimeout(() => {
        //         this.reConnect();
        //     }, 1000);
        //     this.reConnectTimer = setTimeout(() => {
        //         this.tryConnect();
        //     }, 3500);
        // }
        // reConnect = () => {
        //     this.reCountNum++;
        //     if (this.reCountNum >= 30) {
        //         clearTimeout(this.reConnectTimer)
        //         this.isReConnecting = false;
        //         this.reCountNum = null;
        //     } else {
        //         this.websocketControlInit(this.vpinitRes.ws, true);
        //     }
        // };
        // // 触摸结束
        // touchEnd() {
        //     if (!this.soLink) {
        //         return
        //     }
        //     if (this.autoStatus) {
        //         return;
        //     }
        //     if (this.winning) {
        //         return;
        //     }
        //     if (this.dropStatus == 1) {
        //         if (Date.now() - this.intervalEnd <= 260) {
        //             return;
        //         }
        //         this.intervalEnd = Date.now()
        //         this.ws_fnc_dropping()
        //     } else if (this.dropStatus == 3) {
        //         if (this.dropThreeCount == 0) {
        //             this.dropThreeCount += 3
        //             if (this.dropThree == null) {
        //                 this.dropThree = setInterval(() => {
        //                     this.dropThreeCount--
        //                     if (this.dropThreeCount < 1) {
        //                         clearInterval(this.dropThree)
        //                         this.dropThree = null
        //                     }
        //                     this.ws_fnc_dropping()
        //                 }, 333)
        //             }
        //         }
        //     }
        // }
        // // 设置虚拟金币
        // setVircoin() {
        //     let nodePar = this.node.getChildByName('coinpool').children
        //     if (nodePar.length >= 1 && 49.15 - nodePar[nodePar.length - 1].position.x <= 3) {
        //         console.log('卡币了');
        //         return;
        //     }
        //     const coin = poolManager.instance.getNode(this.preCoin, this.ndCoinParent) as Node;
        //     coin.setPosition(49.15, 94.93, 26.3)
        //     coin.setRotationFromEuler(90, 0, 0)
        //     coin.getComponent(RigidBody).useCCD = true;
        //     coin.getComponent(RigidBody).setLinearVelocity(new Vec3(-50, 0, 0))
        // }
        // // 自动投币
        // autoCast() {
        //     this.autoTimer = setInterval(() => {
        //         if (this.autoNumber >= this.autoTarget) {
        //             this.closeAuto()
        //         } else {
        //             this.setVircoin()
        //             this.autoNumber += 1;
        //             if (this.awardType == 0) {
        //                 // 连线奖出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score1 -= 1
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore -= 1
        //             } else if (this.awardType == 1) {
        //                 // 小玛丽出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score1 -= 1
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore -= 1
        //             } else if (this.awardType == 2) {
        //                 // 叠叠乐出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score1 -= 1
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore -= 1
        //             } else if (this.awardType == 3) {
        //                 // jp1出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(jpts).score1 -= 1
        //             } else if (this.awardType == 4) {
        //                 // jp2出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(jpts).score1 -= 1
        //             } else if (this.awardType == 5) {
        //                 // jp3出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(jpts).score1 -= 1
        //             } else if (this.awardType == 6) {
        //                 // jpAll出币总数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(jpts).score1 -= 1
        //             }
        //         }
        //     }, 260)
        // }
        // closeAuto() {
        //     let Can = this.node.getChildByName('Main').getChildByName('Canvas')
        //     let domachine = Can.getChildByName('Machine').getComponent(machine)
        //     let spinDm = this.node.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
        //     clearInterval(this.autoTimer)
        //     this.autoTimer = null;
        //     this.autoNumber = 0;
        //     this.autoTarget = 0;
        //     // 普通连线奖处理
        //     if (Can.getChildByName('lxshow') != null && Can.getChildByName('lxshow').active) {
        //         Can.getChildByName('lxshow').active = false
        //     }
        //     // 红线处理
        //     if (Can.getChildByName('liaisonLine').getChildByName('lineitem') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem').active) {
        //         Can.getChildByName('liaisonLine').getChildByName('lineitem').active = false
        //     }
        //     if (Can.getChildByName('liaisonLine').getChildByName('lineitem1') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem1').active) {
        //         Can.getChildByName('liaisonLine').getChildByName('lineitem1').active = false
        //     }
        //     if (Can.getChildByName('liaisonLine').getChildByName('lineitem2') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem2').active) {
        //         Can.getChildByName('liaisonLine').getChildByName('lineitem2').active = false
        //     }
        //     if (Can.getChildByName('liaisonLine').getChildByName('lineitem3') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem3').active) {
        //         Can.getChildByName('liaisonLine').getChildByName('lineitem3').active = false
        //     }
        //     // jp1、2、3、all处理
        //     if (Can.getChildByName('jpAnim') != null && Can.getChildByName('jpAnim').active) {
        //         Can.getChildByName('jpAnim').active = false
        //     }
        //     if (spinDm.lineNum == 1) {
        //         domachine.lineFlash(domachine.randomicon, false)
        //     } else if (spinDm.lineNum == 2) {
        //         domachine.lineFlash(domachine.randomicon[0], false)
        //         domachine.lineFlash(domachine.randomicon[1], false)
        //     } else if (spinDm.lineNum == 3) {
        //         domachine.lineFlash(domachine.randomicon[0], false)
        //         domachine.lineFlash(domachine.randomicon[1], false)
        //         domachine.lineFlash(domachine.randomicon[2], false)
        //     }
        //     if (this.ddlSwitch) {
        //         let ddlgame = Can.getChildByName('ddlgame')
        //         this.ddlSwitch = false
        //         this.ddlauto = false
        //         this.ddltimer = null
        //         this.ddlOne = null
        //         this.ddlscore = 0
        //         ddlgame.getChildByName('ddltime').active = false;
        //         ddlgame.getChildByName('ddltotal').active = false;
        //         ddlgame.getComponent(ddlts).clearAd()
        //         ddlgame.active = false
        //         this.node.getComponent(gameCore).noShining()
        //         setTimeout(() => {
        //             this.node.getComponent(gameCore).agShining()
        //         }, 50);
        //     }
        //     if (this.xmlSwitch) {
        //         let xmlgame = Can.getChildByName('xmlgame')
        //         this.xmlSwitch = false
        //         this.xmlnum = 0
        //         xmlgame.getChildByName('xmlTime').active = false
        //         xmlgame.getChildByName('xmlAnim').active = false
        //         xmlgame.getChildByName('xmlAnim').getComponent(xmlAnim).recoverAll()
        //         xmlgame.getComponent(xmlts).clearxml()
        //         xmlgame.active = false
        //         this.node.getComponent(gameCore).noShining()
        //         setTimeout(() => {
        //             this.node.getComponent(gameCore).agShining()
        //         }, 50);
        //     }
        //     domachine.doRestore()
        //     domachine.spinSwitch(true)
        //     domachine.randomicon = null;
        //     domachine.randomsub = null;
        //     if (this.awardType == 3) {
        //         this.node.getChildByName('Main').getComponent(maints).score9 = 500
        //     } else if (this.awardType == 4) {
        //         this.node.getChildByName('Main').getComponent(maints).score10 = 1000
        //     } else if (this.awardType == 5) {
        //         this.node.getChildByName('Main').getComponent(maints).score11 = 2000
        //     } else if (this.awardType == 6) {
        //         this.node.getChildByName('Main').getComponent(maints).score12 = 3000
        //     }
        //     // 音乐处理
        //     if (this.awardType !== 0) {
        //         if (this.soundStatus) {
        //             this.soundApi.stop()
        //             this.playMusic('music/bgMusic')
        //         }
        //     }
        //     this.awardType = -1;
        //     this.winning = false;
        //     spinDm.lineNum = null;
        //     spinDm.lineType = null;
        //     // 中奖结束重新开启5分倒计时
        //     this.openFive()
        // }
        // // 小玛丽投币
        // xmltouchEnd() {
        //     if (!this.xmlSwitch) {
        //         return;
        //     }
        //     if (this.xmlnum >= 1) {
        //         // 小玛丽只允许点击一次
        //         return
        //     }
        //     if (Date.now() - this.xmltime <= 260) {
        //         return;
        //     }
        //     this.xmltime = Date.now()
        //     this.xmlnum += 1;
        //     let xmlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('xmlgame').getComponent(xmlts)
        //     xmlgame.toRoll(xmlgame.startIndex)
        //     setTimeout(() => {
        //         xmlgame.resultarr = this.xmlcoinArr
        //         xmlgame.stopPos = xmlgame.resultarr[0]
        //         let isover = setInterval(() => {
        //             if (xmlgame.isover) {
        //                 clearInterval(isover)
        //                 this.autoTarget = this.zjCoins
        //                 // 当前获奖的全部金币数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore = this.zjCoins
        //                 this.autoCast()
        //             }
        //         }, 1000)
        //     }, 3000);
        // }
        // // 叠叠乐投币
        // ddltouchEnd() {
        //     let ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(ddlts)
        //     let domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        //     if (!this.ddlSwitch) {
        //         return;
        //     }
        //     if (this.ddlauto) {
        //         return;
        //     }
        //     if (Date.now() - this.ddltime <= 560) {
        //         return;
        //     }
        //     this.ddltime = Date.now()
        //     if (ddlgame.awardTotal > 0) {
        //         this.ddlOnce()
        //     } else {
        //         this.ddlauto = true
        //         clearInterval(this.ddltimer)
        //         clearInterval(this.ddlOne)
        //         if (this.autoTimer == null) {
        //             if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset') != null) {
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0'
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0'
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0'
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = ''
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = true
        //             } else {
        //                 // 生成结算分数界面
        //                 let ddlset = instantiate(domachine.ddlsetItem)
        //                 ddlset.setPosition(-345.051, -597.314, 26.08)
        //                 this.node.getChildByName('Main').getChildByName('Canvas').addChild(ddlset)
        //             }
        //             // 结算ddl总分数
        //             this.getddlsort()
        //         }
        //     }
        // }
        // // 自动投币
        // autoSwitch(spchange?: number) {
        //     if (!this.autoStatus) {
        //         this.autoSpeed = 1
        //         if (this.autoftm != null) {
        //             clearInterval(this.autoftm)
        //         }
        //         if (this.autostm != null) {
        //             clearInterval(this.autostm)
        //         }
        //         if (this.autottm != null) {
        //             clearInterval(this.autottm)
        //         }
        //     } else {
        //         if (spchange != null) {
        //             if (spchange == 1) {
        //                 if (this.autottm != null) {
        //                     clearInterval(this.autottm)
        //                 }
        //                 this.autoftm = setInterval(() => {
        //                     this.ws_fnc_dropping()
        //                 }, 1000)
        //             } else if (spchange == 2) {
        //                 if (this.autoftm != null) {
        //                     clearInterval(this.autoftm)
        //                 }
        //                 this.autostm = setInterval(() => {
        //                     this.ws_fnc_dropping()
        //                 }, 500)
        //             } else if (spchange == 3) {
        //                 if (this.autostm != null) {
        //                     clearInterval(this.autostm)
        //                 }
        //                 this.autottm = setInterval(() => {
        //                     this.ws_fnc_dropping()
        //                 }, 333)
        //             }
        //         } else {
        //             // 自动投币每次打开必定是一秒一币状态
        //             this.autoftm = setInterval(() => {
        //                 this.ws_fnc_dropping()
        //             }, 1000)
        //         }
        //     }
        // }
        // 下机按钮


        closeOut() {
          // if (this.soLink) {
          //     // 出奖中的话关闭出奖
          //     if (this.autoTimer != null) {
          //         this.closeAuto()
          //     }
          //     if (this.autoStatus) {
          //         this.autoStatus = false
          //         this.autoSwitch()
          //         this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(autoDropTs).clearAutoStatus()
          //     }
          //     // 清除倒计时
          //     clearInterval(this.fiveTimer);
          //     let sendData = this.websocketFnc.ws_userout()
          //     this.websocket.websocket_sendMessage(sendData, this.ws, this.wsuuid, this.wssalt)
          // } else {
          //     this.activeClosed = true
          //     if (sys.os == sys.OS.ANDROID && sys.isNative) {
          //         this.releaseAny()
          //         this.node.active = false;
          //         this.node.parent.getChildByName('GameOver').active = true
          //         setTimeout(() => {
          //             console.log('这里下机了');
          //             game.end();
          //         }, 1500);
          //     } else {
          //         game.end()
          //     }
          // }
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.node.getChildByName('robots').active = false;
            this.node.getChildByName('Canvas').getChildByName('uiview').active = true;
            setTimeout(() => {
              console.log('这里下机了');
              sys.garbageCollect();
              game.end();
            }, 1500);
          } else {
            this.node.getChildByName('robots').active = false;
            this.node.getChildByName('Canvas').getChildByName('uiview').active = true;
            setTimeout(() => {
              console.log('这里下机了');
              sys.garbageCollect();
              game.end();
            }, 1500);
          }
        } // 发送投币信息
        // ws_fnc_dropping() {
        //     if (this.isDropMessageNotBack) {
        //         return
        //     }
        //     if (this.userCoins < this.price) {
        //         if (this.autoStatus) {
        //             this.autoStatus = false
        //             this.autoSwitch()
        //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(autoDropTs).clearAutoStatus()
        //         }
        //         if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getChildByName('balance_node').active == false) {
        //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(popcontrol).controlBalance(true)
        //         }
        //         return
        //     }
        //     let sendData = this.websocketFnc.ws_dropcoin()
        //     this.isDropMessageNotBack = true;
        //     this.websocket.websocket_sendMessage(sendData, this.ws, this.wsuuid, this.wssalt)
        // }
        // getddlsort() {
        //     let domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        //     let obj_key = []
        //     let obj_value = []
        //     for (var key in this.ddlycArr) {
        //         obj_key.push(key)
        //         obj_value.push(this.ddlycArr[key])
        //     }
        //     let ddllength = Object.keys(this.ddlycArr).length
        //     let ddlsess = setInterval(() => {
        //         if (ddllength > 0) {
        //             this.returnddlSet(obj_key[Object.keys(this.ddlycArr).length - ddllength], obj_value[Object.keys(this.ddlycArr).length - ddllength])
        //         } else {
        //             clearInterval(ddlsess)
        //             this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = false
        //             setTimeout(() => {
        //                 if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow') != null) {
        //                     this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').active = true
        //                 } else {
        //                     let lxshow = instantiate(domachine.lxItem)
        //                     lxshow.setPosition(-345.051, -597.314, 26.08)
        //                     this.node.getChildByName('Main').getChildByName('Canvas').addChild(lxshow)
        //                 }
        //                 this.autoTarget = this.ddlscore
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score = this.ddlscore
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score1 = this.ddlscore
        //                 // 当前获奖的全部金币数量
        //                 this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore = this.zjCoins
        //                 setTimeout(() => {
        //                     this.autoCast()
        //                 }, 50);
        //             }, 250);
        //         }
        //         ddllength--;
        //     }, 500)
        // }
        // // 叠叠乐计算展示
        // returnddlSet(key: string, val: number) {
        //     let score = null
        //     let ddlsetA = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset')
        //     if (key == '0') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '1') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '2') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '3') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '4') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '5') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '6') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     } else if (key == '7') {
        //         ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string
        //         if (val == 1) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string)
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
        //         } else if (val == 2) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 3
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
        //         } else if (val == 3) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 6
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
        //         } else if (val == 4) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 10
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
        //         } else if (val == 5) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 20
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
        //         } else if (val == 6) {
        //             score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 30
        //             ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
        //         }
        //     }
        //     ddlsetA.getChildByName('Label2').getComponent(Label).string = score.toString()
        //     ddlsetA.getChildByName('Label3').getComponent(Label).string = score + Number(ddlsetA.getChildByName('Label3').getComponent(Label).string)
        // }
        // // 叠叠乐单次掉落
        // ddlOnce() {
        //     let pKey = Object.keys(this.ddlArr)
        //     let mr = Math.floor(Math.random() * pKey.length);
        //     let ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(ddlts)
        //     if (this.ddlArr[pKey[mr]] > 0 && this.ddlArr[pKey[mr]] != 1) {
        //         ddlgame.addAward(Number(pKey[mr]))
        //         this.ddlArr[pKey[mr]]--;
        //     } else if (this.ddlArr[pKey[mr]] == 1) {
        //         ddlgame.addAward(Number(pKey[mr]))
        //         delete (this.ddlArr[pKey[mr]])
        //     }
        // }
        // // 金额过滤
        // fillter(val: number) {
        //     var num;
        //     if (val > 999999) {
        //         num = Math.floor(val / 10000) + '万';
        //     } else {
        //         num = Math.floor(val);
        //     }
        //     return num.toString()
        // }
        // // 播放音乐
        // playMusic(musicType: string) {
        //     if (!this.soundStatus) {
        //         return
        //     }
        //     // 注册一个全局音乐控制类
        //     if (this.soundApi == null) {
        //         this.soundApi = new AudioMgr()
        //     }
        //     if (musicType == 'music/bgMusic') {
        //         this.soundApi.play(musicType, 1, true)
        //     } else if (musicType == 'music/coinDrop') {
        //         this.soundApi.playOneShot(musicType, 1)
        //     } else if (musicType == 'music/spinrotMs') {
        //         this.soundApi.playOneShot(musicType, 1)
        //     } else if (musicType == 'music/lineMs') {
        //         this.soundApi.playOneShot(musicType, 1)
        //     } else if (musicType == 'music/xmlMs') {
        //         this.soundApi.stop()
        //         this.soundApi.play(musicType, 1, true)
        //     } else if (musicType == 'music/ddlMs') {
        //         this.soundApi.stop()
        //         this.soundApi.play(musicType, 1, true)
        //     } else if (musicType == 'music/jpNormal') {
        //         this.soundApi.stop()
        //         this.soundApi.play(musicType, 1, true)
        //     } else if (musicType == 'music/jpAll') {
        //         this.soundApi.stop()
        //         this.soundApi.play(musicType, 1, true)
        //     } else if (musicType == 'music/awardMs') {
        //         this.soundApi.playOneShot(musicType, 1)
        //     } else if (musicType == 'music/spinMs') {
        //         this.soundApi.playOneShot(musicType, 1)
        //     }
        // }


        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e41ee2c5e3a10d5ad65d6d792acf035a593e22de.js.map