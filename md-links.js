/* eslint-disable max-len */
/* eslint-disable prefer-promise-reject-errors */
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

// ----------MDLINKS--------------------------------------------------------------------------
// Función mdLinks, el input (entrada) es una ruta absoluta de archivo o directorio, el output
// (salida) será un array de links y sus propiedades: file, href, text;
const mdLinks = (pathFile, option) => new Promise((resolve, reject) => {
  if (pathExists(pathFile) === true) {
    const absolutePath = validateAbsolute(pathFile);
    if (validateDirectory(absolutePath) === true) {
      const directoryLinks = links(arrayMd(absolutePath));
      if (directoryLinks.length !== 0) {
        if (option && option.validate === true) {
          resolve(optionValidate(directoryLinks));
        } else {
          resolve(directoryLinks);
        }
      } else {
        reject('No hay Links');
      }
    } if (validateFile(absolutePath) === true) {
      if (fileMd(absolutePath) === true) {
        const mdArchivo = [absolutePath];
        const fileLinks = links(mdArchivo);
        if (fileLinks.length !== 0) {
          if (option && option.validate === true) {
            resolve(optionValidate(fileLinks));
          } else {
            resolve(fileLinks);
          }
        } else {
          reject('No hay Links');
        }
      } else {
        reject('No es un archivo marckdown (.md)');
      }
    }
  } else {
    reject('No Existe la ruta');
  }
});

module.exports = {
  mdLinks,
};

// mdLinks('/home/laboratoria/Desktop/link de prueba', { validate: true })
//  .then((values) => {
//    console.log(values);
//  });
