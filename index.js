var isCamelCase = /([a-z][A-Z])/g

module.exports = {
    string: {
        input: stringInput,
        password: stringPassword
    },
    tuple: {
        input: tupleInput
    }
}

function normalize(name, opts) {
    if (!opts.marker) {
        throw new Error(name + "(opts): opts.marker is required " +
            JSON.stringify(opts))
    }

    if (!opts.label) {
        opts.label = spaced(opts.marker)
    }

    if (!opts.placeholder) {
        opts.placeholder = "Please enter your " + opts.label
    }

    return opts
}

function tupleInput(opts) {
    if (!opts.marker) {
        throw new Error("tupleInput(opts): opts.marker is required " +
            JSON.stringify(opts))
    }

    return [".tuple-input.form-elem" + (opts.selector || ""), [
        ["label.label", opts.label],
        ["input.input", {
            placeholder: opts.placeholder[0],
            "data-marker": "form." + opts.marker[0]
        }],
        [".error", {
            "data-marker": "errors." + opts.marker[0]
        }],
        ["input.input", {
            placeholder: opts.placeholder[1],
            "data-marker": "form." + opts.marker[1]
        }],
        [".error", {
            "data-marker": "errors." + opts.marker[1]
        }]
    ]]
}

function stringInput(opts) {
    opts = normalize("stringInput", opts)

    return [".string-input.form-elem" + (opts.selector || ""), [
        ["label.label", opts.label],
        ["input.input", {
            placeholder: opts.placeholder,
            "data-marker": "form." + opts.marker
        }],
        [".error", {
            "data-marker": "errors." + opts.marker
        }]
    ]]
}

function stringPassword(opts) {
    opts = normalize("stringPassword", opts)

    return [".string-password.form-elem" + (opts.selector || ""), [
        ["label.label", opts.label],
        ["input.input", {
            placeholder: opts.placeholder,
            "data-marker": "form." + opts.marker,
            type: "password"
        }],
        [".error", {
            "data-marker": "errors." + opts.marker
        }]
    ]]
}

function spaced(camelCase) {
    return camelCase.replace(isCamelCase, function (group) {
        return group[0] + " " + group[1].toLowerCase()
    })
}
