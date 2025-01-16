System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, encrypt, _dec, _class, _crd, ccclass, property, socketFun;

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
      encrypt = _unresolved_2.encrypt;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "33f15lu8k5CsY5ktNdHOAdC", "socketFun", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("socketFun", socketFun = (_dec = ccclass('socketFun'), _dec(_class = class socketFun extends Component {
        constructor() {
          super(...arguments);
          this.Enc = new (_crd && encrypt === void 0 ? (_reportPossibleCrUseOfencrypt({
            error: Error()
          }), encrypt) : encrypt)();
        }

        start() {}

        shuffle(obj) {
          var keys = Object.keys(obj);
          var newObj = {};
          keys.sort(() => Math.random() - 0.5).forEach(key => {
            newObj[key] = obj[key];
          });
          return newObj;
        }

        ws_dropcoin() {
          var sendData = {
            action: 2
          };
          return sendData;
        }

        ws_userout() {
          var sendData = {
            action: 6
          };
          return sendData;
        }

        ws_channelpass(channel) {
          var sendData = {
            action: 3,
            channel: channel
          };
          return sendData;
        }

        ws_validcoin(no) {
          var sendData = {
            action: 5,
            no: no
          };
          return sendData;
        }

        ws_spinpass() {
          var sendData = {
            action: 4
          };
          return sendData;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ac7e95795f5499bb4222825dfa6947f1b6ee910c.js.map