describe('The isWeekday function', function(){
   
    it('should return true if day is a weekday.', function(){
        assert.equal(true, isWeekday('Monday'));
    });

    it('should return true if day is between Monday to Friday.', function(){
        assert.equal(true, isWeekday('Wednesday'));
    });

    it('should return false if day is not a week day.', function(){
        assert.equal(false, isWeekday('Saturday'));
    });
    
});