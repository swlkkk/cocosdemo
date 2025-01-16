import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('encrypt')
export class encrypt extends Component {
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

    // 加密函数
    ws_encode(input, key, salt) {
        let buf: any = unescape(encodeURIComponent(input))
        let keys = unescape(encodeURIComponent(key))
        let encoded = ''
        let i: any = null
        for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ (255 & i))
        }
        if (salt && salt.length > 0) {
            let salts = unescape(encodeURIComponent(salt))
            let tempEncoded = ''
            for (let i = 0; i < encoded.length; i++) {
                let a = encoded.charCodeAt(i)
                let b = salts.charCodeAt(i % salts.length)
                tempEncoded += String.fromCharCode(a ^ b)
            }
            encoded = tempEncoded
        }
        return btoa(encoded)
    }
    // 解密函数
    ws_decode(encoded, key, salt) {
        let decoded: any = atob(encoded) // Decode base64
        if (salt && salt.length > 0) {
            let salts = unescape(encodeURIComponent(salt))
            let tempDecoded = ''
            for (let i = 0; i < decoded.length; i++) {
                let a = decoded.charCodeAt(i)
                let b = salts.charCodeAt(i % salts.length)
                tempDecoded += String.fromCharCode(a ^ b)
            }
            decoded = tempDecoded
        }

        let keys = unescape(encodeURIComponent(key))
        let buf = ''
        let i: any = null
        for (i in decoded) {
            buf += String.fromCharCode(decoded.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ (255 & i))
        }

        return decodeURIComponent(escape(buf)) // Convert back to original string
    }
    update(deltaTime: number) {

    }
}

