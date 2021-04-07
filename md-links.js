/* eslint-disable no-console */
const {
  pathExists,
  validateAbsolute,
  validateDirectory,
  validateFile,
  fileMd,
  readFile,
  arrayMd,
  links,
} = require('./index.js');

// Función mdLinks:
const mdLinks = (pathFile) => {
  // Verificar si existe el path.
  if (pathExists(pathFile) === true) {
    console.log('La ruta existe');
    // Verificar si es absoluta - Convertir en absoluta.
    const absolutePath = validateAbsolute(pathFile);
    console.log('Es una ruta absoluta');
    // Verificar si es un directorio o un archivo
    if (validateDirectory(absolutePath) === true) {
      console.log('Es un directorio');
      // Recorrer directorio y xtraer archivos md
      const directoryFile = arrayMd(absolutePath);
      // Extraer links
      console.log(links(directoryFile));
    } else if (validateFile(absolutePath) === true) {
      console.log('Es un archivo');
      if (fileMd(absolutePath) === true) {
        console.log('Si es un archivo marckdown (.md)');
        console.log(readFile(absolutePath));
      } else {
        console.log('No es un archivo marckdown (.md)');
      }
    }
  } else {
    console.log('No Existe la ruta');
  }
};

module.exports = {
  mdLinks,
};

const b = mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/');
// const b = mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2');
// const b = mdLinks('/home/laboratoria/LIM013-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md');
console.log(b);
