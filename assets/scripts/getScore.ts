import { _decorator, Component, Node, Collider, ICollisionEvent, RigidBody } from 'cc';
import { poolManager } from './poolManager';
import { coinCreate } from './coinCreate';
import { scoreAn } from './scoreAn';
const { ccclass, property } = _decorator;


@ccclass('getScore')
export class getScore extends Component {
    start() {
        let collider = this.node.getComponent(Collider);
        // 监听触发事件
        collider.on('onCollisionStay', this.onCollision, this)
    }

    private onCollision(event: ICollisionEvent) {
        // 检测到掉落到前面的金币加分并且销毁预制体
        poolManager.instance.putNode(event.otherCollider.node)
        // 拿到coinCreate主节点
        let cjTs = this.node.parent.getComponent(coinCreate)
        if (cjTs.activeClosed) {
            return
        }
        let scoreno = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('scoreAdd').getComponent(scoreAn)
        if (cjTs.isDroped) {
            cjTs.no = cjTs.no + cjTs.price
            let sendData = cjTs.websocketFnc.ws_validcoin(cjTs.no)
            scoreno.scoreAn(cjTs.price)
            cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
        }
    }

    update(deltaTime: number) {

    }
}

