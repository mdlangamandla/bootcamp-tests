function yearsAgo(year){
    var results = new Date().getFullYear() - new Date(year);
    return results;
  }