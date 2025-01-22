import { _decorator, Component, Node, Sprite, SpriteFrame, resources, director, game, native, sys } from 'cc';
import { coinCreate } from './coinCreate';
import { popcontrol } from './popcontrol';
const { ccclass, property } = _decorator;

@ccclass('menu')
export class menu extends Component {
    menuSpritePath = [
        'btn_tbj_exit/spriteFrame',
        'btn_tbj_putaway/spriteFrame',
        'btn_tbj_mu/spriteFrame',
        'btn_tbj_mu2/spriteFrame'
    ]
    orientsymbol = false

    onLoad(): void {
        this.menuSpritePath.forEach((spritePath) => {
            resources.preload(spritePath, SpriteFrame)
        })
    }
    start() {
        var pusher = this.node.parent.parent.parent
        if (pusher.getComponent(coinCreate).soundStatus) {
            resources.load(this.menuSpritePath[2], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath
            })
        } else {
            resources.load(this.menuSpritePath[3], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath
            })
        }
    }
    orientChange() {
        if (!this.orientsymbol) {
            this.orientsymbol = true
            resources.load(this.menuSpritePath[1], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('back_btn').getComponent(Sprite).spriteFrame = spritePath
            })
            this.node.getChildByName('menu_bg').active = false
            this.node.getChildByName('charge').active = false
            this.node.getChildByName('rule').active = false
            this.node.getChildByName('sound').active = false
        } else {
            this.orientsymbol = false
            resources.load(this.menuSpritePath[0], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('back_btn').getComponent(Sprite).spriteFrame = spritePath
            })
            this.node.getChildByName('menu_bg').active = true
            this.node.getChildByName('charge').active = true
            this.node.getChildByName('rule').active = true
            this.node.getChildByName('sound').active = true
        }
    }
    // 充值
    toCharge() {
        var popControl = this.node.parent.getChildByName('pop_node').getComponent(popcontrol)
        popControl.controlCharge(true)
    }
    // 离开房间
    roomOut() {
        var pusher = this.node.parent.parent.parent.getComponent(coinCreate)
        var popControl = this.node.parent.getChildByName('pop_node').getComponent(popcontrol)
        if (pusher.isDroped) {
            popControl.controlQuite(true)
        } else {
            pusher.closeOut()
        }
    }
    // 规则弹窗
    conRule() {
        var popControl = this.node.parent.getChildByName('pop_node').getComponent(popcontrol)
        popControl.controlRule(true)
    }
    // 声音控制
    soundSwitch() {
        var pusher = this.node.parent.parent.parent.getComponent(coinCreate)
        if (pusher.soundStatus) {
            pusher.soundStatus = false
            resources.load(this.menuSpritePath[3], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath
            })
            pusher.soundApi.stop()
        } else {
            pusher.soundStatus = true
            resources.load(this.menuSpritePath[2], SpriteFrame, (err, spritePath) => {
                this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath
            })
            pusher.playMusic('music/bgMusic')
        }
        // if (sys.os == sys.OS.ANDROID && sys.isNative) {
        //     native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "setSound", "(Z)V", pusher.soundStatus);
        // }
    }
    update(deltaTime: number) {

    }
}

