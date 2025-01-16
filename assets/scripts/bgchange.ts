import { _decorator, Component, Node, resources, Material, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;
import * as i18n from 'db://i18n/LanguageData';

@ccclass('bgchange')
export class bgchange extends Component {
    @property(Material)
    m1: Material = null
    @property(Material)
    m2: Material = null
    onLoad() {
        if (i18n._language == 'tc') {
            let mainmc = this.node.getComponent(MeshRenderer)
            mainmc.setSharedMaterial(this.m1, 1)
        } else {
            let mainmc = this.node.getComponent(MeshRenderer)
            mainmc.setSharedMaterial(this.m2, 1)
        }
    }
    start() {
    }

    update(deltaTime: number) {

    }
}

