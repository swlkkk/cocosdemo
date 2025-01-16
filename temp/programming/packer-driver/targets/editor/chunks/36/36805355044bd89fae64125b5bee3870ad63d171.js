System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, Label, resources, SpriteFrame, native, sys, i18n, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, itemTemplate;

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
      Sprite = _cc.Sprite;
      Label = _cc.Label;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21c7bENdxtJ1Z/SNkQk11Q5", "itemTemplate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'Label', 'resources', 'SpriteFrame', 'native', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("itemTemplate", itemTemplate = (_dec = ccclass('itemTemplate'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class itemTemplate extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "chargeIcon", _descriptor, this);

          _initializerDefineProperty(this, "priceLab", _descriptor2, this);

          _initializerDefineProperty(this, "botPrice", _descriptor3, this);

          _initializerDefineProperty(this, "chdata", _descriptor4, this);

          this.goldSpritePath = ['icon_recharge1/spriteFrame', 'icon_recharge2/spriteFrame', 'icon_recharge3/spriteFrame', 'icon_recharge4/spriteFrame', 'icon_recharge5/spriteFrame', 'icon_recharge6/spriteFrame', 'icon_recharge7/spriteFrame'];
        }

        start() {}

        init(data, suffix) {
          this.chdata = data;

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            if (data.fee < 60) {
              resources.load(this.goldSpritePath[0], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else if (data.fee < 100) {
              resources.load(this.goldSpritePath[1], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else if (data.fee < 200) {
              resources.load(this.goldSpritePath[2], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else if (data.fee < 500) {
              resources.load(this.goldSpritePath[3], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else if (data.fee < 1000) {
              resources.load(this.goldSpritePath[4], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else if (data.fee < 2000) {
              resources.load(this.goldSpritePath[5], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            } else {
              resources.load(this.goldSpritePath[6], SpriteFrame, (err, sprite) => {
                this.chargeIcon.spriteFrame = sprite;
              });
            }
          }

          if (data.fee < 60) {
            resources.load(this.goldSpritePath[0], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          } else if (data.fee < 100) {
            resources.load(this.goldSpritePath[1], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          } else if (data.fee < 200) {
            resources.load(this.goldSpritePath[2], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          } else if (data.fee < 500) {
            resources.load(this.goldSpritePath[3], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          } else if (data.fee < 1000) {
            resources.load(this.goldSpritePath[4], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          } else {
            resources.load(this.goldSpritePath[5], SpriteFrame, (err, sprite) => {
              this.chargeIcon.spriteFrame = sprite;
            });
          }

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            this.botPrice.string = data.googlePrice;
          }

          this.priceLab.string = data.coins + i18n.t('cocos.jbx');
        }

        goProduct() {
          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "onProductItemClick", "(Ljava/lang/String;)V", JSON.stringify(this.chdata));
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chargeIcon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "priceLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "botPrice", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "chdata", [property], {
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
//# sourceMappingURL=36805355044bd89fae64125b5bee3870ad63d171.js.map