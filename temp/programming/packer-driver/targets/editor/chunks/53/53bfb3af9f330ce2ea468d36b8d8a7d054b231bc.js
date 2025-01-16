System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MD5, encrypt, _dec, _class, _crd, ccclass, property, socketApi;

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "../Api/MD5", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencrypt(extras) {
    _reporterNs.report("encrypt", "../Api/encrypt", _context.meta, extras);
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
    }, function (_unresolved_2) {
      MD5 = _unresolved_2.MD5;
    }, function (_unresolved_3) {
      encrypt = _unresolved_3.encrypt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aa748zkehZAHoWBjIUxrOGO", "socketApi", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("socketApi", socketApi = (_dec = ccclass('socketApi'), _dec(_class = class socketApi extends Component {
        constructor(...args) {
          super(...args);
          // 加密
          this.Md5 = new (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5)();
          this.Enc = new (_crd && encrypt === void 0 ? (_reportPossibleCrUseOfencrypt({
            error: Error()
          }), encrypt) : encrypt)();
        }

        start() {}

        websocket_openListen(ws, data) {
          ws.onopen = () => {
            ws.send(data);
          };
        }

        websocket_messageListen(ws, uuid, wssaltLen, callback) {
          ws.onmessage = e => {
            let salt = e.data.substr(0, wssaltLen);

            if (ws.url.indexOf('nonce') != -1) {
              callback(JSON.parse(e.data));
            } else {
              callback(JSON.parse(this.Enc.ws_decode(e.data.substr(wssaltLen), uuid, salt)));
            }
          };
        }

        websocket_errorListen(ws, callback) {
          ws.onerror = e => {
            callback(e.data);
          };
        }

        websocket_closeListen(ws, callback) {
          ws.onclose = e => {
            callback(e.data);
          };
        }

        websocket_close(ws) {
          try {
            ws.close();
          } catch (error) {
            console.error('close err');
          }
        }

        shuffle(obj) {
          const keys = Object.keys(obj);
          const newObj = {};
          keys.sort(() => Math.random() - 0.5).forEach(key => {
            newObj[key] = obj[key];
          });
          return newObj;
        }

        websocket_sendMessage(message, ws, uuid, salt) {
          if (ws.readyState == ws.OPEN) {
            ws.send(salt + this.Enc.ws_encode(JSON.stringify(message), uuid, salt));
          } else {
            return;
          }
        }

        async websocket_resign(_id, uid, vip, token, uuid, salt, recordId, billId) {
          let sendData = {
            action: 0,
            user_id: _id,
            user_uid: uid,
            user_vip: vip,
            token: token,
            record_id: recordId,
            bill_id: billId
          };
          let sign = _id + uid + sendData.ts + token;
          sendData.sign = this.Md5.md5(sign);
          sendData = salt + this.Enc.ws_encode(JSON.stringify(sendData), uuid, salt);
          return sendData;
        }

        async websocket_sign(_id, uid, vip, token, uuid, salt, recordId) {
          let sendData = {
            action: 1,
            user_id: _id,
            user_uid: uid,
            user_vip: vip,
            token: token,
            record_id: recordId
          };
          let sign = _id + uid + sendData.ts + token;
          sendData.sign = this.Md5.md5(sign);
          sendData = salt + this.Enc.ws_encode(JSON.stringify(sendData), uuid, salt);
          return sendData;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=53bfb3af9f330ce2ea468d36b8d8a7d054b231bc.js.map