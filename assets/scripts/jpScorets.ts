import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('jpScorets')
export class jpScorets extends Component {
    @property(Label)
    allLabel: Label = null;
    @property(Label)
    getscoreLabel: Label = null;
    start() {
    }

    fillter(number: number) {
        if (number < 10) {
            return '00000' + number.toString()
        } else if (number >= 10 && number < 100) {
            return '0000' + number.toString()
        } else if (number >= 100 && number < 1000) {
            return '000' + number.toString()
        } else if (number >= 1000 && number < 10000) {
            return '00' + number.toString()
        } else if (number >= 10000 && number < 100000) {
            return '0' + number.toString()
        } else if (number >= 100000 && number < 1000000) {
            return number.toString()
        }
    }

    private _allScore: number = 0;
    private _getScore: number = 0;

    // 总分
    public get allScore(): number {
        return this._allScore
    }

    public set allScore(parmas: number) {
        this._allScore = parmas;
        this.allLabel.string = this.fillter(this._allScore)
    }

    // 获得
    public get getScore(): number {
        return this._getScore
    }

    public set getScore(parmas: number) {
        this._getScore = parmas;
        this.getscoreLabel.string = this.fillter(this._getScore)
    }

    update(deltaTime: number) {

    }
}

