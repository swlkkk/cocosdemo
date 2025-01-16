import { _decorator, Component, Node, tween, Vec3} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('lineAnimate')
export class lineAnimate extends Component {

    start() {
        this.rotation(this.node)
    }
    rotation(node: Node) {
        let ml = tween().to(0.1,{eulerAngles: new Vec3 (0,0,-4)}, {easing: 'linear'})
        let mz = tween().to(0.1,{eulerAngles: new Vec3 (0,0,0)}, {easing: 'linear'})
        let mr = tween().to(0.1,{eulerAngles: new Vec3 (0,0,4)}, {easing: 'linear'})
        tween(node).then(ml).then(mz).then(mr).then(mz).union().repeat(2).start()
    }
    update(deltaTime: number) {
        
    }
}

