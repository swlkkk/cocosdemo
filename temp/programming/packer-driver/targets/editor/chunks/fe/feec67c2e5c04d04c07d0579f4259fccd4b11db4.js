System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, sign, _dec, _class, _crd, ccclass, property, apiRequest;

  function _reportPossibleCrUseOfsign(extras) {
    _reporterNs.report("sign", "./sign", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      sign = _unresolved_2.sign;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0f5a6rmKE9AZLeWAGjGydqR", "apiRequest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("apiRequest", apiRequest = (_dec = ccclass('apiRequest'), _dec(_class = class apiRequest extends Component {
        constructor(...args) {
          super(...args);
          this.QM = new (_crd && sign === void 0 ? (_reportPossibleCrUseOfsign({
            error: Error()
          }), sign) : sign)();

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

          /**
           * post请求封装
           */
          this.post = async (url, body, success, failure) => {
            let requestBody = Object.assign({}, body);
            let key = this.generateUUID();

            if (sys.localStorage.getItem('token')) {
              requestBody.token = sys.localStorage.getItem('token');
            }

            requestBody.app_id = 1499599523;
            requestBody.ts = Date.now();
            requestBody.sign = this.QM.sign('zww', requestBody);
            let baseUrl = 'https://t.zhuagewawa.com/restapi/';
            return await fetch(baseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain',
                abcd: this.encode('/api/v2/' + url, key),
                uuid: key
              },
              body: this.encode(JSON.stringify(requestBody), key)
            }).then(res => {
              return res.text();
            }).then(res => {
              let result = JSON.parse(this.decode(res, key));

              if (result.status === 'failed') {
                failure(result);
              } else {
                success(result);
              }
            });
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
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=feec67c2e5c04d04c07d0579f4259fccd4b11db4.js.map