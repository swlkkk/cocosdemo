import { _decorator, Component, Node, director, sys, native, assetManager, game, loader, } from 'cc';
import * as i18n from 'db://i18n/LanguageData';
const { ccclass, property } = _decorator;

@ccclass('beginVs')
export class beginVs extends Component {
    onLoad() {
        if (sys.os == sys.OS.ANDROID && sys.isNative) {
            let lang = native.reflection.callStaticMethod("com/lotogram/tbjdwc/mvvm/ui/activity/TuibiDevicesActivity", "getLanguage", "()Ljava/lang/String;")
            if (lang.indexOf('zh') == -1) {
                i18n.init('en')
                i18n.updateSceneRenderers()
            }
        }
    }
    start() {
        setTimeout(() => {
            director.loadScene("scene")
        }, 1500);
    }
    update(deltaTime: number) {

    }
}