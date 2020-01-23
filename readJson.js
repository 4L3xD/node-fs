var fs = require("fs");
fs.readFile("./cof-data-list/2020.json" , "utf8", function(err, data){
  if(err){
    return console.log("Erro ao ler arquivo");
  }
  
  var jsonData = JSON.parse(data);
  console.log(jsonData)
 //  Se precisar em array use:
 // jsonData = Object.keys(jsonData);

});

// var jsonData = fs.readFileSync('./cof-data-list/2020.json', 'utf8');

// console.log(jsonData)