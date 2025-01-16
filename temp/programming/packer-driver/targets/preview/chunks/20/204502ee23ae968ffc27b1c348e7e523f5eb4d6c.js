System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, RigidBody, _dec, _class, _crd, ccclass, property, pushCoinRig;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      RigidBody = _cc.RigidBody;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00b26PoOTVNC5KCDAwMdZtA", "pushCoinRig", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RigidBody', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("pushCoinRig", pushCoinRig = (_dec = ccclass('pushCoinRig'), _dec(_class = class pushCoinRig extends Component {
        onLoad() {
          console.log(this.node.children);

          for (var i = 0; i < this.node.children.length; i++) {
            if (this.node.children[i].getComponent(RigidBody) == null) {
              var onceChind = this.node.children[i];
              onceChind.addComponent(RigidBody);
              onceChind.getComponent(RigidBody).type = 1;
              onceChind.getComponent(RigidBody).group = 2;
            } // onceChind.getComponent(RigidBody).mass = 200
            // onceChind.getComponent(RigidBody).allowSleep = false
            // onceChind.getComponent(RigidBody).linearDamping = 0.814
            // onceChind.getComponent(RigidBody).angularDamping = 0.814
            // onceChind.getComponent(RigidBody).useGravity = true
            // onceChind.getComponent(RigidBody).linearFactor = new Vec3(1,1,1)
            // onceChind.getComponent(RigidBody).angularFactor = new Vec3(1,1,1)

          }

          setTimeout(() => {
            console.log(this.node);
          }, 1000);
        }

        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=204502ee23ae968ffc27b1c348e7e523f5eb4d6c.js.map