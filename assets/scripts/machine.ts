import { Prefab, resources, Sprite, Vec3, UITransform, SpriteFrame, instantiate, NodePool, Label, _decorator, Component, Node, tween, MeshRenderer, Material } from 'cc';
const { ccclass, property } = _decorator;
import { spin } from './spin';
import { coinCreate } from './coinCreate';
import { jpScorets } from './jpScorets';
import { ddlts } from './ddlts';
import { xmlts } from './xmlts';
import { lineAnimate } from './lineAnimate';
import { AllAnimate } from './AllAnimate';
import { gameCore } from './gameCore';
import { lxts } from './lxts';
import { jpts } from './jpts';
import { flashPicts } from './flashPicts';
import { labelts } from './labelts';
import { hyts } from './hyts';
import { ddlhyts } from './ddlhyts';
import { xmlAnim } from './xmlAnim';
import * as i18n from 'db://i18n/LanguageData';

@ccclass('machine')
export class machine extends Component {
    // 滚动图片预制，节点池以及图片路径（图片需要放在resources文件夹下）
    @property(Prefab)
    item: Prefab = null
    @property(Prefab)
    lineitem: Prefab = null
    itemNodePool: NodePool = new NodePool()
    itemSpritePathArray = [
        "turntable/Act_shoes/spriteFrame", // 鞋子(0)
        "turntable/Act_target/spriteFrame", // 箭靶(1)
        "turntable/Act_trumpet/spriteFrame", // 喇叭(2)
        "turntable/Act_ball/spriteFrame", // 绿球(3)
        "turntable/Act_drum/spriteFrame",  // 蛋糕(4)
        "turntable/Act_camp/spriteFrame", // 马戏团(5)
        "turntable/Act_monocycle/spriteFrame", // 独轮车(6)
        "turntable/Act_ongg/spriteFrame", // 气球(7)
        "turntable/Act_clown/spriteFrame", // 小丑(8)
    ]
    @property(Prefab)
    hyItem: Prefab = null
    @property(Prefab)
    lxItem: Prefab = null
    @property(Prefab)
    xmlItem: Prefab = null
    @property(Prefab)
    ddlhy: Prefab = null
    @property(Prefab)
    jpItem: Prefab = null
    @property(Prefab)
    ddlsetItem: Prefab = null


    // 三个窗口槽节点
    @property(Node)
    windowLayout1: Node = new Node()
    @property(Node)
    windowLayout2: Node = new Node()
    @property(Node)
    windowLayout3: Node = new Node()

    // 各个窗口中滚动的图片数量
    num1 = 12
    num2 = 15
    num3 = 18

    // 是否是第一次滚动
    isFirstRoll = true

    // 是否正在滚动
    isRolling = false

    // 初始jp连线奖
    jpline = [0, 1, 2, 3, 4, 5, 6, 7]

    // 剔除jp连线奖
    jplineOut = []

    // 普通连线奖
    randomsub = null;

    // 连线奖中奖图案
    randomicon = null

    // 中奖结果
    adone = []
    adtwo = []
    adthree = []

    spriteArr: Array<SpriteFrame> = []
    @property(Material)
    m1: Material = null
    @property(Material)
    m2: Material = null
    @property(Material)
    m3: Material = null
    @property(Material)
    m4: Material = null
    @property(Material)
    m5: Material = null
    @property(Material)
    m6: Material = null
    main: Material = null
    mini1: Material = null
    mini2: Material = null
    
    onLoad(): void {
        // 预加载资源
        this.itemSpritePathArray.forEach((spritePath) => {
            resources.preload(spritePath, SpriteFrame)
        })
        if (i18n._language == 'tc') {
            this.main = this.m1
            this.mini1 = this.m2
            this.mini2 = this.m3
        } else {
            this.main = this.m4
            this.mini1 = this.m5
            this.mini2 = this.m6
        }
        // 抽奖设置
        this.setAward(8)
    }

