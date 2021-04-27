# Markdown Links

## Preámbulo

Markdown es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional README).

## Planteamiento del problema

Estos archivos Markdown normalmente contienen links (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

## Resumen del proyecto

Crear una herramienta usando Node.js, que lea y analice archivos en formato Markdown, para verificar los links que contengan y reportar algunas estadísticas.

### `Logo de Md-links014`

![logo](https://user-images.githubusercontent.com/77282012/116272728-c20b4580-a746-11eb-9ab5-2d0b7de898c6.jpg)

## 1. Diagramas de Flujo
    
  ### Diagrama de flujo API

  ![Copia de Diagrama eAPI](https://user-images.githubusercontent.com/77282012/112901887-f38ee380-90aa-11eb-90b6-d0a6661ad6b8.jpeg)

  ### Diagrama de flujo CLI

  ![Copia de Diagrama en blanco](https://user-images.githubusercontent.com/77282012/112901824-e114aa00-90aa-11eb-85f0-4748f8d01e69.jpeg)


# Guía de uso e instalación de la librería

Para la instalación se debe colocar el siguiente comando:

Linux: 

```sh
sudo npm install -g nangebav/LIM014-mdlinks
```

El ejecutable de esta aplicación se ejecuta de la siguiente manera a través de la terminal:

```sh
md-links <path-to-file> [options]
```

## Options


### `not option`

Para extraer los links de una ruta de un archivo Markdown, se coloca lo siguiente:

```sh
$ md-links <path-to-file> 
```

Ejemplo: 

![not option](https://user-images.githubusercontent.com/77282012/116272730-c2a3dc00-a746-11eb-89bc-0e5892d5bf53.jpg)

### `--validate`

Si pasamos la opción `--validate` o `-v` o `validate link`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

```sh
$ md-links <path-to-file> --validate
```

Por ejemplo:

![validate](https://user-images.githubusercontent.com/77282012/116272732-c33c7280-a746-11eb-8d96-a573120d2cef.jpg)


Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

### `--stats`

Si pasamos la opción `--stats` o `-s` o `statistic` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links <path-to-file> --stats
```

Por ejemplo:

![stats](https://user-images.githubusercontent.com/77282012/116272731-c2a3dc00-a746-11eb-93fa-88728a800dcf.jpg)

### `--stats --validate`

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links <path-to-file> --stats --validate
```
Por ejemplo:

![stats y validate](https://user-images.githubusercontent.com/77282012/116300729-d78f6800-a764-11eb-84fc-3b5fbfdd7484.jpg)

### `--help`

Si deseas conocer sobre los comandos que puedes usar, ingresa este

```sh
$ md-links <path-to-file> --help
```
Por ejemplo:

![help](https://user-images.githubusercontent.com/77282012/116272718-c0da1880-a746-11eb-87c5-26cc6cad54ce.jpg)


### JavaScript

* [x] Uso de condicionales (if-else | switch | operador ternario)
* [x] [Uso de funciones (parámetros | argumentos | valor de retorno)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Funciones)
* [x] [Manipular arrays (filter | map | sort | reduce)](https://code.tutsplus.com/es/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
* [x] [Manipular objects (key | value)](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object)
* [x] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] [Diferenciar entre expression y statements.](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [ ] [Diferenciar entre tipos de datos atómicos y estructurados.](https://developer.mozilla.org/es/docs/Web/JavaScript/Data_structures)
* [x] [Uso de callbacks.](https://developer.mozilla.org/es/docs/Glossary/Callback_function)
* [x] [Consumo de Promesas.](https://scotch.io/tutorials/javascript-promises-for-dummies#toc-consuming-promises)
* [x] [Creación de Promesas.](https://www.freecodecamp.org/news/how-to-write-a-javascript-promise-4ed8d44292b8/)

### Node

* [x] Uso de sistema de archivos. ([fs](https://nodejs.org/api/fs.html), [path](https://nodejs.org/api/path.html))
* [x] Instalar y usar módulos. ([npm](https://www.npmjs.com/))
* [x] Creación de modules. [(CommonJS)](https://nodejs.org/docs/latest-v0.10.x/api/modules.html)
* [x] [Configuración de package.json.](https://docs.npmjs.com/files/package.json)
* [x] [Configuración de npm-scripts](https://docs.npmjs.com/misc/scripts)
* [x] Uso de CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)
* [x] [Testeo asíncrono.](https://jestjs.io/docs/es-ES/asynchronous)
* [x] [Uso de librerias de Mock.](https://jestjs.io/docs/es-ES/manual-mocks)
* [x] Uso de Mocks manuales.
* [x] Testeo para múltiples Sistemas Operativos.

### Estructura del código y guía de estilo

* [x] [Organizar y dividir el código en módulos (Modularización)](https://medium.com/@sebastianpaduano/modularizaci%C3%B3n-en-javascript-538bd6c75fa)
* [x] Uso de identificadores descriptivos ([Nomenclatura](http://snowdream.github.io/javascript-style-guide/javascript-style-guide/es/naming-conventions.html) | [Semántica](https://geekytheory.com/semantica-coder))
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] [Uso de comandos de git (add | commit | pull | status | push)](https://github.com/jlord/git-it-electron)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [x] Colaboración en Github (branches | pull requests | |[tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging))
* [x] Organización en Github (projects | issues | labels | milestones)

### HTTP

* [x] Verbos HTTP ([http.get](https://nodejs.org/api/http.html#http_http_get_options_callback))

### Fundamentos de programación

* [x] [Recursión.](https://www.youtube.com/watch?v=lPPgY3HLlhQ)

***

### General

* [x] Puede instalarse via `npm install --global <github-user>/md-links`

### `README.md`

* [x] Un board con el backlog para la implementación de la librería.
* [x] Documentación técnica de la librería.
* [x] Guía de uso e instalación de la librería

### API `mdLinks(path, opts)`

* [x] El módulo exporta una función con la interfaz (API) esperada.
* [x] Implementa soporte para archivo individual
* [x] Implementa soporte para directorios
* [x] Implementa `options.validate`

### CLI

* [x] Expone ejecutable `md-links` en el path (configurado en `package.json`)
* [x] Se ejecuta sin errores / output esperado
* [x] Implementa `--validate`
* [x] Implementa `--stats`

### Pruebas / tests

* [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions,
  lines, y branches.
* [x] Pasa tests (y linters) (`npm test`).
