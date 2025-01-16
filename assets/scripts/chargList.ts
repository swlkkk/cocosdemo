import { _decorator, Component, Node, Prefab, instantiate } from 'cc';
import { itemTemplate } from './itemTemplate';
const { ccclass, property } = _decorator;

@ccclass('chargList')
export class chargList extends Component {
    @property(Prefab)
    chargeItem: Prefab = null;
    
    start() {
    }
    creation (Item: any) {
        for (let i = 0; i < Item.length; ++i) {
            const item = instantiate(this.chargeItem);
            const data = Item[i];
            this.node.addChild(item);
            item.getComponent(itemTemplate).init(data,i)
        }
    }
    clearAllNode() {
        this.node.removeAllChildren()
    }

    update(deltaTime: number) {
        
    }
}

