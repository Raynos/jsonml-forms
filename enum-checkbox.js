var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = enumCheckbox

var isArray = /\[\]$/

function enumCheckbox(opts) {
    opts = normalize("enumCheckbox", opts)

    if (!opts.options) {
        throw new Error("enumCheckbox(opts): opts.options is required " +
            JSON.stringify(opts))
    }

    var marker = opts.marker
    if (!isArray.test(marker)) {
        marker = marker = "[]"
    }

    var values = opts.value || []
    if (!Array.isArray(values)) {
        values = [values]
    }

    return [".enum-checkbox.form-elem" + (opts.selector || ""), [
        opts.label ? ["label.label", { "for": opts.id }, [ opts.label ]] : null,
        [".checkbox-array", opts.options.map(function (option) {
            return ["label", [
                ["input", {
                    type: "checkbox",
                    name: opts.name,
                    "data-marker": "form." + marker,
                    checked: values.indexOf(option.value) !== -1
                }],
                option.text
            ]]
        })],
        error(opts.marker)
    ]]
}
