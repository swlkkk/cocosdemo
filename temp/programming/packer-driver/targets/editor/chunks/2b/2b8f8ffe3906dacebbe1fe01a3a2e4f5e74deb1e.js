System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, tween, Vec3, BoxCollider, Prefab, instantiate, machine, coinCreate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, spin;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfmachine(extras) {
    _reporterNs.report("machine", "./machine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
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
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      BoxCollider = _cc.BoxCollider;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      machine = _unresolved_2.machine;
    }, function (_unresolved_3) {
      coinCreate = _unresolved_3.coinCreate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8485c9QWiFH0q59fHAYIuc0", "spin", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'tween', 'Vec3', 'BoxCollider', 'ITriggerEvent', 'Prefab', 'instantiate', 'SpriteRenderer', 'SpriteFrame', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("spin", spin = (_dec = ccclass('spin'), _dec2 = property(Prefab), _dec(_class = (_class2 = class spin extends Component {
        constructor(...args) {
          super(...args);
          this.moveLeft = new Vec3(-15.3, 0, 0);
          this.moveRight = new Vec3(15.3, 0, 0);

          _initializerDefineProperty(this, "spinLight", _descriptor, this);

          this.spinAc = null;
          // 连线奖
          this.lineNum = null;
          this.lineType = null;
          // 经过spin的时间戳
          this.spints = 0;
          this.redTimer = null;
        }

        start() {
          this.moveSpin(this.node);
          let collider = this.node.getComponent(BoxCollider);
          collider.on('onTriggerExit', this.onTriggerEnter, this);

          if (this.spinLight != null) {
            let spinLight = instantiate(this.spinLight);
            this.node.addChild(spinLight);
          }

          ;
        }

        onTriggerEnter(event) {
          let Mc = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
            error: Error()
          }), machine) : machine);
          let pusherControl = this.node.parent.parent.parent.parent.getChildByName('Pusher').getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);

          if (!pusherControl.winning) {
            if (!Mc.isRolling) {
              if (Date.now() - this.spints <= 200) {
                return;
              }

              pusherControl.playMusic('music/spinMs');

              if (this.redTimer == null) {
                this.node.getChildByName('spinbg').getChildByName('Sprite20').active = true;
                this.node.getChildByName('spinbg').getChildByName('Sprite21').active = true;
                this.node.getChildByName('spinbg').getChildByName('Sprite22').active = true;
                this.node.getChildByName('spinbg').getChildByName('Sprite23').active = true;
                this.redTimer = setTimeout(() => {
                  this.node.getChildByName('spinbg').getChildByName('Sprite20').active = false;
                  this.node.getChildByName('spinbg').getChildByName('Sprite21').active = false;
                  this.node.getChildByName('spinbg').getChildByName('Sprite22').active = false;
                  this.node.getChildByName('spinbg').getChildByName('Sprite23').active = false;
                  clearTimeout(this.redTimer);
                  this.redTimer = null;
                }, 300);
              }

              this.spints = Date.now();
              let sendData = pusherControl.websocketFnc.ws_spinpass();
              pusherControl.websocket.websocket_sendMessage(sendData, pusherControl.ws, pusherControl.wsuuid, pusherControl.wssalt);
            }
          }
        }

        moveSpin(node) {
          Vec3.add(this.moveRight, this.moveRight, this.node.position);
          Vec3.add(this.moveLeft, this.moveLeft, this.moveRight);
          let mover = tween().to(1.5, {
            position: this.moveRight
          }, {
            easing: 'linear'
          });
          let movel = tween().to(1.5, {
            position: this.moveLeft
          }, {
            easing: 'linear'
          });
          this.spinAc = tween(node).then(mover).then(movel).union().repeatForever();
          this.spinAc.start();
        } // 设置奖项


        setprize(type) {
          let Mc = this.node.parent.parent.parent.parent.getChildByName('Pusher').getChildByName('Main').getChildByName('Canvas').getChildByName('Machine').getComponent(_crd && machine === void 0 ? (_reportPossibleCrUseOfmachine({
            error: Error()
          }), machine) : machine);

          if (type == 0) {
            // 连线奖
            if (this.lineNum == 1) {
              Mc.onHandleClicked(5, 1);
            } else if (this.lineNum == 2) {
              Mc.onHandleClicked(5, 2);
            } else if (this.lineNum == 3) {
              Mc.onHandleClicked(5, 3);
            }
          } else if (type == 1) {
            // 小玛丽
            Mc.onHandleClicked(7);
          } else if (type == 2) {
            // 叠叠乐
            Mc.onHandleClicked(6);
          } else if (type == 3) {
            // JP1
            Mc.onHandleClicked(1);
          } else if (type == 4) {
            // JP2
            Mc.onHandleClicked(2);
          } else if (type == 5) {
            // Jp3
            Mc.onHandleClicked(3);
          } else {
            // 全盘奖
            Mc.onHandleClicked(4);
          }
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "spinLight", [_dec2], {
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
//# sourceMappingURL=2b8f8ffe3906dacebbe1fe01a3a2e4f5e74deb1e.js.map