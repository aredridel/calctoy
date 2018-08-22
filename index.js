class Calc {

    constructor() {
        this.memory = 0
        this.total = 0
        this.entry = 0
        this.dirty = false
        this.op = null
    }

    input(n) {
        if (this.dirty) {
            this.entry = Number(`${this.entry}${n}`)
        } else {
            this.entry = Number(n)
        }
        this.dirty = true
        this.display = this.entry
    }

    apply() {
        if (this.op) {
            this.total = this[this.op]()
        } else {
            this.total = this.entry
        }
    }

    sum() {
        this.apply()
        this.display = this.total
    }

    operation(op) {
        if (this.dirty || op == this.op) this.apply()
        this.dirty = false
        this.op = op
    }

    add() {
        return this.total + this.entry
    }


    sub() {
        return this.total - this.entry
    }
}

module.exports = Calc
