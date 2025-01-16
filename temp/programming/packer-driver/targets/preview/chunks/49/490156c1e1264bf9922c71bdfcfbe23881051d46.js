System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, popcontrol, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, awardCl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      popcontrol = _unresolved_2.popcontrol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50fdbdhX45Fqq169GjCX86m", "awardCl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("awardCl", awardCl = (_dec = ccclass('awardCl'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class awardCl extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "xmlLab", _descriptor, this);

          _initializerDefineProperty(this, "ddlLab", _descriptor2, this);

          _initializerDefineProperty(this, "jp1Lab", _descriptor3, this);

          _initializerDefineProperty(this, "jp2Lab", _descriptor4, this);

          _initializerDefineProperty(this, "jp3Lab", _descriptor5, this);

          _initializerDefineProperty(this, "jpAllLab", _descriptor6, this);
        }

        start() {}

        freshData(getCoin, data) {
          if (data.length > 0) {
            var iterator = data[Symbol.iterator]();
            var res = iterator.next();

            while (!res.done) {
              var value = res.value;
              res = iterator.next();

              if (value.type == 1) {
                this.xmlLab.string = value.count;
              } else if (value.type == 2) {
                this.ddlLab.string = value.count;
              } else if (value.type == 3) {
                this.jp1Lab.string = value.count;
              } else if (value.type == 4) {
                this.jp2Lab.string = value.count;
              } else if (value.type == 5) {
                this.jp3Lab.string = value.count;
              } else if (value.type == 6) {
                this.jpAllLab.string = value.count;
              }
            }
          }

          this.node.parent.getChildByName('get_coin').getComponent(Label).string = '+' + getCoin;
          this.node.parent.parent.parent.getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol).controlSettle(true);
        }

        clearData() {
          this.node.parent.getChildByName('get_coin').getComponent(Label).string = '';
          this.xmlLab.string = '0';
          this.ddlLab.string = '0';
          this.jp1Lab.string = '0';
          this.jp2Lab.string = '0';
          this.jp3Lab.string = '0';
          this.jpAllLab.string = '0';
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "xmlLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ddlLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jp1Lab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "jp2Lab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "jp3Lab", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "jpAllLab", [_dec7], {
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
//# sourceMappingURL=490156c1e1264bf9922c71bdfcfbe23881051d46.js.map