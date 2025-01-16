import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('labelts')
export class labelts extends Component {
    public labelsy1: boolean = false
    public labelsy2: boolean = false
    public labelsy3: boolean = false
    public labelsy4: boolean = false
    public labelsy5: boolean = false
    public labelsy6: boolean = false
    public labelsy7: boolean = false
    public labelsy8: boolean = false

    public labelsyt1: boolean = false
    public labelsyt2: boolean = false
    public labelsyt3: boolean = false
    public labelsyt4: boolean = false
    public labelsyt5: boolean = false
    public labelsyt6: boolean = false
    public labelsyt7: boolean = false
    public labelsyt8: boolean = false

    a = null
    b = null
    c = null
    d = null
    e = null
    f = null
    g = null
    h = null
    start() {
    }

    dolabel(num: number) {
        if (num == 0) {
            if (!this.labelsy1) {
                this.labelsy1 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy1 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 1) {
            if (!this.labelsy2) {
                this.labelsy2 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy2 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 2) {
            if (!this.labelsy3) {
                this.labelsy3 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy3 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 3) {
            if (!this.labelsy4) {
                this.labelsy4 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy4 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 4) {
            if (!this.labelsy5) {
                this.labelsy5 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy5 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 5) {
            if (!this.labelsy6) {
                this.labelsy6 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy6 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 6) {
            if (!this.labelsy7) {
                this.labelsy7 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy7 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 7) {
            if (!this.labelsy8) {
                this.labelsy8 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            this.labelsy8 = false
                        }, 200);
                    }, 200);
                }, 200);
            }
        }
    }
    // 叠叠乐、小玛丽特殊闪烁3次
    dolabelThree(num: number) {
        if (num == 0) {
            if (!this.labelsyt1) {
                this.labelsyt1 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt1 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 1) {
            if (!this.labelsyt2) {
                this.labelsyt2 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt2 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 2) {
            if (!this.labelsyt3) {
                this.labelsyt3 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt3 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 3) {
            if (!this.labelsy4) {
                this.labelsy4 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsy4 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 4) {
            if (!this.labelsyt5) {
                this.labelsyt5 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt5 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 5) {
            if (!this.labelsyt6) {
                this.labelsyt6 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt6 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 6) {
            if (!this.labelsyt7) {
                this.labelsyt7 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt7 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        } else if (num == 7) {
            if (!this.labelsyt8) {
                this.labelsyt8 = true
                this.node.children[num].active = false
                setTimeout(() => {
                    this.node.children[num].active = true
                    setTimeout(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                            setTimeout(() => {
                                this.node.children[num].active = false
                                setTimeout(() => {
                                    this.node.children[num].active = true
                                    this.labelsyt8 = false
                                }, 200);
                            }, 200);
                        }, 200);
                    }, 200);
                }, 200);
            }
        }
    }
    // 连线奖特殊
    dolabelLine(num: number, type: boolean) {
        if (num == 0) {
            if (type) {
                if (this.a == null) {
                    this.a = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.a)
                this.a = null
            }
        } else if (num == 1) {
            if (type) {
                if (this.b == null) {
                    this.b = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.b)
                this.b = null
            }
        } else if (num == 2) {
            if (type) {
                if (this.c == null) {
                    this.c = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.c)
                this.c = null
            }
        } else if (num == 3) {
            if (type) {
                if (this.d == null) {
                    this.d = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.d)
                this.d = null
            }
        } else if (num == 4) {
            if (type) {
                this.e = setInterval(() => {
                    this.node.children[num].active = false
                    setTimeout(() => {
                        this.node.children[num].active = true
                    }, 200);
                }, 400)
            } else {
                clearInterval(this.e)
            }
        } else if (num == 5) {
            if (type) {
                if (this.f == null) {
                    this.f = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.f)
                this.f = null
            }
        } else if (num == 6) {
            if (type) {
                if (this.g == null) {
                    this.g = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.g)
                this.g = null
            }
        } else if (num == 7) {
            if (type) {
                if (this.h == null) {
                    this.h = setInterval(() => {
                        this.node.children[num].active = false
                        setTimeout(() => {
                            this.node.children[num].active = true
                        }, 200);
                    }, 400)
                }
            } else {
                clearInterval(this.h)
                this.h = null
            }
        }
    }

    update(deltaTime: number) {

    }
}

