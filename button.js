var normalize = require("./lib/normalize.js")

module.exports = button

function button(opts) {
    opts = normalize("button", opts)

    return ["button.button.form-elem", {
        "data-marker": "form." + opts.marker
    }, opts.label]
}
