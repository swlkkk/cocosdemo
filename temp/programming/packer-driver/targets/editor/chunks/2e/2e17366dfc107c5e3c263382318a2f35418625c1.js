System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, RigidBody, Collider, _dec, _class, _crd, ccclass, property, pushplate;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
      Collider = _cc.Collider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "99ea9qe7TZGzoyKdC3tj69G", "pushplate", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3', 'RigidBody', 'Collider', 'ICollisionEvent', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pushplate", pushplate = (_dec = ccclass('pushplate'), _dec(_class = class pushplate extends Component {
        constructor(...args) {
          super(...args);
          this.moveOut = new Vec3(0, 7.5, 0);
          this.moveIn = new Vec3(0, -7.5, 0);
        }

        start() {
          this.rotationPlate(this.node);
          let collider = this.node.getComponent(Collider); // 监听触发事件

          collider.on('onCollisionEnter', this.onCollision, this);
        }

        onCollision(event) {
          var coinBody = event.otherCollider.node.getComponent(RigidBody);

          if (coinBody != null) {
            if (coinBody.node.name == 'coinnew') {
              coinBody.useCCD = false;
              coinBody.clearState();
            }
          }
        }

        rotationPlate(node) {
          Vec3.add(this.moveIn, this.moveIn, this.node.position);
          Vec3.add(this.moveOut, this.moveOut, this.moveIn);
          let inSide = tween().to(1.3, {
            position: this.moveIn
          }, {
            easing: 'linear'
          });
          let outSide = tween().to(1.3, {
            position: this.moveOut
          }, {
            easing: 'linear'
          });
          tween(node).then(inSide).then(outSide).union().repeatForever().start();
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e17366dfc107c5e3c263382318a2f35418625c1.js.map