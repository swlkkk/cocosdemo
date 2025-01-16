import { _decorator, Component, Node, BoxCollider, ITriggerEvent } from 'cc';
const { ccclass, property } = _decorator;
import { gameCore } from './gameCore';
import { flashPicts } from './flashPicts';
import { labelts } from './labelts';
import { coinCreate } from './coinCreate';

@ccclass('awardSensing')
export class awardSensing extends Component {
    // 亮起图标
    public channel: Array<number> = null

    onLoad(): void {
        let collider = this.node.getComponent(BoxCollider);
        collider.on('onTriggerExit', this.onTriggerEnter, this);
    }

    start() {
    }
    onTriggerEnter(event: ITriggerEvent) {
        this.channel = [this.node.parent.getComponent(gameCore).starting1, this.node.parent.getComponent(gameCore).starting2]
        // 闪屏图片
        let flashPic = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('flashNode').getComponent(flashPicts)
        // 闪屏数字
        let flashLabel = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getComponent(labelts)
        // 拿到coinCreate主节点
        let cjTs = this.node.parent.getComponent(coinCreate)
        if (cjTs.activeClosed) {
            return
        }
        if (event.selfCollider.node.name == 'IncentiveCube1') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(0) != -1) {
                    cjTs.channelCount = 0
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        0,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(0)
                    flashLabel.dolabel(0)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube2') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(1) != -1) {
                    cjTs.channelCount = 1
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        1,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(1)
                    flashLabel.dolabel(1)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube3') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(2) != -1) {
                    cjTs.channelCount = 2
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        2,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(2)
                    flashLabel.dolabel(2)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube4') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(3) != -1) {
                    cjTs.channelCount = 3
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        3,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(3)
                    flashLabel.dolabel(3)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube5') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(4) != -1) {
                    cjTs.channelCount = 4
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        4,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(4)
                    flashLabel.dolabel(4)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube6') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(5) != -1) {
                    cjTs.channelCount = 5
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        5,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(5)
                    flashLabel.dolabel(5)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube7') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(6) != -1) {
                    cjTs.channelCount = 6
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        6,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(6)
                    flashLabel.dolabel(6)
                    cjTs.playMusic('music/awardMs')
                }
            }
        } else if (event.selfCollider.node.name == 'IncentiveCube8') {
            if (!cjTs.winning) {
                if (this.channel.indexOf(7) != -1) {
                    cjTs.channelCount = 7
                    let sendData = cjTs.websocketFnc.ws_channelpass(
                        7,
                    )
                    cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt)
                    flashPic.doFlash(7)
                    flashLabel.dolabel(7)
                    cjTs.playMusic('music/awardMs')
                }
            }
        }
    }

    update(deltaTime: number) {

    }
}

