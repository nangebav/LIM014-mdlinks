// module.exports = () => { fileExists, validateAbsolute,validateFile, validateDirectory,
// pathExtname, validateMd, readFiles};

// const saludito = 'HELLO WORLD'
// console.log(saludito)

const fs = require('fs'); // fs es el módulo del sistema de archivos Node.js le permite trabajar con el sistema de archivos en su computadora.
const path = require('path'); // El path módulo proporciona utilidades para trabajar con rutas de archivos y directorios.

// Validar si la ruta existe
const fileExists = (file) => (fs.existsSync(file));

// Validar ruta si esabsoluta, de lo contrario convertirla en absoluta
const validateAbsolute = (file) => ((path.isAbsolute(file)) ? file : path.resolve(file));

// Verificar si es un archivo.
const validateFile = (file) => fs.statSync(file).isFile();

// Verificar si es un directorio.
const validateDirectory = (file) => fs.statSync(file).isDirectory();

// Obtener la extención del archivo.
const pathExtname = (file) => path.extname(file);

// Verificar si es un archivo .md
const validateMd = (file) => file === '.md';

module.exports = {
  fileExists,
  validateAbsolute,
  validateFile,
  validateDirectory,
  pathExtname,
  validateMd,
};
