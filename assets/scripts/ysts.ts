import { _decorator, Component, Node } from 'cc';
import { wiperLeft } from './wiperLeft';
import { wiperRight } from './wiperRight';
const { ccclass, property } = _decorator;

@ccclass('ysts')
export class ysts extends Component {
    wiperStatus = true
    wStart = null
    start() {
    }

    wiperswitch() {
        if (Date.now() - this.wStart <= 800) {
            return;
        }
        this.wStart = Date.now()
        var wiperL = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('wiper_l.001').getComponent(wiperLeft)
        var wiperR = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('wiper_r.001').getComponent(wiperRight)
        if (this.wiperStatus) {
            wiperL.wileft.pause()
            wiperR.wiRight.pause()
            this.wiperStatus = false
        } else {
            wiperL.wileft.resume()
            wiperR.wiRight.resume()
            this.wiperStatus = true
        }
    }

    update(deltaTime: number) {

    }
}

