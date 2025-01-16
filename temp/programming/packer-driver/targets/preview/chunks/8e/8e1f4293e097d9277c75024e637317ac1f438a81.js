System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, resources, SpriteAtlas, Sprite, _dec, _class, _crd, ccclass, property, flashPicts;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      resources = _cc.resources;
      SpriteAtlas = _cc.SpriteAtlas;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bd215llBUlOHacIuUYv1aeu", "flashPicts", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'resources', 'SpriteAtlas', 'SpriteFrame', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("flashPicts", flashPicts = (_dec = ccclass('flashPicts'), _dec(_class = class flashPicts extends Component {
        constructor() {
          super(...arguments);
          this.flash1 = null;
          this.flash2 = null;
          this.flash3 = null;
          this.flash4 = null;
          this.flash5 = null;
          this.flash6 = null;
          this.flash7 = null;
          this.flash8 = null;
          this.flashsy1 = false;
          this.flashsy2 = false;
          this.flashsy3 = false;
          this.flashsy4 = false;
          this.flashsy5 = false;
          this.flashsy6 = false;
          this.flashsy7 = false;
          this.flashsy8 = false;
          this.pca = null;
          this.pcb = null;
          this.pcc = null;
          this.pcd = null;
          this.pce = null;
          this.pcf = null;
          this.pcg = null;
          this.pch = null;
        }

        onLoad() {
          resources.load("tv02", SpriteAtlas, (err, atlas) => {
            this.flash1 = atlas.getSpriteFrame('03UI_08Passageway_1');
            this.flash2 = atlas.getSpriteFrame('03UI_08Passageway_2');
            this.flash3 = atlas.getSpriteFrame('03UI_08Passageway_3');
            this.flash4 = atlas.getSpriteFrame('03UI_08Passageway_4');
            this.flash5 = atlas.getSpriteFrame('03UI_08Passageway_5');
            this.flash6 = atlas.getSpriteFrame('03UI_08Passageway_6');
            this.flash7 = atlas.getSpriteFrame('03UI_08Passageway_7');
            this.flash8 = atlas.getSpriteFrame('03UI_08Passageway_8');
          });
        }

        start() {}

        doFlash(num) {
          if (num == 0) {
            if (!this.flashsy1) {
              this.flashsy1 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy1 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 1) {
            if (!this.flashsy2) {
              this.flashsy2 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy2 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 2) {
            if (!this.flashsy3) {
              this.flashsy3 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy3 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 3) {
            if (!this.flashsy4) {
              this.flashsy4 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy4 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 4) {
            if (!this.flashsy5) {
              this.flashsy5 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy5 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 5) {
            if (!this.flashsy6) {
              this.flashsy6 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy6 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 6) {
            if (!this.flashsy7) {
              this.flashsy7 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy7 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 7) {
            if (!this.flashsy8) {
              this.flashsy8 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    this.flashsy8 = false;
                  }, 200);
                }, 200);
              }, 200);
            }
          }
        } // 叠叠乐、小玛丽特殊闪烁3次


        doFlashThree(num) {
          if (num == 0) {
            if (!this.flashsy1) {
              this.flashsy1 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy1 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 1) {
            if (!this.flashsy2) {
              this.flashsy2 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy2 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 2) {
            if (!this.flashsy3) {
              this.flashsy3 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy3 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 3) {
            if (!this.flashsy4) {
              this.flashsy4 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy4 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 4) {
            if (!this.flashsy5) {
              this.flashsy5 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy5 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 5) {
            if (!this.flashsy6) {
              this.flashsy6 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy6 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 6) {
            if (!this.flashsy7) {
              this.flashsy7 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy7 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          } else if (num == 7) {
            if (!this.flashsy8) {
              this.flashsy8 = true;
              this.showFlash(num);
              setTimeout(() => {
                this.hideFlash(num);
                setTimeout(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                    setTimeout(() => {
                      this.showFlash(num);
                      setTimeout(() => {
                        this.hideFlash(num);
                        this.flashsy8 = false;
                      }, 200);
                    }, 200);
                  }, 200);
                }, 200);
              }, 200);
            }
          }
        } // 连线奖特殊


        doFlashLine(num, type) {
          if (num == 0) {
            if (type) {
              if (this.pca == null) {
                this.pca = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pca);
              this.pca = null;
            }
          } else if (num == 1) {
            if (type) {
              if (this.pcb == null) {
                this.pcb = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pcb);
              this.pcb = null;
            }
          } else if (num == 2) {
            if (type) {
              if (this.pcc == null) {
                this.pcc = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pcc);
              this.pcc = null;
            }
          } else if (num == 3) {
            if (type) {
              if (this.pcd == null) {
                this.pcd = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pcd);
              this.pcd = null;
            }
          } else if (num == 4) {
            if (type) {
              if (this.pce == null) {
                this.pce = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pce);
              this.pce = null;
            }
          } else if (num == 5) {
            if (type) {
              if (this.pcf == null) {
                this.pcf = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pcf);
              this.pcf = null;
            }
          } else if (num == 6) {
            if (type) {
              if (this.pcg == null) {
                this.pcg = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pcg);
              this.pcg = null;
            }
          } else if (num == 7) {
            if (type) {
              if (this.pch == null) {
                this.pch = setInterval(() => {
                  this.showFlash(num);
                  setTimeout(() => {
                    this.hideFlash(num);
                  }, 200);
                }, 400);
              }
            } else {
              clearInterval(this.pch);
              this.pch = null;
            }
          }
        }

        showFlash(num) {
          if (num == 0) {
            this.node.children[0].getComponent(Sprite).spriteFrame = this.flash1;
          } else if (num == 1) {
            this.node.children[1].getComponent(Sprite).spriteFrame = this.flash2;
          } else if (num == 2) {
            this.node.children[2].getComponent(Sprite).spriteFrame = this.flash3;
          } else if (num == 3) {
            this.node.children[3].getComponent(Sprite).spriteFrame = this.flash4;
          } else if (num == 4) {
            this.node.children[4].getComponent(Sprite).spriteFrame = this.flash5;
          } else if (num == 5) {
            this.node.children[5].getComponent(Sprite).spriteFrame = this.flash6;
          } else if (num == 6) {
            this.node.children[6].getComponent(Sprite).spriteFrame = this.flash7;
          } else if (num == 7) {
            this.node.children[7].getComponent(Sprite).spriteFrame = this.flash8;
          }
        }

        hideFlash(num) {
          this.node.children[num].getComponent(Sprite).spriteFrame = null;
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8e1f4293e097d9277c75024e637317ac1f438a81.js.map