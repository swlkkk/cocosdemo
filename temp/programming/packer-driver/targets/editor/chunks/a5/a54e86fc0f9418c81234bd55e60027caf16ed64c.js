System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, ActionInstant, SetAction, _crd;

  function _reportPossibleCrUseOfActionInstant(extras) {
    _reporterNs.report("ActionInstant", "./actions/action-instant", _context.meta, extras);
  }

  _export("SetAction", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      ActionInstant = _unresolved_2.ActionInstant;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "82bc6XBTBVIhaX36/IwZZTm", "set-action", undefined);
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


      _export("SetAction", SetAction = class SetAction extends (_crd && ActionInstant === void 0 ? (_reportPossibleCrUseOfActionInstant({
        error: Error()
      }), ActionInstant) : ActionInstant) {
        constructor(props) {
          super();
          this._props = void 0;
          this._props = {};
          if (props) this.init(props);
        }

        init(props) {
          for (const name in props) {
            this._props[name] = props[name];
          }

          return true;
        }

        update() {
          const props = this._props;
          const target = this.target;

          for (const name in props) {
            target[name] = props[name];
          }
        }

        clone() {
          const action = new SetAction();
          action._id = this._id;
          action.init(this._props);
          return action;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a54e86fc0f9418c81234bd55e60027caf16ed64c.js.map