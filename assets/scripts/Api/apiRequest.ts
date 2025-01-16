import { _decorator, Component, Node, sys } from 'cc';
const { ccclass, property } = _decorator;
import { sign } from './sign';

@ccclass('apiRequest')
export class apiRequest extends Component {
    QM = new sign()
    start() {

    }
    //key生成
    generateUUID = (length = 64) => {
        // 字符集
        let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        let result = ''
        for (let i = 0; i < length; i++) {
            result += letters[Math.floor(Math.random() * letters.length)]
        }
        return result
    }
    // 加密函数
    encode(input, key) {
        let buf: any = unescape(encodeURIComponent(input))
        let keys = unescape(encodeURIComponent(key))
        let encoded = ''
        let i: any = null
        for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ (255 & i))
        }
        return btoa(encoded)
    }

    // 解密函数
    decode(input, key) {
        let buf: any = atob(input)
        let keys = unescape(encodeURIComponent(key))
        let decoded = ''
        let i: any = null
        for (i in buf) {
            decoded += String.fromCharCode((255 & i) ^ buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length))
        }
        return decodeURIComponent(escape(decoded))
    }
    /**
     * post请求封装
     */
    post = async (url: string, body: object, success: Function, failure: Function) => {
        let requestBody: any = Object.assign({}, body)
        let key = this.generateUUID()
        if (sys.localStorage.getItem('token')) {
            requestBody.token = sys.localStorage.getItem('token');
        }
        requestBody.app_id = 1499599523
        requestBody.ts = Date.now();
        requestBody.sign = this.QM.sign('zww', requestBody)
        let baseUrl = 'https://t.zhuagewawa.com/restapi/'
        return await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'text/plain',
                abcd: this.encode('/api/v2/' + url, key),
                uuid: key,
            },
            body: this.encode(JSON.stringify(requestBody), key),
        }).then(res => {
            return res.text();
        }).then(res => {
            let result: any = JSON.parse(this.decode(res, key))
            if (result.status === 'failed') {
                failure(result)
            } else {
                success(result)
            }
        })
    }

    update(deltaTime: number) {

    }
}

