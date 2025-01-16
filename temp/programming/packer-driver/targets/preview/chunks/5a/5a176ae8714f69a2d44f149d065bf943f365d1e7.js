System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FiniteTimeAction, Renderer, ActionInstant, Show, Hide, ToggleVisibility, RemoveSelf, CallFunc, _crd;

  /**
   * @en Show the Node.
   * @zh 立即显示。
   * @method show
   * @return {Show}
   * @example
   * // example
   * var showAction = show();
   */
  function show() {
    return new Show();
  }
  /*
   * Hide the node.
   * @class Hide
   * @extends ActionInstant
   */


  /**
   * @en Hide the node.
   * @zh 立即隐藏。
   * @method hide
   * @return {Hide}
   * @example
   * // example
   * var hideAction = hide();
   */
  function hide() {
    return new Hide();
  }
  /*
   * Toggles the visibility of a node.
   * @class ToggleVisibility
   * @extends ActionInstant
   */


  /**
   * @en Toggles the visibility of a node.
   * @zh 显隐状态切换。
   * @method toggleVisibility
   * @return {ToggleVisibility}
   * @example
   * // example
   * var toggleVisibilityAction = toggleVisibility();
   */
  function toggleVisibility() {
    return new ToggleVisibility();
  }
  /*
   * Delete self in the next frame.
   * @class RemoveSelf
   * @extends ActionInstant
   * @param {Boolean} [isNeedCleanUp=true]
   *
   * @example
   * // example
   * var removeSelfAction = new RemoveSelf(false);
   */


  /**
   * @en Create a RemoveSelf object with a flag indicate whether the target should be cleaned up while removing.
   * @zh 从父节点移除自身。
   * @method removeSelf
   * @param {Boolean} [isNeedCleanUp = true]
   * @return {RemoveSelf}
   *
   * @example
   * // example
   * var removeSelfAction = removeSelf();
   */
  function removeSelf(isNeedCleanUp) {
    return new RemoveSelf(isNeedCleanUp);
  }

  /**
   * @en Creates the action with the callback.
   * @zh 执行回调函数。
   * @method callFunc
   * @param {function} selector
   * @param {object} [selectorTarget=null]
   * @param {*} [data=null] - data for function, it accepts all data types.
   * @return {ActionInstant}
   * @example
   * // example
   * // CallFunc without data
   * var finish = callFunc(this.removeSprite, this);
   *
   * // CallFunc with data
   * var finish = callFunc(this.removeFromParentAndCleanup, this._grossini,  true);
   */
  function callFunc(selector, selectorTarget, data) {
    return new CallFunc(selector, selectorTarget, data);
  }

  function _reportPossibleCrUseOfFiniteTimeAction(extras) {
    _reporterNs.report("FiniteTimeAction", "./action", _context.meta, extras);
  }

  _export({
    ActionInstant: void 0,
    Show: void 0,
    show: show,
    Hide: void 0,
    hide: hide,
    ToggleVisibility: void 0,
    toggleVisibility: toggleVisibility,
    RemoveSelf: void 0,
    removeSelf: removeSelf,
    CallFunc: void 0,
    callFunc: callFunc
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Renderer = _cc.Renderer;
    }, function (_unresolved_2) {
      FiniteTimeAction = _unresolved_2.FiniteTimeAction;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7889f96TQdPq57UY3acwQ5z", "action-instant", undefined);
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


      __checkObsolete__(['Renderer']);

      /**
       * @en Instant actions are immediate actions. They don't have a duration like the ActionInterval actions.
       * @zh 即时动作，这种动作立即就会执行，继承自 FiniteTimeAction。
       * @class ActionInstant
       * @extends FiniteTimeAction
       */
      __checkObsolete__(['Node']);

      _export("ActionInstant", ActionInstant = class ActionInstant extends (_crd && FiniteTimeAction === void 0 ? (_reportPossibleCrUseOfFiniteTimeAction({
        error: Error()
      }), FiniteTimeAction) : FiniteTimeAction) {
        isDone() {
          return true;
        }

        step(_dt) {
          this.update(1);
        }

        update(_dt) {// nothing
        }
        /**
         * returns a reversed action. <br />
         * For example: <br />
         * - The action is x coordinates of 0 move to 100. <br />
         * - The reversed action will be x of 100 move to 0.
         * @returns {Action}
         */


        reverse() {
          return this.clone();
        }

      });
      /*
       * Show the node.
       * @class Show
       * @extends ActionInstant
       */


      _export("Show", Show = class Show extends ActionInstant {
        update(_dt) {
          var _this$workerTarget;

          var target = (_this$workerTarget = this.workerTarget) != null ? _this$workerTarget : this.target;
          if (!target) return;

          var _renderComps = target.getComponentsInChildren(Renderer);

          for (var i = 0; i < _renderComps.length; ++i) {
            var render = _renderComps[i];
            render.enabled = true;
          }
        }

        reverse() {
          return new Hide();
        }

        clone() {
          var action = new Show();
          action._id = this._id;
          return action;
        }

      });

      _export("Hide", Hide = class Hide extends ActionInstant {
        update(_dt) {
          var _this$workerTarget2;

          var target = (_this$workerTarget2 = this.workerTarget) != null ? _this$workerTarget2 : this.target;
          if (!target) return;

          var _renderComps = target.getComponentsInChildren(Renderer);

          for (var i = 0; i < _renderComps.length; ++i) {
            var render = _renderComps[i];
            render.enabled = false;
          }
        }

        reverse() {
          return new Show();
        }

        clone() {
          var action = new Hide();
          action._id = this._id;
          return action;
        }

      });

      _export("ToggleVisibility", ToggleVisibility = class ToggleVisibility extends ActionInstant {
        update(_dt) {
          var _this$workerTarget3;

          var target = (_this$workerTarget3 = this.workerTarget) != null ? _this$workerTarget3 : this.target;
          if (!target) return;

          var _renderComps = target.getComponentsInChildren(Renderer);

          for (var i = 0; i < _renderComps.length; ++i) {
            var render = _renderComps[i];
            render.enabled = !render.enabled;
          }
        }

        reverse() {
          return new ToggleVisibility();
        }

        clone() {
          var action = new ToggleVisibility();
          action._id = this._id;
          return action;
        }

      });

      _export("RemoveSelf", RemoveSelf = class RemoveSelf extends ActionInstant {
        constructor(isNeedCleanUp) {
          super();
          this._isNeedCleanUp = true;
          if (isNeedCleanUp !== undefined) this.init(isNeedCleanUp);
        }

        update(_dt) {
          var _this$workerTarget4;

          var target = (_this$workerTarget4 = this.workerTarget) != null ? _this$workerTarget4 : this.target;
          if (!target) return;
          target.removeFromParent();

          if (this._isNeedCleanUp) {
            target.destroy();
          }
        }

        init(isNeedCleanUp) {
          this._isNeedCleanUp = isNeedCleanUp;
          return true;
        }

        reverse() {
          return new RemoveSelf(this._isNeedCleanUp);
        }

        clone() {
          var action = new RemoveSelf(this._isNeedCleanUp);
          action._id = this._id;
          return action;
        }

      });

      /*
       * Calls a 'callback'.
       * @class CallFunc
       * @extends ActionInstant
       * @param {function} selector
       * @param {object} [selectorTarget=null]
       * @param {*} [data=null] data for function, it accepts all data types.
       * @example
       * // example
       * // CallFunc without data
       * var finish = new CallFunc(this.removeSprite, this);
       *
       * // CallFunc with data
       * var finish = new CallFunc(this.removeFromParentAndCleanup, this,  true);
       */
      _export("CallFunc", CallFunc = class CallFunc extends ActionInstant {
        /*
         * Constructor function, override it to extend the construction behavior, remember to call "super()". <br />
         * Creates a CallFunc action with the callback.
         * @param {TCallFuncCallback} callback The callback function
         * @param {TCallbackThis} callbackThis The this object for callback
         * @param {TData} data The custom data passed to the callback function, it accepts all data types.
         */
        constructor(selector, callbackThis, data) {
          super();
          this._callbackThis = undefined;
          this._callback = undefined;
          this._data = undefined;
          this.initWithFunction(selector, callbackThis, data);
        }
        /*
         * Initializes the action with a function or function and its target
         * @param {TCallFuncCallback} callback The callback function
         * @param {TCallbackThis} callbackThis The this object for callback
         * @param {TData} data The custom data passed to the callback function, it accepts all data types.
         * @return {Boolean}
         */


        initWithFunction(callback, callbackThis, data) {
          if (callback) {
            this._callback = callback;
          }

          if (callbackThis) {
            this._callbackThis = callbackThis;
          }

          if (data !== undefined) {
            this._data = data;
          }

          return true;
        }
        /*
         * execute the function.
         */


        execute() {
          if (this._callback) {
            var _this$workerTarget5;

            var _target = (_this$workerTarget5 = this.workerTarget) != null ? _this$workerTarget5 : this.target;

            this._callback.call(this._callbackThis, _target, this._data);
          }
        }

        update(_dt) {
          this.execute();
        }
        /*
         * Get selectorTarget.
         * @return {object}
         */


        getTargetCallback() {
          return this._callbackThis;
        }
        /*
         * Set selectorTarget.
         * @param {object} sel
         */


        setTargetCallback(sel) {
          if (sel !== this._callbackThis) {
            this._callbackThis = sel;
          }
        }

        clone() {
          var action = new CallFunc();
          action._id = this._id;
          if (this._callback) action.initWithFunction(this._callback, this._callbackThis, this._data);
          return action;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5a176ae8714f69a2d44f149d065bf943f365d1e7.js.map