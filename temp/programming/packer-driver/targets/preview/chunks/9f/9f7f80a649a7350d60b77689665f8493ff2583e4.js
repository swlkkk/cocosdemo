System.register(["cc", "__unresolved_0", "cc/env"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, l10n, game, cclegacy, EDITOR;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
      cclegacy = _cc.cclegacy;
    }, function (_unresolved_) {
      l10n = _unresolved_.default;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }],
    execute: async function () {
      _cclegacy._RF.push({}, "2f21bx4gAFNj6dct9qDHJHH", "auto-config-intl-manager", undefined);

      // @ts-expect-error 
      __checkObsolete__(['game', 'cclegacy']);

      if (cclegacy.GAME_VIEW || EDITOR) {
        // for Editor
        // @ts-expect-error we need top level await in Editor
        await l10n.createIntl({});
      } else {
        // for Runtime or Preview
        game.onPostProjectInitDelegate.add(() => l10n.createIntl({}));
      }

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=9f7f80a649a7350d60b77689665f8493ff2583e4.js.map