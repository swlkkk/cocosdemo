System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteAtlas, Label, resources, coinCreate, i18n, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, jpts;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

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
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      Label = _cc.Label;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      coinCreate = _unresolved_2.coinCreate;
    }, function (_unresolved_3) {
      i18n = _unresolved_3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca789BP7rpEOIC2q8M6CcCO", "jpts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteAtlas', 'Label', 'resources', 'SpriteFrame']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("jpts", jpts = (_dec = ccclass('jpts'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class jpts extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label", _descriptor, this);

          _initializerDefineProperty(this, "label1", _descriptor2, this);

          this.jptype3 = null;
          this.jptype4 = null;
          this.jptype5 = null;
          this.jptype1 = null;
          // 奖励金币数量
          this._score = 0;
          // 剩余金币数量
          this._score1 = 0;
        }

        start() {}

        onLoad() {
          resources.load("jp", SpriteAtlas, (err, atlas) => {
            if (i18n._language == 'tc') {
              this.jptype1 = atlas.getSpriteFrame('03UI_10bonus_1');
            } else {
              this.jptype1 = atlas.getSpriteFrame('03UI_10bonus_1_en');
            }

            this.jptype3 = atlas.getSpriteFrame('03UI_10bonus_2');
            this.jptype4 = atlas.getSpriteFrame('03UI_10bonus_3');
            this.jptype5 = atlas.getSpriteFrame('03UI_10bonus_4');
            this.updateImg(this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
              error: Error()
            }), coinCreate) : coinCreate).awardType);
          });
        }

        get score() {
          return this._score;
        }

        set score(parmas) {
          this._score = parmas;
          this.label.string = this._score.toString();
        }

        get score1() {
          return this._score1;
        }

        set score1(parmas) {
          this._score1 = parmas;
          this.label1.string = this._score1.toString();
        }

        updateImg(type) {
          if (type == 3) {
            // jp1
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype3;
          } else if (type == 4) {
            // jp2
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype4;
          } else if (type == 5) {
            // jp3
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype5;
          } else if (type == 6) {
            // jp全盘奖
            this.node.getChildByName('Sprite1').getComponent(Sprite).spriteFrame = this.jptype1;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label1", [_dec3], {
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
//# sourceMappingURL=821b1019e37e6fb8929e6725ef60271c99887e86.js.map