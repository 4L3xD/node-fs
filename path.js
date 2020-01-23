// Import the module
var readdirp = require('readdirp');
var fs = require('fs');
 
 
var settings = {
  //pasta que vai ser listada os arquivos
    root: './cof-data-list',
    //entryType: 'files',
    //filtrando apenas arquivos de extensão jsp
    fileFilter: [ '*.json' ],
};
 
var allFilePaths = [];
file:
 
// Iterate recursively through a folder
readdirp(settings)
    .on('data', function (entry) {
        // executa toda que vez um arquivo e encontrado no diretório e adiciona ao array
        allFilePaths.push(        	
          //pega o caminho do arquivo
            entry.path + ('\n')
        );
    })
    .on('warn', function(warn){
        console.log("Aviso: ", warn);
    })
    .on('error', function(err){
        console.log("Erro: ", err);
    })
    .on('end', function(){
        console.log(allFilePaths);
        fs.writeFile('teste.json', allFilePaths ,function(err) {
			    if(err) {
			        return console.log(err);
			    }
		   		 console.log("O arquivo foi salvo!");
			});
		         
    });