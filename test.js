const tape = require('tape')
const Calc = require('./')

tape.test(t => {

    const c = new Calc()

    c.input(1)
    c.input(2)

    t.equal(c.entry, 12)
    t.equal(c.display, 12)
    t.ok(c.dirty)

    c.operation('add')

    t.notOk(c.dirty)
    t.equal(c.total, 12)
    t.equal(c.display, 12)
    t.equal(c.entry, 12)
    t.equal(c.op, 'add')

    c.operation('sub')

    t.equal(c.op, 'sub')
    t.equal(c.total, 12)

    c.input('5')
    c.input('4')

    t.ok(c.dirty)
    t.equal(c.entry, 54)
    t.equal(c.total, 12)

    c.sum()

    t.equal(c.total, -42)
    t.equal(c.display, -42)

    c.sum()

    t.equal(c.total, -96)
    t.equal(c.display, -96)

    t.end()

})

