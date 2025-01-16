System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, CCFloat, CCInteger, cclegacy, InstanceMaterialType, Material, NodeEventType, RenderTexture, Sprite, SpriteAtlas, SpriteFrame, UIRenderer, BUILD, EDITOR, GPRoundBoxAssembler, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, type, EventType, GPRoundBoxSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGPRoundBoxAssembler(extras) {
    _reporterNs.report("GPRoundBoxAssembler", "./GPRoundBoxAssembler", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCBoolean = _cc.CCBoolean;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      cclegacy = _cc.cclegacy;
      InstanceMaterialType = _cc.InstanceMaterialType;
      Material = _cc.Material;
      NodeEventType = _cc.NodeEventType;
      RenderTexture = _cc.RenderTexture;
      Sprite = _cc.Sprite;
      SpriteAtlas = _cc.SpriteAtlas;
      SpriteFrame = _cc.SpriteFrame;
      UIRenderer = _cc.UIRenderer;
    }, function (_ccEnv) {
      BUILD = _ccEnv.BUILD;
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      GPRoundBoxAssembler = _unresolved_2.GPRoundBoxAssembler;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "50856uqLlNFaJxIjFJQAQqs", "GPRoundBoxSprite", undefined);

      __checkObsolete__(['_decorator', 'CCBoolean', 'CCFloat', 'CCInteger', 'cclegacy', 'InstanceMaterialType', 'Material', 'Node', 'NodeEventType', 'RenderTexture', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'UIRenderer']);

      ({
        ccclass,
        property,
        type
      } = _decorator);

      EventType = /*#__PURE__*/function (EventType) {
        EventType["SPRITE_FRAME_CHANGED"] = "spriteframe-changed";
        return EventType;
      }(EventType || {});

      _export("GPRoundBoxSprite", GPRoundBoxSprite = (_dec = ccclass('GPRoundBoxSprite'), _dec2 = property({
        serializable: true
      }), _dec3 = type(Sprite.SizeMode), _dec4 = property({
        serializable: true
      }), _dec5 = property({
        type: CCBoolean
      }), _dec6 = property({
        serializable: true
      }), _dec7 = type(SpriteAtlas), _dec8 = property({
        type: CCInteger,
        serializable: true
      }), _dec9 = property({
        type: CCInteger,
        serializable: true,
        min: 1
      }), _dec10 = property({
        type: CCFloat,
        serializable: true
      }), _dec11 = property({
        type: CCFloat,
        serializable: true,
        min: 0
      }), _dec12 = property({
        serializable: true
      }), _dec13 = type(SpriteFrame), _dec14 = property({
        serializable: true
      }), _dec15 = property({
        serializable: true
      }), _dec16 = property({
        serializable: true
      }), _dec17 = property({
        serializable: true
      }), _dec18 = property({
        serializable: true
      }), _dec19 = property({
        serializable: true
      }), _dec20 = property({
        serializable: true
      }), _dec21 = property({
        serializable: true
      }), _dec(_class = (_class2 = class GPRoundBoxSprite extends UIRenderer {
        constructor(...args) {
          super(...args);

          // 尺寸模式，可以看枚举原本定义的地方有注释说明
          _initializerDefineProperty(this, "_sizeMode", _descriptor, this);

          /**
           * @en Grayscale mode.
           * @zh 是否以灰度模式渲染。
           */
          _initializerDefineProperty(this, "_useGrayscale", _descriptor2, this);

          // 图集
          _initializerDefineProperty(this, "_atlas", _descriptor3, this);

          // 圆角用三角形模拟扇形的线段数量，越大，则越圆滑
          _initializerDefineProperty(this, "_segments", _descriptor4, this);

          // 圆角半径
          _initializerDefineProperty(this, "_radius", _descriptor5, this);

          _initializerDefineProperty(this, "_spriteFrame", _descriptor6, this);

          _initializerDefineProperty(this, "_leftTop", _descriptor7, this);

          _initializerDefineProperty(this, "_rightTop", _descriptor8, this);

          _initializerDefineProperty(this, "_leftBottom", _descriptor9, this);

          _initializerDefineProperty(this, "_rightBottom", _descriptor10, this);
        }

        get sizeMode() {
          return this._sizeMode;
        }

        set sizeMode(value) {
          if (this._sizeMode === value) {
            return;
          }

          this._sizeMode = value;

          if (value !== Sprite.SizeMode.CUSTOM) {
            this._applySpriteSize();
          }
        }

        get grayscale() {
          return this._useGrayscale;
        }

        set grayscale(value) {
          if (this._useGrayscale === value) {
            return;
          }

          this._useGrayscale = value;
          this.changeMaterialForDefine();
          this["updateMaterial"]();
        }

        get spriteAtlas() {
          return this._atlas;
        }

        set spriteAtlas(value) {
          if (this._atlas === value) {
            return;
          }

          this._atlas = value;
        }

        get segments() {
          return this._segments;
        }

        set segments(segments) {
          this._segments = segments;
          this._renderData = null;

          this._flushAssembler();
        }

        get radius() {
          return this._radius;
        }

        set radius(radius) {
          this._radius = radius;

          this._updateUVs();

          this.markForUpdateRenderData(true);
        }

        get spriteFrame() {
          return this._spriteFrame;
        }

        set spriteFrame(value) {
          if (this._spriteFrame === value) {
            return;
          }

          const lastSprite = this._spriteFrame;
          this._spriteFrame = value;
          this.markForUpdateRenderData();

          this._applySpriteFrame(lastSprite);

          if (EDITOR) {
            this.node.emit(EventType.SPRITE_FRAME_CHANGED, this);
          }
        }

        get leftTop() {
          return this._leftTop;
        }

        set leftTop(value) {
          this._leftTop = value;
          this.resetAssembler();
        }

        get rightTop() {
          return this._rightTop;
        }

        set rightTop(value) {
          this._rightTop = value;
          this.resetAssembler();
        }

        get leftBottom() {
          return this._leftBottom;
        }

        set leftBottom(value) {
          this._leftBottom = value;
          this.resetAssembler();
        }

        get rightBottom() {
          return this._rightBottom;
        }

        set rightBottom(value) {
          this._rightBottom = value;
          this.resetAssembler();
        }

        onLoad() {
          super.onLoad();

          this._flushAssembler();
        }

        __preload() {
          this.changeMaterialForDefine();

          super.__preload();

          if (EDITOR) {
            this._resized();

            this.node.on(NodeEventType.SIZE_CHANGED, this._resized, this);
          }
        }

        onEnable() {
          super.onEnable(); // Force update uv, material define, active material, etc

          this._activateMaterial();

          const spriteFrame = this._spriteFrame;

          if (spriteFrame) {
            this._updateUVs();
          }
        }

        onDestroy() {
          if (EDITOR) {
            this.node.off(NodeEventType.SIZE_CHANGED, this._resized, this);
          }

          super.onDestroy();
        }
        /**
         * @en
         * Quickly switch to other sprite frame in the sprite atlas.
         * If there is no atlas, the switch fails.
         *
         * @zh
         * 选取使用精灵图集中的其他精灵。
         * @param name @en Name of the spriteFrame to switch. @zh 要切换的 spriteFrame 名字。
         */


        changeSpriteFrameFromAtlas(name) {
          if (!this._atlas) {
            console.warn('SpriteAtlas is null.');
            return;
          }

          const sprite = this._atlas.getSpriteFrame(name);

          this.spriteFrame = sprite;
        }
        /**
         * @deprecated Since v3.7.0, this is an engine private interface that will be removed in the future.
         */


        changeMaterialForDefine() {
          let texture;
          const lastInstanceMaterialType = this._instanceMaterialType;

          if (this._spriteFrame) {
            texture = this._spriteFrame.texture;
          }

          let value = false;

          if (texture instanceof cclegacy.TextureBase) {
            const format = texture.getPixelFormat();
            value = format === cclegacy.TextureBase.PixelFormat.RGBA_ETC1 || format === cclegacy.TextureBase.PixelFormat.RGB_A_PVRTC_4BPPV1 || format === cclegacy.TextureBase.PixelFormat.RGB_A_PVRTC_2BPPV1;
          }

          if (value && this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED_AND_GRAY;
          } else if (value) {
            this._instanceMaterialType = InstanceMaterialType.USE_ALPHA_SEPARATED;
          } else if (this.grayscale) {
            this._instanceMaterialType = InstanceMaterialType.GRAYSCALE;
          } else {
            this._instanceMaterialType = InstanceMaterialType.ADD_COLOR_AND_TEXTURE;
          }

          if (lastInstanceMaterialType !== this._instanceMaterialType) {
            // this.updateMaterial();
            // d.ts里没有注上这个函数，直接调用会表红。
            this["updateMaterial"]();
          }
        }

        _updateBuiltinMaterial() {
          let mat = super._updateBuiltinMaterial();

          if (this.spriteFrame && this.spriteFrame.texture instanceof RenderTexture) {
            const defines = {
              SAMPLE_FROM_RT: true,
              ...mat.passes[0].defines
            };
            const renderMat = new Material();
            renderMat.initialize({
              effectAsset: mat.effectAsset,
              defines
            });
            mat = renderMat;
          }

          return mat;
        }

        _render(render) {
          render.commitComp(this, this.renderData, this._spriteFrame, this._assembler, null);
        }

        _canRender() {
          if (!super._canRender()) {
            return false;
          }

          const spriteFrame = this._spriteFrame;

          if (!spriteFrame || !spriteFrame.texture) {
            return false;
          }

          return true;
        }

        resetAssembler() {
          this._assembler = null;

          this._flushAssembler();
        }

        _flushAssembler() {
          const assembler = _crd && GPRoundBoxAssembler === void 0 ? (_reportPossibleCrUseOfGPRoundBoxAssembler({
            error: Error()
          }), GPRoundBoxAssembler) : GPRoundBoxAssembler;

          if (this._assembler !== assembler) {
            this.destroyRenderData();
            this._assembler = assembler;
          }

          if (!this._renderData) {
            if (this._assembler && this._assembler.createData) {
              this._renderData = this._assembler.createData(this);
              this._renderData.material = this.getRenderMaterial(0);
              this.markForUpdateRenderData();

              if (this.spriteFrame) {
                this._assembler.updateRenderData(this);
              }

              this._updateColor();
            }
          }
        }

        _applySpriteSize() {
          if (this._spriteFrame) {
            if (BUILD || !this._spriteFrame.isDefault) {
              if (Sprite.SizeMode.RAW === this._sizeMode) {
                const size = this._spriteFrame.originalSize;

                this.node._uiProps.uiTransformComp.setContentSize(size);
              } else if (Sprite.SizeMode.TRIMMED === this._sizeMode) {
                const rect = this._spriteFrame.rect;

                this.node._uiProps.uiTransformComp.setContentSize(rect.width, rect.height);
              }
            }

            this.markForUpdateRenderData(true);

            this._assembler.updateRenderData(this);
          }
        }

        _resized() {
          if (!EDITOR) {
            return;
          }

          if (this._spriteFrame) {
            const actualSize = this.node._uiProps.uiTransformComp.contentSize;
            let expectedW = actualSize.width;
            let expectedH = actualSize.height;

            if (this._sizeMode === Sprite.SizeMode.RAW) {
              const size = this._spriteFrame.originalSize;
              expectedW = size.width;
              expectedH = size.height;
            } else if (this._sizeMode === Sprite.SizeMode.TRIMMED) {
              const rect = this._spriteFrame.rect;
              expectedW = rect.width;
              expectedH = rect.height;
            }

            if (expectedW !== actualSize.width || expectedH !== actualSize.height) {
              this._sizeMode = Sprite.SizeMode.CUSTOM;
            }
          }
        }

        _activateMaterial() {
          const spriteFrame = this._spriteFrame;
          const material = this.getRenderMaterial(0);

          if (spriteFrame) {
            if (material) {
              this.markForUpdateRenderData();
            }
          }

          if (this.renderData) {
            this.renderData.material = material;
          }
        }

        _updateUVs() {
          if (this._assembler) {
            this._assembler.updateUVs(this);
          }
        }

        _applySpriteFrame(oldFrame) {
          const spriteFrame = this._spriteFrame;
          let textureChanged = false;

          if (spriteFrame) {
            if (!oldFrame || oldFrame.texture !== spriteFrame.texture) {
              textureChanged = true;
            }

            if (textureChanged) {
              if (this.renderData) this.renderData.textureDirty = true;
              this.changeMaterialForDefine();
            }

            this._applySpriteSize();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_sizeMode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return Sprite.SizeMode.TRIMMED;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "sizeMode", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "sizeMode"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_useGrayscale", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "grayscale", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "grayscale"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_atlas", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteAtlas", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteAtlas"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_segments", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "segments", [_dec9], Object.getOwnPropertyDescriptor(_class2.prototype, "segments"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_radius", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 20;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "radius", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "radius"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_spriteFrame", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_leftTop", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "leftTop", [_dec15], Object.getOwnPropertyDescriptor(_class2.prototype, "leftTop"), _class2.prototype), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "_rightTop", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rightTop", [_dec17], Object.getOwnPropertyDescriptor(_class2.prototype, "rightTop"), _class2.prototype), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "_leftBottom", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "leftBottom", [_dec19], Object.getOwnPropertyDescriptor(_class2.prototype, "leftBottom"), _class2.prototype), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "_rightBottom", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "rightBottom", [_dec21], Object.getOwnPropertyDescriptor(_class2.prototype, "rightBottom"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ae8a330c51181e410dfe4742a7e5dade93cb593.js.map