var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = stringInput

function stringInput(opts) {
    opts = normalize("stringInput", opts)

    return [".string-input.form-elem" + (opts.selector || ""), [
        ["label.label", [ opts.label ]],
        ["input.input", {
            placeholder: opts.placeholder,
            name: opts.name,
            "data-marker": "form." + opts.marker
        }],
        error(opts.marker)
    ]]
}
