import { _decorator, Component, Node, log } from 'cc';
const { ccclass, property } = _decorator;
import { MD5 } from '../Api/MD5';
import { encrypt } from '../Api/encrypt';

@ccclass('socketApi')
export class socketApi extends Component {
    start() {

    }
    // 加密
    Md5 = new MD5()
    Enc = new encrypt()
    public websocket_openListen(ws: any, data: any) {
        ws.onopen = () => {
            ws.send(data);
        }
    }
    public websocket_messageListen(ws: any, uuid:string, wssaltLen: any, callback: any) {
        ws.onmessage = (e: MessageEvent) => {
            let salt = e.data.substr(0, wssaltLen)
            if(ws.url.indexOf('nonce') != -1) {
                callback(JSON.parse(e.data)); 
            } else {
                callback(JSON.parse(this.Enc.ws_decode(e.data.substr(wssaltLen), uuid, salt)));
            }
        };
    }
    public websocket_errorListen(ws: any, callback: any) {
        ws.onerror = (e: MessageEvent) => {
            callback(e.data);
        };
    }
    public websocket_closeListen(ws: any, callback: any) {
        ws.onclose = (e: MessageEvent) => {
            callback(e.data);
        };
    }
    public websocket_close(ws: any) {
        try {
            ws.close();
        } catch (error) {
            console.error('close err');
        }
    }
    shuffle(obj) {
        const keys = Object.keys(obj)
        const newObj = {}
        keys.sort(() => Math.random() - 0.5).forEach((key) => {
            newObj[key] = obj[key]
        })
        return newObj
    }
    public websocket_sendMessage(message: any, ws: any, uuid: string, salt: string) {
        if (ws.readyState == ws.OPEN) {
            ws.send(salt + this.Enc.ws_encode(JSON.stringify(message), uuid, salt));
        } else {
            return;
        }
    }
    public async websocket_resign(_id, uid, vip, token, uuid, salt, recordId, billId) {
        let sendData: any = {
            action: 0,
            user_id: _id,
            user_uid: uid,
            user_vip: vip,
            token: token,
            record_id: recordId,
            bill_id: billId,
        }
        let sign = _id + uid + sendData.ts  + token;
        sendData.sign = this.Md5.md5(sign);
        sendData = salt + this.Enc.ws_encode(JSON.stringify(sendData), uuid, salt)
        return sendData
    }
    public async websocket_sign(_id, uid, vip, token, uuid, salt, recordId,) {
        let sendData: any = {
            action: 1,
            user_id: _id,
            user_uid: uid,
            user_vip: vip,
            token: token,
            record_id: recordId,
        }
        let sign = _id + uid + sendData.ts  + token;
        sendData.sign = this.Md5.md5(sign);
        sendData = salt + this.Enc.ws_encode(JSON.stringify(sendData), uuid, salt)
        return sendData
    }
    update(deltaTime: number) {

    }
}

