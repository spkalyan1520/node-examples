var Resource = require('./event-emitter-2-resource');
var r = new Resource(5);
r.on('start',function(){
    console.log('Started');
});


r.on('load', function(n){
   console.log('loading data '+n);
});

r.on('load',function(n){
   console.log('finished loading data '+n);
});
r.on('end',function(){
    console.log('Ended');
})