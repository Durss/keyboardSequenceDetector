var KeyboardSequenceDetector = (function () {
    function KeyboardSequenceDetector(callback) {
        this._callback = callback;
        this.initialize();
    }
    Object.defineProperty(KeyboardSequenceDetector.prototype, "logKeyCodes", {
        set: function (value) { this._logKeyCodes = value; },
        enumerable: true,
        configurable: true
    });
    KeyboardSequenceDetector.prototype.addSequence = function (id, sequence) {
        this._sequences.push({ id: id, keys: sequence, pointer: 0 });
    };
    KeyboardSequenceDetector.prototype.initialize = function () {
        var _this = this;
        this._sequences = [];
        document.addEventListener("keyup", function (e) { return _this.keyUpHandler(e); });
    };
    KeyboardSequenceDetector.prototype.keyUpHandler = function (event) {
        var i, len, sequence, keyCode;
        len = this._sequences.length;
        keyCode = event.keyCode;
        if (this._logKeyCodes) {
            console.log("KeyCode :: " + keyCode);
        }
        for (i = 0; i < len; ++i) {
            sequence = this._sequences[i];
            if (keyCode == sequence.keys[sequence.pointer]) {
                sequence.pointer++;
                if (sequence.pointer == sequence.keys.length) {
                    sequence.pointer = 0;
                    if (this._callback) {
                        this._callback(sequence.id);
                    }
                }
            }
            else {
                sequence.pointer = 0;
            }
        }
    };
    KeyboardSequenceDetector.KONAMI_sequence = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    KeyboardSequenceDetector.KONAMI_sequence_QWERTY = [38, 38, 40, 40, 37, 39, 37, 39, 66, 81];
    KeyboardSequenceDetector.CAPCOM_sequence = [40, 90, 38, 88, 65, 89, 66, 67, 13];
    KeyboardSequenceDetector.DEBUG_sequence = [68, 69, 66, 85, 71, 13];
    KeyboardSequenceDetector.EDIT_sequence = [69, 68, 73, 84, 13];
    KeyboardSequenceDetector.KILL_sequence = [75, 73, 76, 76, 13];
    KeyboardSequenceDetector.STATS_sequence = [83, 84, 65, 84, 83, 13];
    KeyboardSequenceDetector.LABEL_sequence = [76, 65, 66, 69, 76, 13];
    KeyboardSequenceDetector.LOG_sequence = [76, 79, 71, 13];
    return KeyboardSequenceDetector;
}());
