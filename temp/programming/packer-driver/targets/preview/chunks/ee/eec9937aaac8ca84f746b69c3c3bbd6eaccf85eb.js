System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, System, ActionManager, director, TweenSystem, _crd, sys;

  function _reportPossibleCrUseOfActionManager(extras) {
    _reporterNs.report("ActionManager", "./actions/action-manager", _context.meta, extras);
  }

  _export("TweenSystem", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      System = _cc.System;
      director = _cc.director;
    }, function (_unresolved_2) {
      ActionManager = _unresolved_2.ActionManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ded85KOTO5I7ZuNHafbO7Fn", "tween-system", undefined);
      /*
       Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.
      
       https://www.cocos.com/
      
       Permission is hereby granted, free of charge, to any person obtaining a copy
       of this software and associated documentation files (the "Software"), to deal
       in the Software without restriction, including without limitation the rights to
       use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
       of the Software, and to permit persons to whom the Software is furnished to do so,
       subject to the following conditions:
      
       The above copyright notice and this permission notice shall be included in
       all copies or substantial portions of the Software.
      
       THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       THE SOFTWARE.
      */
      // import { EDITOR_NOT_IN_PREVIEW } from 'internal:constants';


      __checkObsolete__(['System']);

      /**
       * @en
       * Tween system.
       * @zh
       * 缓动系统。
       */
      __checkObsolete__(['Director', 'director']);

      _export("TweenSystem", TweenSystem = class TweenSystem extends System {
        constructor() {
          super(...arguments);
          this.actionMgr = new (_crd && ActionManager === void 0 ? (_reportPossibleCrUseOfActionManager({
            error: Error()
          }), ActionManager) : ActionManager)();
        }

        /**
         * @en
         * Gets the action manager.
         * @zh
         * 获取动作管理器。
         */
        get ActionManager() {
          return this.actionMgr;
        }

        /**
         * @en
         * The update will auto execute after all components update.
         * @zh
         * 此方法会在组件 update 之后自动执行。
         * @param dt @en The delta time @zh 间隔时间
         */
        update(dt) {
          // if (!EDITOR_NOT_IN_PREVIEW || this._executeInEditMode) {
          this.actionMgr.update(dt); // }
        }

      }); // director.on(Director.EVENT_INIT, () => {


      /**
       * @en
       * The ID flag of the system.
       * @zh
       * 此系统的 ID 标记。
       */
      TweenSystem.ID = 'TWEEN-PRO';

      /**
       * @en
       * Gets the instance of the tween system.
       * @zh
       * 获取缓动系统的实例。
       */
      TweenSystem.instance = void 0;
      sys = new TweenSystem();
      TweenSystem.instance = sys;
      director.registerSystem(TweenSystem.ID, sys, System.Priority.MEDIUM); // });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=eec9937aaac8ca84f746b69c3c3bbd6eaccf85eb.js.map