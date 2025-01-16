System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, coinCreate, popcontrol, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, autoDropTs;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopcontrol(extras) {
    _reporterNs.report("popcontrol", "./popcontrol", _context.meta, extras);
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
      popcontrol = _unresolved_3.popcontrol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80064N1QXBI0LuT/IEvy7wL", "autoDropTs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("autoDropTs", autoDropTs = (_dec = ccclass('autoDropTs'), _dec2 = property(Label), _dec(_class = (_class2 = class autoDropTs extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "speedLabel", _descriptor, this);
        }

        start() {}

        changeAutoSt() {
          var ccsPu = this.node.parent.parent.parent.parent;

          if (ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).userCoins < ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).price) {
            if (this.node.parent.parent.getChildByName('pop_node').getChildByName('balance_node').active == false) {
              this.node.parent.parent.getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
                error: Error()
              }), popcontrol) : popcontrol).controlBalance(true);
            }

            return;
          }

          if (ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).winning) return;

          if (!ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).autoStatus) {
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoStatus = true;

            if (!ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoTips) {
              ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate).autoTips = true;
              this.node.getChildByName('auto_tips_node').active = true;
              setTimeout(() => {
                this.node.getChildByName('auto_tips_node').active = false;
              }, 2000);
            }

            this.node.getChildByName('auto_switch').active = false;
            this.node.getChildByName('auto_bot').active = false;
            this.node.getChildByName('auto_switch-on').active = true;
            this.node.getChildByName('auto_bot_on').active = true;
            this.node.parent.getChildByName('drop_count').active = false;
            this.node.parent.getChildByName('drop_btn').active = false;
            this.node.parent.getChildByName('drop_btn_auto').active = true;
            this.speedLabel.string = 'x' + ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoSpeed;
            this.node.getChildByName('auto_speed_node').active = true;
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoSwitch();
          } else {
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoStatus = false;
            this.node.getChildByName('auto_switch').active = true;
            this.node.getChildByName('auto_bot').active = true;
            this.node.getChildByName('auto_switch-on').active = false;
            this.node.getChildByName('auto_bot_on').active = false;
            this.node.parent.getChildByName('drop_count').active = true;
            this.node.parent.getChildByName('drop_btn').active = true;
            this.node.parent.getChildByName('drop_btn_auto').active = false;
            this.node.getChildByName('auto_speed_node').active = false;
            ccsPu.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).autoSwitch();
          }
        }

        clearAutoStatus() {
          this.node.getChildByName('auto_switch').active = true;
          this.node.getChildByName('auto_bot').active = true;
          this.node.getChildByName('auto_switch-on').active = false;
          this.node.getChildByName('auto_bot_on').active = false;
          this.node.parent.getChildByName('drop_count').active = true;
          this.node.parent.getChildByName('drop_btn').active = true;
          this.node.parent.getChildByName('drop_btn_auto').active = false;
          this.node.getChildByName('auto_speed_node').active = false;
        }

        changeSpeed() {
          var ce = this.node.parent.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);
          if (ce.winning) return;

          if (this.speedLabel.string == 'x1') {
            this.speedLabel.string = 'x2';
            ce.autoSpeed = 2;
            ce.autoSwitch(ce.autoSpeed);
          } else if (this.speedLabel.string == 'x2') {
            this.speedLabel.string = 'x3';
            ce.autoSpeed = 3;
            ce.autoSwitch(ce.autoSpeed);
          } else {
            this.speedLabel.string = 'x1';
            ce.autoSpeed = 1;
            ce.autoSwitch(ce.autoSpeed);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speedLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6311325da0140cf19ae43be7be7e3caed0c495d8.js.map