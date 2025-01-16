System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RigidBody, Collider, Vec3, _dec, _class, _crd, ccclass, property, srewts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
      Collider = _cc.Collider;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a2971yDLBxP84M+yu1dKMRD", "srewts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RigidBody', 'Collider', 'ICollisionEvent', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("srewts", srewts = (_dec = ccclass('srewts'), _dec(_class = class srewts extends Component {
        start() {
          let collider = this.node.getComponent(Collider);
          collider.on('onCollisionEnter', this.onCollision, this);
        }

        onCollision(event) {
          if (event.otherCollider.node.getComponent(RigidBody) != null) {
            if (event.otherCollider.node.getComponent(RigidBody).node.name == 'coinnew') {
              event.otherCollider.node.getComponent(RigidBody).setLinearVelocity(new Vec3(0, -85, 0));
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
//# sourceMappingURL=c0febcf4a7d339bf5b71f789bf1c6103b19bdce4.js.map