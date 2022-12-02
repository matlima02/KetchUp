function cleanName(dirtyName){
    return cleanNameArr = dirtyName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().split(" ", 2);
}

firstName = cleanName("Tomás Barbosa")[0]   
lastName = cleanName("Tomás Barbosa")[1]    
//console.log(firstName)