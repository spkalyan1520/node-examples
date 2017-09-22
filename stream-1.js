var request = require('request');

var s = request("http://www.kalyansripathi.com/");
s.on('data',function(chunk){
    console.log(">>data>>"+chunk);
});


process.stdout.write(">>Writing to the stream<<");

request("http://www.kalyansripathi.com/").pipe(process.stdout);