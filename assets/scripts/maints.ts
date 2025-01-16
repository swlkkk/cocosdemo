import {
    _decorator,
    Component,
    Node,
    Label,
    Prefab,
    resources,
    Material,
    MeshRenderer
} from 'cc';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('maints')
export class maints extends Component {
    @property(Label)
    label1: Label = null;
    @property(Label)
    label2: Label = null;
    @property(Label)
    label3: Label = null;
    @property(Label)
    label4: Label = null;
    @property(Label)
    label5: Label = null;
    @property(Label)
    label6: Label = null;
    @property(Label)
    label7: Label = null;
    @property(Label)
    label8: Label = null;
    @property(Label)
    label9: Label = null;
    @property(Label)
    label10: Label = null;
    @property(Label)
    label11: Label = null;
    @property(Label)
    label12: Label = null;
    @property(Material)
    m1: Material = null
    @property(Material)
    m2: Material = null

    onLoad(): void {
        if (i18n._language == 'tc') {
            let mainmc = this.node.getChildByName('mainScreen').getComponent(MeshRenderer)
            mainmc.setSharedMaterial(this.m1, 0)
        } else {
            let mainmc = this.node.getChildByName('mainScreen').getComponent(MeshRenderer)
            mainmc.setSharedMaterial(this.m2, 0)
        }
    }

    start() {
    }

    private _score1: number = 0;
    private _score2: number = 0;
    private _score3: number = 0;
    private _score4: number = 0;
    private _score5: number = 0;
    private _score6: number = 0;
    private _score7: number = 0;
    private _score8: number = 0;
    private _score9: number = 0;
    private _score10: number = 0;
    private _score11: number = 0;
    private _score12: number = 0;

    public get score1(): number {
        return this._score1
    }
    public get score2(): number {
        return this._score2
    }
    public get score3(): number {
        return this._score3
    }
    public get score4(): number {
        return this._score4
    }
    public get score5(): number {
        return this._score5
    }
    public get score6(): number {
        return this._score6
    }
    public get score7(): number {
        return this._score7
    }
    public get score8(): number {
        return this._score8
    }
    public get score9(): number {
        return this._score9
    }
    public get score10(): number {
        return this._score10
    }
    public get score11(): number {
        return this._score11
    }
    public get score12(): number {
        return this._score12
    }

    public set score1(parmas: number) {
        this._score1 = parmas;
        this.label1.string = parmas.toString();
    }
    public set score2(parmas: number) {
        this._score2 = parmas;
        this.label2.string = parmas.toString();
    }
    public set score3(parmas: number) {
        this._score3 = parmas;
        this.label3.string = parmas.toString();
    }
    public set score4(parmas: number) {
        this._score4 = parmas;
        this.label4.string = parmas.toString();
    }
    public set score5(parmas: number) {
        this._score5 = parmas;
        this.label5.string = parmas.toString();
    }
    public set score6(parmas: number) {
        this._score6 = parmas;
        this.label6.string = parmas.toString();
    }
    public set score7(parmas: number) {
        this._score7 = parmas;
        this.label7.string = parmas.toString();
    }
    public set score8(parmas: number) {
        this._score8 = parmas;
        this.label8.string = parmas.toString();
    }
    public set score9(parmas: number) {
        this._score9 = parmas;
        this.label9.string = parmas.toString();
    }
    public set score10(parmas: number) {
        this._score10 = parmas;
        this.label10.string = parmas.toString();
    }
    public set score11(parmas: number) {
        this._score11 = parmas;
        this.label11.string = parmas.toString();
    }
    public set score12(parmas: number) {
        this._score12 = parmas;
        this.label12.string = parmas.toString();
    }
    update(deltaTime: number) {

    }
}