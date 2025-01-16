System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, i18n, _decorator, Component, SpriteFrame, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _dec3, _dec4, _class4, _class5, _descriptor3, _crd, ccclass, property, executeInEditMode, LocalizedSpriteItem, LocalizedSprite;

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
      SpriteFrame = _cc.SpriteFrame;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c05c25C4xNAupWYMB93tIzp", "LocalizedSprite", undefined);

      __checkObsolete__(['_decorator', 'Component', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property,
        executeInEditMode
      } = _decorator);
      LocalizedSpriteItem = (_dec = ccclass('LocalizedSpriteItem'), _dec2 = property({
        type: SpriteFrame
      }), _dec(_class = (_class2 = class LocalizedSpriteItem {
        constructor() {
          _initializerDefineProperty(this, "language", _descriptor, this);

          _initializerDefineProperty(this, "spriteFrame", _descriptor2, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "language", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 'tc';
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class);

      _export("LocalizedSprite", LocalizedSprite = (_dec3 = ccclass('LocalizedSprite'), _dec4 = property({
        type: LocalizedSpriteItem
      }), _dec3(_class4 = executeInEditMode(_class4 = (_class5 = class LocalizedSprite extends Component {
        constructor(...args) {
          super(...args);
          this.sprite = null;

          _initializerDefineProperty(this, "spriteList", _descriptor3, this);
        }

        onLoad() {
          if (!i18n.ready) {
            i18n.init('tc');
          }

          this.fetchRender();
        }

        fetchRender() {
          let sprite = this.getComponent('cc.Sprite');

          if (sprite) {
            this.sprite = sprite;
            this.updateSprite();
            return;
          }
        }

        updateSprite() {
          for (let i = 0; i < this.spriteList.length; i++) {
            const item = this.spriteList[i]; // @ts-ignore

            if (item.language === i18n._language) {
              // @ts-ignore
              if (this.getComponent('cc.Sprite')) {
                this.sprite = this.getComponent('cc.Sprite');
                this.sprite.spriteFrame = item.spriteFrame;
                break;
              }
            }
          }
        }

      }, (_descriptor3 = _applyDecoratedDescriptor(_class5.prototype, "spriteList", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class5)) || _class4) || _class4));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2c7f7f19bd39c33ee275cc85da4e4f4395ebd586.js.map