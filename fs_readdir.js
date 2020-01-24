 // Carregando o File System
 var fs = require("fs");
 // Lê o conteúdo do diretório retornando um array de string de arquivos.
 // Obs.: Essa leitura é Não-Bloqueante, por isso retorna via callback.
 fs.readdir("./cof-data-list", function(err, files){
   console.log(files);
 });

 /* A mesma função, executada de forma Bloqueante.
 var files = fs.readdirSync("./");
 console.log(files); */