System.register(["cc", "__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Material, MeshRenderer, i18n, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _crd, ccclass, property, maints;

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
      Material = _cc.Material;
      MeshRenderer = _cc.MeshRenderer;
    }, function (_unresolved_) {
      i18n = _unresolved_;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5cfc0Vk3lpFbp6L2QNryw4C", "maints", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Prefab', 'resources', 'Material', 'MeshRenderer']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("maints", maints = (_dec = ccclass('maints'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Label), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(Material), _dec15 = property(Material), _dec(_class = (_class2 = class maints extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "label1", _descriptor, this);

          _initializerDefineProperty(this, "label2", _descriptor2, this);

          _initializerDefineProperty(this, "label3", _descriptor3, this);

          _initializerDefineProperty(this, "label4", _descriptor4, this);

          _initializerDefineProperty(this, "label5", _descriptor5, this);

          _initializerDefineProperty(this, "label6", _descriptor6, this);

          _initializerDefineProperty(this, "label7", _descriptor7, this);

          _initializerDefineProperty(this, "label8", _descriptor8, this);

          _initializerDefineProperty(this, "label9", _descriptor9, this);

          _initializerDefineProperty(this, "label10", _descriptor10, this);

          _initializerDefineProperty(this, "label11", _descriptor11, this);

          _initializerDefineProperty(this, "label12", _descriptor12, this);

          _initializerDefineProperty(this, "m1", _descriptor13, this);

          _initializerDefineProperty(this, "m2", _descriptor14, this);

          this._score1 = 0;
          this._score2 = 0;
          this._score3 = 0;
          this._score4 = 0;
          this._score5 = 0;
          this._score6 = 0;
          this._score7 = 0;
          this._score8 = 0;
          this._score9 = 0;
          this._score10 = 0;
          this._score11 = 0;
          this._score12 = 0;
        }

        onLoad() {
          if (i18n._language == 'tc') {
            var mainmc = this.node.getChildByName('mainScreen').getComponent(MeshRenderer);
            mainmc.setSharedMaterial(this.m1, 0);
          } else {
            var _mainmc = this.node.getChildByName('mainScreen').getComponent(MeshRenderer);

            _mainmc.setSharedMaterial(this.m2, 0);
          }
        }

        start() {}

        get score1() {
          return this._score1;
        }

        get score2() {
          return this._score2;
        }

        get score3() {
          return this._score3;
        }

        get score4() {
          return this._score4;
        }

        get score5() {
          return this._score5;
        }

        get score6() {
          return this._score6;
        }

        get score7() {
          return this._score7;
        }

        get score8() {
          return this._score8;
        }

        get score9() {
          return this._score9;
        }

        get score10() {
          return this._score10;
        }

        get score11() {
          return this._score11;
        }

        get score12() {
          return this._score12;
        }

        set score1(parmas) {
          this._score1 = parmas;
          this.label1.string = parmas.toString();
        }

        set score2(parmas) {
          this._score2 = parmas;
          this.label2.string = parmas.toString();
        }

        set score3(parmas) {
          this._score3 = parmas;
          this.label3.string = parmas.toString();
        }

        set score4(parmas) {
          this._score4 = parmas;
          this.label4.string = parmas.toString();
        }

        set score5(parmas) {
          this._score5 = parmas;
          this.label5.string = parmas.toString();
        }

        set score6(parmas) {
          this._score6 = parmas;
          this.label6.string = parmas.toString();
        }

        set score7(parmas) {
          this._score7 = parmas;
          this.label7.string = parmas.toString();
        }

        set score8(parmas) {
          this._score8 = parmas;
          this.label8.string = parmas.toString();
        }

        set score9(parmas) {
          this._score9 = parmas;
          this.label9.string = parmas.toString();
        }

        set score10(parmas) {
          this._score10 = parmas;
          this.label10.string = parmas.toString();
        }

        set score11(parmas) {
          this._score11 = parmas;
          this.label11.string = parmas.toString();
        }

        set score12(parmas) {
          this._score12 = parmas;
          this.label12.string = parmas.toString();
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "label1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "label2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "label3", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "label4", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label5", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "label6", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "label7", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "label8", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "label9", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "label10", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "label11", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "label12", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "m1", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "m2", [_dec15], {
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
//# sourceMappingURL=46b5fe2669bab6475dd07f90711290e5583d18db.js.map