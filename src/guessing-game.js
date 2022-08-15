class GuessingGame {
    constructor() {
        this.number;
        this.start;
        this.end;
        this.middle;
    }

    setRange(min, max) {
        if (max >= min) {
            this.start = min;
            this.end = max;
        }
    }

    guess() {
        return this.middle = Math.ceil((this.start + this.end) / 2);
    }

    lower() {
        this.end = this.middle;
    }

    greater() {
        this.start = this.middle;
    }
}

module.exports = GuessingGame;
