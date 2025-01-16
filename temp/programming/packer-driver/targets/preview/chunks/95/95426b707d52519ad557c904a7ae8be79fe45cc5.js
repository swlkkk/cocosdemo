System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, MD5, _dec, _class, _crd, ccclass, property, sign;

  function _reportPossibleCrUseOfMD(extras) {
    _reporterNs.report("MD5", "./MD5", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      MD5 = _unresolved_2.MD5;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19c860ftTtLDYNUWImED2p/", "sign", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("sign", sign = (_dec = ccclass('sign'), _dec(_class = class sign extends Component {
        constructor() {
          super(...arguments);
          this.Md5 = new (_crd && MD5 === void 0 ? (_reportPossibleCrUseOfMD({
            error: Error()
          }), MD5) : MD5)();
        }

        start() {}

        raw(args) {
          var string = '';

          if (args instanceof Array) {
            args.forEach(function (value) {
              if (typeof value === 'number') {
                string += ',' + value;
              } else if (typeof value === 'string') {
                string += ',' + '"' + value + '"';
              } else if (typeof value === 'boolean') {
                string += ',' + (value ? 1 : 0);
              } else if (typeof value === 'object') {
                string += ',' + this.raw(value);
              }
            });

            if (string.length > 0) {
              string = '[' + string.substr(1) + ']';
            }
          } else if (args) {
            var keys = Object.keys(args).sort();
            keys.forEach(function (key) {
              var value = args[key];

              if (typeof value === 'number') {
                string += ',' + '"' + key + '"' + ':' + value;
              } else if (typeof value === 'string') {
                string += ',' + '"' + key + '"' + ':' + '"' + value + '"';
              } else if (typeof value === 'boolean') {
                string += ',' + '"' + key + '"' + ':' + (value ? 1 : 0);
              } else if (typeof value === 'object') {
                string += ',' + '"' + key + '"' + ':' + this.raw(value);
              }
            });

            if (string.length > 0) {
              string = '{' + string.substr(1) + '}';
            }
          }

          return string;
        }

        sign(app, body) {
          if (app == 'zww') {
            body.key = '21o8329AsdjD129W2csamkjd129aasd11sc0cmx9nnxish12p1Osada';
          }

          var str = this.raw(body);
          var s = this.Md5.md5(str).toString();
          delete body.key;
          return s;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=95426b707d52519ad557c904a7ae8be79fe45cc5.js.map