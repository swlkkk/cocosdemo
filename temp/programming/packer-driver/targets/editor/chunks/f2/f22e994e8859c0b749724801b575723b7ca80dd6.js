System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, pdpool;

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dde898GeEBGEJXfk3cTUC8Y", "pdpool", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'RigidBody']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pdpool", pdpool = (_dec = ccclass('pdpool'), _dec2 = property(Prefab), _dec(_class = (_class2 = class pdpool extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pdCoin", _descriptor, this);
        }

        // 铺底金币
        start() {// this.scheduleOnce(()=>{
          //     this.initEnemy();
          // })
        }

        initEnemy() {
          for (let index = 0; index < 100; index++) {
            let randx = Number(this.randomNum(18.605, 45.505, 3));
            let randy = Number(this.randomNum(31.7, 32.2, 3));
            let randz = Number(this.randomNum(43.097, 53.673, 3));
            let pdCoin = instantiate(this.pdCoin);
            this.node.addChild(pdCoin);
            pdCoin.setPosition(randx, randy, randz);
          }
        }

        randomNum(maxNum, minNum, decimalNum) {
          var max = 0,
              min = 0;
          minNum <= maxNum ? (min = minNum, max = maxNum) : (min = maxNum, max = minNum);

          switch (arguments.length) {
            case 1:
              return Math.floor(Math.random() * (max + 1));
              break;

            case 2:
              return Math.floor(Math.random() * (max - min + 1) + min);
              break;

            case 3:
              return (Math.random() * (max - min) + min).toFixed(decimalNum);
              break;

            default:
              return Math.random();
              break;
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pdCoin", [_dec2], {
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
//# sourceMappingURL=f22e994e8859c0b749724801b575723b7ca80dd6.js.map