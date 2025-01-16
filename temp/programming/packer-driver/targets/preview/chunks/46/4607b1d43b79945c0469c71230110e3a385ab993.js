System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ICUType;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "e5dc4ljkiFFpI9LqK8hBCPl", "icu-type", undefined);

      /**
       * Intl formatting
       */
      ICUType = /*#__PURE__*/function (ICUType) {
        ICUType[ICUType["DateTime"] = 0] = "DateTime";
        ICUType[ICUType["Number"] = 1] = "Number";
        ICUType[ICUType["List"] = 2] = "List";
        ICUType[ICUType["RelativeTime"] = 3] = "RelativeTime";
        return ICUType;
      }(ICUType || {});

      _export("default", ICUType);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=4607b1d43b79945c0469c71230110e3a385ab993.js.map