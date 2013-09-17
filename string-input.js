var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = stringInput

function stringInput(opts) {
    opts = normalize("stringInput", opts)

    return [".string-input.form-elem" + (opts.selector || ""), [
        opts.label ? ["label.label", { "for": opts.id }, [ opts.label ]] : null,
        ["input.input", {
            placeholder: opts.placeholder,
            name: opts.name,
            id: opts.id,
            value: opts.value || "",
            "data-marker": "form." + opts.marker
        }],
        error(opts.marker)
    ]]
}
