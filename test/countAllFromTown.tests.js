describe('The countAllFromTown function', function(){
    it('should return 3, the total of the registration numbers from Stellies.', function(){    
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), 3)
    });

   
})


