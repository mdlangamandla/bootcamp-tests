describe('The yearsAgo function', function(){
    it('should return 21 which is the diffYears between the current year and 2000.', function(){
        assert.equal(21, yearsAgo(2000));
    })

  
    it('should return 0 diff if we are in current year.', function(){
        assert.equal(0, yearsAgo(2021));
    })
})