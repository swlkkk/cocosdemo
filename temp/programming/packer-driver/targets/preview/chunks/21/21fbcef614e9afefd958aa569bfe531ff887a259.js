System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider, poolManager, coinCreate, scoreAn, _dec, _class, _crd, ccclass, property, getScore;

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfscoreAn(extras) {
    _reporterNs.report("scoreAn", "./scoreAn", _context.meta, extras);
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
      Collider = _cc.Collider;
    }, function (_unresolved_2) {
      poolManager = _unresolved_2.poolManager;
    }, function (_unresolved_3) {
      coinCreate = _unresolved_3.coinCreate;
    }, function (_unresolved_4) {
      scoreAn = _unresolved_4.scoreAn;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9c5fcGY0KlFGJajFRIyWKu0", "getScore", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider', 'ICollisionEvent', 'RigidBody']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("getScore", getScore = (_dec = ccclass('getScore'), _dec(_class = class getScore extends Component {
        start() {
          var collider = this.node.getComponent(Collider); // 监听触发事件

          collider.on('onCollisionStay', this.onCollision, this);
        }

        onCollision(event) {
          // 检测到掉落到前面的金币加分并且销毁预制体
          (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.putNode(event.otherCollider.node); // 拿到coinCreate主节点

          var cjTs = this.node.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);
          var scoreno = this.node.parent.getChildByName('Main').getChildByName('Canvas').getChildByName('scoreAdd').getComponent(_crd && scoreAn === void 0 ? (_reportPossibleCrUseOfscoreAn({
            error: Error()
          }), scoreAn) : scoreAn);

          if (cjTs.isDroped) {
            cjTs.no = cjTs.no + cjTs.price;
            var sendData = cjTs.websocketFnc.ws_validcoin(cjTs.no);
            scoreno.scoreAn();
            cjTs.websocket.websocket_sendMessage(sendData, cjTs.ws, cjTs.wsuuid, cjTs.wssalt);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=21fbcef614e9afefd958aa569bfe531ff887a259.js.map