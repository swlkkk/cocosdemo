System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, coinCreate, _dec, _class, _crd, ccclass, property, dropTs;

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
    }, function (_unresolved_2) {
      coinCreate = _unresolved_2.coinCreate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "afe7c+DsT9IKZ+F7pfJ1IDr", "dropTs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dropTs", dropTs = (_dec = ccclass('dropTs'), _dec(_class = class dropTs extends Component {
        start() {
          console.log('哈哈哈哈哈 这里么'); // this.node.on(Node.EventType.TOUCH_END, this.getPaDrop, this)
        }

        getPaDrop() {
          var ccsPu = this.node.parent.parent.parent.parent;
          ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).ws_fnc_drop();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=254bc2fcee019fac15a129153213e71b424d5446.js.map