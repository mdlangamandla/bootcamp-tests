describe('The countAllFromTown function', function(){
    it('should return 3, the total of the registration numbers from Stellies.', function(){    
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    });
    it('should return 0 if registration number does not start with CL' , function(){
        var fromStellies = countAllFromTown('CJ 456,CY 567, CJ 123 ','CL');
        assert.deepEqual(fromStellies, 0)
    });   
})


