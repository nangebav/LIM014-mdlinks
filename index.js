/* eslint-disable max-len */
// Módulo del sistema de archivos Node.js le permite trabajar con el sistema de archivos en su computadora.
const fs = require('fs');
// El path módulo proporciona utilidades para trabajar con rutas de archivos y directorios.
const path = require('path');
// modulo para usar fetch en nodejs

// Validar si la ruta existe
const pathExists = (route) => fs.existsSync(route);

// Validar ruta si es absoluta, de lo contrario convertirla en absoluta
const validateAbsolute = (route) => ((path.isAbsolute(route)) ? route : path.resolve(route));

// Verificar si es un directorio.
const validateDirectory = (route) => fs.statSync(route).isDirectory();

// Verificar si es un archivo.
const validateFile = (route) => fs.statSync(route).isFile();

// Leer archivo .md y mostrarlos transformados en string
const readFile = (route) => fs.readFileSync(route, 'utf-8');

// obtener extensión de archivo, validar si archivo es .md
const fileMd = (route) => path.extname(route) === '.md';

// Leer Directorio
const readDirectory = (route) => fs.readdirSync(route);

// Leer directorio y almacenar archivos md en un array
const arrayMd = (route, filesDirectorio) => {
  const files = readDirectory(route);
  // console.log(files);
  let arraysOfFiles = filesDirectorio || [];
  files.forEach((file) => {
    const nextPath = path.join(route, file);
    // validar si es directorio:
    if (validateDirectory(nextPath) === true) {
      arraysOfFiles = arrayMd(nextPath, arraysOfFiles);
    } else if (fileMd(nextPath) === true) {
      arraysOfFiles.push(nextPath);
    }
  });
  return arraysOfFiles;
};

// const linkin = new RegExp(/[^!]\[.+?\]\(.+?\)/g);

// Leer archivos md y obtener sus links
const links = (mdArray) => {
  let arrayLinksValue = [];
  // Expresiones regulares
  const mdLinks = new RegExp(/(https?):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])/mg);
  const text = new RegExp(/\[(.*?)\]/g);
  const linkText = new RegExp(/(\[.+\])?\((https?):\/\/.+?\)/mg);
  const special = /[^a-zA-ZÁ-Ź-ÿ\u00f1\u00d1 0-9.]+/g;
  // Lectura de array de md's
  mdArray.forEach((content) => {
    const readMd = readFile(content);
    const arrayLink = readMd.match(linkText);
    if (arrayLink !== null) {
      arrayLink.forEach((element) => {
        const arrayLinks = element.match(mdLinks);
        arrayLinks.forEach((link) => {
          const linkValues = {
            href: link,
            text: element.match(text) ? element.match(text).toString().slice(1, -1).replace(special, '') : 'Not defined',
            file: content.toString(),
          };
          arrayLinksValue.push(linkValues);
        });
      });
    }
  }); return arrayLinksValue;
};

// Función para retornar un array validate

module.exports = {
  pathExists,
  validateAbsolute,
  validateDirectory,
  readDirectory,
  validateFile,
  fileMd,
  readFile,
  arrayMd,
  links,
};