    start() {
        setTimeout(() => {
            this.onHandleClicked(8)
        }, 1500);
    }
    // 从数组中随机取值
    getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];  //即值交换
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    // 从数组中删除特定元素
    filterArray = (arr, num) => arr.filter((item) => item !== num)
    // 初始化奖项
    setAward(type: number, subtype?: number) {
        var spinAct = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
        // 先清空子节点，回收预制
        while (this.windowLayout1.children.length > 0) {
            this.itemNodePool.put(this.windowLayout1.children[this.windowLayout1.children.length - 1])
        }
        while (this.windowLayout2.children.length > 0) {
            this.itemNodePool.put(this.windowLayout2.children[this.windowLayout2.children.length - 1])
        }
        while (this.windowLayout3.children.length > 0) {
            this.itemNodePool.put(this.windowLayout3.children[this.windowLayout3.children.length - 1])
        }
        // 重设窗口Layout位置
        this.windowLayout1.setPosition(0, -5.7, 0)
        this.windowLayout2.setPosition(0, -5.7, 0)
        this.windowLayout3.setPosition(0, -5.7, 0)

        /* 此处是设置最终结果逻辑 */
        var index1Arr = []
        var index2Arr = []
        var index3Arr = []
        if (type == 1) {  // jp1连线奖为每一数列第二个均为小丑
            this.jplineOut = this.jpline
            /* 1 */
            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            index1Arr[1] = 8
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
            /* 2 */
            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            index2Arr[1] = 8
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
            /* 3 */
            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            index3Arr[1] = 8
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
        } else if (type == 2) { // jp2连线奖为每一数列第一个均为小丑
            this.jplineOut = this.jpline
            /* 1 */
            index1Arr[0] = 8
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
            /* 2 */
            index2Arr[0] = 8
            index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1])
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
            /* 3 */
            index3Arr[0] = 8
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
        } else if (type == 3) { // jp3连线奖为每一数列第三个均为小丑
            this.jplineOut = this.jpline
            /* 1 */
            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
            index1Arr[2] = 8
            /* 2 */
            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
            index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1])
            index2Arr[2] = 8
            /* 3 */
            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
            index3Arr[2] = 8
        } else if (type == 4) { // 全盘奖
            // 测试随机挑选一个图案作为全盘奖
            var randomPrize = Math.floor(Math.random() * 8)
            /* 1 */
            index1Arr[0] = randomPrize
            index1Arr[1] = randomPrize
            index1Arr[2] = randomPrize
            /* 2 */
            index2Arr[0] = randomPrize
            index2Arr[1] = randomPrize
            index2Arr[2] = randomPrize
            /* 3 */
            index3Arr[0] = randomPrize
            index3Arr[1] = randomPrize
            index3Arr[2] = randomPrize
        } else if (type == 5) { // 普通连线奖
            this.jplineOut = this.jpline
            if (subtype == 1) { // 随机选一排连线奖
                this.randomsub = Math.floor(Math.random() * 3)
                this.randomicon = spinAct.lineType[0]
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon)
                if (this.randomsub == 0) {
                    /* 1 */
                    index1Arr[0] = this.randomicon
                    index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
                    index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
                    /* 2 */
                    index2Arr[0] = this.randomicon
                    index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1])
                    index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
                    /* 3 */
                    index3Arr[0] = this.randomicon
                    index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
                    index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
                } else if (this.randomsub == 1) {
                    /* 1 */
                    index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    index1Arr[1] = this.randomicon
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
                    index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
                    /* 2 */
                    index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    index2Arr[1] = this.randomicon
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
                    index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
                    /* 3 */
                    index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    index3Arr[1] = this.randomicon
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
                    index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
                } else if (this.randomsub == 2) {
                    /* 1 */
                    index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
                    index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
                    index1Arr[2] = this.randomicon
                    /* 2 */
                    index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
                    index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1])
                    index2Arr[2] = this.randomicon
                    /* 3 */
                    index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
                    index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
                    index3Arr[2] = this.randomicon
                }
            } else if (subtype == 2) { // 随机选二排连线奖
                this.randomsub = this.getRandomArrayElements([0, 1, 2], 2)
                this.randomicon = spinAct.lineType
                if (this.randomsub.indexOf(0) == -1) {
                    /* 1 */
                    index1Arr[1] = this.randomicon[0]
                    index1Arr[2] = this.randomicon[1]
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0])
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1])
                    index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
                    /* 2 */
                    index2Arr[1] = this.randomicon[0]
                    index2Arr[2] = this.randomicon[1]
                    index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
                    /* 3 */
                    index3Arr[1] = this.randomicon[0]
                    index3Arr[2] = this.randomicon[1]
                    index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
                } else if (this.randomsub.indexOf(1) == -1) {
                    /* 1 */
                    index1Arr[0] = this.randomicon[0]
                    index1Arr[2] = this.randomicon[1]
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0])
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1])
                    index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
                    /* 2 */
                    index2Arr[0] = this.randomicon[0]
                    index2Arr[2] = this.randomicon[1]
                    index2Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[1])
                    /* 3 */
                    index3Arr[0] = this.randomicon[0]
                    index3Arr[2] = this.randomicon[1]
                    index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
                } else if (this.randomsub.indexOf(2) == -1) {
                    /* 1 */
                    index1Arr[0] = this.randomicon[0]
                    index1Arr[1] = this.randomicon[1]
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0])
                    this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1])
                    index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
                    /* 2 */
                    index2Arr[0] = this.randomicon[0]
                    index2Arr[1] = this.randomicon[1]
                    index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
                    /* 3 */
                    index3Arr[0] = this.randomicon[0]
                    index3Arr[1] = this.randomicon[1]
                    index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
                    this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
                }
            } else { // 三排连线奖
                this.randomicon = spinAct.lineType
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[0])
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[1])
                this.jplineOut = this.filterArray(this.jplineOut, this.randomicon[2])
                /* 1 */
                index1Arr[0] = this.randomicon[0]
                index1Arr[1] = this.randomicon[1]
                index1Arr[2] = this.randomicon[2]
                /* 2 */
                index2Arr[0] = this.randomicon[0]
                index2Arr[1] = this.randomicon[1]
                index2Arr[2] = this.randomicon[2]
                /* 3 */
                index3Arr[0] = this.randomicon[0]
                index3Arr[1] = this.randomicon[1]
                index3Arr[2] = this.randomicon[2]
            }
        } else if (type == 6) { // 叠叠乐
            this.jplineOut = this.jpline
            /* 1 */
            index1Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[0])
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
            index1Arr[2] = 8
            /* 2 */
            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            index2Arr[1] = 8
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
            /* 3 */
            index3Arr[0] = 8
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
            index3Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[2])
        } else if (type == 7) { // 小玛丽
            this.jplineOut = this.jpline
            /* 1 */
            index1Arr[0] = 8
            index1Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[1])
            index1Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index1Arr[2])
            /* 2 */
            index2Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            index2Arr[1] = 8
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[0])
            index2Arr[2] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index2Arr[2])
            /* 3 */
            index3Arr[0] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[0])
            index3Arr[1] = this.getRandomArrayElements(this.jplineOut, 1)[0]
            this.jplineOut = this.filterArray(this.jplineOut, index3Arr[1])
            index3Arr[2] = 8
        } else if (type == 8) { // 正常滚动随机赋值
            var { a, b, c } = this.generateArrays();
            index1Arr = [a[0], b[0], c[0]]
            index2Arr = [a[1], b[1], c[1]]
            index3Arr = [a[2], b[2], c[2]]
        }
        // 第一竖排结果
        var item1Arr = [
            this.spawnItem(this.itemSpritePathArray[index1Arr[0]]),
            this.spawnItem(this.itemSpritePathArray[index1Arr[1]]),
            this.spawnItem(this.itemSpritePathArray[index1Arr[2]]),
        ]
        // 第二竖排结果
        var item2Arr = [
            this.spawnItem(this.itemSpritePathArray[index2Arr[0]]),
            this.spawnItem(this.itemSpritePathArray[index2Arr[1]]),
            this.spawnItem(this.itemSpritePathArray[index2Arr[2]]),
        ]
        // 第三竖排结果
        var item3Arr = [
            this.spawnItem(this.itemSpritePathArray[index3Arr[0]]),
            this.spawnItem(this.itemSpritePathArray[index3Arr[1]]),
            this.spawnItem(this.itemSpritePathArray[index3Arr[2]]),
        ]
        this.adone = item1Arr
        this.adtwo = item2Arr
        this.adthree = item3Arr
        // 第一竖排结果添加
        this.windowLayout1.addChild(item1Arr[0])
        this.windowLayout1.addChild(item1Arr[1])
        this.windowLayout1.addChild(item1Arr[2])
        // 第二竖排结果添加
        this.windowLayout2.addChild(item2Arr[0])
        this.windowLayout2.addChild(item2Arr[1])
        this.windowLayout2.addChild(item2Arr[2])
        // 第三竖排结果添加
        this.windowLayout3.addChild(item3Arr[0])
        this.windowLayout3.addChild(item3Arr[1])
        this.windowLayout3.addChild(item3Arr[2])
        this.replenishItem()
    }
    // 后续添加 将上面的num1,num2和num3减去3(展示几张减去几张)是为了留出三张图片以供显示结果
    // 每个竖排随机填充三张图片补充空缺
    replenishItem() {
        // 往每个窗口添加一定数量图片 第三个窗口滚动最久、图片设置最多
        for (let i = 0; i < this.num1 - 3; i++) {
            let item = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()])
            this.windowLayout1.addChild(item)
        }
        for (let i = 0; i < this.num2 - 3; i++) {
            let item = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()])
            this.windowLayout2.addChild(item)
        }
        for (let i = 0; i < this.num3 - 3; i++) {
            let item = this.spawnItem(this.itemSpritePathArray[this.getRandomIndex()])
            this.windowLayout3.addChild(item)
        }
        var path1Arr = [
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
        ]
        var path2Arr = [
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
        ]
        var path3Arr = [
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
            this.itemSpritePathArray[this.getRandomIndex()],
        ]
        // 第一竖排补充
        this.windowLayout1.addChild(this.spawnItem(path1Arr[0]))
        this.windowLayout1.addChild(this.spawnItem(path1Arr[1]))
        this.windowLayout1.addChild(this.spawnItem(path1Arr[2]))
        // 第二竖排补充
        this.windowLayout2.addChild(this.spawnItem(path2Arr[0]))
        this.windowLayout2.addChild(this.spawnItem(path2Arr[1]))
        this.windowLayout2.addChild(this.spawnItem(path2Arr[2]))
        // 第三竖排补充
        this.windowLayout3.addChild(this.spawnItem(path3Arr[0]))
        this.windowLayout3.addChild(this.spawnItem(path3Arr[1]))
        this.windowLayout3.addChild(this.spawnItem(path3Arr[2]))
    }

    spawnItem(spritePath: string) {
        // 生成预制体
        var item = null!
        if (this.itemNodePool.size() > 0) {
            item = this.itemNodePool.get()
        } else {
            item = instantiate(this.item)
        }
        // 设置图片
        if (spritePath == 'turntable/Act_shoes/spriteFrame') {
            if (this.spriteArr[0] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[0] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[0]
            }
        } else if (spritePath == 'turntable/Act_target/spriteFrame') {
            if (this.spriteArr[1] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[1] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[1]
            }
        } else if (spritePath == 'turntable/Act_trumpet/spriteFrame') {
            if (this.spriteArr[2] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[2] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[2]
            }
        } else if (spritePath == 'turntable/Act_ball/spriteFrame') {
            if (this.spriteArr[3] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[3] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[3]
            }
        } else if (spritePath == 'turntable/Act_drum/spriteFrame') {
            if (this.spriteArr[4] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[4] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[4]
            }
        } else if (spritePath == 'turntable/Act_camp/spriteFrame') {
            if (this.spriteArr[5] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[5] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[5]
            }
        } else if (spritePath == 'turntable/Act_monocycle/spriteFrame') {
            if (this.spriteArr[6] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[6] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[6]
            }
        } else if (spritePath == 'turntable/Act_ongg/spriteFrame') {
            if (this.spriteArr[7] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[7] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[7]
            }
        } else if (spritePath == 'turntable/Act_clown/spriteFrame') {
            if (this.spriteArr[8] == null) {
                resources.load(spritePath, SpriteFrame, (err, asset) => {
                    this.spriteArr[8] = asset
                    item.getComponent(Sprite).spriteFrame = asset
                })
            } else {
                item.getComponent(Sprite).spriteFrame = this.spriteArr[8]
            }
        }
        // 设置图片大小
        item.getComponent(UITransform).width = 3.8
        item.getComponent(UITransform).height = 3.8
        return item
    }
    generateUniqueArray() {
        var arr = [];
        while (arr.length < 3) {
            let num = Math.floor(Math.random() * 9);  // 随机生成 0 到 8 之间的数
            if (arr.length < 2 || arr[0] !== num || arr[1] !== num) {  // 确保不完全相同
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

            if ((a[0] !== b[1] || b[1] !== c[2] || a[0] !== c[2]) &&
                (a[2] !== b[1] || a[2] !== c[0] || b[1] !== c[0])) {
                valid = true;
            }
        }
        return { a, b, c };
    }

    // 生成线条预制体
    spawnLine(type: number, subtype?: number) {
        var lialionLine = this.node.parent.getChildByName('liaisonLine')
        if (type == 1) {
            // jp1连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setPosition(0, 0, 0)
                lialionLine.addChild(lineitem)
            }
        } else if (type == 2) {
            // jp2连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setPosition(0, 3.5, 0)
                lialionLine.addChild(lineitem)
            }
        } else if (type == 3) {
            // jp3连线奖
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setPosition(0, -3.6, 0)
                lialionLine.addChild(lineitem)
            }
        } else if (type == 4) {
            // 全盘奖
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setPosition(0, 0, 0)
                lialionLine.addChild(lineitem)
            }
            if (lialionLine.getChildByName('lineitem2') != null) {
                lialionLine.getChildByName('lineitem2').setPosition(0, 3.5, 0)
                lialionLine.getChildByName('lineitem2').active = true
            } else {
                var lineitem2 = instantiate(this.lineitem)
                lineitem2.name = 'lineitem2'
                lineitem2.setPosition(0, 3.5, 0)
                lialionLine.addChild(lineitem2)
            }
            if (lialionLine.getChildByName('lineitem3') != null) {
                lialionLine.getChildByName('lineitem3').setPosition(0, -3.6, 0)
                lialionLine.getChildByName('lineitem3').active = true
            } else {
                var lineitem3 = instantiate(this.lineitem)
                lineitem3.name = 'lineitem3'
                lineitem3.setPosition(0, 3.5, 0)
                lialionLine.addChild(lineitem3)
            }
            if (lialionLine.getChildByName('lineitem4') != null) {
                lialionLine.getChildByName('lineitem4').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem4').setScale(new Vec3(1.2, 1.2, 1))
                lialionLine.getChildByName('lineitem4').setRotationFromEuler(0, 0, 35)
                lialionLine.getChildByName('lineitem4').active = true
            } else {
                var lineitem4 = instantiate(this.lineitem)
                lineitem4.name = 'lineitem4'
                lineitem4.setScale(new Vec3(1.2, 1.2, 1))
                lineitem4.setRotationFromEuler(0, 0, 35)
                lineitem4.setPosition(0, 0, 0)
                lialionLine.addChild(lineitem4)
            }
            if (lialionLine.getChildByName('lineitem5') != null) {
                lialionLine.getChildByName('lineitem5').setScale(new Vec3(1.2, 1.2, 1))
                lialionLine.getChildByName('lineitem5').setRotationFromEuler(0, 0, -35)
                lialionLine.getChildByName('lineitem5').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem5').active = true
            } else {
                var lineitem5 = instantiate(this.lineitem)
                lineitem5.name = 'lineitem5'
                lineitem5.setScale(new Vec3(1.2, 1.2, 1))
                lineitem5.setRotationFromEuler(0, 0, -35)
                lineitem5.setPosition(0, 0, 0)
                lialionLine.addChild(lineitem5)
            }
        } else if (type == 5) {
            // 普通连线奖
            if (subtype == 1) {
                if (this.randomsub == 0) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, 3.5, 0)
                        lialionLine.addChild(lineitem)
                    }
                } else if (this.randomsub == 1) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, 0, 0)
                        lialionLine.addChild(lineitem)
                    }
                } else if (this.randomsub == 2) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, -3.6, 0)
                        lialionLine.addChild(lineitem)
                    }
                }
            } else if (subtype == 2) {
                if (this.randomsub[0] == 0) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, 3.5, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, 3.5, 0)
                        lialionLine.addChild(lineitem)
                    }
                } else if (this.randomsub[0] == 1) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, 0, 0)
                        lialionLine.addChild(lineitem)
                    }
                } else if (this.randomsub[0] == 2) {
                    if (lialionLine.getChildByName('lineitem') != null) {
                        lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                        lialionLine.getChildByName('lineitem').setPosition(0, -3.6, 0)
                        lialionLine.getChildByName('lineitem').active = true
                    } else {
                        var lineitem = instantiate(this.lineitem)
                        lineitem.name = 'lineitem'
                        lineitem.setPosition(0, -3.6, 0)
                        lialionLine.addChild(lineitem)
                    }
                }
                if (this.randomsub[1] == 0) {
                    if (lialionLine.getChildByName('lineitem1') != null) {
                        lialionLine.getChildByName('lineitem1').setPosition(0, 3.5, 0)
                        lialionLine.getChildByName('lineitem1').active = true
                    } else {
                        var lineitem1 = instantiate(this.lineitem)
                        lineitem1.name = 'lineitem1'
                        lineitem1.setPosition(0, 3.5, 0)
                        lialionLine.addChild(lineitem1)
                    }
                } else if (this.randomsub[1] == 1) {
                    if (lialionLine.getChildByName('lineitem1') != null) {
                        lialionLine.getChildByName('lineitem1').setPosition(0, 0, 0)
                        lialionLine.getChildByName('lineitem1').active = true
                    } else {
                        var lineitem1 = instantiate(this.lineitem)
                        lineitem1.name = 'lineitem1'
                        lineitem1.setPosition(0, 0, 0)
                        lialionLine.addChild(lineitem1)
                    }
                } else if (this.randomsub[1] == 2) {
                    if (lialionLine.getChildByName('lineitem1') != null) {
                        lialionLine.getChildByName('lineitem1').setPosition(0, -3.6, 0)
                        lialionLine.getChildByName('lineitem1').active = true
                    } else {
                        var lineitem1 = instantiate(this.lineitem)
                        lineitem1.name = 'lineitem1'
                        lineitem1.setPosition(0, -3.6, 0)
                        lialionLine.addChild(lineitem1)
                    }
                }
            } else if (subtype == 3) {
                if (lialionLine.getChildByName('lineitem') != null) {
                    lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 0)
                    lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                    lialionLine.getChildByName('lineitem').active = true
                } else {
                    var lineitem = instantiate(this.lineitem)
                    lineitem.name = 'lineitem'
                    lineitem.setPosition(0, 0, 0)
                    lialionLine.addChild(lineitem)
                }
                if (lialionLine.getChildByName('lineitem2') != null) {
                    lialionLine.getChildByName('lineitem2').setPosition(0, 3.5, 0)
                    lialionLine.getChildByName('lineitem2').active = true
                } else {
                    var lineitem2 = instantiate(this.lineitem)
                    lineitem2.name = 'lineitem2'
                    lineitem2.setPosition(0, 3.5, 0)
                    lialionLine.addChild(lineitem2)
                }
                if (lialionLine.getChildByName('lineitem3') != null) {
                    lialionLine.getChildByName('lineitem3').setPosition(0, -3.6, 0)
                    lialionLine.getChildByName('lineitem3').active = true
                } else {
                    var lineitem3 = instantiate(this.lineitem)
                    lineitem3.name = 'lineitem3'
                    lineitem3.setPosition(0, -3.6, 0)
                    lialionLine.addChild(lineitem3)
                }
            }
        } else if (type == 6) {
            // 叠叠乐
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, 32)
                lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setPosition(0, 0, 0)
                lineitem.setRotationFromEuler(0, 0, 32)
                lialionLine.addChild(lineitem)
            }
        } else if (type == 7) {
            // 小玛丽
            if (lialionLine.getChildByName('lineitem') != null) {
                lialionLine.getChildByName('lineitem').setRotationFromEuler(0, 0, -32)
                lialionLine.getChildByName('lineitem').setPosition(0, 0, 0)
                lialionLine.getChildByName('lineitem').active = true
            } else {
                var lineitem = instantiate(this.lineitem)
                lineitem.name = 'lineitem'
                lineitem.setRotationFromEuler(0, 0, -32)
                lineitem.setPosition(0, 0, 0)
                lialionLine.addChild(lineitem)
            }
        }
    }

    getRandomIndex() {
        // 随机获取一张图片的索引
        var index = Math.floor(Math.random() * this.itemSpritePathArray.length)
        return index
    }
    onHandleClicked(type: number, subtype?: number) {
        if (this.isRolling) {
            return
        }
        // 设置为正在滚动
        this.isRolling = true
        // 设置窗口滚动内容，第一次滚动时已在start()中设置
        if (this.isFirstRoll) {
            this.isFirstRoll = false
            this.normalAnimation()
        } else {
            this.setAward(type, subtype)
            var itemHeight = this.windowLayout1.children[0].getComponent(UITransform).height
            var jpSw = this.node.parent.getChildByName('jpScore').getComponent(jpScorets)
            tween(this.windowLayout1)
                .by(0.6, { position: new Vec3(0, -this.num1 * itemHeight, 0) }, { easing: 'sineInOut' })
                .start()

            tween(this.windowLayout2)
                .by(0.8, { position: new Vec3(0, -this.num2 * itemHeight, 0) }, { easing: 'sineInOut' })
                .start()

            tween(this.windowLayout3)
                .by(1, { position: new Vec3(0, -this.num3 * itemHeight, 0) }, { easing: 'sineInOut' })
                .call(() => {
                    var coinDo = this.node.parent.parent.parent.getComponent(coinCreate)
                    if (coinDo.winning) {
                        var sprite = this.node.parent.parent.getChildByName('mainScreen').getComponent(MeshRenderer)
                        if (type == 1) {
                            // jp1中奖处理
                            this.spawnLine(1)
                            this.spinSwitch(false)
                            this.adone[1].addComponent(lineAnimate)
                            this.adtwo[1].addComponent(lineAnimate)
                            this.adthree[1].addComponent(lineAnimate)
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                if (this.node.parent.getChildByName('jpAnim') != null) {
                                    this.node.parent.getChildByName('jpAnim').getComponent(jpts).updateImg(3)
                                    this.node.parent.getChildByName('jpAnim').active = true
                                } else {
                                    // 生成jp奖画面
                                    let jpshow = instantiate(this.jpItem)
                                    jpshow.setPosition(-343.017, -597.996, 26.08)
                                    this.node.parent.addChild(jpshow)
                                }
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score = coinDo.zjCoins
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score1 = coinDo.zjCoins
                                coinDo.autoTarget = coinDo.zjCoins
                                coinDo.autoCast()
                            }, 500);
                        } else if (type == 2) {
                            // jp2中奖处理
                            this.spawnLine(2)
                            this.spinSwitch(false)
                            this.adone[0].addComponent(lineAnimate)
                            this.adtwo[0].addComponent(lineAnimate)
                            this.adthree[0].addComponent(lineAnimate)
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                if (this.node.parent.getChildByName('jpAnim') != null) {
                                    this.node.parent.getChildByName('jpAnim').getComponent(jpts).updateImg(4)
                                    this.node.parent.getChildByName('jpAnim').active = true
                                } else {
                                    // 生成jp奖画面
                                    let jpshow = instantiate(this.jpItem)
                                    jpshow.setPosition(-343.017, -597.996, 26.08)
                                    this.node.parent.addChild(jpshow)
                                }
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score = coinDo.zjCoins
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score1 = coinDo.zjCoins
                                coinDo.autoTarget = coinDo.zjCoins
                                coinDo.autoCast()
                            }, 500);
                        } else if (type == 3) {
                            // jp3中奖处理
                            this.spawnLine(3)
                            this.spinSwitch(false)
                            this.adone[2].addComponent(lineAnimate)
                            this.adtwo[2].addComponent(lineAnimate)
                            this.adthree[2].addComponent(lineAnimate)
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                // 生成jp奖画面
                                if (this.node.parent.getChildByName('jpAnim') != null) {
                                    this.node.parent.getChildByName('jpAnim').getComponent(jpts).updateImg(5)
                                    this.node.parent.getChildByName('jpAnim').active = true
                                } else {
                                    // 生成jp奖画面
                                    let jpshow = instantiate(this.jpItem)
                                    jpshow.setPosition(-343.017, -597.996, 26.08)
                                    this.node.parent.addChild(jpshow)
                                }
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score = coinDo.zjCoins
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score1 = coinDo.zjCoins
                                coinDo.autoTarget = coinDo.zjCoins
                                coinDo.autoCast()
                            }, 500);
                        } else if (type == 4) {
                            // jp全盘奖
                            this.spawnLine(4)
                            this.spinSwitch(false)
                            this.adone[0].addComponent(AllAnimate)
                            this.adone[1].addComponent(AllAnimate)
                            this.adone[2].addComponent(AllAnimate)
                            this.adtwo[0].addComponent(AllAnimate)
                            this.adtwo[1].addComponent(AllAnimate)
                            this.adtwo[2].addComponent(AllAnimate)
                            this.adthree[0].addComponent(AllAnimate)
                            this.adthree[1].addComponent(AllAnimate)
                            this.adthree[2].addComponent(AllAnimate)
                            let alllineFlash = setInterval(() => {
                                if (!this.node.parent.getChildByName('liaisonLine').active) {
                                    setTimeout(() => {
                                        this.node.parent.getChildByName('liaisonLine').active = true
                                    }, 125);
                                } else {
                                    setTimeout(() => {
                                        this.node.parent.getChildByName('liaisonLine').active = false
                                    }, 125);
                                }
                            }, 125)
                            setTimeout(() => {
                                clearInterval(alllineFlash)
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem2').active = false
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem3').active = false
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem4').active = false
                                this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem5').active = false
                                if (this.node.parent.getChildByName('jpAnim') != null) {
                                    this.node.parent.getChildByName('jpAnim').getComponent(jpts).updateImg(6)
                                    this.node.parent.getChildByName('jpAnim').active = true
                                } else {
                                    // 生成jp奖画面
                                    let jpshow = instantiate(this.jpItem)
                                    jpshow.setPosition(-343.017, -597.996, 26.08)
                                    this.node.parent.addChild(jpshow)
                                }
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score = coinDo.zjCoins
                                this.node.parent.getChildByName('jpAnim').getComponent(jpts).score1 = coinDo.zjCoins
                                coinDo.autoTarget = coinDo.zjCoins
                                coinDo.autoCast()
                            }, 5000);
                        } else if (type == 5) {
                            this.spinSwitch(false)
                            // 普通连线奖
                            if (subtype == 1) {
                                this.spawnLine(5, 1)
                                this.adone[this.randomsub].addComponent(lineAnimate)
                                this.adtwo[this.randomsub].addComponent(lineAnimate)
                                this.adthree[this.randomsub].addComponent(lineAnimate)
                            } else if (subtype == 2) {
                                this.spawnLine(5, 2)
                                this.adone[this.randomsub[0]].addComponent(lineAnimate)
                                this.adone[this.randomsub[1]].addComponent(lineAnimate)
                                this.adtwo[this.randomsub[0]].addComponent(lineAnimate)
                                this.adtwo[this.randomsub[1]].addComponent(lineAnimate)
                                this.adthree[this.randomsub[0]].addComponent(lineAnimate)
                                this.adthree[this.randomsub[1]].addComponent(lineAnimate)
                            } else if (subtype == 3) {
                                this.spawnLine(5, 3)
                                this.adone[0].addComponent(lineAnimate)
                                this.adone[1].addComponent(lineAnimate)
                                this.adone[2].addComponent(lineAnimate)
                                this.adtwo[0].addComponent(lineAnimate)
                                this.adtwo[1].addComponent(lineAnimate)
                                this.adtwo[2].addComponent(lineAnimate)
                                this.adthree[0].addComponent(lineAnimate)
                                this.adthree[1].addComponent(lineAnimate)
                                this.adthree[2].addComponent(lineAnimate)
                            }
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                if (this.node.parent.getChildByName('lxshow') != null) {
                                    this.node.parent.getChildByName('lxshow').active = true
                                } else {
                                    // 生成获奖展示界面
                                    let lxshow = instantiate(this.lxItem)
                                    lxshow.setPosition(-345.051, -597.314, 26.08)
                                    this.node.parent.addChild(lxshow)
                                }
                                // 当前获奖的全部金币数量
                                jpSw.getScore = coinDo.zjCoins
                                coinDo.autoTarget = coinDo.zjCoins
                                if (subtype == 1) {
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score = coinDo.zjCoins
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score1 = coinDo.zjCoins
                                    this.lineFlash(this.randomicon, true)
                                } else if (subtype == 2) {
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score = coinDo.zjCoins
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score1 = coinDo.zjCoins
                                    this.lineFlash(this.randomicon[0], true)
                                    this.lineFlash(this.randomicon[1], true)
                                } else if (subtype == 3) {
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score = coinDo.zjCoins
                                    this.node.parent.getChildByName('lxshow').getComponent(lxts).score1 = coinDo.zjCoins
                                    this.lineFlash(this.randomicon[0], true)
                                    this.lineFlash(this.randomicon[1], true)
                                    this.lineFlash(this.randomicon[2], true)
                                }
                                coinDo.autoCast()
                            }, 500);
                        } else if (type == 6) {
                            // 叠叠乐
                            this.spawnLine(6)
                            this.spinSwitch(false)
                            this.adone[2].addComponent(lineAnimate)
                            this.adtwo[1].addComponent(lineAnimate)
                            this.adthree[0].addComponent(lineAnimate)
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                if (this.node.parent.getChildByName('ddlshow') != null) {
                                    this.node.parent.getChildByName('ddlshow').active = true
                                    this.node.parent.getChildByName('ddlshow').getComponent(ddlhyts).rotationPlate()
                                    this.node.parent.getChildByName('ddlshow').getComponent(ddlhyts).rotationPlate1()
                                } else {
                                    // 生成欢迎叠叠乐界面
                                    let ddlshow = instantiate(this.ddlhy)
                                    ddlshow.setPosition(-345.051, -597.314, 26.08)
                                    this.node.parent.addChild(ddlshow)
                                }
                                setTimeout(() => {
                                    coinDo.ddlSwitch = true
                                    this.node.parent.getChildByName('ddlshow').active = false
                                    this.node.parent.getChildByName('ddlshow').getComponent(ddlhyts).recoverPosition();
                                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                    this.node.getChildByName('Window1').getChildByName('Layout1').removeAllChildren()
                                    this.node.getChildByName('Window2').getChildByName('Layout2').removeAllChildren()
                                    this.node.getChildByName('Window3').getChildByName('Layout3').removeAllChildren()
                                    sprite.setSharedMaterial(this.mini2, 0)
                                    this.node.parent.getChildByName('out').active = false
                                    this.node.parent.getChildByName('light_node').active = false
                                    this.node.parent.getChildByName('ddlgame').active = true;
                                    this.node.parent.parent.parent.getComponent(gameCore).shiningAll()
                                    this.ddlcountDown()
                                }, 2300);
                            }, 500);
                        } else if (type == 7) {
                            // 小玛丽
                            this.spawnLine(7)
                            this.spinSwitch(false)
                            this.adone[0].addComponent(lineAnimate)
                            this.adtwo[1].addComponent(lineAnimate)
                            this.adthree[2].addComponent(lineAnimate)
                            setTimeout(() => {
                                this.node.parent.getChildByName('liaisonLine').active = false
                                setTimeout(() => {
                                    this.node.parent.getChildByName('liaisonLine').active = true
                                }, 125);
                            }, 125);
                            setTimeout(() => {
                                if (this.node.parent.getChildByName('hyshow') != null) {
                                    this.node.parent.getChildByName('hyshow').active = true
                                    this.node.parent.getChildByName('hyshow').getComponent(hyts).rotationPlate()
                                    this.node.parent.getChildByName('hyshow').getComponent(hyts).rotationPlate1()
                                } else {
                                    // 生成欢迎小玛丽界面
                                    let hyshow = instantiate(this.hyItem)
                                    hyshow.setPosition(-345.051, -597.314, 26.08)
                                    this.node.parent.addChild(hyshow)
                                }
                                setTimeout(() => {
                                    coinDo.xmlSwitch = true
                                    this.node.parent.getChildByName('hyshow').active = false
                                    this.node.parent.getChildByName('hyshow').getComponent(hyts).recoverPosition();
                                    this.node.parent.getChildByName('liaisonLine').getChildByName('lineitem').active = false
                                    this.node.getChildByName('Window1').getChildByName('Layout1').removeAllChildren()
                                    this.node.getChildByName('Window2').getChildByName('Layout2').removeAllChildren()
                                    this.node.getChildByName('Window3').getChildByName('Layout3').removeAllChildren()
                                    sprite.setSharedMaterial(this.mini1, 0)
                                    this.node.parent.getChildByName('out').active = false
                                    this.node.parent.getChildByName('light_node').active = false
                                    this.node.parent.getChildByName('xmlgame').active = true;
                                    this.node.parent.parent.parent.getComponent(gameCore).shiningAll()
                                    if (this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim') != null) {
                                        this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim').active = true
                                        this.node.parent.getChildByName('xmlgame').getChildByName('xmlAnim').getComponent(xmlAnim).switchOne(true)
                                    } else {
                                        // 生成小玛丽动画
                                        let xmlshow = instantiate(this.xmlItem)
                                        xmlshow.setPosition(0, 0, 0)
                                        this.node.parent.getChildByName('xmlgame').addChild(xmlshow)
                                    }
                                    this.xmlcountDown()
                                }, 2300);
                            }, 500);
                        }
                    }
                    setTimeout(() => {
                        this.isRolling = false
                        if (coinDo.allowed) {
                            coinDo.allowed = false
                            this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin).setprize(coinDo.awardType)
                        } else {
                            if (coinDo.winning || coinDo.activeClosed) {
                                return
                            } else {
                                let sp = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
                                if (sp.spinNum > 0) {
                                    // 发送抽奖消息
                                    sp.goSpinmess()
                                    if (sp.spinNum > 4) {
                                        sp.spinNum--;
                                    } else {
                                        sp.delLight()
                                        sp.spinNum--;
                                    }
                                }
                            }
                        }
                    }, 500);
                })
                .start()
        }
    }

    // 默认执行一次的假动画
    normalAnimation() {
        let itemHeight = this.windowLayout1.children[0].getComponent(UITransform).height
        tween(this.windowLayout1)
            .by(0.6, { position: new Vec3(0, -this.num1 * itemHeight, 0) }, { easing: 'sineInOut' })
            .start()

        tween(this.windowLayout2)
            .by(0.8, { position: new Vec3(0, -this.num2 * itemHeight, 0) }, { easing: 'sineInOut' })
            .start()

        tween(this.windowLayout3)
            .by(1, { position: new Vec3(0, -this.num3 * itemHeight, 0) }, { easing: 'sineInOut' })
            .call(() => {
                setTimeout(() => {
                    this.isRolling = false
                    if(!this.node) {
                        return
                    }
                    var coinDo = this.node.parent.parent.parent.getComponent(coinCreate)
                    if (coinDo.allowed) {
                        coinDo.allowed = false
                        this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin).setprize(coinDo.awardType)
                    } else {
                        if (coinDo.winning || coinDo.activeClosed) {
                            return
                        } else {
                            var sp = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin').getComponent(spin)
                            if (sp.spinNum > 0) {
                                // 发送抽奖消息
                                sp.goSpinmess()
                                if (sp.spinNum > 4) {
                                    sp.spinNum--;
                                } else {
                                    sp.delLight()
                                    sp.spinNum--;
                                }
                            }
                        }
                    }
                }, 500);
            })
            .start()
    }
    // 游戏转盘重置
    doRestore() {
        var sprite = this.node.parent.parent.getChildByName('mainScreen').getComponent(MeshRenderer)
        sprite.setSharedMaterial(this.main, 0)
        this.node.parent.getChildByName('out').active = true
        this.node.parent.getChildByName('light_node').active = true
        this.onHandleClicked(8)
    }

    // 小玛丽倒计时处理
    xmlcountDown() {
        var xmlgame = this.node.parent.getChildByName('xmlgame').getComponent(xmlts)
        var xmlti = this.node.parent.getChildByName('xmlgame').getChildByName('xmlTime')
        var coinDo = this.node.parent.parent.parent.getComponent(coinCreate)
        xmlti.getComponent(Label).string = '10'
        xmlti.active = true
        coinDo.xmltimer = setInterval(() => {
            if (Number(xmlti.getComponent(Label).string) > 0 && coinDo.xmlnum < 1) {
                xmlti.getComponent(Label).string = (Number(xmlti.getComponent(Label).string) - 1).toString()
            } else {
                if (coinDo.xmlnum != 1) {
                    coinDo.xmlnum += 1
                    xmlgame.toRoll(xmlgame.startIndex)
                    setTimeout(() => {
                        xmlgame.resultarr = coinDo.xmlcoinArr
                        xmlgame.stopPos = xmlgame.resultarr[0]
                        var isover = setInterval(() => {
                            if (xmlgame.isover) {
                                clearInterval(isover)
                                coinDo.autoTarget = coinDo.zjCoins
                                // 当前获奖的全部金币数量
                                this.node.parent.getChildByName('jpScore').getComponent(jpScorets).getScore = coinDo.zjCoins
                                coinDo.autoCast()
                            }
                        }, 1000)
                    }, 3000);
                }
                clearInterval(coinDo.xmltimer)
            }
        }, 1000)
    }

    // 叠叠乐倒计时处理
    ddlcountDown() {
        var ddlti = this.node.parent.getChildByName('ddlgame').getChildByName('ddltime')
        var ddlto = this.node.parent.getChildByName('ddlgame').getChildByName('ddltotal')
        var ddlgame = this.node.parent.getChildByName('ddlgame').getComponent(ddlts)
        var coinDo = this.node.parent.parent.parent.getComponent(coinCreate)
        ddlti.getComponent(Label).string = '60'
        ddlto.getComponent(Label).string = '6'
        ddlti.active = true
        ddlto.active = true
        coinDo.ddltimer = setInterval(() => {
            if (Number(ddlti.getComponent(Label).string) > 0 && ddlgame.awardTotal > 0) {
                ddlti.getComponent(Label).string = (Number(ddlti.getComponent(Label).string) - 1).toString()
            } else {
                clearInterval(coinDo.ddltimer)
                coinDo.ddlauto = true
                if (ddlgame.awardTotal > 0) {
                    coinDo.ddlOne = setInterval(() => {
                        if (ddlgame.awardTotal > 0) {
                            coinDo.ddlOnce()
                        } else {
                            clearInterval(coinDo.ddlOne)
                            if (coinDo.autoTimer == null) {
                                if (this.node.parent.getChildByName('ddlset') != null) {
                                    this.node.parent.getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0'
                                    this.node.parent.getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0'
                                    this.node.parent.getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0'
                                    this.node.parent.getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = ''
                                    this.node.parent.getChildByName('ddlset').active = true
                                } else {
                                    // 生成结算分数界面
                                    var ddlset = instantiate(this.ddlsetItem)
                                    ddlset.setPosition(-345.051, -597.314, 26.08)
                                    this.node.parent.addChild(ddlset)
                                }
                                // 结算ddl总分数
                                coinDo.getddlsort()
                            }
                        }
                    }, 1500)
                } else {
                    if (coinDo.autoTimer == null) {
                        if (this.node.parent.getChildByName('ddlset') != null) {
                            this.node.parent.getChildByName('ddlset').getChildByName('Label').getComponent(Label).string = '0'
                            this.node.parent.getChildByName('ddlset').getChildByName('Label1').getComponent(Label).string = '0'
                            this.node.parent.getChildByName('ddlset').getChildByName('Label2').getComponent(Label).string = '0'
                            this.node.parent.getChildByName('ddlset').getChildByName('Label3').getComponent(Label).string = ''
                            this.node.parent.getChildByName('ddlset').active = true
                        } else {
                            // 生成结算分数界面
                            var ddlset = instantiate(this.ddlsetItem)
                            ddlset.setPosition(-345.051, -597.314, 26.08)
                            this.node.parent.addChild(ddlset)
                        }
                        // 结算ddl总分数
                        coinDo.getddlsort()
                    }
                }
            }
        }, 1000)
    }

    // spin停止运动
    spinSwitch(type: boolean) {
        var spinAction = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('spin')
        if (!type) {
            var Mless = setInterval(() => {
                if (spinAction.position.x >= 39.4) {
                    clearInterval(Mless)
                    spinAction.getComponent(spin).spinAc.pause()
                }
            }, 5)
        } else {
            spinAction.getComponent(spin).spinAc.resume()
            const spIter = setInterval(() => {
                if(spinAction.getComponent(spin).spinAc._finalAction._paused) {
                    spinAction.getComponent(spin).spinAc.resume()
                } else {
                    clearInterval(spIter)
                }
            }, 1000);
        }
    }

    // 连线奖对应奖项闪烁开关
    lineFlash(num: number, type: boolean) {
        // 闪屏图片
        var flashPic = this.node.parent.getChildByName('flashNode').getComponent(flashPicts)
        // 闪屏数字
        var flashLabel = this.node.parent.getChildByName('labels').getComponent(labelts)
        flashPic.doFlashLine(num, type)
        flashLabel.dolabelLine(num, type)
    }

    update(deltaTime: number) {

    }
}


