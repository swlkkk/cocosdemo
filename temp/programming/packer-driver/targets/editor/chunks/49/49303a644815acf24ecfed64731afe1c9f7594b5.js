System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Action, FiniteTimeAction, _crd;

  _export({
    Action: void 0,
    FiniteTimeAction: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c2ccK7klVCJqxm3SXKIWYx", "action", undefined);

      /*
       Copyright (c) 2008-2010 Ricardo Quesada
       Copyright (c) 2011-2012 cocos2d-x.org
       Copyright (c) 2013-2016 Chukong Technologies Inc.
       Copyright (c) 2017-2023 Xiamen Yaji Software Co., Ltd.
      
       http://www.cocos2d-x.org
      
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

      /**
       * @en Base classAction for action classes.
       * @zh Action 类是所有动作类型的基类。
       * @class Action
       */
      __checkObsolete__(['logID']);

      _export("Action", Action = class Action {
        constructor() {
          /**
           * The `originalTarget` and `target` are both assigned in `startWithTarget` method,
           * and they get the same value normally. The difference between `originalTarget` and
           * `target` is that `target` will be set to null after `stop` method is invoked
           * but `originalTarget` will not. Therefore, ActionManager could remove a stopped action
           * from hash map by searching action's `originalTarget`. You could refer to
           * ActionManager.removeAction for the details.
           */
          this.originalTarget = null;
          this.target = null;

          /**
           * The `workerTarget` was added from Cocos Creator 3.8.5 and it's used for nest `Tween` functionality.
           * It stores the target of sub-tween and its value may be different from `target`.
           *
           * Example 1:
           * ```ts
           *   tween(node).to(1, { scale: new Vec3(2, 2, 2) }).start();
           *   // target and original target are both `node`, workerTarget is `null`.
           * ```
           *
           * Example 2:
           * ```ts
           *   tween(node).parallel(                                        // ----- Root tween
           *       tween(node).to(1, { scale: new Vec3(2, 2, 2) }),         // ----- Sub tween 1
           *       tween(node).to(1, { position: new Vec3(10, 10, 10) })    // ----- Sub Tween 2
           *   ).start();
           *   // Note that only root tween is started here. We call tweens in `parallel`/`sequence` sub tweens.
           *   // The `target` and `originalTarget` of all internal actions are `node`.
           *   // Actions in root tween: workerTarget = null
           *   // Actions in sub tween 1: workerTarget = node
           *   // Actions in sub tween 2: workerTarget = node
           * ```
           *
           * Example 3:
           * ```ts
           *   tween(node).parallel(                                        // ----- Root tween
           *       tween(node).to(1, { scale: new Vec3(2, 2, 2) }),         // ----- Sub tween 1
           *       tween(node.getComponent(UITransform)).to(1, {            // ----- Sub Tween 2
           *           contentSize: new Size(10, 10)
           *       })
           *   ).start();
           *   // Note that only root tween is started here. We call tweens in `parallel`/`sequence` sub tweens.
           *   // The `target` and `originalTarget` of all internal actions are `node`.
           *   // Actions in root tween: workerTarget = null
           *   // Actions in sub tween 1: workerTarget = node
           *   // Actions in sub tween 2: workerTarget = node's UITransform component
           * ```
           */
          this.workerTarget = null;
          this.tag = Action.TAG_INVALID;

          /**
           * @en The identifier that to mark an internal action.
           */
          this._id = undefined;
          this._paused = false;
        }
        /**
         * @en
         * to copy object with deep copy.
         * returns a clone of action.
         * @zh 返回一个克隆的动作。
         * @method clone
         * @return {Action}
         */


        /**
         * @en
         * return true if the action has finished.
         * @zh 如果动作已完成就返回 true。
         * @method isDone
         * @return {Boolean}
         */
        isDone() {
          return true;
        } // called before the action start. It will also set the target.


        startWithTarget(target) {
          this.originalTarget = target;
          this.target = target;
        } // called after the action has finished. It will set the 'target' to nil.


        stop() {
          this.target = null;
        } // called every frame with it's delta time. <br />
        // Called once per frame. Time is the number of seconds of a frame interval.


        /**
         * @en get the target.
         * @zh 获取当前目标节点。
         * @method getTarget
         * @return {object}
         */
        getTarget() {
          return this.target;
        }
        /**
         * @en The action will modify the target properties.
         * @zh 设置目标节点。
         * @method setTarget
         * @param {object} target
         */


        setTarget(target) {
          this.target = target;
        }
        /**
         * @en get the original target.
         * @zh 获取原始目标节点。
         * @method getOriginalTarget
         * @return {object}
         */


        getOriginalTarget() {
          return this.originalTarget;
        } // Set the original target, since target can be nil.
        // Is the target that were used to run the action.
        // Unless you are doing something complex, like `ActionManager`, you should NOT call this method.


        setOriginalTarget(originalTarget) {
          this.originalTarget = originalTarget;
        }
        /**
         * @en get tag number.
         * @zh 获取用于识别动作的标签。
         * @method getTag
         * @return {Number}
         */


        getTag() {
          return this.tag;
        }
        /**
         * @en set tag number.
         * @zh 设置标签，用于识别动作。
         * @method setTag
         * @param {Number} tag
         */


        setTag(tag) {
          this.tag = tag;
        }
        /**
         * @en Set the identifier of the current action.
         * @param id @en The identifier to set
         */


        setId(id) {
          this._id = id;
        }
        /**
         * @en Get the identifier of the current action.
         * @return @en The identifier of the current action, it may be undefined if setId is never called.
         */


        getId() {
          return this._id;
        }

        setPaused(paused) {
          this._paused = paused;
        }
        /**
         * @en
         * Returns a reversed action. <br />
         * For example: <br />
         * - The action will be x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * - Will be rewritten
         * @zh 返回一个新的动作，执行与原动作完全相反的动作。
         * @method reverse
         * @return {Action | null}
         */


      });
      /**
       * @en
       * Base class actions that do have a finite time duration. <br/>
       * Possible actions: <br/>
       * - An action with a duration of 0 seconds. <br/>
       * - An action with a duration of 35.5 seconds.
       *
       * Infinite time actions are valid
       * @zh 有限时间动作，这种动作拥有时长 duration 属性。
       * @class FiniteTimeAction
       * @extends Action
       */


      /**
       * @en Default Action tag.
       * @zh 默认动作标签。
       * @constant
       * @static
       * @default -1
       */
      Action.TAG_INVALID = -1;

      _export("FiniteTimeAction", FiniteTimeAction = class FiniteTimeAction extends Action {
        constructor(...args) {
          super(...args);
          this._duration = 0;
        }

        getDurationScaled() {
          return this._duration;
        }
        /**
         * @en get duration of the action. (seconds).
         * @zh 获取动作以秒为单位的持续时间。
         * @method getDuration
         * @return {Number}
         */


        getDuration() {
          return this._duration;
        }
        /**
         * @en set duration of the action. (seconds).
         * @zh 设置动作以秒为单位的持续时间。
         * @method setDuration
         * @param {Number} duration
         */


        setDuration(duration) {
          this._duration = duration;
        }
        /**
         * @en
         * To copy object with deep copy.
         * returns a clone of FiniteTimeAction.
         * @zh 返回一个克隆的有限时间动作。
         * @method clone
         * @return {FiniteTimeAction}
         */


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=49303a644815acf24ecfed64731afe1c9f7594b5.js.map