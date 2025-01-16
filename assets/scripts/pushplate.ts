import { _decorator, Component, Node, tween, Vec3, RigidBody, Collider, ICollisionEvent, assetManager } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('pushplate')
export class pushplate extends Component {
    public moveOut: Vec3 = new Vec3(0, 7.5, 0)
    public moveIn: Vec3 = new Vec3(0, -7.5, 0)
    start() {
        let collider = this.node.getComponent(Collider);
        // 监听触发事件
        collider.on('onCollisionEnter', this.onCollision, this);
        this.rotationPlate(this.node)
    }

    private onCollision(event: ICollisionEvent) {
        var coinBody = event.otherCollider.node.getComponent(RigidBody);
        if (coinBody != null) {
            if (coinBody.node.name == 'coinnew') {
                coinBody.useCCD = false
                coinBody.clearState()
            }
        }
    }

    rotationPlate(node: Node) {
        Vec3.add(this.moveIn, this.moveIn, this.node.position)
        Vec3.add(this.moveOut, this.moveOut, this.moveIn)
        let inSide = tween().to(1.3, { position: this.moveIn }, { easing: 'linear' })
        let outSide = tween().to(1.3, { position: this.moveOut }, { easing: 'linear' })
        tween(node).then(inSide).then(outSide).union().repeatForever().start()
    }

    update(deltaTime: number) {
    }
}