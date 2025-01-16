System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, jpScorets;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e2a7a4gsdB3aeAFN0ADuvS", "jpScorets", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("jpScorets", jpScorets = (_dec = ccclass('jpScorets'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class jpScorets extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "allLabel", _descriptor, this);

          _initializerDefineProperty(this, "getscoreLabel", _descriptor2, this);

          this._allScore = 0;
          this._getScore = 0;
        }

        start() {}

        fillter(number) {
          if (number < 10) {
            return '00000' + number.toString();
          } else if (number >= 10 && number < 100) {
            return '0000' + number.toString();
          } else if (number >= 100 && number < 1000) {
            return '000' + number.toString();
          } else if (number >= 1000 && number < 10000) {
            return '00' + number.toString();
          } else if (number >= 10000 && number < 100000) {
            return '0' + number.toString();
          } else if (number >= 100000 && number < 1000000) {
            return number.toString();
          }
        }

        // 总分
        get allScore() {
          return this._allScore;
        }

        set allScore(parmas) {
          this._allScore = parmas;
          this.allLabel.string = this.fillter(this._allScore);
        } // 获得


        get getScore() {
          return this._getScore;
        }

        set getScore(parmas) {
          this._getScore = parmas;
          this.getscoreLabel.string = this.fillter(this._getScore);
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "allLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "getscoreLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9aa34aa8adbd27d73eb40c11145a8191fce4e563.js.map