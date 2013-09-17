var uuid = require("uuid")
var spaced = require("./spaced.js")

module.exports = normalize

function normalize(name, opts) {
    if (!opts.marker) {
        throw new Error(name + "(opts): opts.marker is required " +
            JSON.stringify(opts))
    }

    if (!("label" in opts)) {
        opts.label = spaced(opts.marker)
    }

    if (!opts.placeholder) {
        opts.placeholder = "Please enter your " + opts.label
    }

    if (!opts.name) {
        opts.name = opts.marker
    }

    if (!("id" in opts)) {
        opts.id = uuid() + "~" + opts.name
    }

    return opts
}
