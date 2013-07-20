module.exports = error

function error(marker) {
    return [".error", {
        "data-marker": "errors." + marker
    }]
}
