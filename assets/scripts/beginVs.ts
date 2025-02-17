import { _decorator, Component, Node, director, sys, native, assetManager, game, loader, } from 'cc';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('beginVs')
export class beginVs extends Component {
    onLoad() {
    }
    start() {
        setTimeout(() => {
            director.loadScene("scene")
        }, 1500);
    }
    update(deltaTime: number) {

    }
}