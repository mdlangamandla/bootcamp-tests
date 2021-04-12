function totalPhoneBill(string){
    var strSplit = string.split(',');
    var eSms = [];
    var eCall = [];
    var eSmsCharge = 0.650;
    var eCallCharge = 2.750;
    
    for (var i = 0; i < strSplit.length; i++){
     if (strSplit[i].includes('sms')){
    
        eSms.push(strSplit[i]);
    
     }
    }
    for (var i = 0; i < strSplit.length; i++){
        if (strSplit[i].includes('call')){
    
            eCall.push(strSplit[i]);
    
        }
    }
    
    var myTotal = eSms.length * eSmsCharge + eCall.length * eCallCharge;
    return `R${myTotal.toFixed(2)}`;
    
    }
    