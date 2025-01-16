import { _decorator, Component, Node, Vec3, tween } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ddlhyts')
export class ddlhyts extends Component {
    start() {
        this.rotationPlate()
        this.rotationPlate1()
    }

    rotationPlate() {
        let mr = tween().to(1, { position: new Vec3(0, 1.188, 0) }, { easing: 'expoIn' })
        let ml = tween().to(1, { position: new Vec3(4.88, 1.188, 0) }, { easing: 'expoIn' })
        tween(this.node.getChildByName('Sprite')).then(mr).delay(0.3).then(ml).repeat(1).start()
    }
    rotationPlate1() {
        let mr = tween().to(1, { position: new Vec3(0, -1, 0) }, { easing: 'expoIn' })
        let ml = tween().to(1, { position: new Vec3(-6, -1, 0) }, { easing: 'expoIn' })
        tween(this.node.getChildByName('Sprite1')).then(mr).delay(0.3).then(ml).repeat(1).start()
    }

    // 恢复原有位置
    recoverPosition() {
        setTimeout(() => {
            this.node.getChildByName('Sprite').setPosition(-4.8, 1.188, 0)
            this.node.getChildByName('Sprite1').setPosition(6,-1,0)
        }, 200);
    }
    update(deltaTime: number) {

    }
}


