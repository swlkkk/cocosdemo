System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Sprite, SpriteFrame, resources, native, sys, coinCreate, popcontrol, _dec, _class, _crd, ccclass, property, menu;

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfpopcontrol(extras) {
    _reporterNs.report("popcontrol", "./popcontrol", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      resources = _cc.resources;
      native = _cc.native;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      coinCreate = _unresolved_2.coinCreate;
    }, function (_unresolved_3) {
      popcontrol = _unresolved_3.popcontrol;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cb62dEZf/lDN6JcYgSt0J4Q", "menu", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Sprite', 'SpriteFrame', 'resources', 'director', 'game', 'native', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("menu", menu = (_dec = ccclass('menu'), _dec(_class = class menu extends Component {
        constructor(...args) {
          super(...args);
          this.menuSpritePath = ['btn_xntb_menu01/spriteFrame', 'btn_xntb_menu02/spriteFrame', 'btn_xntb_sound01/spriteFrame', 'btn_xntb_sound02/spriteFrame'];
          this.orientsymbol = false;
        }

        onLoad() {
          this.menuSpritePath.forEach(spritePath => {
            resources.preload(spritePath, SpriteFrame);
          });
        }

        start() {
          var pusher = this.node.parent.parent.parent;

          if (pusher.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate).soundStatus) {
            resources.load(this.menuSpritePath[2], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath;
            });
          } else {
            resources.load(this.menuSpritePath[3], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath;
            });
          }
        }

        orientChange() {
          if (!this.orientsymbol) {
            this.orientsymbol = true;
            resources.load(this.menuSpritePath[1], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('back_btn').getComponent(Sprite).spriteFrame = spritePath;
            });
            this.node.getChildByName('menu_bg').active = false;
            this.node.getChildByName('charge').active = false;
            this.node.getChildByName('rule').active = false;
            this.node.getChildByName('sound').active = false;
            this.node.getChildByName('exit').active = false;
          } else {
            this.orientsymbol = false;
            resources.load(this.menuSpritePath[0], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('back_btn').getComponent(Sprite).spriteFrame = spritePath;
            });
            this.node.getChildByName('menu_bg').active = true;
            this.node.getChildByName('charge').active = true;
            this.node.getChildByName('rule').active = true;
            this.node.getChildByName('sound').active = true;
            this.node.getChildByName('exit').active = true;
          }
        } // 充值


        toCharge() {
          var popControl = this.node.parent.getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol);
          popControl.controlCharge(true);
        } // 离开房间


        roomOut() {
          var pusher = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);
          var popControl = this.node.parent.getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol);

          if (pusher.isDroped) {
            popControl.controlQuite(true);
          } else {
            pusher.closeOut();
          }
        } // 规则弹窗


        conRule() {
          var popControl = this.node.parent.getChildByName('pop_node').getComponent(_crd && popcontrol === void 0 ? (_reportPossibleCrUseOfpopcontrol({
            error: Error()
          }), popcontrol) : popcontrol);
          popControl.controlRule(true);
        } // 声音控制


        soundSwitch() {
          var pusher = this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
            error: Error()
          }), coinCreate) : coinCreate);

          if (pusher.soundStatus) {
            pusher.soundStatus = false;
            resources.load(this.menuSpritePath[3], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath;
            });
            pusher.soundApi.stop();
          } else {
            pusher.soundStatus = true;
            resources.load(this.menuSpritePath[2], SpriteFrame, (err, spritePath) => {
              this.node.getChildByName('sound').getChildByName('sound_icon').getComponent(Sprite).spriteFrame = spritePath;
            });
            pusher.playMusic('music/bgMusic');
          }

          if (sys.os == sys.OS.ANDROID && sys.isNative) {
            native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "setSound", "(Z)V", pusher.soundStatus);
          }
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c6190f6aff97439522b091ada6040ee8221e2ced.js.map