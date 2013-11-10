var test = require("tape")

var makeit = require("../index")

test("makeit is a function", function (assert) {
    assert.equal(typeof makeit, "function")
    assert.end()
})
