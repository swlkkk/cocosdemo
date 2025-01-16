
const win = window as any;

export const languages = {
    "cocos":{
        "jzz": "Loading...",
        "cz": "Charge",
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
        "jbx": "Coins",
        "qcz": "Go Recharge",
        "zdcj": "Start",
        "ruleArr": {
            "o": "1. Users will automatically be in game when they enter the room. You can click on the [x1/x3] button or the blank space on the screen to drop coins",
            "t": "2. After putting in tokens, the tokens will fall to the push plate, and the tokens dropped from the front of the push plate are the player's bonus",
            "th": "3. When the falling token hits the moving SPIN in the center of the machine, the slot will scroll to combine different patterns",
            "f": "4. By clicking the [x1/x3] button, you can switch the number of dropping coins during one press",
            "fi": "5. Clicking the [Auto] button will drop coins automatically. The speed is 1 coin/s, 2coin/s or 3coin/s. You can click the [Auto] button again to stop it",
            "s": "6. With no coins in 300 seconds, you will automatically get off after settling"
        },
        "wlydk": "Connection lost. Please exit and start again",
        "wlclz": "Reconnecting...",
        "ys": "Wiper",
        "gzjs": "RULE",
        "wxts": "NOTICE",
    }
};

if (!win.languages) {
    win.languages = {};
}

win.languages.en = languages;
