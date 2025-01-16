System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, win, languages;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3eb7UjmBtEK6Slo1HY1X3C", "tc", undefined);

      win = window;

      _export("languages", languages = {
        "cocos": {
          "jzz": "加載中...",
          "cz": "充值",
          "gz": "規則",
          "sy": "聲音",
          "tcf": "退出",
          "cjc": "初級場",
          "zjc": "中級場",
          "gjc": "高級場",
          "zdtb": "自動投幣",
          "tbcs": "投幣次數",
          "djs": "倒計時:",
          "yebz": "您的餘額不足，請立即充值",
          "quiteTips": "正在上機中，是否確定退出？（如果正在出獎，請在出獎結束後退出，否則將無法獲得剩餘獎勵）",
          "qd": "確定",
          "csxj": "您已超時下機，系統將自動為您結算剩餘獎勵",
          "jsdz": "本局獲得:",
          "djtctips": "點擊任意區域退出",
          "jb": "金幣",
          'autotips': '再次點擊此按鍵關閉自動投幣',
          "djkbtips": "點擊屏幕空白區域投幣",
          "tyc": "投一次",
          "tsc": "投三次",
          "bc": "幣/次",
          "mflq": "免費領取",
          "jbx": "金幣x",
          "csbtb": "超時不投幣將下機",
          "qx": "取消",
          "qcz": "去充值",
          "zdcj": "轉動抽獎",
          "ruleArr": {
            'o': '1.用戶進入房間後自動上機，可點擊【投一次/投三次】鍵或者屏幕空白處進行投幣',
            't': '2.用戶投幣後，代幣掉落到推盤上，再從推盤前方掉出的代幣就是用戶的獎勵',
            'th': '3.代幣下落過程中打中左右移動的SPIN 時，會觸發輪盤圖案的轉動，當出現特定組合時，機器將給予獎勵',
            'f': '4.通過點擊【投幣次數】鍵可以切換每按一次投幣鍵時投幣的次數，分為一鍵一次和一鍵三次',
            'fi': '5.點擊【自動投幣】鍵將開啟自動投幣，可以切換成每秒一幣、每秒兩幣或每秒三幣三種速度，再次點擊【自動投幣】鍵後停止自動投幣',
            's': '6.300秒不投幣將自動結算下機'
          },
          "wlydk": "網絡已斷開，請退出房間重新開始",
          "wlclz": "網絡重連中..."
        }
      });

      if (!win.languages) {
        win.languages = {};
      }

      win.languages.tc = languages;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ae3cec43a3bef847a42a2d32166f2d5686b6ea4.js.map