var normalize = require("./lib/normalize.js")
var error = require("./lib/error.js")

module.exports = enumDropdown

function enumDropdown(opts) {
    opts = normalize("enumDropdown", opts)

    if (!opts.options) {
        throw new Error("enumDropdown(opts): opts.options is required " +
            JSON.stringify(opts))
    }

    return [".enum-dropdown.form-elem" + (opts.selector || ""), [
        opts.label ? ["label.label", { "for": opts.id }, [ opts.label ]] : null,
        ["select.input", {
            name: opts.name,
            id: opts.id,
            "data-marker": "form." + opts.marker
        }, [
            ["option", { selected: true, value: "" }, opts.placeholder],
            { fragment: opts.options.map(function (option) {
                if (typeof option === "string") {
                    option = { text: option, value: option }
                }

                return ["option", {
                    value: option.value,
                    selected: !!(opts.value && option.value === opts.value)
                }, option.text]
            }) }
        ]],
        error(opts.marker)
    ]]
}
