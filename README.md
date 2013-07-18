# jsonml-forms

<!--
    [![build status][1]][2]
    [![NPM version][3]][4]
    [![Coverage Status][5]][6]
    [![gemnasium Dependency Status][7]][8]
    [![Davis Dependency status][9]][10]
-->

<!-- [![browser support][11]][12] -->

A set of functions to generate form elements

## Example

```js
var form = require("jsonml-forms")
var jsonml = require("jsonml-stringify")

var page = jsonml(["html", [
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
]])
```

## Installation

`npm install jsonml-forms`

## Contributors

 - Raynos

## MIT Licenced

  [1]: https://secure.travis-ci.org/Raynos/jsonml-forms.png
  [2]: https://travis-ci.org/Raynos/jsonml-forms
  [3]: https://badge.fury.io/js/jsonml-forms.png
  [4]: https://badge.fury.io/js/jsonml-forms
  [5]: https://coveralls.io/repos/Raynos/jsonml-forms/badge.png
  [6]: https://coveralls.io/r/Raynos/jsonml-forms
  [7]: https://gemnasium.com/Raynos/jsonml-forms.png
  [8]: https://gemnasium.com/Raynos/jsonml-forms
  [9]: https://david-dm.org/Raynos/jsonml-forms.png
  [10]: https://david-dm.org/Raynos/jsonml-forms
  [11]: https://ci.testling.com/Raynos/jsonml-forms.png
  [12]: https://ci.testling.com/Raynos/jsonml-forms
