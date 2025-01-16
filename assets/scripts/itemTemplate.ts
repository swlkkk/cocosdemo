import { _decorator, Component, Node, Sprite, Label, resources, SpriteFrame, native, sys } from 'cc';
const { ccclass, property } = _decorator;
import * as i18n from 'db://i18n/LanguageData';

@ccclass('itemTemplate')
export class itemTemplate extends Component {
    @property(Sprite)
    public chargeIcon: Sprite | null = null;
    @property(Label)
    public priceLab: Label | null = null;
    @property(Label)
    public botPrice: Label | null = null;
    @property
    public chdata = null;

    goldSpritePath = [
        'icon_recharge1/spriteFrame',
        'icon_recharge2/spriteFrame',
        'icon_recharge3/spriteFrame',
        'icon_recharge4/spriteFrame',
        'icon_recharge5/spriteFrame',
        'icon_recharge6/spriteFrame',
        'icon_recharge7/spriteFrame',
    ]
    start() {
    }

    init(data: any, suffix: number) {
        this.chdata = data
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            if (data.fee < 60) {
                resources.load(this.goldSpritePath[0], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else if (data.fee < 100) {
                resources.load(this.goldSpritePath[1], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else if (data.fee < 200) {
                resources.load(this.goldSpritePath[2], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else if (data.fee < 500) {
                resources.load(this.goldSpritePath[3], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else if (data.fee < 1000) {
                resources.load(this.goldSpritePath[4], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else if (data.fee < 2000) {
                resources.load(this.goldSpritePath[5], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            } else {
                resources.load(this.goldSpritePath[6], SpriteFrame, (err, sprite) => {
                    this.chargeIcon.spriteFrame = sprite
                });
            }
        }
        if (data.fee < 60) {
            resources.load(this.goldSpritePath[0], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        } else if (data.fee < 100) {
            resources.load(this.goldSpritePath[1], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        } else if (data.fee < 200) {
            resources.load(this.goldSpritePath[2], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        } else if (data.fee < 500) {
            resources.load(this.goldSpritePath[3], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        } else if (data.fee < 1000) {
            resources.load(this.goldSpritePath[4], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        } else {
            resources.load(this.goldSpritePath[5], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite
            });
        }
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.botPrice.string = data.googlePrice
        }
        this.priceLab.string = data.coins +  i18n.t('cocos.jbx')
    }
    goProduct() {
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "onProductItemClick", "(Ljava/lang/String;)V", JSON.stringify(this.chdata))
        }
    }

    update(deltaTime: number) {

    }
}

