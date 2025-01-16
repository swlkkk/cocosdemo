import { Prefab, resources, Sprite, Vec3, UITransform, SpriteFrame, instantiate, NodePool, SpriteAtlas, Label } from 'cc';
import { _decorator, Component, Node, tween } from 'cc';
const { ccclass, property } = _decorator;
import { flashPicts } from './flashPicts';
import { labelts } from './labelts';

@ccclass('ddlts')
export class ddlts extends Component {

    // 叠叠乐各个奖项累计数量
    public award1: number = 0 // 鞋
    public award2: number = 0 // 箭靶
    public award3: number = 0 // 喇叭
    public award4: number = 0 // 球
    public award5: number = 0 // 蛋糕
    public award6: number = 0 // 马戏团
    public award7: number = 0 // 独轮车
    public award8: number = 0 // 气球
    // 三个窗口槽节点
    @property(Node)
    adLayout1: Node = new Node()
    @property(Node)
    adLayout2: Node = new Node()
    @property(Node)
    adLayout3: Node = new Node()
    @property(Node)
    adLayout4: Node = new Node()
    @property(Node)
    adLayout5: Node = new Node()
    @property(Node)
    adLayout6: Node = new Node()
    @property(Node)
    adLayout7: Node = new Node()
    @property(Node)
    adLayout8: Node = new Node()

    @property(Prefab)
    aditem: Prefab = null
    itemNodePool: NodePool = new NodePool()

    @property(Prefab)
    numitem: Prefab = null

    alttype1: SpriteFrame = null
    alttype2: SpriteFrame = null
    alttype3: SpriteFrame = null
    alttype4: SpriteFrame = null
    alttype5: SpriteFrame = null
    alttype6: SpriteFrame = null
    alttype7: SpriteFrame = null
    alttype8: SpriteFrame = null
    alttype9: SpriteFrame = null
    alttype10: SpriteFrame = null
    alttype11: SpriteFrame = null
    alttype12: SpriteFrame = null
    alttype13: SpriteFrame = null
    alttype14: SpriteFrame = null

