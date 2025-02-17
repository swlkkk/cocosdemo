import { _decorator, Component, Node, Vec3, BoxCollider, ITriggerEvent, Prefab, instantiate } from 'cc';
const { ccclass, property } = _decorator;
import { machine } from './machine';
import { coinCreate } from './coinCreate';
import { lightNode } from './lightNode';
import { tween } from '../tween';

@ccclass('spin')
export class spin extends Component {
    private moveLeft: Vec3 = new Vec3(-15.3, 0, 0)
    private moveRight: Vec3 = new Vec3(15.3, 0, 0)
    @property(Prefab)
    spinLight: Prefab = null;

    spinAc = null

    // 连线奖
    lineNum = null
    lineType = null
    // 经过spin的时间戳
    spints = 0
    redTimer = null
    spinNum = 0
    start() {
        this.moveSpin(this.node)
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onTriggerExit', this.onTriggerEnter, this);
        if (this.spinLight != null) {
            let spinLight = instantiate(this.spinLight);
            this.node.addChild(spinLight)
        };
    }

    onTriggerEnter(event: ITriggerEvent) {
        let Mc = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        let pusherControl = this.node.parent.parent.parent.parent.getChildByName('Pusher').getComponent(coinCreate)
        if (pusherControl.activeClosed) {
            return
        }
        if (!pusherControl.winning) {
            if (!Mc.isRolling) {
                if (Date.now() - this.spints <= 200) {
                    return;
                }
                pusherControl.playMusic('music/spinMs')
                if (this.redTimer == null) {
                    this.node.getChildByName('spinbg').getChildByName('Sprite20').active = true
                    this.node.getChildByName('spinbg').getChildByName('Sprite21').active = true
                    this.node.getChildByName('spinbg').getChildByName('Sprite22').active = true
                    this.node.getChildByName('spinbg').getChildByName('Sprite23').active = true
                    this.redTimer = setTimeout(() => {
                        this.node.getChildByName('spinbg').getChildByName('Sprite20').active = false
                        this.node.getChildByName('spinbg').getChildByName('Sprite21').active = false
                        this.node.getChildByName('spinbg').getChildByName('Sprite22').active = false
                        this.node.getChildByName('spinbg').getChildByName('Sprite23').active = false
                        clearTimeout(this.redTimer)
                        this.redTimer = null
                    }, 300);
                }
                this.spints = Date.now()
                Mc.onHandleClicked(8)
            } else {
                this.spinNum++;
                if (this.spinNum < 5) {
                    this.goLight()
                }
            }
        }
    }

    goSpinmess() {
    }
    goLight() {
        let ln = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('light_node').getComponent(lightNode)
        ln.spinLight('add')
    }
    delLight() {
        let ln = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('light_node').getComponent(lightNode)
        ln.spinLight('del')
    }
    moveSpin(node: Node, type?: boolean) {
        Vec3.add(this.moveRight, this.moveRight, this.node.position)
        Vec3.add(this.moveLeft, this.moveLeft, this.moveRight)
        let mover = tween().to(1.5, { position: this.moveRight }, { easing: 'linear' })
        let movel = tween().to(1.5, { position: this.moveLeft }, { easing: 'linear' })
        this.spinAc = tween(node).then(mover).then(movel).union().repeatForever()
        this.spinAc.start()
    }

    // 设置奖项
    setprize(type: number) {
        let Mc = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(machine)
        let pusherControl = this.node.parent.parent.parent.parent.getChildByName('Pusher').getComponent(coinCreate)
        if (type == 0) {
            // 连线奖
            pusherControl.awardType = 0
            let lxNum = Math.floor(Math.random() * 3)
            if (lxNum == 0) {
                Mc.onHandleClicked(5, 1);
            } else if (lxNum == 1) {
                Mc.onHandleClicked(5, 2);
            } else if (lxNum == 2) {
                Mc.onHandleClicked(5, 3);
            }
        } else if (type == 1) {
            // 小玛丽
            pusherControl.awardType = 1
            Mc.onHandleClicked(7);
        } else if (type == 2) {
            // 叠叠乐
            pusherControl.awardType = 2
            Mc.onHandleClicked(6);
        } else if (type == 3) {
            // JP1
            pusherControl.awardType = 3
            Mc.onHandleClicked(1);
        } else if (type == 4) {
            // JP2
            pusherControl.awardType = 4
            Mc.onHandleClicked(2);
        } else if (type == 5) {
            // Jp3
            pusherControl.awardType = 5
            Mc.onHandleClicked(3);
        } else {
            // 全盘奖
            pusherControl.awardType = 6
            Mc.onHandleClicked(4);
        }
    }
    update(deltaTime: number) {

    }
}