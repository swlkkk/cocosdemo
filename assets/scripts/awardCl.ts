import { _decorator, Component, Node, Label } from 'cc';
import { popcontrol } from './popcontrol';
const { ccclass, property } = _decorator;

@ccclass('awardCl')
export class awardCl extends Component {
    @property(Label)
    xmlLab: Label = null;
    @property(Label)
    ddlLab: Label = null;
    @property(Label)
    jp1Lab: Label = null;
    @property(Label)
    jp2Lab: Label = null;
    @property(Label)
    jp3Lab: Label = null;
    @property(Label)
    jpAllLab: Label = null;
    start() {
    }

    freshData(getCoin: number, data: any, price: number) {
        if(data.length > 0) {
            let iterator = data[Symbol.iterator]();
            let res = iterator.next();
            while (!res.done) {
                let value = res.value;
                res = iterator.next();
                if (value.type == 1) {
                    this.xmlLab.string =  'x' + value.count
                } else if (value.type == 2) {
                    this.ddlLab.string = 'x' + value.count
                } else if (value.type == 3) {
                    this.jp1Lab.string = 'x' + value.count
                } else if (value.type == 4) {
                    this.jp2Lab.string = 'x' + value.count
                } else if (value.type == 5) {
                    this.jp3Lab.string = 'x' + value.count
                } else if (value.type == 6) {
                    this.jpAllLab.string = 'x' + value.count
                }
            }
        } else {
            this.xmlLab.string = 'x0'
            this.ddlLab.string = 'x0'
            this.jp1Lab.string = 'x0'
            this.jp2Lab.string = 'x0'
            this.jp3Lab.string = 'x0'
            this.jpAllLab.string = 'x0'
        }
        this.node.parent.getChildByName('get_coin').getComponent(Label).string = '+' + getCoin * price
        this.node.parent.parent.parent.getComponent(popcontrol).controlSettle(true)
    }

    clearData() {
        this.node.parent.getChildByName('get_coin').getComponent(Label).string = ''
        this.xmlLab.string = 'x0'
        this.ddlLab.string = 'x0'
        this.jp1Lab.string = 'x0'
        this.jp2Lab.string = 'x0'
        this.jp3Lab.string = 'x0'
        this.jpAllLab.string = 'x0'
    }

    update(deltaTime: number) {

    }
}

