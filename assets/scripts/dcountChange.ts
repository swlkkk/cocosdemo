import { _decorator, Component, Label, Node, color } from 'cc';
import { coinCreate } from './coinCreate';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('dcountChange')
export class dcountChange extends Component {
    start() {

    }

    changeDrop() {
        var ccsPu = this.node.parent.parent.parent.parent
        if (ccsPu.getComponent(coinCreate).winning) return
        if (ccsPu.getComponent(coinCreate).dropStatus == 1) {
            ccsPu.getComponent(coinCreate).dropStatus = 3
            this.node.getChildByName('count_num').active = false
            this.node.getChildByName('count_num_three').active = true
            this.node.parent.getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tsc')
            this.node.getChildByName('count_label').getComponent(Label).outlineColor = color(78, 81, 0)
        } else {
            ccsPu.getComponent(coinCreate).dropStatus = 1
            this.node.getChildByName('count_num').active = true
            this.node.getChildByName('count_num_three').active = false
            this.node.parent.getChildByName('drop_btn').getChildByName('count_label').getComponent(Label).string = i18n.t('cocos.tyc')
            this.node.getChildByName('count_label').getComponent(Label).outlineColor = color(143,83,181)
        }
    }

    update(deltaTime: number) {

    }
}

