import { _decorator, Component, Node, Vec3, tween, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('scoreAn')
export class scoreAn extends Component {
    public targetPos: Vec3 = new Vec3(0, 0, 0)
    public jumpStep: number = 50
    scoreAc = null
    scoreCount = 0
    start() {
    }

    scoreAn(price: number) {
        if (this.scoreAc == null) {
            this.node.active = true
            Vec3.add(this.targetPos, this.node.position, new Vec3(0, this.jumpStep, 0))
            let outSide = tween().to(0.25, { position: this.targetPos }, { easing: 'linear' })
            this.scoreAc = tween(this.node).then(outSide).call(() => {
                this.scoreAc = null
                this.node.active = false
                this.node.setPosition(0, -403.081, 0)
                this.targetPos = new Vec3(0, 0, 0)
                if (this.scoreCount > 0) {
                    this.node.getChildByName('Label').getComponent(Label).string = '+' + this.scoreCount * price
                    this.scoreCount = 0
                    this.scoreAn(price)
                } else {
                    this.node.getChildByName('Label').getComponent(Label).string = '+' + 1 * price
                    this.scoreCount = 0
                }
            }).start()
        } else {
            this.scoreCount++;
        }
    }


    update(deltaTime: number) {

    }
}

