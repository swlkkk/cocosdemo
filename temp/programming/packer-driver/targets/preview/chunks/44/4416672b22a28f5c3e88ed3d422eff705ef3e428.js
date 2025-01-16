System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, native, game, sys, settleTs, awardCl, coinCreate, chargList, _dec, _class, _crd, ccclass, property, popcontrol;

  function _reportPossibleCrUseOfsettleTs(extras) {
    _reporterNs.report("settleTs", "./settleTs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfawardCl(extras) {
    _reporterNs.report("awardCl", "./awardCl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcoinCreate(extras) {
    _reporterNs.report("coinCreate", "./coinCreate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfchargList(extras) {
    _reporterNs.report("chargList", "./chargList", _context.meta, extras);
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
      native = _cc.native;
      game = _cc.game;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      settleTs = _unresolved_2.settleTs;
    }, function (_unresolved_3) {
      awardCl = _unresolved_3.awardCl;
    }, function (_unresolved_4) {
      coinCreate = _unresolved_4.coinCreate;
    }, function (_unresolved_5) {
      chargList = _unresolved_5.chargList;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cec05vjvrVOw53IyjwUqHG7", "popcontrol", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'Node', 'native', 'game', 'sys', 'assetManager']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("popcontrol", popcontrol = (_dec = ccclass('popcontrol'), _dec(_class = class popcontrol extends Component {
        constructor() {
          super(...arguments);
          this.popNum = 0;
        }

        start() {}

        controlBalance(type, surplus) {
          if (surplus != null) {
            if (surplus == 'false') {
              this.popNum--;
              this.node.getChildByName('balance_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            } else {
              this.popNum--;
              this.node.getChildByName('balance_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }

              this.controlCharge(true);
            }
          } else {
            if (type) {
              this.popNum++;
              this.node.getChildByName('balance_node').active = true;
              this.node.active = true;
            } else {
              this.popNum--;
              this.node.getChildByName('balance_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          }
        }

        controlQuite(type, surplus) {
          if (surplus != null) {
            if (surplus == 'false') {
              this.popNum--;
              this.node.getChildByName('quite_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            } else if (surplus == 'next') {
              this.popNum--;
              this.node.getChildByName('quite_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }

              this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate).closeOut();
            }
          } else {
            if (type) {
              this.popNum++;
              this.node.getChildByName('quite_node').active = true;
              this.node.active = true;
            } else {
              this.popNum--;
              this.node.getChildByName('quite_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          }
        }

        controlTime(type, surplus) {
          if (surplus != null) {
            if (surplus == 'false') {
              this.popNum--;
              this.node.getChildByName('time_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }

              this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate).closeOut();
            }
          } else {
            if (type) {
              this.popNum++;
              this.node.getChildByName('time_node').active = true;
              this.node.active = true;
            } else {
              this.popNum--;
              this.node.getChildByName('time_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          }
        }

        controlSettle(type) {
          if (type) {
            this.popNum++;
            this.node.getChildByName('settle_node').active = true;
            this.node.getChildByName('settle_node').getComponent(_crd && settleTs === void 0 ? (_reportPossibleCrUseOfsettleTs({
              error: Error()
            }), settleTs) : settleTs).openTimeOut();
            this.node.active = true;
          } else {
            this.popNum--;
            this.node.getChildByName('settle_node').active = false;

            if (this.popNum == 0) {
              this.node.active = false;
            }

            this.node.getChildByName('settle_node').getChildByName('symbol_node').getChildByName('award_node').getComponent(_crd && awardCl === void 0 ? (_reportPossibleCrUseOfawardCl({
              error: Error()
            }), awardCl) : awardCl).clearData();

            if (sys.os == sys.OS.ANDROID && sys.isNative) {
              this.node.parent.parent.parent.getComponent(_crd && coinCreate === void 0 ? (_reportPossibleCrUseOfcoinCreate({
                error: Error()
              }), coinCreate) : coinCreate).releaseAny();
              this.node.parent.parent.parent.active = false;
              this.node.parent.parent.parent.parent.getChildByName('GameOver').active = true;
              setTimeout(() => {
                sys.garbageCollect();
                game.end();
              }, 1500);
            } else {
              game.end();
            }
          }
        }

        controlCharge(type, surplus) {
          if (surplus != null) {
            if (surplus == 'false') {
              this.popNum--;
              this.node.getChildByName('charge_node').active = false;
              this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(_crd && chargList === void 0 ? (_reportPossibleCrUseOfchargList({
                error: Error()
              }), chargList) : chargList).clearAllNode();

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          } else {
            if (type) {
              if (sys.os == sys.OS.ANDROID && sys.isNative) {
                this.popNum++;
                var arr = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getProducts", "()Ljava/lang/String;");

                if (arr !== "") {
                  this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(_crd && chargList === void 0 ? (_reportPossibleCrUseOfchargList({
                    error: Error()
                  }), chargList) : chargList).creation(JSON.parse(arr));
                } else {
                  arr = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "reGetProducts", "()Ljava/lang/String;");

                  if (arr !== "") {
                    this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(_crd && chargList === void 0 ? (_reportPossibleCrUseOfchargList({
                      error: Error()
                    }), chargList) : chargList).creation(JSON.parse(arr));
                  }
                }

                this.node.getChildByName('charge_node').active = true;
                this.node.active = true;
              }
            } else {
              this.popNum--;
              this.node.getChildByName('charge_node').active = false;
              this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(_crd && chargList === void 0 ? (_reportPossibleCrUseOfchargList({
                error: Error()
              }), chargList) : chargList).clearAllNode();

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          }
        }

        controlRule(type, surplus) {
          if (surplus != null) {
            if (surplus == 'false') {
              this.popNum--;
              this.node.getChildByName('rule_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          } else {
            if (type) {
              this.popNum++;
              this.node.getChildByName('rule_node').active = true;
              this.node.active = true;
            } else {
              this.popNum--;
              this.node.getChildByName('rule_node').active = false;

              if (this.popNum == 0) {
                this.node.active = false;
              }
            }
          }
        }

        controlError(type) {
          if (type) {
            this.popNum++;
            this.node.getChildByName('error_node').active = true;
            this.node.active = true;
          } else {
            this.popNum--;
            this.node.getChildByName('error_node').active = false;

            if (this.popNum == 0) {
              this.node.active = false;
            }
          }
        }

        controlTips(type) {
          if (type) {
            this.popNum++;
            this.node.getChildByName('tips_node').active = true;
            this.node.active = true;
          } else {
            this.popNum--;
            this.node.getChildByName('tips_node').active = false;

            if (this.popNum == 0) {
              this.node.active = false;
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
//# sourceMappingURL=4416672b22a28f5c3e88ed3d422eff705ef3e428.js.map