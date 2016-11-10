# Sistemas y Tecnologías Web. Gitbook-start-github-alex-moi

## Introducción

Este paquete es un plugin del paquete ```gitbook-start-alex-moi-nitesh```.
Ofrece la posibilidad de crear un **repositorio github** con un esquema preparado para crear un book.

## Instalación

**Debemos tener** instalado el paquete principal en **global**. Con esto hecho no es necesario instalar el paquete plugin github puesto que al ejecutar la aplicación de la forma que se expone a continuación, ésta lo instala por nosotros.
Por tanto, ejecutamos desde el directorio de nuestro gitbook:
```shell
gitbook-start-alex-moi-nitesh -d github
```
**Nota:** Al ejecutar este comando el programa tardará unos segundos para instalar el plugin github.

## Funcionamiento

Despues de haber ejecutado el comando del paso de Instalacion, el programa nos pedirá que introduzcamos el **usuario** y la **contraseña** de github y un **nombre para nuestro repositorio**.

Después de ello, tendremos creado un repositorio en nuestra cuenta con el nombre que hayamos puesto con un primer commit que contiene un desarrollo inicial del gitbook.

A continuación para subir cambios al repositorio creado, ejecute lo siguiente en la carpeta del gitbook:

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