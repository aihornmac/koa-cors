var path = require('path');
var fs = require('fs');
var babel = require('babel-core');

var file = path.normalize(__dirname + '/index.es6');
var code = fs.readFileSync(file);

var result = babel.transform(code, {
  "presets": ["stage-1", "stage-2", "stage-3", "es2015"],
  "plugins": ["transform-decorators-legacy", "transform-class-properties"]
});

console.log(result.code);
