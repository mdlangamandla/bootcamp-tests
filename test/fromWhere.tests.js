describe('The fromWhere function', function() {

    it('should return Bellville for CY location.', function() {    
        assert.equal('Bellville', fromWhere('CY 182736'));

    });
    it('should return Paarl for CJ location.', function() {
       
        assert.equal('Paarl', fromWhere('CJ 182141'));
    });
    it('should be able to return Cape Town for CA.', function() {
        assert.equal('Cape Town', fromWhere('CA 222736'));
    });
    it('should return Some other place if a registration is from not in the specified place.', function() {
        assert.equal('Some other place!',fromWhere('ND 998758')); 
    });
});
