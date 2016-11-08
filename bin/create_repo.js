#! /usr/bin/env node
var prompt = require('prompt');
var github = require('octonode');
var fs = require('fs');
var path = require('path');

var simplegit
var namerepo;



function pedirdatos(dir){
  
  console.log("\n============ DATOS DE USUARIO ============")
  simplegit = require("simple-git")(path.join(process.cwd(), dir)); 
  prompt.start();

  prompt.get([
    { name: 'username', required: true, description: "Introduzca el username" }, 
    { name: 'password', hidden: true, description: "Introduzca el password", conform: function (value)  { return true; } },
    { name: 'nombre_repo', required: true, description: "Nombre repositorio"}
    ], function (err, result) {
        if(err)
            return err;
        
        namerepo = result.nombre_repo
        console.log(dir)
        getclienttoken(result.username, result.password, dir); //llamamos a la funcion que obtiene el token si ya ha sido creado o lo crea si no es asi con ese user y pass
    });
}


function getclienttoken(user, pass, dir){

    var comprobar;
    fs.existsSync(path.resolve(process.cwd(),dir,'.gitbook-start','config.json')) ? comprobar=true : comprobar=false;
    
    if(comprobar){
        obtenertoken(dir);
    }
    else{
        generartoken(user, pass, dir)
    }
}



function generartoken(user, pass, dir){
    
    console.log("\n============ GENERANDO TOKEN ============")

    
    github.auth.config({
        username: user,
        password: pass
    }).login({
        scopes: ['user', 'repo'],
        note: 'Token para gitbook-start-alex-moi'
    }, function (err, id, token) {
        if (err){
            console.log("\t"+err);
            return (err);
        };
        console.log("\tToken generado: " + token);
        
        //Creamos config.json y guardamos token en él
        var dirtoken=path.resolve(process.cwd(),dir,'.gitbook-start','config.json');
        var json = '{\n\t"tokens": {\n\t\t"github": "'+token+'" \n\t}\n}';


        fs.mkdirSync(path.resolve(process.cwd(),dir,'.gitbook-start'), function(err){
            if(err)
                return err
        });
        
        fs.writeFileSync(dirtoken, json);
        
        crear_repo(token)
        return token;
    });
  
}


function obtenertoken(dir){
 
    console.log("\n============ OBTENIENDO TOKEN ============")
    var json = require(path.resolve(process.cwd(),dir,'.gitbook-start','config.json'))
    var token = json.tokens.github
    
    console.log("\tToken obtenido: "+ token)
    crear_repo(token)
    
    return token;
}



function crear_repo(token){
    
    console.log("\n============ CREANDO REPOSITORIO =========")

    var client = github.client.call(github, token)
    var ghme = client.me()
    
    ghme.repo({
      name: namerepo,
      description: 'Gitbook generado con el paquete npm: gitbook-start-alex-moi-nitesh',
    },function(err, data){
        if(err){
            console.log("Error al crear repo: \n\t- Error: "+err.statusCode)
            return err;
        }
        else{
            console.log("Datos del repo creado:"+ 
                        "\n\t- Nombre de repo:\t "  +data.name+
                        "\n\t- Creador de repo:\t " +data.owner.login+
                        "\n\t- http url repo:\t "   +data.html_url+
                        "\n\t- ssh url repo:\t\t "  +data.ssh_url
                        )
             
            //Iniciando repo en el directorio del usuario y añadiendole el remoto para que pueda hacer push            
            simplegit.init().addRemote('origin', data.ssh_url).add('.').commit('First Commit').push(['-uf', 'origin', 'master'], function (err, data) {});
            return data;
        }
    });

}



module.exports = {
    pedirdatos,
    getclienttoken,
    obtenertoken,
    generartoken,
    crear_repo
}