    awardTotal = 6;
    onLoad(): void {
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

    start() {
    }

    addAward(type: number) {
        // 提前添加倍率节点
        if (this.node.getChildByName('numNode') != null) {
            if (!this.node.getChildByName('numNode').active) {
                this.node.getChildByName('numNode').active = true
            }
        } else {
            let item = null!
            item = instantiate(this.numitem)
            item.setPosition(new Vec3(0, 0, 0))
            this.node.addChild(item)
        }
        if (this.awardTotal <= 0) {
            return
        }
        let ddlto = this.node.getChildByName('ddltotal')
        if (type == 0) {
            this.award1 += 1
            this.adLayout1.addChild(this.spawnItem(1))
            setTimeout(() => {
                this.returnNum(this.award1, 0)
            }, 1000);
        } else if (type == 1) {
            this.award2 += 1
            this.adLayout2.addChild(this.spawnItem(2))
            setTimeout(() => {
                this.returnNum(this.award2, 1)
            }, 1000);
        } else if (type == 2) {
            this.award3 += 1
            this.adLayout3.addChild(this.spawnItem(3))
            setTimeout(() => {
                this.returnNum(this.award3, 2)
            }, 1000);
        } else if (type == 3) {
            this.award4 += 1
            this.adLayout4.addChild(this.spawnItem(4))
            setTimeout(() => {
                this.returnNum(this.award4, 3)
            }, 1000);
        } else if (type == 4) {
            this.award5 += 1
            this.adLayout5.addChild(this.spawnItem(5))
            setTimeout(() => {
                this.returnNum(this.award5, 4)
            }, 1000);
        } else if (type == 5) {
            this.award6 += 1
            this.adLayout6.addChild(this.spawnItem(6))
            setTimeout(() => {
                this.returnNum(this.award6, 5)
            }, 1000);
        } else if (type == 6) {
            this.award7 += 1
            this.adLayout7.addChild(this.spawnItem(7))
            setTimeout(() => {
                this.returnNum(this.award7, 6)
            }, 1000);
        } else if (type == 7) {
            this.award8 += 1
            this.adLayout8.addChild(this.spawnItem(8))
            setTimeout(() => {
                this.returnNum(this.award8, 7)
            }, 1000);
        }
        this.awardTotal -= 1
        ddlto.getComponent(Label).string = this.awardTotal.toString()
        this.animationAward(type)
    }
    // 移动动画
    animationAward(type: number) {
        // 闪屏图片
        let flashPic = this.node.parent.getChildByName('flashNode').getComponent(flashPicts)
        // 闪屏数字
        let flashLabel = this.node.parent.getChildByName('labels').getComponent(labelts)
        if (type == 0) {
            tween(this.adLayout1.children[this.award1 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award1) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(0)
                    flashLabel.dolabelThree(0)
                })
                .start()
        } else if (type == 1) {
            tween(this.adLayout2.children[this.award2 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award2) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(1)
                    flashLabel.dolabelThree(1)
                })
                .start()
        } else if (type == 2) {
            tween(this.adLayout3.children[this.award3 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award3) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(2)
                    flashLabel.dolabelThree(2)
                })
                .start()
        } else if (type == 3) {
            tween(this.adLayout4.children[this.award4 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award4) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(3)
                    flashLabel.dolabelThree(3)
                })
                .start()
        } else if (type == 4) {
            tween(this.adLayout5.children[this.award5 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award5) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(4)
                    flashLabel.dolabelThree(4)
                })
                .start()
        } else if (type == 5) {
            tween(this.adLayout6.children[this.award6 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award6) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(5)
                    flashLabel.dolabelThree(5)
                })
                .start()
        } else if (type == 6) {
            tween(this.adLayout7.children[this.award7 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award7) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(6)
                    flashLabel.dolabelThree(6)
                })
                .start()
        } else if (type == 7) {
            tween(this.adLayout8.children[this.award8 - 1])
                .by(1, { position: new Vec3(0, -(6 - this.award8) * 1.06, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    flashPic.doFlashThree(7)
                    flashLabel.dolabelThree(7)
                })
                .start()
        }
    }

    spawnItem(type: number) {
        // 生成预制体
        let item = null!
        if (this.itemNodePool.size() > 0) {
            item = this.itemNodePool.get()
        } else {
            item = instantiate(this.aditem)
        }

        // 设置图片
        if (type == 1) {
            item.getComponent(Sprite).spriteFrame = this.alttype1
        } else if (type == 2) {
            item.getComponent(Sprite).spriteFrame = this.alttype2
        } else if (type == 3) {
            item.getComponent(Sprite).spriteFrame = this.alttype3
        } else if (type == 4) {
            item.getComponent(Sprite).spriteFrame = this.alttype4
        } else if (type == 5) {
            item.getComponent(Sprite).spriteFrame = this.alttype5
        } else if (type == 6) {
            item.getComponent(Sprite).spriteFrame = this.alttype6
        } else if (type == 7) {
            item.getComponent(Sprite).spriteFrame = this.alttype7
        } else if (type == 8) {
            item.getComponent(Sprite).spriteFrame = this.alttype8
        }
        // 设置图片大小
        item.getComponent(UITransform).width = 1.16
        item.getComponent(UITransform).height = 1.06

        return item
    }
    // 清除数据
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
            this.adLayout1.children[this.adLayout1.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout1.children[this.adLayout1.children.length - 1])
        }
        while (this.adLayout2.children.length > 0) {
            this.adLayout2.children[this.adLayout2.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout2.children[this.adLayout2.children.length - 1])
        }
        while (this.adLayout3.children.length > 0) {
            this.adLayout3.children[this.adLayout3.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout3.children[this.adLayout3.children.length - 1])
        }
        while (this.adLayout4.children.length > 0) {
            this.adLayout4.children[this.adLayout4.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout4.children[this.adLayout4.children.length - 1])
        }
        while (this.adLayout5.children.length > 0) {
            this.adLayout5.children[this.adLayout5.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout5.children[this.adLayout5.children.length - 1])
        }
        while (this.adLayout6.children.length > 0) {
            this.adLayout6.children[this.adLayout6.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout6.children[this.adLayout6.children.length - 1])
        }
        while (this.adLayout7.children.length > 0) {
            this.adLayout7.children[this.adLayout7.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout7.children[this.adLayout7.children.length - 1])
        }
        while (this.adLayout8.children.length > 0) {
            this.adLayout8.children[this.adLayout8.children.length - 1].setPosition(0, 0, 0)
            this.itemNodePool.put(this.adLayout8.children[this.adLayout8.children.length - 1])
        }
        this.clearNum()
        this.node.getChildByName('numNode').active = false
    }

    returnNum(num: number, type: number) {
        if (num == 1) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype9
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype9
            }
        } else if (num == 2) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype10
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype10
            }
        } else if (num == 3) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype11
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype11
            }
        } else if (num == 4) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype12
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype12
            }
        } else if (num == 5) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype13
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype13
            }
        } else if (num == 6) {
            if (type == 0) {
                this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 1) {
                this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 2) {
                this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 3) {
                this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 4) {
                this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 5) {
                this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 6) {
                this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = this.alttype14
            } else if (type == 7) {
                this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = this.alttype14
            }
        }
    }

    clearNum() {
        this.node.getChildByName('numNode').getChildByName('Sprite').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite1').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite2').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite3').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite4').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite5').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite6').getComponent(Sprite).spriteFrame = null
        this.node.getChildByName('numNode').getChildByName('Sprite7').getComponent(Sprite).spriteFrame = null
    }

    update(deltaTime: number) {

    }
}


