System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, BoxCollider, gameCore, flashPicts, labelts, coinCreate, _dec, _class, _crd, ccclass, property, awardSensing;

  function _reportPossibleCrUseOfgameCore(extras) {
    _reporterNs.report("gameCore", "./gameCore", _context.meta, extras);
  }

  function _reportPossibleCrUseOfflashPicts(extras) {
    _reporterNs.report("flashPicts", "./flashPicts", _context.meta, extras);
  }

  function _reportPossibleCrUseOflabelts(extras) {
    _reporterNs.report("labelts", "./labelts", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
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
      BoxCollider = _cc.BoxCollider;
    }, function (_unresolved_2) {
      gameCore = _unresolved_2.gameCore;
    }, function (_unresolved_3) {
      flashPicts = _unresolved_3.flashPicts;
    }, function (_unresolved_4) {
      labelts = _unresolved_4.labelts;
    }, function (_unresolved_5) {
      coinCreate = _unresolved_5.coinCreate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "32d1dHIs6VC5Za8lMf995jK", "awardSensing", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'BoxCollider', 'ITriggerEvent']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("awardSensing", awardSensing = (_dec = ccclass('awardSensing'), _dec(_class = class awardSensing extends Component {
        constructor() {
          super(...arguments);
          // 亮起图标
          this.channel = null;
        }

        onLoad() {
          var collider = this.node.getComponent(BoxCollider);
          collider.on('onTriggerExit', this.onTriggerEnter, this);
        }

        start() {}

        onTriggerEnter(event) {
          this.channel = [this.node.parent.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
            error: Error()
          }), gameCore) : gameCore).starting1, this.node.parent.getComponent(_crd && gameCore === void 0 ? (_reportPossibleCrUseOfgameCore({
            error: Error()
          }), gameCore) : gameCore).starting2]; // 闪屏图片

          var flashPic = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('flashNode').getComponent(_crd && flashPicts === void 0 ? (_reportPossibleCrUseOfflashPicts({
            error: Error()
          }), flashPicts) : flashPicts); // 闪屏数字

          var flashLabel = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('labels').getComponent(_crd && labelts === void 0 ? (_reportPossibleCrUseOflabelts({
            error: Error()
          }), labelts) : labelts); // 拿到coinCreate主节点

          var cjTs = this.node.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);

          if (cjTs.activeClosed) {
            return;
          }

          if (event.selfCollider.node.name == 'IncentiveCube1') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(0) != -1) {
                cjTs.channelCount = 0;
                var sendData = cjTs.websocketFnc.ws_channelpass(0);
                cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(0);
                flashLabel.dolabel(0);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube2') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(1) != -1) {
                cjTs.channelCount = 1;

                var _sendData = cjTs.websocketFnc.ws_channelpass(1);

                cjTs.websocket.websocket_sendMessage(_sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(1);
                flashLabel.dolabel(1);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube3') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(2) != -1) {
                cjTs.channelCount = 2;

                var _sendData2 = cjTs.websocketFnc.ws_channelpass(2);

                cjTs.websocket.websocket_sendMessage(_sendData2, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(2);
                flashLabel.dolabel(2);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube4') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(3) != -1) {
                cjTs.channelCount = 3;

                var _sendData3 = cjTs.websocketFnc.ws_channelpass(3);

                cjTs.websocket.websocket_sendMessage(_sendData3, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(3);
                flashLabel.dolabel(3);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube5') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(4) != -1) {
                cjTs.channelCount = 4;

                var _sendData4 = cjTs.websocketFnc.ws_channelpass(4);

                cjTs.websocket.websocket_sendMessage(_sendData4, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(4);
                flashLabel.dolabel(4);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube6') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(5) != -1) {
                cjTs.channelCount = 5;

                var _sendData5 = cjTs.websocketFnc.ws_channelpass(5);

                cjTs.websocket.websocket_sendMessage(_sendData5, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(5);
                flashLabel.dolabel(5);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube7') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(6) != -1) {
                cjTs.channelCount = 6;

                var _sendData6 = cjTs.websocketFnc.ws_channelpass(6);

                cjTs.websocket.websocket_sendMessage(_sendData6, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(6);
                flashLabel.dolabel(6);
                cjTs.playMusic('music/awardMs');
              }
            }
          } else if (event.selfCollider.node.name == 'IncentiveCube8') {
            if (!cjTs.winning) {
              if (this.channel.indexOf(7) != -1) {
                cjTs.channelCount = 7;

                var _sendData7 = cjTs.websocketFnc.ws_channelpass(7);

                cjTs.websocket.websocket_sendMessage(_sendData7, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
                flashPic.doFlash(7);
                flashLabel.dolabel(7);
                cjTs.playMusic('music/awardMs');
              }
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ac48c604be94f3bc78bced2f472491c864422b7.js.map