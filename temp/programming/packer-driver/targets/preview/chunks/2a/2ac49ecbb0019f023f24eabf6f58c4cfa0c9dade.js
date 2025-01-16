System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Socket, _dec, _class, _crd, ccclass, property, socketStation;

  function _reportPossibleCrUseOfSocket(extras) {
    _reporterNs.report("Socket", "./Socket/Socket", _context.meta, extras);
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
      Socket = _unresolved_2.Socket;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ae69X+SR1AU4TSj5W34V+n", "socketStation", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("socketStation", socketStation = (_dec = ccclass('socketStation'), _dec(_class = class socketStation extends Component {
        constructor() {
          super(...arguments);
          this.socket = new (_crd && Socket === void 0 ? (_reportPossibleCrUseOfSocket({
            error: Error()
          }), Socket) : Socket)();
        }

        start() {
          // 连接socket服务器
          this.socket.connect('ws://127.0.0.1:3000');

          this.socket.onOpen = () => {};
        } // 发送消息


        senSocket(data) {
          this.socket.send(JSON.stringify(data));
        } // 接收消息


        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2ac49ecbb0019f023f24eabf6f58c4cfa0c9dade.js.map