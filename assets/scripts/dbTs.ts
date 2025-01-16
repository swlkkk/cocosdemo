import { _decorator, Component, Node, tween, Vec3, RigidBody, Collider, ICollisionEvent, math, BoxCollider, CylinderCollider, PhysicsSystem } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('dbTS')
export class dbTs extends Component {
    start() {
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onTriggerEnter', this.onTriggerStay, this);
    }

    private onTriggerStay(event: ICollisionEvent) {
        var coinBody = event.otherCollider.node.getComponent(RigidBody);
        if (coinBody != null) {
            if (coinBody.node.name == 'coinnew') {
                coinBody.setLinearVelocity(new Vec3(0, -120, 0))
            }
        }
    }
    update(deltaTime: number) {

    }
}
