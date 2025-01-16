System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, game, sys, awardCl, popcontrol, coinCreate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, settleTs;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfawardCl(extras) {
    _reporterNs.report("awardCl", "./awardCl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopcontrol(extras) {
    _reporterNs.report("popcontrol", "./popcontrol", _context.meta, extras);
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
      Label = _cc.Label;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      awardCl = _unresolved_2.awardCl;
    }, function (_unresolved_3) {
      popcontrol = _unresolved_3.popcontrol;
    }, function (_unresolved_4) {
      coinCreate = _unresolved_4.coinCreate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "22b42N/i6lB0p4sIYGGP5rV", "settleTs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'director', 'game', 'sys', 'native', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("settleTs", settleTs = (_dec = ccclass('settleTs'), _dec2 = property(Label), _dec(_class = (_class2 = class settleTs extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "closeCount", _descriptor, this);

          this.overTime = 10;
          this.overTimer = null;
        }

        start() {}

        openTimeOut() {
          this.overTimer = setInterval(() => {
            if (this.overTime > 0) {
              this.overTime--;
              this.closeCount.string = this.overTime.toString();
            } else {
              this.closeSettle();
            }
          }, 1000);
        }

        closeSettle() {
          if (this.overTimer != null) {
            clearInterval(this.overTimer);
            this.overTimer = null;
            this.overTime = 10;
            this.closeCount.string = this.overTime.toString();
          }

          this.node.getChildByName('symbol_node').getChildByName('award_node').getComponent(_crd && awardCl === void 0 ? (_reportPossibleCrUseOfawardCl({
            error: Error()
          }), awardCl) : awardCl).clearData();
          this.node.parent.getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol).popNum--;
          this.node.active = false;

          if (this.node.parent.getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol).popNum == 0) {
            this.node.parent.active = false;
          }

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.node.parent.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).releaseAny();
            this.node.parent.parent.parent.parent.active = false;
            this.node.parent.parent.parent.parent.parent.getChildByName('GameOver').active = true;
            setTimeout(() => {
              sys.garbageCollect();
              game.end();
            }, 1500);
          } else {
            game.end();
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "closeCount", [_dec2], {
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
//# sourceMappingURL=8b5ef0e1050ace6a472138b1d2f988a952a7a14e.js.map