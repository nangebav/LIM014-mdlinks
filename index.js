// module.exports = () => { pathExists, validateAbsolute,validateFile, validateDirectory,
// pathExtname, validateMd, readFiles};

// const saludito = 'HELLO WORLD'
// console.log(saludito)

const fs = require('fs'); // fs es el módulo del sistema de archivos Node.js le permite trabajar con el sistema de archivos en su computadora.
const path = require('path'); // El path módulo proporciona utilidades para trabajar con rutas de archivos y directorios.
// const { fileURLToPath } = require('url');

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
  const mdLinks = new RegExp(/(https?):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&amp;:/~+#]*[\w\-@?^=%&amp;/~+#])/mg);
  const text = new RegExp(/\[(.*?)\]/g);
  const linkText = new RegExp(/[^!]\[.+?\]\(.+?\)/mg);
  mdArray.forEach((content) => {
    const readMd = readFile(content);
    const arrayLink = readMd.match(linkText);
    arrayLink.forEach((element) => {
      const linkValues = {
        href: element.match(mdLinks).toString(),
        text: element.match(text).toString().slice(1, -1),
        file: content.toString(),
      };
      arrayLinksValue.push(linkValues);
    });
  }); return arrayLinksValue;
};

// const a = [
//  '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md',
// ];
// const b = [
//  '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
// ];

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
