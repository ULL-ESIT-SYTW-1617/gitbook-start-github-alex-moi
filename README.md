# Sistemas y Tecnologías Web. Gitbook-start-github-alex-moi

## Introducción

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de crear un **repositorio github** con un esquema preparado para crear un book.

## Instalación

**Debemos de tener** instalados el paquete principal tanto en **global** como en **local**
```shell
npm install -g gitbook-start-alex-moi-nitesh
npm install --save gitbook-start-alex-moi-nitesh
```

## Funcionamiento

Para ejecutar el plugin, debemos de ejecutar `gitbook-start-alex-moi-nitesh -d github <opciones>`. Por ejemplo:
`gitbook-start-alex-moi-nitesh -d github -c prueba`

Tardará un rato y nos pedirá que introduzcamos el **usuario** y la **contraseña** de github y un **nombre para nuestro repositorio**.

Después de ello, tendremos creado un repositorio en nuestra cuenta con el nombre que hayamos puesto.

A continuación ejecute lo siguiente en la carpeta que se ha creado:
1. `npm install`
2. `gulp build` contruirá en la carpeta gh-pages el book
3. `gulp deploy` subirá los cambios a la rama **gh-pages**
4. `gulp deploy-github` subirá los cambios a la rama **master**
5. Acceda a https://usuario.github.io/nombre_repositorio y tendrá su libro publicado





## Enlaces importantes
*  [Página en NPM gitbook-start-alex-moi-nitesh](https://www.npmjs.com/package/gitbook-start-alex-moi-nitesh)
*  [Página en NPM gitbook-start-github-alex-moi Plugin](https://www.npmjs.com/package/gitbook-start-guthub-alex-moi)
*  [Repositorio GitHub](https://github.com/ULL-ESIT-SYTW-1617/gitbook-start-github-alex-moi.git)
*  [Descripción de la práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicagithubapi.html)
*  [Campus Virtual](https://campusvirtual.ull.es/1617/course/view.php?id=1175)

## Autores

* Alexander Cole Mora | [Página Personal](http://alu0100767421.github.io/)
* Moisés Yanes Carballo | [Página Personal](http://alu0100782851.github.io/)
