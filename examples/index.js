var stringify = require("jsonml-stringify")
var http = require("http")

var form = require("../index.js")

var server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.setHeader("content-type", "text/html")

    res.end("<!DOCTYPE html>" + stringify(["html", [
        ["head", [
            ["title", "Forms example"]
        ]],
        ["body", [
            form.string.input({
                marker: "name",
                label: false,
                id: false
            }),
            form.string.password({
                marker: "password"
            })
        ]]
    ]]))
})

server.listen(8001)
