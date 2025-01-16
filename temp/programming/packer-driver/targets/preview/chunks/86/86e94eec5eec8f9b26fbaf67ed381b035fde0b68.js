System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, log, _dec, _class, _crd, ccclass, property, ESocketState, Socket;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      log = _cc.log;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "16af2/QUGJML5VfFRgfSI7X", "Socket", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'log']);

      ({
        ccclass,
        property
      } = _decorator);

      ESocketState = /*#__PURE__*/function (ESocketState) {
        ESocketState[ESocketState["None"] = 0] = "None";
        ESocketState[ESocketState["Connecting"] = 1] = "Connecting";
        ESocketState[ESocketState["Connected"] = 2] = "Connected";
        return ESocketState;
      }(ESocketState || {});

      _export("Socket", Socket = (_dec = ccclass('Socket'), _dec(_class = class Socket extends Component {
        constructor() {
          super(...arguments);
          // webSocket
          this.socket = null;
          // 状态
          this.state = ESocketState.None;
          // 连接已建立回调
          this.onOpen = null;
          // 连接已关闭回调
          this.onClose = null;
          // 接收到数据回调
          this.onMessage = null;
          // WebSocket错误回调
          this.onError = null;
        }

        start() {}
        /**
         * 连接
         * @param url socket地址
         */


        connect(url) {
          if (this.state == ESocketState.None) {
            this.state = ESocketState.Connecting;
            log("socket connect:(" + url + ")");
            this.socket = new WebSocket(url);
            this.bindEvent();
          }
        }
        /**
         * 绑定事件
         */


        bindEvent() {
          this.socket.onopen = () => {
            this.state = ESocketState.Connected;
            log("socket onopen");
            this.onOpen && this.onOpen();
          };

          this.socket.onclose = ev => {
            log("socket onclose code:(" + ev.code + ")");
            this.state = ESocketState.None;
            this.onClose && this.onClose(ev);
          };

          this.socket.onerror = e => {
            log("socket onerror");
            this.state = ESocketState.None;
            this.onError && this.onError(e);
          };

          this.socket.onmessage = e => {
            if (this.onMessage) {
              this.onMessage(JSON.parse(e.data));
            }
          };
        }
        /**
         * 发送数据
         * @param data
         * @returns 
         */


        send(data) {
          if (this.state != ESocketState.Connected) {
            log("socket not connect");
            return;
          }

          this.socket.send(data);
        }
        /**
         * 关闭连接
         */


        close() {
          if (this.state != ESocketState.Connected) {
            return;
          }

          log("socket close");
          this.socket.close();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86e94eec5eec8f9b26fbaf67ed381b035fde0b68.js.map