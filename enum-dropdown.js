var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = enumDropdown

function enumDropdown(opts) {
    opts = normalize("enumDropdown", opts)

    if (!opts.options) {
        throw new Error("enumDropdown(opts): opts.options is required " +
            JSON.stringify(opts))
    }

    return [".string-dropdown.form-elem" + (opts.selector || ""), [
        ["label.label", [ opts.label ]],
        ["select.input", {
            name: opts.name,
            "data-marker": "forms." + opts.marker
        }, [
            ["option", { selected: true, value: "" }, opts.placeholder],
            { fragment: opts.options.map(function (option) {
                if (typeof option === "string") {
                    option = { text: option, value: option }
                }

                return ["option", {
                    value: option.value,
                    selected: opts.value && option.value === opts.value
                }, option.text]
            }) }
        ]],
        error(opts.marker)
    ]]
}
