/* eslint-disable no-undef */
const {
  pathExists,
  validateAbsolute,
  validateDirectory,
  readDirectory,
  validateFile,
  fileMd,
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
  const a = ['prueba_mdlinks_1.md'];
  const b = ['1.md', '2.md'];
  it('debería mostrame los archivos.md', () => {
    expect(readDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test')).toEqual(a);
  });

  it('debería mostrame los archivos.md', () => {
    expect(readDirectory('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2')).toEqual(b);
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
