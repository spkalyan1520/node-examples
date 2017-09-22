var request = require('request');
var fs = require('fs');

var s = request("http://kalyansripathi.com/");


s.pipe(fs.createWriteStream('kalyansripathi.html'));