System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, assetManager, SpriteFrame, Texture2D, resources, isValid, GPRoundBoxSprite, _dec, _class, _crd, ccclass, property, avatarts;

  function _reportPossibleCrUseOfGPRoundBoxSprite(extras) {
    _reporterNs.report("GPRoundBoxSprite", "./GPRoundBoxSprite", _context.meta, extras);
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
      assetManager = _cc.assetManager;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      resources = _cc.resources;
      isValid = _cc.isValid;
    }, function (_unresolved_2) {
      GPRoundBoxSprite = _unresolved_2.GPRoundBoxSprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7b915KsAFVMC7xc7hg4rLjn", "avatarts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ImageAsset', 'assetManager', 'SpriteFrame', 'Texture2D', 'Sprite', 'resources', 'isValid']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("avatarts", avatarts = (_dec = ccclass('avatarts'), _dec(_class = class avatarts extends Component {
        constructor(...args) {
          super(...args);
          this.cache = {};
        }

        start() {}

        getUserAvatar(remoteUrl) {
          var index = remoteUrl.lastIndexOf(".");
          var ext = remoteUrl.substring(index + 1);

          if (!this.isAssetTypeImage(ext)) {
            resources.load('default_avatar/spriteFrame', SpriteFrame, (err, spritePath) => {
              if (!err && spritePath) {
                this.node.getChildByName('avatar').getComponent(_crd && GPRoundBoxSprite === void 0 ? (_reportPossibleCrUseOfGPRoundBoxSprite({
                  error: Error()
                }), GPRoundBoxSprite) : GPRoundBoxSprite).spriteFrame = spritePath;
              }
            });
          } else {
            assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
              if (!err && imageAsset) {
                let spFrame = this.cache[imageAsset.uuid];

                if (!spFrame) {
                  const texture = new Texture2D();
                  texture.image = imageAsset;
                  spFrame = new SpriteFrame();
                  spFrame.texture = texture;
                  imageAsset.addRef();
                  this.cache[imageAsset.uuid] = spFrame;
                  this.node.getChildByName('avatar').getComponent(_crd && GPRoundBoxSprite === void 0 ? (_reportPossibleCrUseOfGPRoundBoxSprite({
                    error: Error()
                  }), GPRoundBoxSprite) : GPRoundBoxSprite).spriteFrame = spFrame;
                }

                spFrame.addRef();
              }
            });
          }
        }

        isAssetTypeImage(ext) {
          return ['png', 'jpg', 'jpeg'].indexOf(ext.toLowerCase()) !== -1;
        }

        releaseRemoteSprite(node) {
          if (!isValid(node)) {
            return;
          }

          const sp = node.getChildByName('avatar').getComponent(_crd && GPRoundBoxSprite === void 0 ? (_reportPossibleCrUseOfGPRoundBoxSprite({
            error: Error()
          }), GPRoundBoxSprite) : GPRoundBoxSprite);

          if (sp && sp.spriteFrame) {
            const spFrame = sp.spriteFrame;
            sp.spriteFrame.decRef(false); // 只把计数减1

            sp.spriteFrame = null;

            if (spFrame.refCount <= 0) {
              let texture = spFrame.texture; // 如果已加入动态合图，必须取原始的Texture2D

              if (spFrame.packable) {
                var _spFrame$original;

                texture = (_spFrame$original = spFrame.original) == null ? void 0 : _spFrame$original._texture;
              }

              if (texture) {
                var _texture$image;

                delete this.cache[texture.image.uuid]; // 删除映射表记录

                (_texture$image = texture.image) == null || _texture$image.decRef();
                texture.destroy();
              }

              spFrame.destroy();
            }
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8f0192313a72d088ed30c9f06d195608b5dc951e.js.map