var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = stringPassword

function stringPassword(opts) {
    opts = normalize("stringPassword", opts)

    return [".string-password.form-elem" + (opts.selector || ""), [
        opts.label ? ["label.label", { "for": opts.id }, [ opts.label ]] : null,
        ["input.input", {
            placeholder: opts.placeholder,
            name: opts.name,
            id: opts.id,
            "data-marker": "form." + opts.marker,
            type: "password"
        }],
        error(opts.marker)
    ]]
}

