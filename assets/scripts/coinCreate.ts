import {
    _decorator,
    Component,
    Node,
    Prefab,
    input,
    Input,
    game,
    Game,
    Vec3,
    RigidBody,
    instantiate,
    Label,
    sys,
    native,
} from 'cc';
const { ccclass, property } = _decorator;
import { poolManager } from './poolManager';
import { gameCore } from './gameCore';
import { machine } from './machine';
import { ddlts } from './ddlts';
import { xmlts } from './xmlts';
import { lxts } from './lxts';
import { jpts } from './jpts';
import { xmlAnim } from './xmlAnim';
import { spin } from './spin';
import { maints } from './maints';
import { jpScorets } from './jpScorets';
import { awardCl } from './awardCl';
import * as i18n from 'db://i18n/LanguageData';
import { popcontrol } from './popcontrol';
import { autoDropTs } from './autoDropTs';
import { AudioMgr } from './AudioMgr';
@ccclass('coinCreate')
export class coinCreate extends Component {
    @property(Prefab)
    preCoin: Prefab = null; //金币预制体
    @property(Node)
    ndCoinParent: Node = null!; //金币父节点
    intervalEnd: number = 0
    // socket变量
    ws = null;
    websocket = null;
    winning = false;
    autoTimer = null;
    autoNumber = 0;
    autoTarget = 0;
    awardType = -1; // 当前奖项(0:连线奖; 1:小玛丽; 2:叠叠乐; 3:jp1; 4:jp2; 5:jp3; 6:全盘奖)
    xmlSwitch = false; // 小玛丽特殊开关
    xmltime = 0; // 小玛丽投币时间
    xmlnum = 0; // 小玛丽点击次数
    xmltimer = null; // 小玛丽60s倒计时
    ddlSwitch = false; // 叠叠乐特殊开关
    ddltime = 0; // 叠叠乐投币时间
    ddltimer = null; // 叠叠乐倒计时
    ddlOne = null;
    ddlauto = false;
    // 中奖金币
    zjCoins = null
    // ddl总中奖金额
    ddlscore = 0
    ddlArr = {}
    ddlycArr = {}
    // 小玛丽数组
    xmlcoinArr = null
    xmlOut = [0, 6, 10, 16]
    // 上机信息
    userId = null
    billId = null
    recordId = null
    channelCount = null
    // 防止卡币
    isDropMessageNotBack = false
    isConnecting = false
    // 断线重连
    isReConnecting = false
    reConnectTimer = null
    reCountNum = null
    // 用户金币
    userCoins = null
    // 用户信息
    userData = null
    token = null
    // wsuuid
    wsuuid = null;
    wssaltLen = Math.round(8 * Math.random() + 8)
    wssalt = null;
    // 上机后命令
    websocketFnc = null;
    // 特殊处理
    allowed = false
    no = 0
    price = 0
    // 上🐔状态
    isDroped = false
    vpinitRes = null
    Md5 = null
    // 当前投币次数状态
    dropStatus = 1
    // 一次3币计时器
    dropThree = null
    dropThreeCount = 0
    // 自动投币
    autoStatus = false
    autoCount = 1
    autoSpeed = 1
    autoTips = false
    autoftm = null
    autostm = null
    autottm = null
    // 进入房间就开启5分钟倒计时
    fiveTime = 300
    fiveTimer = null
    // 全局声音控制
    soundApi = null
    soundStatus: boolean = false
    activeClosed = false
    Api = null
    getMessage = false
    getMessageTimer = null
    getMessageCount = 0
    autoTest = false
    onLoad() {
        this.soundStatus = false
    }
    start() {
        if (this.soundStatus) {
            this.playMusic('music/bgMusic')
        } else {
            this.soundStatus = false
        }
        /* 正常投币 */
        input.on(Input.EventType.TOUCH_END, this.touchEnd, this)
        /* 小玛丽 */
        input.on(Input.EventType.TOUCH_END, this.xmltouchEnd, this)
        /* 叠叠乐 */
        input.on(Input.EventType.TOUCH_END, this.ddltouchEnd, this)
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
    }
    releaseAny() {
        input.off(Input.EventType.TOUCH_END, this.touchEnd, this)
        input.off(Input.EventType.TOUCH_END, this.xmltouchEnd, this)
        input.off(Input.EventType.TOUCH_END, this.ddltouchEnd, this)
        game.off(Game.EVENT_HIDE)
        game.off(Game.EVENT_SHOW)
        if (this.soundApi != null) {
            this.soundApi.stop()
            this.node.parent.getChildByName('__audioMgr__').destroy()
        }
    }
    // 触摸结束
    touchEnd() {
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
            this.intervalEnd = Date.now()
            this.ws_fnc_dropping()
        } else if (this.dropStatus == 3) {
            if (this.dropThreeCount == 0) {
                this.dropThreeCount += 3
                if (this.dropThree == null) {
                    this.dropThree = setInterval(() => {
                        this.dropThreeCount--
                        if (this.dropThreeCount < 1) {
                            clearInterval(this.dropThree)
                            this.dropThree = null
                        }
                        this.ws_fnc_dropping()
                    }, 333)
                }
            }
        }
    }
    // 设置虚拟金币
    setVircoin() {
        let nodePar = this.node.getChildByName('coinpool').children
        if (nodePar.length >= 1 && (49.15 - nodePar[nodePar.length - 1].position.x) <= 2.44 && 94.93 - nodePar[nodePar.length - 1].position.y <= 2.4) {
            console.log('卡币了');
            poolManager.instance.putNode(nodePar[nodePar.length - 1])
            return;
        }
        const coin = poolManager.instance.getNode(this.preCoin, this.ndCoinParent) as Node;
        coin.setPosition(49.15, 94.93, 26.3)
        coin.setRotationFromEuler(90, 0, 0)
        coin.getComponent(RigidBody).useCCD = true;
        coin.getComponent(RigidBody).setLinearVelocity(new Vec3(-50, 0, 0))
    }
    // 自动投币
    autoCast() {
        var lx = null
        var gs = null
        var jp = null
        if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow')) {
            lx = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts)
        }
        if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore')) {
            gs = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets)
        }
        if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim')) {
            jp = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpAnim').getComponent(jpts)
        }
        this.autoTimer = setInterval(() => {
            if (this.autoNumber >= this.autoTarget) {
                this.closeAuto()
            } else {
                this.setVircoin()
                this.autoNumber += 1;
                if (this.awardType == 0) {
                    // 连线奖出币总数量
                    lx.score1 = lx.score1 - 1
                    gs.getScore = gs.getScore - 1
                } else if (this.awardType == 1) {
                    // 小玛丽出币总数量
                    lx.score1 = lx.score1 - 1
                    gs.getScore = gs.getScore - 1
                } else if (this.awardType == 2) {
                    // 叠叠乐出币总数量
                    lx.score1 = lx.score1 - 1
                    gs.getScore = gs.getScore - 1
                } else if (this.awardType == 3) {
                    // jp1出币总数量
                    jp.score1 = jp.score1 - 1
                } else if (this.awardType == 4) {
                    // jp2出币总数量
                    jp.score1 = jp.score1 - 1
                } else if (this.awardType == 5) {
                    // jp3出币总数量
                    jp.score1 = jp.score1 - 1
                } else if (this.awardType == 6) {
                    // jpAll出币总数量
                    jp.score1 = jp.score1 - 1
                }
            }
        }, 260)
    }
    closeAuto() {
        let Can = this.node.getChildByName('Main').getChildByName('Canvas')
        let domachine = Can.getChildByName('Machine').getComponent(machine)
        let spinDm = this.node.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
        clearInterval(this.autoTimer)
        this.autoTimer = null;
        this.autoNumber = 0;
        this.autoTarget = 0;
        // 普通连线奖处理
        if (Can.getChildByName('lxshow') != null && Can.getChildByName('lxshow').active) {
            Can.getChildByName('lxshow').active = false
        }
        // 红线处理
        if (Can.getChildByName('liaisonLine').getChildByName('lineitem') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem').active = false
        }
        if (Can.getChildByName('liaisonLine').getChildByName('lineitem1') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem1').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem1').active = false
        }
        if (Can.getChildByName('liaisonLine').getChildByName('lineitem2') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem2').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem2').active = false
        }
        if (Can.getChildByName('liaisonLine').getChildByName('lineitem3') != null && Can.getChildByName('liaisonLine').getChildByName('lineitem3').active) {
            Can.getChildByName('liaisonLine').getChildByName('lineitem3').active = false
        }
        // jp1、2、3、all处理
        if (Can.getChildByName('jpAnim') != null && Can.getChildByName('jpAnim').active) {
            Can.getChildByName('jpAnim').active = false
        }
        if (spinDm.lineNum == 1) {
            domachine.lineFlash(domachine.randomicon, false)
        } else if (spinDm.lineNum == 2) {
            domachine.lineFlash(domachine.randomicon[0], false)
            domachine.lineFlash(domachine.randomicon[1], false)
        } else if (spinDm.lineNum == 3) {
            domachine.lineFlash(domachine.randomicon[0], false)
            domachine.lineFlash(domachine.randomicon[1], false)
            domachine.lineFlash(domachine.randomicon[2], false)
        }
        if (this.ddlSwitch) {
            let ddlgame = Can.getChildByName('ddlgame')
            this.ddlSwitch = false
            this.ddlauto = false
            this.ddltimer = null
            this.ddlOne = null
            this.ddlscore = 0
            ddlgame.getChildByName('ddltime').active = false;
            ddlgame.getChildByName('ddltotal').active = false;
            ddlgame.getComponent(ddlts).clearAd()
            ddlgame.active = false
            this.node.getComponent(gameCore).noShining()
            setTimeout(() => {
                this.node.getComponent(gameCore).agShining()
            }, 50);
        }
        if (this.xmlSwitch) {
            let xmlgame = Can.getChildByName('xmlgame')
            this.xmlSwitch = false
            this.xmlnum = 0
            xmlgame.getChildByName('xmlTime').active = false
            xmlgame.getChildByName('xmlAnim').active = false
            xmlgame.getChildByName('xmlAnim').getComponent(xmlAnim).recoverAll()
            xmlgame.getComponent(xmlts).clearxml()
            xmlgame.active = false
            this.node.getComponent(gameCore).noShining()
            setTimeout(() => {
                this.node.getComponent(gameCore).agShining()
            }, 50);
        }
        domachine.doRestore()
        domachine.spinSwitch(true)
        domachine.randomicon = null;
        domachine.randomsub = null;
        if (this.awardType == 3) {
            this.node.getChildByName('Main').getComponent(maints).score9 = 500
        } else if (this.awardType == 4) {
            this.node.getChildByName('Main').getComponent(maints).score10 = 1000
        } else if (this.awardType == 5) {
            this.node.getChildByName('Main').getComponent(maints).score11 = 2000
        } else if (this.awardType == 6) {
            this.node.getChildByName('Main').getComponent(maints).score12 = 3000
        }
        // 音乐处理
        if (this.awardType !== 0) {
            if (this.soundStatus) {
                this.soundApi.stop()
                this.playMusic('music/bgMusic')
            }
        }
        this.awardType = -1;
        this.winning = false;
        spinDm.lineNum = null;
        spinDm.lineType = null;
        // 存在自动测试
        if(this.autoTest) {
            this.autoTest = false;
            this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(autoDropTs).changeAutoSt(null,"test")
        }
    }
    // 小玛丽投币
    xmltouchEnd() {
        if (!this.xmlSwitch) {
            return;
        }
        if (this.xmlnum >= 1) {
            // 小玛丽只允许点击一次
            return
        }
        if (Date.now() - this.xmltime <= 260) {
            return;
        }
        this.xmltime = Date.now()
        this.xmlnum += 1;
        let xmlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('xmlgame').getComponent(xmlts)
        xmlgame.toRoll(xmlgame.startIndex)
        setTimeout(() => {
            xmlgame.resultarr = this.xmlcoinArr
            xmlgame.stopPos = xmlgame.resultarr[0]
            let isover = setInterval(() => {
                if (xmlgame.isover) {
                    clearInterval(isover)
                    this.autoTarget = this.zjCoins
                    // 当前获奖的全部金币数量
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore = this.zjCoins
                    this.autoCast()
                }
            }, 1000)
        }, 3000);
    }
    // 叠叠乐投币
    ddltouchEnd() {
        let ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(ddlts)
        let domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        if (!this.ddlSwitch) {
            return;
        }
        if (this.ddlauto) {
            return;
        }
        if (Date.now() - this.ddltime <= 560) {
            return;
        }
        this.ddltime = Date.now()
        if (ddlgame.awardTotal > 0) {
            this.ddlOnce()
        } else {
            this.ddlauto = true
            clearInterval(this.ddltimer)
            clearInterval(this.ddlOne)
            if (this.autoTimer == null) {
                if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset') != null) {
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0'
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0'
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0'
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = ''
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = true
                } else {
                    // 生成结算分数界面
                    let ddlset = instantiate(domachine.ddlsetItem)
                    ddlset.setPosition(-345.051, -597.314, 26.08)
                    this.node.getChildByName('Main').getChildByName('Canvas').addChild(ddlset)
                }
                // 结算ddl总分数
                this.getddlsort()
            }
        }
    }
    // 自动投币
    autoSwitch(spchange?: number) {
        if (!this.autoStatus) {
            this.autoSpeed = 1
            if (this.autoftm != null) {
                clearInterval(this.autoftm)
            }
            if (this.autostm != null) {
                clearInterval(this.autostm)
            }
            if (this.autottm != null) {
                clearInterval(this.autottm)
            }
        } else {
            if (spchange != null) {
                if (spchange == 1) {
                    if (this.autottm != null) {
                        clearInterval(this.autottm)
                    }
                    this.autoftm = setInterval(() => {
                        this.ws_fnc_dropping()
                    }, 1000)
                } else if (spchange == 2) {
                    if (this.autoftm != null) {
                        clearInterval(this.autoftm)
                    }
                    this.autostm = setInterval(() => {
                        this.ws_fnc_dropping()
                    }, 500)
                } else if (spchange == 3) {
                    if (this.autostm != null) {
                        clearInterval(this.autostm)
                    }
                    this.autottm = setInterval(() => {
                        this.ws_fnc_dropping()
                    }, 333)
                }
            } else {
                // 自动投币每次打开必定是一秒一币状态
                this.autoftm = setInterval(() => {
                    this.ws_fnc_dropping()
                }, 1000)
            }
        }
    }
    // 下机按钮
    closeOut() {
        if (this.isConnecting) {
            // 出奖中的话关闭出奖
            if (this.autoTimer != null) {
                this.closeAuto()
            }
            if (this.autoStatus) {
                this.autoStatus = false
                this.autoSwitch()
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('bottom_fun').getChildByName('auto_node').getComponent(autoDropTs).clearAutoStatus()
            }
            // 清除倒计时
            clearInterval(this.fiveTimer);
            let sendData = this.websocketFnc.ws_userout()
            this.websocket.websocket_sendMessage(sendData, this.ws, this.wsuuid, this.wssalt)
            if (this.getMessageTimer == null) {
                this.getMessageTimer = setInterval(() => {
                    if (this.getMessageCount < 4 && !this.getMessage) {
                        this.getMessageCount += 1;
                    } else if (this.getMessageCount >= 4 && !this.getMessage) {
                        clearInterval(this.getMessageTimer)
                        this.getMessageCount = 0
                        this.getMessageTimer = null
                        this.getMessage = false
                        this.activeClosed = true
                        if (sys.os == sys.OS.ANDROID && sys.isNative) {
                            this.releaseAny()
                            this.node.active = false;
                            this.node.parent.getChildByName('GameOver').active = true
                            setTimeout(() => {
                                sys.garbageCollect();
                                game.end();
                            }, 1500);
                        } else {
                            game.end()
                        }
                    }
                }, 1000);
            }
        } else {
            this.activeClosed = true
            if (sys.os == sys.OS.ANDROID && sys.isNative) {
                this.releaseAny()
                this.node.active = false;
                this.node.parent.getChildByName('GameOver').active = true
                setTimeout(() => {
                    sys.garbageCollect();
                    game.end();
                }, 1500);
            } else {
                game.end()
            }
        }
    }
    // 发送投币信息
    ws_fnc_dropping() {
        this.setVircoin()
    }
    getddlsort() {
        let domachine = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        let obj_key = []
        let obj_value = []
        for (var key in this.ddlycArr) {
            obj_key.push(key)
            obj_value.push(this.ddlycArr[key])
        }
        let ddllength = Object.keys(this.ddlycArr).length
        let ddlsess = setInterval(() => {
            if (ddllength > 0) {
                this.returnddlSet(obj_key[Object.keys(this.ddlycArr).length - ddllength], obj_value[Object.keys(this.ddlycArr).length - ddllength])
            } else {
                clearInterval(ddlsess)
                this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset').active = false
                setTimeout(() => {
                    if (this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow') != null) {
                        this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').active = true
                    } else {
                        let lxshow = instantiate(domachine.lxItem)
                        lxshow.setPosition(-345.051, -597.314, 26.08)
                        this.node.getChildByName('Main').getChildByName('Canvas').addChild(lxshow)
                    }
                    this.autoTarget = this.ddlscore
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score = this.ddlscore
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('lxshow').getComponent(lxts).score1 = this.ddlscore
                    // 当前获奖的全部金币数量
                    this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('jpScore').getComponent(jpScorets).getScore = this.zjCoins
                    setTimeout(() => {
                        this.autoCast()
                    }, 50);
                }, 250);
            }
            ddllength--;
        }, 500)
    }
    // 叠叠乐计算展示
    returnddlSet(key: string, val: number) {
        let score = null
        let ddlsetA = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlset')
        if (key == '0') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '1') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '2') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '3') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '4') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '5') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '6') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        } else if (key == '7') {
            ddlsetA.getChildByName('Label').getComponent(Label).string = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string
            if (val == 1) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string)
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '1'
            } else if (val == 2) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 3
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '3'
            } else if (val == 3) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 6
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '6'
            } else if (val == 4) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 10
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '10'
            } else if (val == 5) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 20
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '20'
            } else if (val == 6) {
                score = Number(this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string) * 30
                ddlsetA.getChildByName('Label1').getComponent(Label).string = '30'
            }
        }
        ddlsetA.getChildByName('Label2').getComponent(Label).string = score.toString()
        ddlsetA.getChildByName('Label3').getComponent(Label).string = score + Number(ddlsetA.getChildByName('Label3').getComponent(Label).string)
    }
    // 叠叠乐单次掉落
    ddlOnce() {
        let pKey = Object.keys(this.ddlArr)
        let mr = Math.floor(Math.random() * pKey.length);
        let ddlgame = this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('ddlgame').getComponent(ddlts)
        if (this.ddlArr[pKey[mr]] > 0 && this.ddlArr[pKey[mr]] != 1) {
            ddlgame.addAward(Number(pKey[mr]))
            this.ddlArr[pKey[mr]]--;
        } else if (this.ddlArr[pKey[mr]] == 1) {
            ddlgame.addAward(Number(pKey[mr]))
            delete (this.ddlArr[pKey[mr]])
        }
    }
    // 金额过滤
    fillter(val: number) {
        var num;
        if (val > 999999) {
            num = Math.floor(val / 10000) + '万';
        } else {
            num = Math.floor(val);
        }
        return num.toString()
    }
    // 播放音乐
    playMusic(musicType: string) {
        if (!this.soundStatus) {
            return
        }
        // 注册一个全局音乐控制类
        if (this.soundApi == null) {
            this.soundApi = new AudioMgr()
        }
        if (musicType == 'music/bgMusic') {
            this.soundApi.play(musicType, 1, true)
        } else if (musicType == 'music/coinDrop') {
            this.soundApi.playOneShot(musicType, 1)
        } else if (musicType == 'music/spinrotMs') {
            this.soundApi.playOneShot(musicType, 1)
        } else if (musicType == 'music/lineMs') {
            this.soundApi.playOneShot(musicType, 1)
        } else if (musicType == 'music/xmlMs') {
            this.soundApi.stop()
            this.soundApi.play(musicType, 1, true)
        } else if (musicType == 'music/ddlMs') {
            this.soundApi.stop()
            this.soundApi.play(musicType, 1, true)
        } else if (musicType == 'music/jpNormal') {
            this.soundApi.stop()
            this.soundApi.play(musicType, 1, true)
        } else if (musicType == 'music/jpAll') {
            this.soundApi.stop()
            this.soundApi.play(musicType, 1, true)
        } else if (musicType == 'music/awardMs') {
            this.soundApi.playOneShot(musicType, 1)
        } else if (musicType == 'music/spinMs') {
            this.soundApi.playOneShot(musicType, 1)
        }
    }
    // 关闭重连错误离开房间
    closewlErr() {
        clearInterval(this.fiveTimer);
        this.activeClosed = true
        this.websocket.websocket_close(this.ws)
        this.node.getChildByName('Main').getChildByName('Canvas').getChildByName('pop_node').getComponent(popcontrol).controlError(false)
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.releaseAny()
            this.node.active = false;
            this.node.parent.getChildByName('GameOver').active = true
            setTimeout(() => {
                sys.garbageCollect();
                game.end();
            }, 1500);
        } else {
            game.end()
        }
    }
    update(deltaTime: number) {
    }
}