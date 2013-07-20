var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = stringPassword

function stringPassword(opts) {
    opts = normalize("stringPassword", opts)

    return [".string-password.form-elem" + (opts.selector || ""), [
        ["label.label", [ opts.label ]],
        ["input.input", {
            placeholder: opts.placeholder,
            name: opts.name,
            "data-marker": "form." + opts.marker,
            type: "password"
        }],
        error(opts.marker)
    ]]
}

