import { _decorator, Component, Node, Sprite, SpriteAtlas, Label, resources, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;
import { coinCreate } from './coinCreate'
import * as i18n from 'db://i18n/LanguageData';

@ccclass('jpts')
export class jpts extends Component {
    @property(Label)
    label: Label = null;
    @property(Label)
    label1: Label = null;

    jptype3: SpriteFrame = null
    jptype4: SpriteFrame = null
    jptype5: SpriteFrame = null
    jptype1: SpriteFrame = null
    start() {
    }
    onLoad() {
        resources.load("jp", SpriteAtlas, (err, atlas) => {
            if(i18n._language == 'tc') {
                this.jptype1 = atlas.getSpriteFrame('03UI_10bonus_1');
            } else {
                this.jptype1 = atlas.getSpriteFrame('03UI_10bonus_1_en');
            }
            this.jptype3 = atlas.getSpriteFrame('03UI_10bonus_2');
            this.jptype4 = atlas.getSpriteFrame('03UI_10bonus_3');
            this.jptype5 = atlas.getSpriteFrame('03UI_10bonus_4');
            this.updateImg(this.node.parent.parent.parent.getComponent(coinCreate).awardType)
        });
    }
    // 奖励金币数量
    private _score: number = 0;

    public get score(): number {
        return this._score
    }

    public set score(parmas: number) {
        this._score = parmas;
        this.label.string = this._score.toString();
    }
    // 剩余金币数量
    private _score1: number = 0;

    public get score1(): number {
        return this._score1
    }

    public set score1(parmas: number) {
        this._score1 = parmas;
        this.label1.string = this._score1.toString();
    }

    updateImg(type: number) {
        if (type == 3) {
            // jp1
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype3
        } else if (type == 4) {
            // jp2
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype4
        } else if (type == 5) {
            // jp3
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype5
        } else if (type == 6) {
            // jp全盘奖
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype1
        }
    }

    update(deltaTime: number) {

    }
}

