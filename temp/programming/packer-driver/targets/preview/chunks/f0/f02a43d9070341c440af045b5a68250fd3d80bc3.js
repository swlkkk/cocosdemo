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
        constructor() {
          super(...arguments);
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
          var name = prefab.name; //@ts-ignore

          if (!prefab.position) {
            //@ts-ignore
            name = prefab.data.name;
          }

          this._dictPrefab[name] = prefab;
          var node = null;

          if (this._dictPool.hasOwnProperty(name)) {
            // 已有对应的对象池
            var pool = this._dictPool[name];

            if (pool.size() > 0) {
              node = pool.get();
            } else {
              node = instantiate(prefab);
            }
          } else {
            // 没有对应对象池就创建对象池
            var _pool = new NodePool();

            this._dictPool[name] = _pool;
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

          var name = node.name;
          var pool = null;

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
            var pool = this._dictPool[name];
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
          var name = prefab.name;
          var pool = new NodePool();
          this._dictPool[name] = pool;

          for (var i = 0; i < nodeNum; i++) {
            var node = instantiate(prefab);
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
//# sourceMappingURL=f02a43d9070341c440af045b5a68250fd3d80bc3.js.map