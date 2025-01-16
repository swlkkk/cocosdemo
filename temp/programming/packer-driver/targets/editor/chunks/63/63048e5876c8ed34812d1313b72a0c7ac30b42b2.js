System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, win, languages;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe620yPupdMQ5ZUcyyHkCtU", "en", undefined);

      win = window;

      _export("languages", languages = {
        "cocos": {
          "jzz": "Loading...",
          "cz": "Recharge",
          "gz": "Rules",
          "sy": "Sound",
          "tcf": "Quit",
          "cjc": "Easy",
          "zjc": "Normal",
          "gjc": "Hard",
          "zdtb": "Auto",
          "tbcs": "Coin Times",
          "djs": "Timer:",
          "yebz": "Insufficient coins, please recharge first",
          "quiteTips": "In play, do you want to exit? (If the game is settling, please wait until the end to get the remaining rewards)",
          "qd": "Sure",
          "csxj": "You are getting off for time out. The system will automatically settle the remaining rewards for you",
          "jsdz": "Rewards:",
          "djtctips": "Click on any area to quit",
          "jb": "Coins",
          'autotips': 'Click the [OFF] button to disable auto-drop',
          "djkbtips": "Click on the blank space on the screen to drop coins",
          "tyc": "Coin 1 time",
          "tsc": "Coin 3 times",
          "bc": "Coins/time",
          "mflq": "Free Claim",
          "csbtb": "Please coin before time out",
          "qx": "Cancel",
          "qcz": "Go Recharge",
          "ruleArr": {
            "o": "1. Users will automatically be in game when they enter the room. You can click on the [x1/x3] button or the blank space on the screen to drop coins",
            "t": "2. After putting in tokens, the tokens will fall to the push plate, and the tokens dropped from the front of the push plate are the player's bonus",
            "th": "3. When the falling token hits the moving SPIN in the center of the machine, the slot will scroll to combine different patterns",
            "f": "4. By clicking the [x1/x3] button, you can switch the number of dropping coins during one press",
            "fi": "5. Clicking the [Auto] button will drop coins automatically. The speed is 1 coin/s, 2coin/s or 3coin/s. You can click the [Auto] button again to stop it",
            "s": "6. With no coins in 300 seconds, you will automatically get off after settling"
          }
        }
      });

      if (!win.languages) {
        win.languages = {};
      }

      win.languages.en = languages;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=63048e5876c8ed34812d1313b72a0c7ac30b42b2.js.map