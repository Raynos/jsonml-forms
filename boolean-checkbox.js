var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = booleanCheckbox

function booleanCheckbox(opts) {
    opts = normalize("booleanCheckbox", opts)

    return [".boolean-checkbox.form-elem" + (opts.selector || ""), [
        ["input.input", {
            type: "checkbox",
            checked: !!opts.checked,
            name: opts.name,
            "data-marker": "form." + opts.marker
        }],
        ["label.label", [ opts.label ]],
        error(opts.marker)
    ]]
}
