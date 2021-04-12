function regCheck(regNo,regEnd){
    return regNo.endsWith(regEnd);
   }
  
  console.log(regCheck('DV 23 NB GP', 'GP'));
  console.log(regCheck('DV 23 LP GP', 'MP'));
  console.log(regCheck('CY 189-012', 'CY'));
  console.log(regCheck('CY 189-012', 'ND'));