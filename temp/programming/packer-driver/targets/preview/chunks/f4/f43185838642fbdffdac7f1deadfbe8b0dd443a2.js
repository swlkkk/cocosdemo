System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Vec3, RigidBody, BoxCollider, _dec, _class, _crd, ccclass, property, dbTs;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      RigidBody = _cc.RigidBody;
      BoxCollider = _cc.BoxCollider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "01053UvXvRKQ7+La4ftz22e", "dbTs", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3', 'RigidBody', 'Collider', 'ICollisionEvent', 'math', 'BoxCollider', 'CylinderCollider', 'PhysicsSystem']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("dbTs", dbTs = (_dec = ccclass('dbTS'), _dec(_class = class dbTs extends Component {
        start() {
          var collider = this.node.getComponent(BoxCollider);
          collider.on('onTriggerEnter', this.onTriggerStay, this);
        }

        onTriggerStay(event) {
          var coinBody = event.otherCollider.node.getComponent(RigidBody);

          if (coinBody != null) {
            if (coinBody.node.name == 'coinnew') {
              coinBody.setLinearVelocity(new Vec3(0, -120, 0));
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
//# sourceMappingURL=f43185838642fbdffdac7f1deadfbe8b0dd443a2.js.map