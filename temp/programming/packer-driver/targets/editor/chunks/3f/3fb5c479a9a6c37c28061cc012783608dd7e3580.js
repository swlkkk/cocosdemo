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
          console.log('pushplate初始化');
          let collider = this.node.getComponent(Collider); // 监听触发事件

          collider.on('onCollisionEnter', this.onCollision, this); // 动态添加刚体

          this.node.addComponent(RigidBody);
          let pushRigbody = this.node.getComponent(RigidBody);
          pushRigbody.type = 4;
          pushRigbody.group = 4;
          this.rotationPlate(this.node);
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
//# sourceMappingURL=3fb5c479a9a6c37c28061cc012783608dd7e3580.js.map