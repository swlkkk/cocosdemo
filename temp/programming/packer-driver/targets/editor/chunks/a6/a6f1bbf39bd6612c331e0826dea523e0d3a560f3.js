System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, encrypt;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2b48cwnDetMeqTX3RgrBEHK", "encrypt", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("encrypt", encrypt = (_dec = ccclass('encrypt'), _dec(_class = class encrypt extends Component {
        constructor(...args) {
          super(...args);

          //key生成
          this.generateUUID = (length = 64) => {
            // 字符集
            let letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let result = '';

            for (let i = 0; i < length; i++) {
              result += letters[Math.floor(Math.random() * letters.length)];
            }

            return result;
          };
        }

        start() {}

        // 加密函数
        encode(input, key) {
          let buf = unescape(encodeURIComponent(input));
          let keys = unescape(encodeURIComponent(key));
          let encoded = '';
          let i = null;

          for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          return btoa(encoded);
        } // 解密函数


        decode(input, key) {
          let buf = atob(input);
          let keys = unescape(encodeURIComponent(key));
          let decoded = '';
          let i = null;

          for (i in buf) {
            decoded += String.fromCharCode(255 & i ^ buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length));
          }

          return decodeURIComponent(escape(decoded));
        } // 加密函数


        ws_encode(input, key, salt) {
          let buf = unescape(encodeURIComponent(input));
          let keys = unescape(encodeURIComponent(key));
          let encoded = '';
          let i = null;

          for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          if (salt && salt.length > 0) {
            let salts = unescape(encodeURIComponent(salt));
            let tempEncoded = '';

            for (let i = 0; i < encoded.length; i++) {
              let a = encoded.charCodeAt(i);
              let b = salts.charCodeAt(i % salts.length);
              tempEncoded += String.fromCharCode(a ^ b);
            }

            encoded = tempEncoded;
          }

          return btoa(encoded);
        } // 解密函数


        ws_decode(encoded, key, salt) {
          let decoded = atob(encoded); // Decode base64

          if (salt && salt.length > 0) {
            let salts = unescape(encodeURIComponent(salt));
            let tempDecoded = '';

            for (let i = 0; i < decoded.length; i++) {
              let a = decoded.charCodeAt(i);
              let b = salts.charCodeAt(i % salts.length);
              tempDecoded += String.fromCharCode(a ^ b);
            }

            decoded = tempDecoded;
          }

          let keys = unescape(encodeURIComponent(key));
          let buf = '';
          let i = null;

          for (i in decoded) {
            buf += String.fromCharCode(decoded.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          return decodeURIComponent(escape(buf)); // Convert back to original string
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a6f1bbf39bd6612c331e0826dea523e0d3a560f3.js.map