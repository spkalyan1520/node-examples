var evenDoubler = function(num, callback){
    if(parseInt(num)%2==0)
        callback(null,num*2);
    else
        callback(new Error("Not an even number"));
};

var evenDoublerSync = function(v){
    if(v%2==0) 
        return v*2;
    throw(new Error("Not and even number"));
};
module.export.evenDoubler = evenDoubler;
module.export.evenDoublerSync = evenDoublerSync;