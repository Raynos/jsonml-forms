var jsonml = require("jsonml-document")
var http = require("http")

var form = require("./index.js")

var server = http.createServer(function (req, res) {
    res.statusCode = 200
    res.setHeader("content-type", "text/html")

    res.end(jsonml(["html", [
        ["head", [
            ["title", "Forms example"]
        ]],
        ["body", [
            form.string.input({
                marker: "name"
            }),
            form.string.password({
                marker: "password"
            })
        ]]
    ]]))
})

server.listen(8001)
