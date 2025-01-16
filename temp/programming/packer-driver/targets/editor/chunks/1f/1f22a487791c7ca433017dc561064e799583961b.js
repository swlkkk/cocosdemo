System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, tested;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "68dcaMKjqpErKfkNlHGmj4K", "tested", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("tested", tested = (_dec = ccclass('tested'), _dec(_class = class tested extends Component {
        constructor(...args) {
          super(...args);
          this.test = null;
        }

        start() {
          console.log('111111111111111');
          const test = this.encode('abcd', 'abcd');
          setTimeout(() => {
            console.log('打印');
            console.log(this.decode(test, 'abcd'));
          }, 2000);
        } // 加密函数


        encode(input, key) {
          let buf = unescape(encodeURIComponent(input));
          let keys = unescape(encodeURIComponent(key));
          let encoded = '';

          for (const i in buf) {
            encoded += String.fromCharCode(buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length) ^ 255 & i);
          }

          return btoa(encoded);
        } // 解密函数


        decode(input, key) {
          let buf = atob(input);
          let keys = unescape(encodeURIComponent(key));
          let decoded = '';

          for (const i in buf) {
            decoded += String.fromCharCode(255 & i ^ buf.charCodeAt(i) ^ keys.charCodeAt(i % keys.length));
          }

          return decodeURIComponent(escape(decoded));
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1f22a487791c7ca433017dc561064e799583961b.js.map