var evenDoubler = function(num, callback){
  var maxtime=1000;
  var time  = Math.floor(Math.random()*maxtime+1);
  setTimeout(function(){
    if(num%2==0) {
      callback(null,num*2,time);  
    }else{
      callback(new Error(num+" is not even"));
    }
  },time);
};

for(var i=1;i<=10;i++){
  console.log(i+'--\n');
  evenDoubler(i,function(err, result, time){
    if(err){
      console.log(err.message);
    }else{
      console.log((result/2)+'x2 = '+result+', took'+time/60+' secs');
    }
  });
}