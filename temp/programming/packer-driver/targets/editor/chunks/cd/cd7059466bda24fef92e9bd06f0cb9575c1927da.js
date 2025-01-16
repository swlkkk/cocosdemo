System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Material, MeshRenderer, i18n, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, bgchange;

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
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbebaqA8g1C2ag30BkQebWT", "bgchange", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Material', 'MeshRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("bgchange", bgchange = (_dec = ccclass('bgchange'), _dec2 = property(Material), _dec3 = property(Material), _dec(_class = (_class2 = class bgchange extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "m1", _descriptor, this);

          _initializerDefineProperty(this, "m2", _descriptor2, this);
        }

        start() {
          if (i18n._language == 'tc') {
            let mainmc = this.node.getComponent(MeshRenderer);
            mainmc.setSharedMaterial(this.m1, 1);
          } else {
            let mainmc = this.node.getComponent(MeshRenderer);
            mainmc.setSharedMaterial(this.m2, 1);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "m1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "m2", [_dec3], {
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
//# sourceMappingURL=cd7059466bda24fef92e9bd06f0cb9575c1927da.js.map