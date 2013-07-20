var isCamelCase = /([a-z][A-Z])/g

module.exports = spaced

function spaced(camelCase) {
    return camelCase.replace(isCamelCase, function (group) {
        return group[0] + " " + group[1].toLowerCase()
    })
}
