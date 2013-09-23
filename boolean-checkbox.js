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
            value: typeof opts.value === "string" ? opts.value : false,
            id: opts.id,
            "data-marker": "form." + opts.marker
        }],
        opts.label ? ["label.label", { "for": opts.id }, [ opts.label ]] : null,
        error(opts.marker)
    ]]
}
