System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FiniteTimeAction, macro, logID, errorID, ActionInstant, DummyAction, ActionInterval, Sequence, Repeat, RepeatForever, Spawn, DelayTime, ReverseTime, ActionCustomUpdate, _crd;

  /**
   * @en
   * Helper constructor to create an array of sequenceable actions
   * The created action will run actions sequentially, one after another.
   * @zh 顺序执行动作，创建的动作将按顺序依次运行。
   * @method sequence
   * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
   * @param {FiniteTimeAction} ...tempArray
   * @return {Sequence}
   * @example
   * import { sequence } from 'cc';
   *
   * // Create sequence with actions
   * const seq = sequence(act1, act2);
   *
   * // Create sequence with array
   * const seq = sequence(actArray);
   */
  // todo: It should be use new
  function sequence(actions) {
    return new Sequence(actions);
  }
  /*
   * Repeats an action a number of times.
   * To repeat an action forever use the CCRepeatForever action.
   * @class Repeat
   * @extends ActionInterval
   * @param {FiniteTimeAction} action
   * @param {Number} times
   * @example
   * import { Repeat, sequence } from 'cc';
   * const rep = new Repeat(sequence(jump2, jump1), 5);
   */


  /**
   * @en Creates a Repeat action. Times is an unsigned integer between 1 and pow(2,30)
   * @zh 重复动作，可以按一定次数重复一个动，如果想永远重复一个动作请使用 repeatForever 动作来完成。
   * @method repeat
   * @param {FiniteTimeAction} action
   * @param {Number} times
   * @return {Action}
   * @example
   * import { repeat, sequence } from 'cc';
   * const rep = repeat(sequence(jump2, jump1), 5);
   */
  function repeat(action, times) {
    return new Repeat(action, times);
  }
  /*
   * Repeats an action for ever.  <br/>
   * To repeat the an action for a limited number of times use the Repeat action. <br/>
   * @warning This action can't be Sequenceable because it is not an IntervalAction
   * @class RepeatForever
   * @extends ActionInterval
   * @param {ActionInterval} action
   * @example
   * import { sequence, RepeatForever } from 'cc';
   * const rep = new RepeatForever(sequence(jump2, jump1), 5);
   */


  /**
   * @en Create a acton which repeat forever, as it runs forever, it can't be added into `sequence` and `spawn`.
   * @zh 永远地重复一个动作，有限次数内重复一个动作请使用 repeat 动作，由于这个动作不会停止，所以不能被添加到 `sequence` 或 `spawn` 中。
   * @method repeatForever
   * @param {FiniteTimeAction} action
   * @return {ActionInterval}
   * @example
   * import { repeatForever, rotateBy } from 'cc';
   * var repeat = repeatForever(rotateBy(1.0, 360));
   */
  function repeatForever(action) {
    return new RepeatForever(action);
  }
  /*
   * Spawn a new action immediately
   * @class Spawn
   * @extends ActionInterval
   */


  /**
   * @en Create a spawn action which runs several actions in parallel.
   * @zh 同步执行动作，同步执行一组动作。
   * @method spawn
   * @param {FiniteTimeAction|FiniteTimeAction[]} actionOrActionArray
   * @param {FiniteTimeAction} ...tempArray
   * @return {Spawn}
   * @example
   * import { spawn, jumpBy, rotateBy, Vec2 } from 'cc';
   * const action = spawn(jumpBy(2, new Vec2(300, 0), 50, 4), rotateBy(2, 720));
   * todo: It should be the direct use new
   */
  function spawn(actions) {
    return new Spawn(actions);
  }
  /* Delays the action a certain amount of seconds
   * @class DelayTime
   * @extends ActionInterval
   */


  /**
   * @en Delays the action a certain amount of seconds.
   * @zh 延迟指定的时间量。
   * @method delayTime
   * @param {Number} d duration in seconds
   * @return {ActionInterval}
   * @example
   * import { delayTime } from 'cc';
   * const delay = delayTime(1);
   */
  function delayTime(d) {
    return new DelayTime(d);
  }
  /**
   * <p>
   * Executes an action in reverse order, from time=duration to time=0                                     <br/>
   * @warning Use this action carefully. This action is not sequenceable.                                 <br/>
   * Use it as the default "reversed" method of your own actions, but using it outside the "reversed"      <br/>
   * scope is not recommended.
   * </p>
   * @class ReverseTime
   * @extends ActionInterval
   * @param {FiniteTimeAction} action
   * @example
   * import ReverseTime from 'cc';
   * var reverse = new ReverseTime(this);
   */


  /**
   * @en Executes an action in reverse order, from time=duration to time=0.
   * @zh 反转目标动作的时间轴。
   * @method reverseTime
   * @param {FiniteTimeAction} action
   * @return {ActionInterval}
   * @example
   * import { reverseTime } from 'cc';
   * const reverse = reverseTime(this);
   */
  function reverseTime(action) {
    return new ReverseTime(action);
  }

  function _reportPossibleCrUseOfFiniteTimeAction(extras) {
    _reporterNs.report("FiniteTimeAction", "./action", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActionInstant(extras) {
    _reporterNs.report("ActionInstant", "./action-instant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTTweenUpdateCallback(extras) {
    _reporterNs.report("TTweenUpdateCallback", "../tween", _context.meta, extras);
  }

  _export({
    ActionInterval: void 0,
    Sequence: void 0,
    sequence: sequence,
    Repeat: void 0,
    repeat: repeat,
    RepeatForever: void 0,
    repeatForever: repeatForever,
    Spawn: void 0,
    spawn: spawn,
    delayTime: delayTime,
    ReverseTime: void 0,
    reverseTime: reverseTime,
    ActionCustomUpdate: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      macro = _cc.macro;
      logID = _cc.logID;
      errorID = _cc.errorID;
    }, function (_unresolved_2) {
      FiniteTimeAction = _unresolved_2.FiniteTimeAction;
    }, function (_unresolved_3) {
      ActionInstant = _unresolved_3.ActionInstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36a8e/hP8ZAsbECRytiubaD", "action-interval", undefined);
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


      __checkObsolete__(['macro', 'logID', 'errorID']);

      // Extra action for making a Sequence or Spawn when only adding one action to it.
      DummyAction = class DummyAction extends (_crd && FiniteTimeAction === void 0 ? (_reportPossibleCrUseOfFiniteTimeAction({
        error: Error()
      }), FiniteTimeAction) : FiniteTimeAction) {
        clone() {
          return new DummyAction();
        }

        reverse() {
          return this.clone();
        }

        update(time) {// empty
        }

        step(dt) {// empty
        }

      };
      /**
       * @en
       * <p> An interval action is an action that takes place within a certain period of time. <br/>
       * It has an start time, and a finish time. The finish time is the parameter<br/>
       * duration plus the start time.</p>
       *
       * <p>These CCActionInterval actions have some interesting properties, like:<br/>
       * - They can run normally (default)  <br/>
       * - They can run reversed with the reverse method   <br/>
       * - They can run with the time altered with the Accelerate, AccelDeccel and Speed actions. </p>
       *
       * <p>For example, you can simulate a Ping Pong effect running the action normally and<br/>
       * then running it again in Reverse mode. </p>
       * @zh 时间间隔动作，这种动作在已定时间内完成，继承 FiniteTimeAction。
       * @class ActionInterval
       * @extends FiniteTimeAction
       * @param {Number} d duration in seconds
       */

      _export("ActionInterval", ActionInterval = class ActionInterval extends (_crd && FiniteTimeAction === void 0 ? (_reportPossibleCrUseOfFiniteTimeAction({
        error: Error()
      }), FiniteTimeAction) : FiniteTimeAction) {
        constructor(d) {
          super();
          this.MAX_VALUE = 2;
          this._elapsed = 0;
          this._startTime = 0;
          this._firstTick = false;
          this._speed = 1;

          if (d !== undefined && !Number.isNaN(d)) {
            this.initWithDuration(d);
          }
        }

        setStartTime(time) {
          time = time < 0 ? 0 : time > this._duration ? this._duration : time;
          this._startTime = time;
        }
        /*
         * How many seconds had elapsed since the actions started to run.
         * @return {Number}
         */


        getElapsed() {
          return this._elapsed;
        }
        /*
         * Initializes the action.
         * @param {Number} d duration in seconds
         * @return {Boolean}
         */


        initWithDuration(d) {
          this._duration = d === 0 ? macro.FLT_EPSILON : d; // prevent division by 0
          // This comparison could be in step:, but it might decrease the performance
          // by 3% in heavy based action games.

          this._elapsed = 0;
          this._firstTick = true;
          return true;
        }

        isDone() {
          return this._elapsed >= this._duration;
        }

        _cloneDecoration(action) {
          action._speed = this._speed;
        }

        step(dt) {
          if (this._paused || this._speed === 0) return;
          dt *= this._speed;

          if (this._firstTick) {
            this._firstTick = false;
            this._elapsed = this._startTime;

            if (this._startTime > 0) {
              // _startTime only takes effect in the first tick after tween starts. So reset it to 0 after the first tick.
              this._startTime = 0;
            }
          } else this._elapsed += dt; // this.update((1 > (this._elapsed / this._duration)) ? this._elapsed / this._duration : 1);
          // this.update(Math.max(0, Math.min(1, this._elapsed / Math.max(this._duration, cc.macro.FLT_EPSILON))));


          let t = this._elapsed / (this._duration > 0.0000001192092896 ? this._duration : 0.0000001192092896);
          t = t < 1 ? t : 1;
          this.update(t > 0 ? t : 0);
        }

        startWithTarget(target) {
          super.startWithTarget(target);
          this._elapsed = 0;
          this._firstTick = true;
        }

        /**
         * @en
         * Get this action speed.
         * @zh
         * 返回此动作速度
         * @return {Number}
         */
        getSpeed() {
          return this._speed;
        }
        /**
         * @en
         * Set this action speed.
         * @zh
         * 设置此动作速度
         * @param {Number} speed
         * @returns {ActionInterval}
         */


        setSpeed(speed) {
          this._speed = speed;
        }

        getDurationScaled() {
          return this._duration / this._speed;
        }

      });
      /*
       * Runs actions sequentially, one after another.
       */


      _export("Sequence", Sequence = class Sequence extends ActionInterval {
        static _actionOneTwo(actionOne, actionTwo) {
          const sequence = new Sequence();
          sequence.initWithTwoActions(actionOne, actionTwo);
          return sequence;
        }

        /**
         * @example
         * import { Sequence } from 'cc';
         *
         * // create sequence with actions
         * const seq = new Sequence(act1, act2);
         *
         * // create sequence with array
         * const seq = new Sequence(actArray);
         */
        constructor(actions) {
          super();
          this._actions = [];
          this._split = 0;
          this._last = 0;
          this._reversed = false;

          if (!actions || actions.length === 0) {
            return;
          }

          if (actions.length === 1) {
            actions.push(new DummyAction());
          }

          const last = actions.length - 1;
          if (last >= 0 && actions[last] == null) logID(1015);

          if (last >= 0) {
            let prev = actions[0];
            let action1;

            for (let i = 1; i < last; i++) {
              if (actions[i]) {
                action1 = prev;
                prev = Sequence._actionOneTwo(action1, actions[i]);
              }
            }

            this.initWithTwoActions(prev, actions[last]);
          }
        }
        /*
         * Initializes the action <br/>
         * @param {FiniteTimeAction} actionOne
         * @param {FiniteTimeAction} actionTwo
         * @return {Boolean}
         */


        initWithTwoActions(actionOne, actionTwo) {
          if (!actionOne || !actionTwo) {
            errorID(1025);
            return false;
          }

          const durationOne = actionOne.getDurationScaled();
          const durationTwo = actionTwo.getDurationScaled();
          const d = durationOne + durationTwo;
          this.initWithDuration(d);
          this._actions[0] = actionOne;
          this._actions[1] = actionTwo;
          return true;
        }

        clone() {
          const action = new Sequence();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          action.initWithTwoActions(this._actions[0].clone(), this._actions[1].clone());
          return action;
        }

        startWithTarget(target) {
          super.startWithTarget(target);

          if (this._actions.length === 0) {
            return;
          }

          this._split = this._actions[0].getDurationScaled() / this._duration;
          this._last = -1;
        }

        stop() {
          if (this._actions.length === 0) {
            return;
          } // Issue #1305


          if (this._last !== -1) this._actions[this._last].stop();
          super.stop();
        }

        update(dt) {
          const locActions = this._actions;

          if (locActions.length === 0) {
            return;
          }

          let new_t = 0;
          let found = 0;
          const locSplit = this._split;
          const locLast = this._last;

          if (dt < locSplit) {
            // action[0]
            new_t = locSplit !== 0 ? dt / locSplit : 1;

            if (found === 0 && locLast === 1 && this._reversed) {
              // Reverse mode ?
              // XXX: Bug. this case doesn't contemplate when _last==-1, found=0 and in "reverse mode"
              // since it will require a hack to know if an action is on reverse mode or not.
              // "step" should be overriden, and the "reverseMode" value propagated to inner Sequences.
              locActions[1].update(0);
              locActions[1].stop();
            }
          } else {
            // action[1]
            found = 1;
            new_t = locSplit === 1 ? 1 : (dt - locSplit) / (1 - locSplit);

            if (locLast === -1) {
              // action[0] was skipped, execute it.
              locActions[0].startWithTarget(this.target);
              locActions[0].update(1);
              locActions[0].stop();
            }

            if (locLast === 0) {
              // switching to action 1. stop action 0.
              locActions[0].update(1);
              locActions[0].stop();
            }
          }

          const actionFound = locActions[found]; // Last action found and it is done.

          if (locLast === found && actionFound.isDone()) return; // Last action not found

          if (locLast !== found) actionFound.startWithTarget(this.target);
          actionFound.update(new_t > 1 ? new_t % 1 : new_t);
          this._last = found;
        }

        reverse() {
          const action = Sequence._actionOneTwo(this._actions[1].reverse(), this._actions[0].reverse());

          this._cloneDecoration(action);

          action._reversed = true;
          return action;
        }

        updateWorkerTarget(workerTarget) {
          if (this._actions.length < 2) {
            return;
          }

          this._actions[1].workerTarget = workerTarget;
          const actionOne = this._actions[0];

          if (actionOne instanceof Sequence || actionOne instanceof Spawn) {
            actionOne.updateWorkerTarget(workerTarget);
          } else {
            actionOne.workerTarget = workerTarget;
          }
        }

        findAction(id) {
          for (let i = 0, len = this._actions.length; i < len; ++i) {
            let action = this._actions[i];

            if (action.getId() === id) {
              return action;
            }

            if (action instanceof Sequence || action instanceof Spawn) {
              action = action.findAction(id);

              if (action && action.getId() === id) {
                return action;
              }
            }
          }

          return null;
        }

      });

      _export("Repeat", Repeat = class Repeat extends ActionInterval {
        constructor(action, times) {
          super();
          this._times = 0;
          this._total = 0;
          this._nextDt = 0;
          this._actionInstant = false;
          this._innerAction = null;
          this.initWithAction(action, times);
        }
        /*
         * @param {FiniteTimeAction} action
         * @param {Number} times
         * @return {Boolean}
         */


        initWithAction(action, times) {
          if (!action || times === undefined) {
            return false;
          }

          const duration = action.getDurationScaled() * times;

          if (this.initWithDuration(duration)) {
            this._times = times;
            this._innerAction = action;

            if (action instanceof (_crd && ActionInstant === void 0 ? (_reportPossibleCrUseOfActionInstant({
              error: Error()
            }), ActionInstant) : ActionInstant)) {
              this._actionInstant = true;
              this._times -= 1;
            }

            this._total = 0;
            return true;
          }

          return false;
        }

        clone() {
          const action = new Repeat();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          if (this._innerAction) {
            action.initWithAction(this._innerAction.clone(), this._times);
          }

          return action;
        }

        startWithTarget(target) {
          this._total = 0;
          this._nextDt = (this._innerAction ? this._innerAction.getDurationScaled() : 0) / this._duration;
          super.startWithTarget(target);
          if (this._innerAction) this._innerAction.startWithTarget(target);
        }

        stop() {
          if (this._innerAction) this._innerAction.stop();
          super.stop();
        }

        update(dt) {
          const locInnerAction = this._innerAction;
          const locDuration = this._duration;
          const locTimes = this._times;
          let locNextDt = this._nextDt;

          if (!locInnerAction) {
            return;
          }

          if (dt >= locNextDt) {
            while (dt > locNextDt && this._total < locTimes) {
              locInnerAction.update(1);
              this._total++;
              locInnerAction.stop();
              locInnerAction.startWithTarget(this.target);
              locNextDt += locInnerAction.getDurationScaled() / locDuration;
              this._nextDt = locNextDt > 1 ? 1 : locNextDt;
            } // fix for issue #1288, incorrect end value of repeat


            if (dt >= 1.0 && this._total < locTimes) {
              // fix for cocos-creator/fireball/issues/4310
              locInnerAction.update(1);
              this._total++;
            } // don't set a instant action back or update it, it has no use because it has no duration


            if (!this._actionInstant) {
              if (this._total === locTimes) {
                locInnerAction.stop();
              } else {
                // issue #390 prevent jerk, use right update
                locInnerAction.update(dt - (locNextDt - locInnerAction.getDurationScaled() / locDuration));
              }
            }
          } else {
            locInnerAction.update(dt * locTimes % 1.0);
          }
        }

        isDone() {
          return this._total === this._times;
        }

        reverse() {
          const actionArg = this._innerAction ? this._innerAction.reverse() : undefined;
          const action = new Repeat(actionArg, this._times);

          this._cloneDecoration(action);

          return action;
        }
        /*
         * Set inner Action.
         * @param {FiniteTimeAction} action
         */


        setInnerAction(action) {
          if (this._innerAction !== action) {
            this._innerAction = action;
          }
        }
        /*
         * Get inner Action.
         * @return {FiniteTimeAction}
         */


        getInnerAction() {
          return this._innerAction;
        }

      });

      _export("RepeatForever", RepeatForever = class RepeatForever extends ActionInterval {
        constructor(action) {
          super();
          this._innerAction = null;
          if (action) this.initWithAction(action);
        }
        /*
         * @param {ActionInterval} action
         * @return {Boolean}
         */


        initWithAction(action) {
          if (!action) {
            errorID(1026);
            return false;
          }

          this._innerAction = action;
          this._duration = Infinity;
          return true;
        }

        clone() {
          const action = new RepeatForever();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          if (this._innerAction) {
            action.initWithAction(this._innerAction.clone());
          }

          return action;
        }

        startWithTarget(target) {
          super.startWithTarget(target);

          if (this._innerAction) {
            this._innerAction.startWithTarget(target);
          }
        }

        step(dt) {
          if (this._paused || this._speed === 0) return;
          const locInnerAction = this._innerAction;

          if (!locInnerAction) {
            return;
          }

          dt *= this._speed;
          locInnerAction.step(dt);

          if (locInnerAction.isDone()) {
            // var diff = locInnerAction.getElapsed() - locInnerAction.getDurationScaled();
            locInnerAction.startWithTarget(this.target); // to prevent jerk. issue #390 ,1247
            // this._innerAction.step(0);
            // this._innerAction.step(diff);

            locInnerAction.step(locInnerAction.getElapsed() - locInnerAction.getDurationScaled());
          }
        }

        update(_t) {
          logID(1007); // should never come here.
        }

        isDone() {
          return false;
        }

        reverse() {
          if (this._innerAction) {
            const action = new RepeatForever(this._innerAction.reverse());

            this._cloneDecoration(action);

            return action;
          }

          return this;
        }
        /*
         * Set inner action.
         * @param {ActionInterval} action
         */


        setInnerAction(action) {
          if (this._innerAction !== action) {
            this._innerAction = action;
          }
        }
        /*
         * Get inner action.
         * @return {ActionInterval}
         */


        getInnerAction() {
          return this._innerAction;
        }

      });

      _export("Spawn", Spawn = class Spawn extends ActionInterval {
        static _actionOneTwo(action1, action2) {
          const spawn = new Spawn();
          spawn.initWithTwoActions(action1, action2);
          return spawn;
        }

        constructor(actions) {
          super();
          this._one = null;
          this._two = null;

          if (!actions || actions.length === 0) {
            return;
          }

          if (actions.length === 1) {
            actions.push(new DummyAction());
          }

          const last = actions.length - 1;
          if (last >= 0 && actions[last] == null) logID(1015);

          if (last >= 0) {
            let prev = actions[0];
            let action1;

            for (let i = 1; i < last; i++) {
              if (actions[i]) {
                action1 = prev;
                prev = Spawn._actionOneTwo(action1, actions[i]);
              }
            }

            this.initWithTwoActions(prev, actions[last]);
          }
        }
        /* Initializes the Spawn action with the 2 actions to spawn
         * @param {FiniteTimeAction} action1 The first action
         * @param {FiniteTimeAction} action2 The second action
         * @return {Boolean} Return true if the initialization succeeds, otherwise return false.
         */


        initWithTwoActions(action1, action2) {
          if (!action1 || !action2) {
            errorID(1027);
            return false;
          }

          let ret = false;
          const d1 = action1.getDurationScaled();
          const d2 = action2.getDurationScaled();

          if (this.initWithDuration(Math.max(d1, d2))) {
            this._one = action1;
            this._two = action2;

            if (d1 > d2) {
              this._two = Sequence._actionOneTwo(action2, delayTime(d1 - d2));
            } else if (d1 < d2) {
              this._one = Sequence._actionOneTwo(action1, delayTime(d2 - d1));
            }

            ret = true;
          }

          return ret;
        }

        clone() {
          const action = new Spawn();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          if (this._one && this._two) {
            action.initWithTwoActions(this._one.clone(), this._two.clone());
          }

          return action;
        }

        startWithTarget(target) {
          super.startWithTarget(target);
          if (this._one) this._one.startWithTarget(target);
          if (this._two) this._two.startWithTarget(target);
        }

        stop() {
          if (this._one) this._one.stop();
          if (this._two) this._two.stop();
          super.stop();
        }

        update(dt) {
          if (this._one) this._one.update(dt);
          if (this._two) this._two.update(dt);
        }

        reverse() {
          if (this._one && this._two) {
            const action = Spawn._actionOneTwo(this._one.reverse(), this._two.reverse());

            this._cloneDecoration(action);

            return action;
          }

          return this;
        }

        updateWorkerTarget(workerTarget) {
          if (!this._one || !this._two) {
            return;
          }

          this._two.workerTarget = workerTarget;
          const one = this._one;

          if (one instanceof Spawn || one instanceof Sequence) {
            one.updateWorkerTarget(workerTarget);
          } else {
            one.workerTarget = workerTarget;
          }
        }

        findAction(id) {
          const one = this._one;
          const two = this._two;
          let foundAction = null;

          const find = action => {
            if (action.getId() === id) return action;

            if (action instanceof Sequence || action instanceof Spawn) {
              const found = action.findAction(id);
              if (found) return found;
            }

            return null;
          };

          if (one) {
            foundAction = find(one);
            if (foundAction) return foundAction;
          }

          if (two) {
            foundAction = find(two);
            if (foundAction) return foundAction;
          }

          return null;
        }

      });

      DelayTime = class DelayTime extends ActionInterval {
        update(_dt) {
          /* empty */
        }

        reverse() {
          const action = new DelayTime(this._duration);

          this._cloneDecoration(action);

          return action;
        }

        clone() {
          const action = new DelayTime();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          action.initWithDuration(this._duration);
          return action;
        }

      };

      _export("ReverseTime", ReverseTime = class ReverseTime extends ActionInterval {
        constructor(action) {
          super();
          this._other = null;
          if (action) this.initWithAction(action);
        }
        /*
         * @param {ActionInterval} action
         * @return {Boolean}
         */


        initWithAction(action) {
          if (!action) {
            errorID(1028);
            return false;
          }

          if (action === this._other) {
            errorID(1029);
            return false;
          }

          if (super.initWithDuration(action.getDurationScaled())) {
            // Don't leak if action is reused
            this._other = action;
            return true;
          }

          return false;
        }

        clone() {
          const action = new ReverseTime();
          action._id = this._id;
          action._speed = this._speed;

          this._cloneDecoration(action);

          if (this._other) {
            action.initWithAction(this._other.clone());
          }

          return action;
        }

        startWithTarget(target) {
          super.startWithTarget(target);
          if (this._other) this._other.startWithTarget(target);
        }

        update(dt) {
          if (this._other) this._other.update(1 - dt);
        }

        reverse() {
          if (this._other) {
            return this._other.clone();
          }

          return this;
        }

        stop() {
          if (this._other) this._other.stop();
          super.stop();
        }

      });

      _export("ActionCustomUpdate", ActionCustomUpdate = class ActionCustomUpdate extends ActionInterval {
        constructor(duration, cb, args) {
          super(duration);
          this._cb = void 0;
          this._args = void 0;
          this._cb = cb;
          this._args = args;
        }

        clone() {
          return new ActionCustomUpdate(this._duration, this._cb, this._args);
        }

        update(ratio) {
          this._cb(this.target, ratio, ...this._args);
        }

        reverse() {
          return this.clone();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=175d0956f508c75e39a68fac5dafbdbccd6710ef.js.map