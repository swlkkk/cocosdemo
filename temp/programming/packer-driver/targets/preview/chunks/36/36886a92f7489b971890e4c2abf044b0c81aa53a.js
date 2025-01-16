System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, warnID, warn, easing, ActionInterval, VERSION, TweenAction, _crd;

  /** adapter */

  /** checker */
  function TweenEasingAdapter(easingName) {
    var initialChar = easingName.charAt(0);

    if (/[A-Z]/.test(initialChar)) {
      easingName = easingName.replace(initialChar, initialChar.toLowerCase());
      var arr = easingName.split('-');

      if (arr.length === 2) {
        var str0 = arr[0];

        if (str0 === 'linear') {
          easingName = 'linear';
        } else {
          var str1 = arr[1];

          switch (str0) {
            case 'quadratic':
              easingName = "quad" + str1;
              break;

            case 'quartic':
              easingName = "quart" + str1;
              break;

            case 'quintic':
              easingName = "quint" + str1;
              break;

            case 'sinusoidal':
              easingName = "sine" + str1;
              break;

            case 'exponential':
              easingName = "expo" + str1;
              break;

            case 'circular':
              easingName = "circ" + str1;
              break;

            default:
              easingName = str0 + str1;
              break;
          }
        }
      }
    }

    return easingName;
  }

  function TweenOptionChecker(opts) {
    var header = ' [Tween:] ';
    var message = " option is not support in v + " + VERSION;
    var _opts = opts;

    if (_opts.delay) {
      warn(header + "delay" + message);
    }

    if (_opts.repeat) {
      warn(header + "repeat" + message);
    }

    if (_opts.repeatDelay) {
      warn(header + "repeatDelay" + message);
    }

    if (_opts.interpolation) {
      warn(header + "interpolation" + message);
    }

    if (_opts.onStop) {
      warn(header + "onStop" + message);
    }
  }

  function _reportPossibleCrUseOfActionInterval(extras) {
    _reporterNs.report("ActionInterval", "./actions/action-interval", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITweenOption(extras) {
    _reporterNs.report("ITweenOption", "./export-api", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTweenEasing(extras) {
    _reporterNs.report("TweenEasing", "./export-api", _context.meta, extras);
  }

  _export("TweenAction", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      warnID = _cc.warnID;
      warn = _cc.warn;
      easing = _cc.easing;
      VERSION = _cc.VERSION;
    }, function (_unresolved_2) {
      ActionInterval = _unresolved_2.ActionInterval;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae47beG7RBCz7xJqSNvE7Ld", "tween-action", undefined);
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


      __checkObsolete__(['warnID', 'warn', 'easing']);

      __checkObsolete__(['VERSION']);

      _export("TweenAction", TweenAction = class TweenAction extends (_crd && ActionInterval === void 0 ? (_reportPossibleCrUseOfActionInterval({
        error: Error()
      }), ActionInterval) : ActionInterval) {
        constructor(duration, props, opts) {
          super();
          this._opts = void 0;
          this._props = void 0;
          this._originProps = void 0;
          this._reversed = false;

          if (opts == null) {
            opts = Object.create(null);
          } else {
            /** checker */
            TweenOptionChecker(opts);
            /** adapter */

            if (opts.easing && typeof opts.easing === 'string') {
              opts.easing = TweenEasingAdapter(opts.easing);
            } // global easing or progress used for this action


            if (!opts.progress) {
              opts.progress = this.progress;
            }

            if (opts.easing && typeof opts.easing === 'string') {
              var easingName = opts.easing;
              opts.easing = easing[easingName];

              if (!opts.easing) {
                warnID(1031, easingName);
              }
            }
          }

          this._opts = opts;
          this._props = Object.create(null);

          for (var name in props) {
            var _value$legacyProgress;

            // filtering if
            // - it was not own property
            // - types was function / string
            // - it was undefined / null
            // eslint-disable-next-line no-prototype-builtins
            if (!props.hasOwnProperty(name)) continue;
            var value = props[name];

            if (typeof value === 'function') {
              value = value();
            } else if (value == null) {
              continue;
            } // property may have custom easing or progress function


            var customEasing = void 0;
            var customProgress = void 0;
            var customValue = void 0;

            if (value.value !== undefined) {
              customValue = value.value;

              if (typeof customValue === 'function') {
                customValue = customValue();
              }

              if (value.easing !== undefined) {
                if (typeof value.easing === 'string') {
                  customEasing = easing[value.easing];
                  if (!customEasing) warnID(1031, value.easing);
                } else {
                  customEasing = value.easing;
                }
              }

              if (value.progress !== undefined) {
                customProgress = value.progress;
              }
            } else {
              customValue = value;
            }

            var prop = Object.create(null);
            prop.value = customValue;
            prop.easing = customEasing;
            prop.progress = customProgress;
            prop.convert = value.convert;
            prop.clone = value.clone;
            prop.add = value.add;
            prop.sub = value.sub;
            prop.legacyProgress = (_value$legacyProgress = value.legacyProgress) != null ? _value$legacyProgress : true;
            prop.toFixed = value.toFixed;
            prop.valid = true;
            this._props[name] = prop;
          }

          this._originProps = props;
          this.initWithDuration(duration);
        }

        get relative() {
          return !!this._opts.relative;
        }

        clone() {
          var action = new TweenAction(this._duration, this._originProps, this._opts);
          action._reversed = this._reversed;
          action.workerTarget = this.workerTarget;
          action._id = this._id;

          this._cloneDecoration(action);

          return action;
        }

        reverse() {
          if (!this._opts.relative) {
            warn('reverse: could not reverse a non-relative action');
            return new TweenAction(0, {});
          }

          var action = new TweenAction(this._duration, this._originProps, this._opts);

          this._cloneDecoration(action);

          action._reversed = !this._reversed;
          action.workerTarget = this.workerTarget;
          return action;
        }

        startWithTarget(target) {
          var _this$workerTarget;

          var isEqual = true;
          if (!isEqual) return;
          super.startWithTarget(target);
          var workerTarget = (_this$workerTarget = this.workerTarget) != null ? _this$workerTarget : this.target;
          if (!workerTarget) return;
          var relative = !!this._opts.relative;
          var props = this._props;
          var reversed = this._reversed;

          var _loop = function _loop() {
            var _t = workerTarget[property];

            if (_t === undefined) {
              return 0; // continue
            }

            var prop = props[property];
            var value = prop.value;

            if (typeof _t === 'number') {
              prop.start = _t;
              prop.current = _t;
              prop.end = relative ? reversed ? _t - value : _t + value : value;
            } else if (typeof _t === 'object') {
              if (prop.legacyProgress) {
                if (prop.start == null) {
                  prop.start = {};
                  prop.current = {};
                  prop.end = {};
                }

                var propertyKeys;

                if (value.getModifiableProperties) {
                  propertyKeys = value.getModifiableProperties();
                } else {
                  propertyKeys = Object.keys(value);
                }

                for (var i = 0, len = propertyKeys.length; i < len; ++i) {
                  var k = propertyKeys[i]; // eslint-disable-next-line no-restricted-globals

                  if (isNaN(_t[k])) continue;
                  prop.start[k] = _t[k];
                  prop.current[k] = _t[k];
                  prop.end[k] = relative ? reversed ? _t[k] - value[k] : _t[k] + value[k] : value[k];
                }
              } else {
                var clone = prop.clone;

                if (!clone) {
                  warn("Need 'clone' for custom prop '" + property + "'");
                  prop.valid = false;
                  return 0; // continue
                } else {
                  var add = prop.add;
                  var sub = prop.sub;

                  if (relative) {
                    if (!add) {
                      warn("Need 'add' for custom prop '" + property + "'");
                      prop.valid = false;
                    }

                    if (reversed && !sub) {
                      warn("Need 'sub' for custom prop '" + property + " in reverse mode'");
                      prop.valid = false;
                    }

                    if (!prop.valid) return 0; // continue
                  }

                  prop.start = clone(_t);
                  prop.current = clone(_t);
                  prop.end = relative ? reversed ? sub(_t, value) : add(_t, value) : clone(value);
                }
              }
            } else if (typeof _t === 'string') {
              var convertFn = prop.convert;

              var convertToNumber = v => {
                if (typeof v === 'number') return v;
                var convertedValue = v;

                if (convertFn) {
                  convertedValue = convertFn(v);
                }

                if (typeof convertedValue !== 'number') {
                  convertedValue = Number(convertedValue);

                  if (Number.isNaN(convertedValue)) {
                    warn("TweenAction: '" + v + "' can't be converted to number");
                    return null;
                  }
                }

                return convertedValue;
              };

              var targetNumValue = convertToNumber(value);
              var startNumValue = convertToNumber(_t);

              if (targetNumValue == null || startNumValue == null) {
                prop.valid = false;
                return 0; // continue
              }

              prop.start = startNumValue;
              prop.current = _t;
              prop.end = relative ? reversed ? startNumValue - targetNumValue : startNumValue + targetNumValue : targetNumValue;
            }
          },
              _ret;

          for (var property in props) {
            _ret = _loop();
            if (_ret === 0) continue;
          }

          if (this._opts.onStart) {
            this._opts.onStart(workerTarget);
          }
        }

        update(t) {
          var _this$workerTarget2;

          var workerTarget = (_this$workerTarget2 = this.workerTarget) != null ? _this$workerTarget2 : this.target;
          if (!workerTarget) return;
          if (!this._opts) return;
          var props = this._props;
          var opts = this._opts;
          var easingTime = t;
          if (typeof opts.easing === 'function') easingTime = opts.easing(t);
          var progress = opts.progress;

          for (var name in props) {
            var prop = props[name];
            if (!prop.valid) continue;
            var time = prop.easing ? prop.easing(t) : easingTime;
            var interpolation = prop.progress ? prop.progress : progress;
            var start = prop.start;
            var end = prop.end;
            var current = prop.current;

            if (typeof current === 'number') {
              prop.current = interpolation(start, end, prop.current, time);
            } else if (typeof start === 'object') {
              if (prop.legacyProgress) {
                for (var k in start) {
                  prop.current[k] = interpolation(start[k], end[k], prop.current[k], time);
                }
              } else {
                prop.current = interpolation(start, end, prop.current, time);
              }
            } else if (typeof current === 'string') {
              var newCurrent = interpolation(start, end, prop.current, time);

              if (typeof newCurrent === 'number') {
                var _prop$toFixed;

                newCurrent = newCurrent.toFixed((_prop$toFixed = prop.toFixed) != null ? _prop$toFixed : 0);
              } else if (typeof newCurrent !== 'string') {
                warn("Wrong return type for 'progress', number or string needed");
                continue;
              }

              prop.current = newCurrent;
            }

            workerTarget[name] = prop.current;
          }

          if (opts.onUpdate) {
            opts.onUpdate(workerTarget, t);
          }

          if (t === 1 && opts.onComplete) {
            opts.onComplete(workerTarget);
          }
        }

        progress(start, end, current, t) {
          return current = start + (end - start) * t;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=36886a92f7489b971890e4c2abf044b0c81aa53a.js.map