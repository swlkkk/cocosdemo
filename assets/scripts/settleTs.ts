import { _decorator, Component, Node, Label, director, game, sys, native, assetManager } from 'cc';
import { awardCl } from './awardCl';
import { popcontrol } from './popcontrol';
import { coinCreate } from './coinCreate';
const { ccclass, property } = _decorator;

@ccclass('settleTs')
export class settleTs extends Component {
    @property(Label)
    closeCount: Label = null;
    overTime: number = 10
    overTimer = null
    start() {
    }

    openTimeOut() {
        this.overTimer = setInterval(() => {
            if (this.overTime > 0) {
                this.overTime--
                this.closeCount.string = this.overTime.toString()
            } else {
                this.closeSettle()
            }
        }, 1000)
    }

    closeSettle() {
        if (this.overTimer != null) {
            clearInterval(this.overTimer)
            this.overTimer = null
            this.overTime = 10
            this.closeCount.string = this.overTime.toString()
        }
        this.node.getChildByName('symbol_node').getChildByName('award_node').getComponent(awardCl).clearData()
        this.node.parent.getComponent(popcontrol).popNum--;
        this.node.active = false
        if (this.node.parent.getComponent(popcontrol).popNum == 0) {
            this.node.parent.active = false
        }
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.node.parent.parent.parent.parent.getComponent(coinCreate).releaseAny()
            this.node.parent.parent.parent.parent.active = false;
            this.node.parent.parent.parent.parent.parent.getChildByName('GameOver').active = true
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

