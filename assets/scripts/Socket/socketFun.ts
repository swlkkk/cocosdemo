import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { encrypt } from '../Api/encrypt';

@ccclass('socketFun')
export class socketFun extends Component {
    start() {

    }
    Enc = new encrypt()
    shuffle(obj) {
        const keys = Object.keys(obj)
        const newObj = {}
        keys.sort(() => Math.random() - 0.5).forEach((key) => {
            newObj[key] = obj[key]
        })
        return newObj
    }
    ws_dropcoin() {
        let sendData: any = {
            action: 2,
        }
        return sendData
    }
    ws_userout() {
        let sendData: any = {
            action: 6,
        }
        return sendData
    }
    ws_channelpass(channel) {
        let sendData: any = {
            action: 3,
            channel: channel,
        }
        return sendData
    }
    ws_validcoin(no:number) {
        let sendData: any = {
            action: 5,
            no: no
        }
        return sendData
    }
    ws_spinpass() {
        let sendData: any = {
            action: 4,
        }
        return sendData
    }
    update(deltaTime: number) {
        
    }
}

