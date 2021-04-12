describe('The regCheck function', function(){

    it ('should return true if the regNo for GP is in a registration plate.',function(){
        assert.equal(true, regCheck('DV 23 NB GP', 'GP'));

    });

    it ('should return false if there is no specified town.', function(){
        assert.equal(false, regCheck('CY 189-012', 'ND'));
    });
});