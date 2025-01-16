import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;
import { MD5 } from './MD5';

@ccclass('sign')
export class sign extends Component {
    Md5 = new MD5()
    start() {

    }

    raw(args) {
        var string = '';
        if (args instanceof Array) {
            args.forEach(function (value) {
                if ((typeof value) === 'number') {
                    string += ',' + value;
                } else if ((typeof value) === 'string') {
                    string += ',' + '"' + value + '"';
                } else if ((typeof value) === 'boolean') {
                    string += ',' + (value ? 1 : 0);
                } else if ((typeof value) === 'object') {
                    string += ',' + this.raw(value);
                }
            });
            if (string.length > 0) {
                string = '[' + string.substr(1) + ']';
            }
        } else if (args) {
            var keys = Object.keys(args).sort();
            keys.forEach(function (key) {
                var value = args[key];
                if ((typeof value) === 'number') {
                    string += ',' + '"' + key + '"' + ':' + value;
                } else if ((typeof value) === 'string') {
                    string += ',' + '"' + key + '"' + ':' + '"' + value + '"';
                } else if ((typeof value) === 'boolean') {
                    string += ',' + '"' + key + '"' + ':' + (value ? 1 : 0);
                } else if ((typeof value) === 'object') {
                    string += ',' + '"' + key + '"' + ':' + this.raw(value);
                }
            });
            if (string.length > 0) {
                string = '{' + string.substr(1) + '}';
            }
        }
        return string;
    }

    sign(app, body) {
        if (app == 'zww') {
            body.key = '21o8329AsdjD129W2csamkjd129aasd11sc0cmx9nnxish12p1Osada'
        }
        var str = this.raw(body)
        var s = this.Md5.md5(str).toString()
        delete body.key;
        return s;
    }

    update(deltaTime: number) {

    }
}

