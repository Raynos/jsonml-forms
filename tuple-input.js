module.exports = tupleInput

function tupleInput(opts) {
    if (!opts.marker) {
        throw new Error("tupleInput(opts): opts.marker is required " +
            JSON.stringify(opts))
    }

    if (!opts.name) {
        opts.name = opts.marker
    }

    return [".tuple-input.form-elem" + (opts.selector || ""), [
        ["label.label", [ opts.label ]],
        ["input.input", {
            placeholder: opts.placeholder[0],
            name: opts.name[0],
            "data-marker": "form." + opts.marker[0]
        }],
        [".error", {
            "data-marker": "errors." + opts.marker[0]
        }],
        ["input.input", {
            placeholder: opts.placeholder[1],
            name: opts.name[1],
            "data-marker": "form." + opts.marker[1]
        }],
        [".error", {
            "data-marker": "errors." + opts.marker[1]
        }]
    ]]
}
