System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, wiperLeft, wiperRight, _dec, _class, _crd, ccclass, property, ysts;

  function _reportPossibleCrUseOfwiperLeft(extras) {
    _reporterNs.report("wiperLeft", "./wiperLeft", _context.meta, extras);
  }

  function _reportPossibleCrUseOfwiperRight(extras) {
    _reporterNs.report("wiperRight", "./wiperRight", _context.meta, extras);
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
    }, function (_unresolved_2) {
      wiperLeft = _unresolved_2.wiperLeft;
    }, function (_unresolved_3) {
      wiperRight = _unresolved_3.wiperRight;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1884aA4bjVHt7QEb6ti2PEN", "ysts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ysts", ysts = (_dec = ccclass('ysts'), _dec(_class = class ysts extends Component {
        constructor() {
          super(...arguments);
          this.wiperStatus = true;
          this.wStart = null;
        }

        start() {
          console.log('ysts初始化');
        }

        wiperswitch() {
          if (Date.now() - this.wStart <= 800) {
            return;
          }

          this.wStart = Date.now();
          var wiperL = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('wiper_l.001').getComponent(_crd && wiperLeft === void 0 ? (_reportPossibleCrUseOfwiperLeft({
            error: Error()
          }), wiperLeft) : wiperLeft);
          var wiperR = this.node.parent.parent.parent.getChildByName('pusher').getChildByName('component').getChildByName('wiper_r.001').getComponent(_crd && wiperRight === void 0 ? (_reportPossibleCrUseOfwiperRight({
            error: Error()
          }), wiperRight) : wiperRight);

          if (this.wiperStatus) {
            wiperL.wileft.stop();
            wiperR.wiRight.stop();
            this.wiperStatus = false;
          } else {
            wiperL.wileft.start();
            wiperR.wiRight.start();
            this.wiperStatus = true;
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cfe6f2996ca5af6604db628ea4b906f82ac4bec8.js.map