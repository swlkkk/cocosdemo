System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, L10nListenEvent;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "34153BqzJ9LR4lhJDevpA4f", "l10n-listen-event", undefined);

      L10nListenEvent = /*#__PURE__*/function (L10nListenEvent) {
        L10nListenEvent["languageChanged"] = "languageChanged";
        L10nListenEvent["onMissingKey"] = "missingKey";
        return L10nListenEvent;
      }(L10nListenEvent || {});

      _export("default", L10nListenEvent);

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9befabc27a054df17fd859a21fa80013e00af96b.js.map