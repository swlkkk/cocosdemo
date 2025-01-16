import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('lightNode')
export class lightNode extends Component {
    start() {
    }

    spinLight(type: string) {
        if (type == 'add') {
            if (!this.node.getChildByName('Sprite').active) {
                this.node.getChildByName('Sprite').active = true
            } else if (!this.node.getChildByName('Sprite1').active) {
                this.node.getChildByName('Sprite1').active = true
            } else if (!this.node.getChildByName('Sprite2').active) {
                this.node.getChildByName('Sprite2').active = true
            } else if (!this.node.getChildByName('Sprite3').active) {
                this.node.getChildByName('Sprite3').active = true
            }
        } else {
            if (this.node.getChildByName('Sprite3').active) {
                this.node.getChildByName('Sprite3').active = false
            } else if (this.node.getChildByName('Sprite2').active) {
                this.node.getChildByName('Sprite2').active = false
            } else if (this.node.getChildByName('Sprite1').active) {
                this.node.getChildByName('Sprite1').active = false
            } else if (this.node.getChildByName('Sprite').active) {
                this.node.getChildByName('Sprite').active = false
            }
        }
    }

    update(deltaTime: number) {

    }
}

