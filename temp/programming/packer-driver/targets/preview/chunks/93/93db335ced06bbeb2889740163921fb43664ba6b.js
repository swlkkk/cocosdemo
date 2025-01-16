System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, coinCreate, i18n, _dec, _class, _crd, ccclass, property, dcountChange;

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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      coinCreate = _unresolved_2.coinCreate;
    }, function (_unresolved_3) {
      i18n = _unresolved_3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01d9elRPJ9MspKXfsq76EWw", "dcountChange", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dcountChange", dcountChange = (_dec = ccclass('dcountChange'), _dec(_class = class dcountChange extends Component {
        start() {}

        changeDrop() {
          var ccsPu = this.node.parent.parent.parent.parent;
          if (ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).winning) return;

          if (ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).dropStatus == 1) {
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).dropStatus = 3;
            this.node.getChildByName('count_num').active = false;
            this.node.getChildByName('count_num_three').active = true;
            this.node.parent.getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tsc');
          } else {
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).dropStatus = 1;
            this.node.getChildByName('count_num').active = true;
            this.node.getChildByName('count_num_three').active = false;
            this.node.parent.getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tyc');
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=93db335ced06bbeb2889740163921fb43664ba6b.js.map