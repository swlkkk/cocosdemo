System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, sys, sign, _dec, _class, _crd, ccclass, property, apiRequest;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

      _cclegacy._RF.push({}, "14d27dOYaRCp5fpnf58v1cB", "apiRequest", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("apiRequest", apiRequest = (_dec = ccclass('apiRequest'), _dec(_class = class apiRequest extends Component {
        constructor() {
          var _this;

          super(...arguments);
          _this = this;
          this.QM = new (_crd && sign === void 0 ? (_reportPossibleCrUseOfsign({
            error: Error()
          }), sign) : sign)();

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

          /**
           * post请求封装
           */
          this.post = /*#__PURE__*/_asyncToGenerator(function* (url, body, success, failure) {
            var requestBody = Object.assign({}, body);

            var key = _this.generateUUID();

            if (sys.localStorage.getItem('token')) {
              requestBody.token = sys.localStorage.getItem('token');
            }

            requestBody.app_id = 1499599523;
            requestBody.ts = Date.now();
            requestBody.sign = _this.QM.sign('zww', requestBody);
            var baseUrl = 'https://t.zhuagewawa.com/restapi/';
            return yield fetch(baseUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'text/plain',
                abcd: _this.encode('/api/v2/' + url, key),
                uuid: key
              },
              body: _this.encode(JSON.stringify(requestBody), key)
            }).then(res => {
              return res.text();
            }).then(res => {
              var result = JSON.parse(_this.decode(res, key));

              if (result.status === 'failed') {
                failure(result);
              } else {
                success(result);
              }
            });
          });
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
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f1d33a3479819ec04b1a6bfb068d31b8380abf7c.js.map