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
        constructor() {
          super(...arguments);

          //key生成
          this.generateUUID = function (length) {
            if (length === void 0) {
              length = 64;
            }

            // 字符集
            var letters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            var result = '';

            for (var i = 0; i < length; i++) {
              result += letters[Math.floor(Math.random() * letters.length)];
            }

            return result;
          };
        }

        start() {}

        // 加密函数
        encode(input, key) {
          var buf = unescape(encodeURIComponent(input));
          var keys = unescape(encodeURIComponent(key));
          var encoded = '';
          var i = null;

          for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          return btoa(encoded);
        } // 解密函数


        decode(input, key) {
          var buf = atob(input);
          var keys = unescape(encodeURIComponent(key));
          var decoded = '';
          var i = null;

          for (i in buf) {
            decoded += String.fromCharCode(255 & i ^ buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length));
          }

          return decodeURIComponent(escape(decoded));
        } // 加密函数


        ws_encode(input, key, salt) {
          var buf = unescape(encodeURIComponent(input));
          var keys = unescape(encodeURIComponent(key));
          var encoded = '';
          var i = null;

          for (i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          if (salt && salt.length > 0) {
            var salts = unescape(encodeURIComponent(salt));
            var tempEncoded = '';

            for (var _i = 0; _i < encoded.length; _i++) {
              var a = encoded.charCodeAt(_i);
              var b = salts.charCodeAt(_i % salts.length);
              tempEncoded += String.fromCharCode(a ^ b);
            }

            encoded = tempEncoded;
          }

          return btoa(encoded);
        } // 解密函数


        ws_decode(encoded, key, salt) {
          var decoded = atob(encoded); // Decode base64

          if (salt && salt.length > 0) {
            var salts = unescape(encodeURIComponent(salt));
            var tempDecoded = '';

            for (var _i2 = 0; _i2 < decoded.length; _i2++) {
              var a = decoded.charCodeAt(_i2);
              var b = salts.charCodeAt(_i2 % salts.length);
              tempDecoded += String.fromCharCode(a ^ b);
            }

            decoded = tempDecoded;
          }

          var keys = unescape(encodeURIComponent(key));
          var buf = '';
          var i = null;

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