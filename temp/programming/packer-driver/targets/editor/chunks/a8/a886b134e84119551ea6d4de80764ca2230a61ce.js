System.register(["cc", "cc/env", "__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, EDITOR, l10n, L10nComponent, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, ccclass, property, executeInEditMode, menu, L10nLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_) {
      l10n = _unresolved_.default;
    }, function (_unresolved_2) {
      L10nComponent = _unresolved_2.default;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "30d83qzRfZHLYMFn4KA9PG4", "l10n-label", undefined);

      // @ts-ignore
      __checkObsolete__(['_decorator', 'CCInteger', 'Label']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);

      _export("default", L10nLabel = (_dec = ccclass('L10nLabel'), _dec2 = executeInEditMode(true), _dec3 = menu('LocalizationEditor/L10nLabel'), _dec4 = property({
        visible: false
      }), _dec5 = property({
        visible: true
      }), _dec6 = property({
        visible: false
      }), _dec7 = property({
        type: CCInteger,
        visible: true
      }), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = class L10nLabel extends L10nComponent {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_key", _descriptor, this);

          _initializerDefineProperty(this, "_count", _descriptor2, this);
        }

        set key(value) {
          this._key = value;
          this.render();
        }

        get key() {
          return this._key;
        }

        set count(value) {
          this._count = value;
          this.render();
        }

        get count() {
          return this._count;
        }

        onLoad() {
          if (typeof super.onLoad === 'function') {
            super.onLoad();
          }
        }

        render() {
          const translatedString = l10n.t(this._key, {
            count: this._count
          });

          if (typeof this.label === 'undefined' || typeof translatedString === 'undefined') {
            return;
          }

          if (EDITOR) {
            this.preview(translatedString);
          } else {
            this.label.string = translatedString;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "key", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "key"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_count", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "count", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "count"), _class2.prototype)), _class2)) || _class) || _class) || _class));

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=a886b134e84119551ea6d4de80764ca2230a61ce.js.map