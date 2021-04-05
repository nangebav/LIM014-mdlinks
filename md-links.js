/* eslint-disable no-console */
const {
  pathExists,
  validateAbsolute,
  validateFile,
  validateDirectory,
  readDirectory,
  fileExtension,
  validateMd,
} = require('./index.js');

// Función mdLinks:
const mdLinks = (pathFile) => {
  // Verificar si existe el path.
  if (pathExists(pathFile) === true) {
    console.log('La ruta existe');
    // Verificar si es absoluta - Convertir en absoluta.
    const absolutePath = validateAbsolute(pathFile);
    // Verificar si es un directorio o un archivo
    if (validateDirectory(absolutePath) === true) {
      console.log('Es un directorio');
      // Recorrer directorio y ver archivos
      console.log(readDirectory(absolutePath));
    } else if (validateFile(absolutePath) === true) {
      console.log('Es un archivo');
      const extension = fileExtension(absolutePath);
      if (validateMd(extension) === true) {
        console.log('Si es un archivo marckdown (.md)');
      } else {
        console.log('No es un archivo marckdown (.md)');
      }
    }
  } else {
    console.log('No Existe la ruta');
  }
};

// const b = mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md');
// const b = mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2');
// const b = mdLinks('/home/laboratoria/LIM013-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md');
// console.log(b);
