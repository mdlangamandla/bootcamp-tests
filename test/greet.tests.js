describe('The greet function',function(){

    it('should greet Meli precisely.', function(){
        assert.equal('Hello, Meli', greet('Meli'));
    });

    it('should greet Meli precisely.', function(){
        assert.equal('Hello, Sisa', greet('Sisa'));
    });

    it('should greet Meli precisely.', function(){
        assert.equal('Hello, Amanda', greet('Amanda'));
    });


    });