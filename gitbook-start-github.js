#! /usr/bin/env node

var modulo_repo = require("./bin/create_repo")
var fs = require('fs');
var path = require('path');
var simplegit = require("simple-git")(path.join(process.cwd())); //revisar esta ruta luego por si da problemas
var child = require("child_process");

    /*
    Funcionamiento:
        1. crea el repo
        2. añade la tarea al gulpfile
        3. copia gulpfile a tu directorio
        4. añade el remoto de github para que puedas subir cambios
    */


function initialize(directorio) {
    
    console.log("\nmodulo initialize");
   
    
    var contenido='\ngulp.task("deploy-github", function () {'+ 
        '\n\tvar github = require("gitbook-start-github-alex-moi");'+
        '\n\n\tgithub.deploy();'+
        '\n});\n\n';

    
    //añadimos la tarea
    fs.writeFileSync(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), contenido,  {'flag':'a'},  function(err) {
        if (err) 
            return console.error(err);
    });
    
    
    //copiamos gulpfile a nuestro directorio
    fs.copyFile(path.join(process.cwd(), 'node_modules','gitbook-start-alex-moi-nitesh','gulpfile.js'), path.join(process.cwd(), directorio , 'gulpfile.js'),function(err){
        if(err)
          console.log(err);
    });
    
    
    child.exec('cd '+directorio+';npm install; gulp build', function(error, stdout, stderr){
        if(error)
          console.log(error)
        console.log("\n============ INSTALANDO DEPENDENCIAS ============")
        console.log("\nEspere mientras el proceso termina ...")
        console.log(stderr);
        console.log(stdout);
        
        //Aqui se llama a la funcion q pide los datos pa crear el repo, luego genera token y crea repo
        modulo_repo.pedirdatos(directorio);//Hasta que no se instalen las depencias y no se cree la carpeta ghpages no se ejecuta esto :)
      });

};


function deploy() {

    console.log("Comenzando el deploy en GITHUB");
   
    simplegit.add('.').commit('Update repo').push(['-uf', 'origin', 'master'], function (err, data) {});

};



module.exports = {
  initialize,
  deploy
}