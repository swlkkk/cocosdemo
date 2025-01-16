System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, i18n, _decorator, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, property, executeInEditMode, LocalizedLabel;

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
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edf98QH2D1AUoCrtQlbxFrU", "LocalizedLabel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);

      _export("LocalizedLabel", LocalizedLabel = (_dec = ccclass('LocalizedLabel'), _dec2 = property({
        visible: false
      }), _dec3 = property({
        displayName: 'Key',
        visible: true
      }), _dec(_class = executeInEditMode(_class = (_class2 = class LocalizedLabel extends Component {
        constructor() {
          super(...arguments);
          this.label = null;

          _initializerDefineProperty(this, "key", _descriptor, this);
        }

        get _key() {
          return this.key;
        }

        set _key(str) {
          this.updateLabel();
          this.key = str;
        }

        onLoad() {
          if (!i18n.ready) {
            i18n.init('tc');
          }

          this.fetchRender();
        }

        fetchRender() {
          var label = this.getComponent('cc.Label');

          if (label) {
            this.label = label;
            this.updateLabel();
            return;
          }
        }

        updateLabel() {
          this.label && (this.label.string = i18n.t(this.key));
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "key", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "_key"), _class2.prototype)), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=29ed7f94b8a3e43f97045516ce882149a8949a59.js.map