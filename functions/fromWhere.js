function fromWhere(regNo){
    var bellville = "CY";
    var paarl = "CJ";
    var capeTown = "CA";
    
      if(regNo.startsWith('CY')){
          return 'Bellville';
      } else if(regNo.startsWith('CJ')){
          return 'Paarl';
      } else if(regNo.startsWith('CA')){
          return 'Cape Town';
      } else return 'Some other place!'   
  }