import { _decorator, Component, Node, Vec3 } from 'cc';
import { tween } from '../tween';
const { ccclass, property } = _decorator;

@ccclass('wiperLeft')
export class wiperLeft extends Component {
    wileft = null
    start() {
        var wiper = this.node.getChildByName('wiper_l')
        this.rotationWiper(wiper)
    }

    rotationWiper(node: Node) {
        let roteLeft = tween().to(1.5, { eulerAngles: new Vec3(0, 0, -45) }, { easing: 'linear' })
        let roteZero = tween().to(1.5, { eulerAngles: new Vec3(0, 0, 0) }, { easing: 'linear' })
        let roteRight = tween().to(1.5, { eulerAngles: new Vec3(0, 0, 45) }, { easing: 'linear' })
        this.wileft = tween(node).then(roteLeft).then(roteZero).then(roteRight).then(roteZero).union().repeatForever()
        this.wileft.start()
    }

    update(deltaTime: number) {

    }
}

