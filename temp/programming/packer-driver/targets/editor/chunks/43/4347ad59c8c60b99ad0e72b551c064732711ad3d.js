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
    const win = window;

    if (!win.languages) {
      return key;
    }

    const searcher = key.split('.');
    let data = win.languages[_language];

    for (let i = 0; i < searcher.length; i++) {
      data = data[searcher[i]];

      if (!data) {
        return '';
      }
    }

    return data || '';
  }

  function updateSceneRenderers() {
    // very costly iterations
    const rootNodes = director.getScene().children; // walk all nodes with localize label and update

    const allLocalizedLabels = [];

    for (let i = 0; i < rootNodes.length; ++i) {
      let labels = rootNodes[i].getComponentsInChildren('LocalizedLabel');
      Array.prototype.push.apply(allLocalizedLabels, labels);
    }

    for (let i = 0; i < allLocalizedLabels.length; ++i) {
      let label = allLocalizedLabels[i];
      if (!label.node.active) continue;
      label.updateLabel();
    } // walk all nodes with localize sprite and update


    const allLocalizedSprites = [];

    for (let i = 0; i < rootNodes.length; ++i) {
      let sprites = rootNodes[i].getComponentsInChildren('LocalizedSprite');
      Array.prototype.push.apply(allLocalizedSprites, sprites);
    }

    for (let i = 0; i < allLocalizedSprites.length; ++i) {
      let sprite = allLocalizedSprites[i];
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
//# sourceMappingURL=4347ad59c8c60b99ad0e72b551c064732711ad3d.js.map