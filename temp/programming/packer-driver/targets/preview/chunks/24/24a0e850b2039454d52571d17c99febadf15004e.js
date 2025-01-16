System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Collider, poolManager, _dec, _class, _crd, ccclass, property, btPallets;

  function _reportPossibleCrUseOfpoolManager(extras) {
    _reporterNs.report("poolManager", "./poolManager", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "def9fLziPVJVq1LNrS+EI+U", "btPallets", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Collider', 'ICollisionEvent', 'RigidBody']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("btPallets", btPallets = (_dec = ccclass('btPallets'), _dec(_class = class btPallets extends Component {
        onLoad() {
          var collider = this.node.getComponent(Collider); // 监听触发事件

          collider.on('onCollisionStay', this.onCollision, this);
        }

        start() {}

        onCollision(event) {
          (_crd && poolManager === void 0 ? (_reportPossibleCrUseOfpoolManager({
            error: Error()
          }), poolManager) : poolManager).instance.putNode(event.otherCollider.node);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=24a0e850b2039454d52571d17c99febadf15004e.js.map