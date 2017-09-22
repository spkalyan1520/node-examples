var should = require("should");
var mochatest = require('./mochatest');

describe('Even Doubler ',function(){
    describe('when used synchronously',function(){
        it('should double number',function(){
            mochatest.evenDoublerSync(2).should.equal(4);
        });
        it('should throw an error',function(){
           (function(){mochatest.evenDoublerSync(3)}) .should.throw(/Odd/);
        });
    });
    describe('when used asynchronously', function() {
        
        it.only('should double even numbers correctly', function(done) {
            
            mochatest.evenDoubler(2, function(err, results) {
                
                should.not.exist(err);
                results.should.equal(4);
                done();
                
            });

        });
        
        it.skip('should return error on odd numbers', function(done) {
            
            mochatest.evenDoubler(3, function(err, results) {
                
                should.exist(err);
                should.not.exist(results);
                done();
            
            });
            
        });
        
    });
});