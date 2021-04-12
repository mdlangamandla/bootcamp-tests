describe('The isFromBellville', function(){

    it('should return true if there are cars with registration number from Bellville.',function(){
        assert.equal(true, isFromBellville('CY'));
    });

    it('should return false if the registration number is from other town not Bellville.', function(){
        assert.equal(false, isFromBellville('CX') )
    
});
});