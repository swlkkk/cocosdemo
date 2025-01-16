System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, itemTemplate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, chargList;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfitemTemplate(extras) {
    _reporterNs.report("itemTemplate", "./itemTemplate", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      itemTemplate = _unresolved_2.itemTemplate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5fa6eWE5XZCFI0zS5azWjWx", "chargList", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("chargList", chargList = (_dec = ccclass('chargList'), _dec2 = property(Prefab), _dec(_class = (_class2 = class chargList extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "chargeItem", _descriptor, this);
        }

        start() {}

        creation(Item) {
          for (var i = 0; i < Item.length; ++i) {
            var item = instantiate(this.chargeItem);
            var data = Item[i];
            this.node.addChild(item);
            item.getComponent(_crd && itemTemplate === void 0 ? (_reportPossibleCrUseOfitemTemplate({
              error: Error()
            }), itemTemplate) : itemTemplate).init(data, i);
          }
        }

        clearAllNode() {
          this.node.removeAllChildren();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chargeItem", [_dec2], {
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
//# sourceMappingURL=da3f9493b34bce435cd61bf3953425b046d07e01.js.map