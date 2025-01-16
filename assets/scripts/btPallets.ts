import { _decorator, Component, Node, Collider, ICollisionEvent, RigidBody} from 'cc';
const { ccclass, property } = _decorator;
import { poolManager } from './poolManager';

@ccclass('btPallets')
export class btPallets extends Component {
    onLoad() {
        let collider = this.node.getComponent(Collider);
        // 监听触发事件
        collider.on('onCollisionStay', this.onCollision, this);
    }
    start() {
    }

    private onCollision (event: ICollisionEvent) {
        poolManager.instance.putNode(event.otherCollider.node)
    }

    update(deltaTime: number) {
        
    }
}

