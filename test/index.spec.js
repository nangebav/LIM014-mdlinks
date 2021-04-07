/* eslint-disable no-undef */
const {
  pathExists,
  validateAbsolute,
  validateDirectory,
  readDirectory,
  validateFile,
  fileMd,
  arrayMd,
  links,
} = require('../index.js');

// Validar la ruta
describe('pathExists', () => {
  it('debería ser una función', () => {
    expect(typeof pathExists).toBe('function');
  });
  it('debería retornar true si existe la ruta', () => {
    expect(pathExists('links_de_prueba_test/prueba_mdlinks_2')).toBe(true);
  });
  it('debería retornar false si no existe la ruta', () => {
    expect(pathExists('links_de_prueba_test/prueba_mdlinks_3')).toBe(false);
  });
});

// Verificar si es absoluta.
describe('validateAbsolute', () => {
  const a = '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md';
  const b = 'links_de_prueba_test/prueba_mdlinks_1.md';
  it('debería ser una función', () => {
    expect(typeof validateAbsolute).toBe('function');
  });
  it('debería retornar la ruta, si es absoluta', () => {
    expect(validateAbsolute(a)).toEqual(a);
  });

  it('debería convertir la ruta en absoluta, si no es absoluta', () => {
    expect(validateAbsolute(b)).toEqual(a);
  });
});

// Verificar si es un directorio.
describe('validateDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof validateDirectory).toBe('function');
  });

  it('debería retornar true si es un directorio', () => {
    expect(validateDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test')).toBe(true);
  });

  it('debería retornar false si no es un directorio', () => {
    expect(validateDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js')).toBe(false);
  });
});

// Almacena archivos de un directorio en un array
describe('readDirectory', () => {
  it('debería ser una función', () => {
    expect(typeof readDirectory).toBe('function');
  });
  const a = ['1.md', '2.md', 'directorio dentro de otro directorio', 'no_mdlink.js', 'no_mdlinks_2.html'];
  it('debería mostrame los archivos del directorio', () => {
    expect(readDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2')).toEqual(a);
  });
});

// Verificar si es un archivo.
describe('validateFile', () => {
  it('debería ser una función', () => {
    expect(typeof validateFile).toBe('function');
  });

  it('debería retornar true si es un archivo', () => {
    expect(validateFile('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js')).toBe(true);
  });

  it('debería retornar false si no es un archivo', () => {
    expect(validateFile('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2')).toBe(false);
  });
});

// Validar si archivo es .md
describe('fileMd', () => {
  it('debería ser una función', () => {
    expect(typeof fileMd).toBe('function');
  });

  it('debería retornar false', () => {
    expect(fileMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js')).toBe(false);
  });

  it('debería retornar true', () => {
    expect(fileMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md')).toBe(true);
  });
});

// Almacena archivos .md de un directorio en un array
describe('arrayMd', () => {
  it('debería ser una función', () => {
    expect(typeof arrayMd).toBe('function');
  });
  const a = ['/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio/3.md'];
  const b = [
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_1.md',
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio/3.md',
  ];
  it('debería mostrame solo los archivos md del directorio', () => {
    expect(arrayMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio')).toEqual(a);
  });
  it('debería mostrame solo los archivos md del directorio que dentro contiene otros directorios', () => {
    expect(arrayMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test')).toEqual(b);
  });
});

// Extrae los links de un archivo md y regresará los valores href, text y file en un objeto de array

describe('links', () => {
  it('debería ser una función', () => {
    expect(typeof links).toBe('function');
  });
  const a = ['/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md'];
  const aLinks = [
    {
      href: 'https://nodejs.org/es/about/',
      text: '02.1.1 Acerca de Node.js - Documentación oficial',
      file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    },
    {
      href: 'https://nodejs.org/api/fs.html',
      text: '02.1.2 Node.js file system - Documentación oficial',
      file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    },
    {
      href: 'https://www.w3schools.com/nodejs_/nodejs_intr',
      text: '02.1.3 Node.js Introduction III',
      file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    },
    {
      href: 'https://www.genbeta/web_',
      text: '02.1.4 Genbeta Web site',
      file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    },
  ];
  it('debería mostrame los valores de todos los links que estan en el archivo md', () => {
    expect(links(a)).toEqual(aLinks);
  });
});
