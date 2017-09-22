var EventEmitter = require('events').EventEmitter;

var getResource = function(c){
    var e = new EventEmitter();
    setTimeout(function(){
        e.emit('start');
        var count=0;
        var t = setInterval(function(){
            e.emit('load',++count);
            if(count==c){
                e.emit('end');
                clearInterval(t);
            }
        },1000);
    },10000);
    return e;
}

var r= getResource(5);
r.on('start',function(){
    console.log('Started');
});


r.on('load', function(n){
   console.log('loading data'+n);
});

r.on('load',function(n){
   console.log('finished loading data '+n);
});
r.on('end',function(){
    console.log('Ended');
})