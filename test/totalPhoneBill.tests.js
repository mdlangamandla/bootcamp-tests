
describe('The totalPhoneBill function,', function(){

    it('should bring the total costs of all the phone usage', function(){
        assert.equal("R7.45" ,totalPhoneBill("sms, sms, sms, call, call"));
    })
    
    it('should bring the total of sent smses', function(){
        assert.equal("R1.95" ,totalPhoneBill("sms, sms, sms"));
    });

    it('should bring the total calls made', function(){
        assert.equal("R5.50" ,totalPhoneBill("call, call"));
    })
   
})