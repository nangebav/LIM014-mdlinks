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

// Leer directorio y almacenar archivos en un array
const readDirectory = (route) => {
  const files = fs.readdirSync(route);
  let fileArray = [];
  files.forEach((file) => {
    // validar si es archivo md
    if (validateDirectory(file) === true) {
      fileArray = readDirectory(file, fileArray);
    } else {
      const mdValidate = fileMd(file);
      if (mdValidate === true) {
        fileArray.push(file);
      }
    }
  });
  return fileArray;
};
// const a = readDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test');
// console.log(a);

module.exports = {
  pathExists,
  validateAbsolute,
  validateDirectory,
  readDirectory,
  validateFile,
  fileMd,
  readFile,
};
