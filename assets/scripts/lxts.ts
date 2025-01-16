import { _decorator, Component, Node, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('lxts')
export class lxts extends Component {
    @property(Label)
    label: Label = null;
    @property(Label)
    label1: Label = null;
    start() {

    }

    // 奖励金币数量
    private _score: number = 0;

    public get score(): number {
        return this._score
    }

    public set score(parmas: number) {
        this._score = parmas;
        this.label.string = this._score.toString();
    }
    // 剩余金币数量
    private _score1: number = 0;

    public get score1(): number {
        return this._score1
    }

    public set score1(parmas: number) {
        this._score1 = parmas;
        this.label1.string = this._score1.toString();
    }

    update(deltaTime: number) {
        
    }
}

