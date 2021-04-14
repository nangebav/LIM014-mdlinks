/* eslint-disable no-console */
const {
  pathExists,
  validateAbsolute,
  validateDirectory,
  validateFile,
  fileMd,
  arrayMd,
  links,
} = require('./index.js');

const {
  optionValidate,
} = require('./option_validate.js');

// Función mdLinks:
const mdLinks = (pathFile, option) => {
  // Verificar si existe el path.
  if (pathExists(pathFile) === true) {
    console.log('La ruta existe');
    // Verificar si es absoluta - Convertir en absoluta.
    const absolutePath = validateAbsolute(pathFile);
    console.log('Es una ruta absoluta');
    // Verificar si es un directorio o un archivo
    if (validateDirectory(absolutePath) === true) {
      console.log('Es un directorio');
      // Recorrer directorio y extraer archivos md y extraer sus links
      const directoryLinks = links(arrayMd(absolutePath));
      console.log(directoryLinks.length > 0 ? 'Hay Links' : 'no hay links');
      // ¿Insertó option?
      if (option) {
        if (option.validate === true) {
          optionValidate(directoryLinks).then((values) => {
            console.log(values);
          });
        } else {
          console.log(directoryLinks);
        }
      } else {
        console.log(directoryLinks);
      }
    } else if (validateFile(absolutePath) === true) {
      console.log('Es un archivo');
      // Preguntar si es un archivo md
      if (fileMd(absolutePath) === true) {
        console.log('Si es un archivo marckdown (.md)');
        const mdArchivo = [absolutePath];
        const fileLinks = links(mdArchivo);
        console.log(fileLinks.length > 0 ? 'Hay Links' : 'no hay links');
        // ¿Insertó option?
        if (option) {
          if (option.validate === true) {
            optionValidate(fileLinks).then((values) => {
              console.log(values);
            });
          } else {
            console.log(fileLinks);
          }
        } else {
          console.log(fileLinks);
        }
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

mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2', { validate: false });
// const b = mdLinks('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2');
// const b = mdLinks('/home/laboratoria/LIM013-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md');
// console.log(b);
