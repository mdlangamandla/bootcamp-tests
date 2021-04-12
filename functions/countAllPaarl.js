function countAllPaarl(regNum){
   
    var regNo = regNum.split(', ');
    var arrCount = [];
    for(var i = 0; i < regNo.length; i++){
       if (regNo[i].startsWith('CJ')){
          arrCount.push(regNo[i]);
                   
       };
    };
     return arrCount.length;
  };