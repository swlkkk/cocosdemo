import { _decorator, Component, director, Label, Node, native, game, sys, assetManager, view, UITransform } from 'cc';
import { settleTs } from './settleTs';
import { awardCl } from './awardCl';
import { coinCreate } from './coinCreate';
import { chargList } from './chargList';
const { ccclass, property } = _decorator;

@ccclass('popcontrol')
export class popcontrol extends Component {
    popNum = 0
    start() {
    }

    controlBalance(type: boolean, surplus?: string) {
        if (surplus != null) {
            if (surplus == 'false') {
                this.popNum--;
                this.node.getChildByName('balance_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            } else {
                this.popNum--;
                this.node.getChildByName('balance_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
                this.controlCharge(true)
            }
        } else {
            if (type) {
                this.popNum++;
                this.node.getChildByName('balance_node').active = true
                this.node.active = true
            } else {
                this.popNum--;
                this.node.getChildByName('balance_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        }
    }
    controlQuite(type: boolean, surplus?: string) {
        if (surplus != null) {
            if (surplus == 'false') {
                this.popNum--;
                this.node.getChildByName('quite_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            } else if (surplus == 'next') {
                this.popNum--;
                this.node.getChildByName('quite_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
                this.node.parent.parent.parent.getComponent(coinCreate).closeOut()
            }
        } else {
            if (type) {
                this.popNum++;
                this.node.getChildByName('quite_node').active = true
                this.node.active = true
            } else {
                this.popNum--;
                this.node.getChildByName('quite_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        }
    }
    controlTime(type: boolean, surplus?: string) {
        if (surplus != null) {
            if (surplus == 'false') {
                this.popNum--;
                this.node.getChildByName('time_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
                this.node.parent.parent.parent.getComponent(coinCreate).closeOut()
            }
        } else {
            if (type) {
                this.popNum++;
                this.node.getChildByName('time_node').active = true
                this.node.active = true
            } else {
                this.popNum--;
                this.node.getChildByName('time_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        }
    }
    controlSettle(type: boolean) {
        if (type) {
            this.popNum++;
            this.node.getChildByName('settle_node').active = true
            this.node.getChildByName('settle_node').getComponent(settleTs).openTimeOut()
            this.node.active = true
        } else {
            this.popNum--;
            this.node.getChildByName('settle_node').active = false
            if (this.popNum == 0) {
                this.node.active = false
            }
            this.node.getChildByName('settle_node').getChildByName('symbol_node').getChildByName('award_node').getComponent(awardCl).clearData()
            if (sys.os == sys.OS.ANDROID && sys.isNative) {
                this.node.parent.parent.parent.getComponent(coinCreate).releaseAny()
                this.node.parent.parent.parent.active = false;
                this.node.parent.parent.parent.parent.getChildByName('GameOver').active = true
                setTimeout(() => {
                    sys.garbageCollect();
                    game.end();
                }, 1500);
            } else {
                game.end()
            }
        }
    }
    controlCharge(type: boolean, surplus?: string) {
        if (surplus != null) {
            if (surplus == 'false') {
                this.popNum--;
                this.node.getChildByName('charge_node').active = false
                this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(chargList).clearAllNode()
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        } else {
            if (type) {
            } else {
                this.popNum--;
                this.node.getChildByName('charge_node').active = false
                this.node.getChildByName('charge_node').getChildByName('ScrollView').getChildByName('view').getChildByName('content').getComponent(chargList).clearAllNode()
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        }
    }
    controlRule(type: boolean, surplus?: string) {
        if (surplus != null) {
            if (surplus == 'false') {
                this.popNum--;
                this.node.getChildByName('rule_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        } else {
            if (type) {
                this.popNum++;
                this.node.getChildByName('rule_node').active = true
                this.node.active = true
            } else {
                this.popNum--;
                this.node.getChildByName('rule_node').active = false
                if (this.popNum == 0) {
                    this.node.active = false
                }
            }
        }
    }
    controlError(type: boolean) {
        if (type) {
            this.popNum++;
            this.node.getChildByName('error_node').active = true
            this.node.active = true
        } else {
            this.popNum--;
            this.node.getChildByName('error_node').active = false
            if (this.popNum == 0) {
                this.node.active = false
            }
        }
    }
    controlTips(type: boolean) {
        if (type) {
            this.popNum++;
            this.node.getChildByName('tips_node').active = true
            this.node.active = true
        } else {
            this.popNum--;
            this.node.getChildByName('tips_node').active = false
            if (this.popNum == 0) {
                this.node.active = false
            }
        }
    }
    update(deltaTime: number) {

    }
}

