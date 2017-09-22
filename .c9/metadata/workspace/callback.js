{"filter":false,"title":"callback.js","tooltip":"/callback.js","undoManager":{"mark":0,"position":0,"stack":[[{"start":{"row":0,"column":0},"end":{"row":50,"column":21},"action":"insert","lines":["var maxTime = 1000;","","// If input is even, double it","// If input is odd, error","// (call takes random amount of time < 1s)","var evenDoubler = function(v, callback) {","    var waitTime = Math.floor(Math.random()*(maxTime+1));","    if (v%2) {","        setTimeout(function() {","            callback(new Error(\"Odd input\"));","        }, waitTime);","    } else {","        setTimeout(function() {","            callback(null, v*2, waitTime);","        }, waitTime);","    }","};","","// Version 1:  Named function to process results:","","// var processResults = function(err, results, time) {","//     if (err) {","//         console.log(\"ERROR: \" + err.message);","//     } else {","//         console.log(\"The results are: \" + results + \" (\" + time + \" ms)\");","//     }","// };","","// evenDoubler(4, processResults);","// evenDoubler(5, processResults);","","","// Version 2:  Use anonymous function and track callbacks to print \"Done!\" message","","var count = 0;","","for (var i = 0; i<10; i++) {","    console.log(\"Calling evenDoubler for value: \" + i);","    evenDoubler(i, function(err, results, time) {","        if (err) {","            console.log(\"ERROR: \" + err.message);","        } else {","            console.log(\"The results are: \" + results + \" (\" + time + \" ms)\");","        }","        if (++count === 10) {","            console.log(\"Done!\");","        }","    });","};","","console.log(\"-----\");"],"id":9}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":50,"column":21},"end":{"row":50,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1495658154332,"hash":"3e328a783ad49a076c2ac7ee2be0e2367b238f10"}