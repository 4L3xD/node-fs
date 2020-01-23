let fs = require("fs");

fs.readFile("./cof-data-list/2020.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }
  
  let jsonData = JSON.parse(data);
  console.log(jsonData)

});
