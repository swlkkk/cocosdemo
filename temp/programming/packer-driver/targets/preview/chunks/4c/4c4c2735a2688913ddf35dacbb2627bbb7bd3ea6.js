System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, director, _crd, _language, ready, win;

  /**
   * 初始化
   * @param language 
   */
  function init(language) {
    _export("ready", ready = true);

    _export("_language", _language = language);
  }
  /**
   * 翻译数据
   * @param key 
   */


  function t(key) {
    var win = window;

    if (!win.languages) {
      return key;
    }

    var searcher = key.split('.');
    var data = win.languages[_language];

    for (var i = 0; i < searcher.length; i++) {
      data = data[searcher[i]];

      if (!data) {
        return '';
      }
    }

    return data || '';
  }

  function updateSceneRenderers() {
    // very costly iterations
    var rootNodes = director.getScene().children; // walk all nodes with localize label and update

    var allLocalizedLabels = [];

    for (var i = 0; i < rootNodes.length; ++i) {
      var labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
      Array.prototype.push.apply(allLocalizedLabels, labels);
    }

    for (var _i = 0; _i < allLocalizedLabels.length; ++_i) {
      var label = allLocalizedLabels[_i];
      if (!label.node.active) continue;
      label.updateLabel();
    } // walk all nodes with localize sprite and update


    var allLocalizedSprites = [];

    for (var _i2 = 0; _i2 < rootNodes.length; ++_i2) {
      var sprites = rootNodes[_i2].getComponentsInChildren('LocalizedSprite');

      Array.prototype.push.apply(allLocalizedSprites, sprites);
    }

    for (var _i3 = 0; _i3 < allLocalizedSprites.length; ++_i3) {
      var sprite = allLocalizedSprites[_i3];
      if (!sprite.node.active) continue;
      sprite.updateSprite();
    }
  } // 供插件查询当前语言使用


  _export({
    init: init,
    t: t,
    updateSceneRenderers: updateSceneRenderers
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b3f01X4Ik5LEbIPKXZr3JWD", "LanguageData", undefined);

      __checkObsolete__(['director']);

      _export("_language", _language = 'tc');

      _export("ready", ready = false);

      win = window;
      win._languageData = {
        get language() {
          return _language;
        },

        init(lang) {
          init(lang);
        },

        updateSceneRenderers() {
          updateSceneRenderers();
        }

      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c4c2735a2688913ddf35dacbb2627bbb7bd3ea6.js.map