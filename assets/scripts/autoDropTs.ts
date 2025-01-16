import { _decorator, Component, Node, Label, color } from 'cc';
import { coinCreate } from './coinCreate';
import { popcontrol } from './popcontrol';
const { ccclass, property } = _decorator;

@ccclass('autoDropTs')
export class autoDropTs extends Component {
    @property(Label)
    public speedLabel: Label | null = null;
    start() {

    }

    changeAutoSt() {
        var ccsPu = this.node.parent.parent.parent.parent
        if(ccsPu.getComponent(coinCreate).userCoins < ccsPu.getComponent(coinCreate).price) {
            if (this.node.parent.parent.getChildByName('pop_node').getChildByName('balance_node').active == false) {
                this.node.parent.parent.getChildByName('pop_node').getComponent(popcontrol).controlBalance(true)
            }
            return
        }
        if (ccsPu.getComponent(coinCreate).winning) return
        if (!ccsPu.getComponent(coinCreate).autoStatus) {
            ccsPu.getComponent(coinCreate).autoStatus = true
            if (!ccsPu.getComponent(coinCreate).autoTips) {
                ccsPu.getComponent(coinCreate).autoTips = true
                this.node.getChildByName('auto_tips_node').active = true
                setTimeout(() => {
                    this.node.getChildByName('auto_tips_node').active = false
                }, 2000);
            }
            this.node.getChildByName('auto_switch').active = false
            this.node.getChildByName('auto_label').getComponent(Label).outlineColor = color(215, 116, 0)
            this.node.getChildByName('auto_switch-on').active = true
            this.node.parent.getChildByName('drop_count').active = false
            this.node.parent.getChildByName('drop_btn').active = false
            this.node.parent.getChildByName('drop_btn_auto').active = true
            this.speedLabel.string = 'x' + ccsPu.getComponent(coinCreate).autoSpeed
            this.node.getChildByName('auto_speed_node').active = true
            ccsPu.getComponent(coinCreate).autoSwitch()
        } else {
            ccsPu.getComponent(coinCreate).autoStatus = false
            this.node.getChildByName('auto_switch').active = true
            this.node.getChildByName('auto_switch-on').active = false
            this.node.parent.getChildByName('drop_count').active = true
            this.node.parent.getChildByName('drop_btn').active = true
            this.node.parent.getChildByName('drop_btn_auto').active = false
            this.node.getChildByName('auto_speed_node').active = false
            this.node.getChildByName('auto_label').getComponent(Label).outlineColor = color(0, 0, 0)
            ccsPu.getComponent(coinCreate).autoSwitch()
        }
    }

    clearAutoStatus() {
        this.node.getChildByName('auto_switch').active = true
        this.node.getChildByName('auto_switch-on').active = false
        this.node.parent.getChildByName('drop_count').active = true
        this.node.parent.getChildByName('drop_btn').active = true
        this.node.parent.getChildByName('drop_btn_auto').active = false
        this.node.getChildByName('auto_speed_node').active = false
    }

    changeSpeed() {
        var ce = this.node.parent.parent.parent.parent.getComponent(coinCreate)
        if (ce.winning) return
        if (this.speedLabel.string == 'x1') {
            this.speedLabel.string = 'x2'
            ce.autoSpeed = 2
            ce.autoSwitch(ce.autoSpeed)
        } else if (this.speedLabel.string == 'x2') {
            this.speedLabel.string = 'x3'
            ce.autoSpeed = 3
            ce.autoSwitch(ce.autoSpeed)
        } else {
            this.speedLabel.string = 'x1'
            ce.autoSpeed = 1
            ce.autoSwitch(ce.autoSpeed)
        }
    }

    update(deltaTime: number) {

    }
}

