import {
    _decorator,
    Component,
    Node,
    Label,
    SpriteFrame,
    SpriteAtlas,
    resources,
    SpriteRenderer,
} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameCore')
export class gameCore extends Component {
    // 初始化通道变量
    public starting1: number = null
    public starting2: number = null
    // 通道图案变量
    public altpic1: SpriteFrame = null
    public altpic2: SpriteFrame = null
    public altpic3: SpriteFrame = null
    public altpic4: SpriteFrame = null
    public altpic5: SpriteFrame = null
    public altpic6: SpriteFrame = null
    public altpic7: SpriteFrame = null
    public altpic8: SpriteFrame = null
    public altpic9: SpriteFrame = null
    public altpic10: SpriteFrame = null
    public altpic11: SpriteFrame = null
    public altpic12: SpriteFrame = null
    public altpic13: SpriteFrame = null
    public altpic14: SpriteFrame = null
    public altpic15: SpriteFrame = null
    public altpic16: SpriteFrame = null

    protected onLoad(): void {
        this.loadAtlas();
    }

    start() {
    }
    // 给通道变量赋值
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
    }

    // 修改通道
    changeChannel() {
        if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic1
        } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic2
        } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic3
        } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic4
        } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic5
        } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic6
        } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic7
        } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic8
        }
        if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic1
        } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic2
        } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic3
        } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic4
        } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic5
        } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic6
        } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic7
        } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic8
        }
    }

    // 重置通道
    resertChannel() {
        if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic9
        } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic10
        } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic11
        } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic12
        } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic13
        } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic14
        } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic15
        } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic16
        }
        if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic9
        } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic10
        } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic11
        } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic12
        } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic13
        } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic14
        } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic15
        } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic16
        }
    }
    // 叠叠乐、小玛丽期间全部亮灯
    shiningAll () {
        this.node.getChildByName('channel0').getComponent(SpriteRenderer).spriteFrame = this.altpic1
        this.node.getChildByName('channel1').getComponent(SpriteRenderer).spriteFrame = this.altpic2
        this.node.getChildByName('channel2').getComponent(SpriteRenderer).spriteFrame = this.altpic3
        this.node.getChildByName('channel3').getComponent(SpriteRenderer).spriteFrame = this.altpic4
        this.node.getChildByName('channel4').getComponent(SpriteRenderer).spriteFrame = this.altpic5
        this.node.getChildByName('channel5').getComponent(SpriteRenderer).spriteFrame = this.altpic6
        this.node.getChildByName('channel6').getComponent(SpriteRenderer).spriteFrame = this.altpic7
        this.node.getChildByName('channel7').getComponent(SpriteRenderer).spriteFrame = this.altpic8
    }
    noShining () {
        this.node.getChildByName('channel0').getComponent(SpriteRenderer).spriteFrame = this.altpic9
        this.node.getChildByName('channel1').getComponent(SpriteRenderer).spriteFrame = this.altpic10
        this.node.getChildByName('channel2').getComponent(SpriteRenderer).spriteFrame = this.altpic11
        this.node.getChildByName('channel3').getComponent(SpriteRenderer).spriteFrame = this.altpic12
        this.node.getChildByName('channel4').getComponent(SpriteRenderer).spriteFrame = this.altpic13
        this.node.getChildByName('channel5').getComponent(SpriteRenderer).spriteFrame = this.altpic14
        this.node.getChildByName('channel6').getComponent(SpriteRenderer).spriteFrame = this.altpic15
        this.node.getChildByName('channel7').getComponent(SpriteRenderer).spriteFrame = this.altpic16
    }
    agShining () {
        if (this.starting1 == 0) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic1
        } else if (this.starting1 == 1) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic2
        } else if (this.starting1 == 2) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic3
        } else if (this.starting1 == 3) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic4
        } else if (this.starting1 == 4) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic5
        } else if (this.starting1 == 5) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic6
        } else if (this.starting1 == 6) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic7
        } else if (this.starting1 == 7) {
            this.node.getChildByName('channel' + this.starting1).getComponent(SpriteRenderer).spriteFrame = this.altpic8
        }
        if (this.starting2 == 0) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic1
        } else if (this.starting2 == 1) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic2
        } else if (this.starting2 == 2) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic3
        } else if (this.starting2 == 3) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic4
        } else if (this.starting2 == 4) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic5
        } else if (this.starting2 == 5) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic6
        } else if (this.starting2 == 6) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic7
        } else if (this.starting2 == 7) {
            this.node.getChildByName('channel' + this.starting2).getComponent(SpriteRenderer).spriteFrame = this.altpic8
        }
    }
    update(deltaTime: number) {

    }
}