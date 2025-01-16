import { _decorator, Component, Node, Sprite, resources, SpriteFrame, instantiate, Label } from 'cc';
const { ccclass, property } = _decorator;
import { xmlAnim } from './xmlAnim';
import { lxts } from './lxts';
import { machine } from './machine';
import { flashPicts } from './flashPicts';
import { labelts } from './labelts';
import * as i18n from 'db://i18n/LanguageData';

@ccclass('xmlts')
export class xmlts extends Component {
    @property(Sprite)
    girds: Sprite[] = [];
    itemSpritePathArray = [
        "xml/03UI_16Circular_9", // out
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
        "xml/03UI_16Circular_8", // 气球
    ]
    public startIndex: number = 0
    public stopTime: number = 300; //setTimeout时间间隔，控制速度
    public rollingTimer: any = null;
    public stopPos: number = -1; // 抽奖结果的位置
    public isover: boolean = false;
    public resultarr: any = []; // 结果数组
    xmloutArr: Array<SpriteFrame> = []
    xmlscore = 0
    protected onLoad(): void {
        // 预加载资源
        this.itemSpritePathArray.forEach((spritePath) => {
            resources.preload(spritePath, SpriteFrame)
        })
        for (let i = 0; i < 20; i++) {
            resources.load(this.itemSpritePathArray[i], SpriteFrame, (err, asset) => {
                if(i == 0) {
                    this.girds[i].spriteFrame = asset
                }
                this.xmloutArr[i] = asset
            })
        }
    }

    start() {
    }

    toRoll(pos) {
        let xmlanim = this.node.getChildByName('xmlAnim').getComponent(xmlAnim)
        xmlanim.switchOne(false)
        xmlanim.switchThree(1, true)
        if (this.stopTime > 50) {
            this.stopTime -= 30;
        }
        this.rollingTimer = setTimeout(() => {
            this.rotatePrize(pos)
            if (this.stopPos === -1) {
                this.toRoll(this.startIndex % 20);
                this.startIndex++
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
                this.rotatePrize(pos)
                this.getToStop(this.startIndex % 20)
                this.startIndex++
            }, this.stopTime);
        } else if (pos === this.stopPos) {
            setTimeout(() => {
                this.rotatePrize(pos)
                if (this.stopPos == 0 || this.stopPos == 6 || this.stopPos == 10 || this.stopPos == 16) {
                    // 转到out结束游戏
                    this.isover = true
                    clearTimeout(this.rollingTimer)
                    let xmlanim = this.node.getChildByName('xmlAnim').getComponent(xmlAnim)
                    xmlanim.switchThree(1, false)
                    xmlanim.switchThree(2, true)

                    let mcts = this.node.parent.getChildByName('Machine').getComponent(machine)
                    if (this.node.parent.getChildByName('lxshow') != null) {
                        this.node.parent.getChildByName('lxshow').active = true
                    } else {
                        // 生成获奖展示界面
                        let lxshow = instantiate(mcts.lxItem)
                        lxshow.setPosition(-345.051, -597.314, 26.08)
                        this.node.parent.addChild(lxshow)
                    }
                    this.node.parent.getChildByName('bottom_fun').getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tyc')
                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score = this.xmlscore
                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score1 = this.xmlscore
                } else {
                    let xmlanim = this.node.getChildByName('xmlAnim').getComponent(xmlAnim)
                    this.retunxmlScore(pos)
                    xmlanim.switchThree(1, false)
                    xmlanim.switchTwo(true)
                    // 闪屏图片
                    let flashPic = this.node.parent.getChildByName('flashNode').getComponent(flashPicts)
                    // 闪屏数字
                    let flashLabel = this.node.parent.getChildByName('labels').getComponent(labelts)
                    if (pos == 1 || pos == 11) {
                        flashPic.doFlashThree(0)
                        flashLabel.dolabelThree(0)
                    } else if (pos == 2 || pos == 12) {
                        flashPic.doFlashThree(1)
                        flashLabel.dolabelThree(1)
                    } else if (pos == 3 || pos == 13) {
                        flashPic.doFlashThree(2)
                        flashLabel.dolabelThree(2)
                    } else if (pos == 4 || pos == 14) {
                        flashPic.doFlashThree(3)
                        flashLabel.dolabelThree(3)
                    } else if (pos == 5 || pos == 15) {
                        flashPic.doFlashThree(4)
                        flashLabel.dolabelThree(4)
                    } else if (pos == 7 || pos == 17) {
                        flashPic.doFlashThree(5)
                        flashLabel.dolabelThree(5)
                    } else if (pos == 8 || pos == 18) {
                        flashPic.doFlashThree(6)
                        flashLabel.dolabelThree(6)
                    } else if (pos == 9 || pos == 19) {
                        flashPic.doFlashThree(7)
                        flashLabel.dolabelThree(7)
                    }
                    setTimeout(() => {
                        this.stopTime = 300
                        this.rollingTimer = null
                        this.resultarr.splice(0, 1)
                        this.stopPos = -1
                        this.toRoll(this.startIndex % 20)
                        xmlanim.switchThree(1, true)
                        xmlanim.switchTwo(false)
                        setTimeout(() => {
                            this.stopPos = this.resultarr[0]
                        }, 3000);
                    }, 1000);
                }
            }, this.stopTime)
        }
    }

    // 清除存储数据
    clearxml() {
        this.isover = false
        this.startIndex = 0
        this.stopTime = 300
        this.rollingTimer = null
        this.stopPos = -1
        this.resultarr = []
        this.xmlscore = 0
        this.node.getChildByName('xmlscore').getComponent(Label).string = '00000'
        for (let i = 0; i < this.girds.length; i++) {
            if (i == 0) {
                this.girds[i].spriteFrame = this.xmloutArr[i]
            } else {
                this.girds[i].spriteFrame = null
            }
        }
    }

    // 控制图片显示隐藏
    rotatePrize(index) {
        for (let i = 0; i < this.girds.length; i++) {
            if (i === index) {
                this.girds[index].spriteFrame = this.xmloutArr[i]
            } else {
                this.girds[i].spriteFrame = null
            }
        }
    }

    fillter(number: number) {
        if (number < 10) {
            return '0000' + number.toString()
        } else if (number >= 10 && number < 100) {
            return '000' + number.toString()
        } else if (number >= 100 && number < 1000) {
            return '00' + number.toString()
        } else if (number >= 1000 && number < 10000) {
            return '0' + number.toString()
        } else if (number >= 10000) {
            return number.toString()
        }
    }

    retunxmlScore(type: number) {
        if (type == 1 || type == 11) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel1').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 2 || type == 12) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel2').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 3 || type == 13) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel3').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 4 || type == 14) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel4').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 5 || type == 15) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel5').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 7 || type == 17) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel6').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 8 || type == 18) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel7').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        } else if (type == 9 || type == 19) {
            this.xmlscore = this.xmlscore + Number(this.node.parent.getChildByName('labels').getChildByName('winLabel8').getComponent(Label).string)
            this.node.getChildByName('xmlscore').getComponent(Label).string = this.fillter(this.xmlscore)
        }
    }

    update(deltaTime: number) {

    }
}


