var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = stringInput

function stringInput(opts) {
    opts = normalize("stringInput", opts)

    return [".string-input.form-elem" + (opts.selector || ""), [
        ["label.label", { "for": opts.id }, [ opts.label ]],
        ["input.input", {
            placeholder: opts.placeholder,
            name: opts.name,
            id: opts.id,
            "data-marker": "form." + opts.marker
        }],
        error(opts.marker)
    ]]
}
