import { _decorator, Component, Node, Animation} from 'cc';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('xmlAnim')
export class xmlAnim extends Component {
    start() {
        this.switchOne(true)
    }

    // 控制第一个剪辑动画
    switchOne (control: boolean) {
        let xmlAnimate = this.node.getComponent(Animation)
        if(control) {
            this.node.getChildByName('Sprite').active = true
            if(i18n._language == 'tc') {
                xmlAnimate.play('xmlanimate')
            } else {
                xmlAnimate.play('xmlanimate_en')
            }
        } else {
            this.node.getChildByName('Sprite').active = false
            xmlAnimate.stop()
        }
    }

    // 控制第二个剪辑动画
    switchTwo (control: boolean) {
        let xmlAnimate = this.node.getComponent(Animation)
        if(control) {
            this.node.getChildByName('Sprite1').active = true
            if(i18n._language == 'tc') {
                xmlAnimate.play('xmlanimate')
            } else {
                xmlAnimate.play('xmlanimate_en')
            }
        } else {
            this.node.getChildByName('Sprite1').active = false
            xmlAnimate.stop()
        }
    }

    // 控制按下和结束
    switchThree(num: number,control: boolean) {
        if(num == 1) {
            if(control) {
                this.node.getChildByName('Sprite2').active = true
            } else {
                this.node.getChildByName('Sprite2').active = false
            }
        } else if(num == 2) {
            if(control) {
                this.node.getChildByName('Sprite3').active = true
            } else {
                this.node.getChildByName('Sprite3').active = false
            }
        }
    }

    recoverAll() {
        this.node.getChildByName('Sprite').active = false
        this.node.getChildByName('Sprite1').active = false
        this.node.getChildByName('Sprite2').active = false
        this.node.getChildByName('Sprite3').active = false
    }

    update(deltaTime: number) {
        
    }
}

