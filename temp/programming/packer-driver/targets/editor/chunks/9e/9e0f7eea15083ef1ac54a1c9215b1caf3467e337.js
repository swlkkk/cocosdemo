System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, NodePool, _dec, _class, _class2, _crd, ccclass, property, poolManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "442dcM5kZxKjq7TWTa6XqWw", "poolManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'NodePool']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("poolManager", poolManager = (_dec = ccclass('poolManager'), _dec(_class = (_class2 = class poolManager extends Component {
        constructor(...args) {
          super(...args);
          this._dictPool = {};
          this._dictPrefab = {};
        }

        static get instance() {
          if (this._instance) {
            return this._instance;
          }

          this._instance = new poolManager();
          return this._instance;
        }
        /**
         * 根据预设从对象池中获取对应节点
         */


        getNode(prefab, parent) {
          let name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          this._dictPrefab[name] = prefab;
          let node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            // 已有对应的对象池
            let pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            // 没有对应对象池就创建对象池
            let pool = new NodePool();
            this._dictPool[name] = pool;
            node = instantiate(prefab);
          }

          node.parent = parent;
          node.active = true;
          return node;
        }
        /**
         * 将对应节点放回对象池中
         */


        putNode(node) {
          if (!node) {
            return;
          }

          let name = node.name;
          let pool = null;

          if (this._dictPool.hasOwnProperty(name)) {
            //已有对应的对象池
            pool = this._dictPool[name];
          } else {
            //没有对应对象池，创建他！
            pool = new NodePool();
            this._dictPool[name] = pool;
          }

          pool.put(node);
        }
        /**
         * 根据名称，清除对应对象池
         */


        clearPool(name) {
          if (this._dictPool.hasOwnProperty(name)) {
            let pool = this._dictPool[name];
            pool.clear();
          }
        }
        /**
        * 预生成对象池
        * @param prefab
        * @param nodeNum
        * 使用——poolManager.instance.prePool(prefab, 40);
        */


        prePool(prefab, nodeNum) {
          const name = prefab.name;
          let pool = new NodePool();
          this._dictPool[name] = pool;

          for (let i = 0; i < nodeNum; i++) {
            const node = instantiate(prefab);
            pool.put(node);
          }
        }

        start() {}

        update(deltaTime) {}

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e0f7eea15083ef1ac54a1c9215b1caf3467e337.js.map