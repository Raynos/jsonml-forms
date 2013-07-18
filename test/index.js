var test = require("tape")

var jsonmlForms = require("../index")

test("jsonmlForms is a function", function (assert) {
    assert.equal(typeof jsonmlForms, "function")
    assert.end()
})
