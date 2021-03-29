/* eslint-disable no-undef */
const {
  pathExists,
  validateAbsolute,
  validateFile,
  validateDirectory,
  fileExtension,
  validateMd,
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

// Pedir la extención del archivo
describe('fileExtension', () => {
  it('debería ser una función', () => {
    expect(typeof fileExtension).toBe('function');
  });

  it('debería retornar .js', () => {
    expect(fileExtension('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js')).toBe('.js');
  });

  it('debería retornar .md', () => {
    expect(fileExtension('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md')).toBe('.md');
  });
});
// Validar si archivo es .md
describe('validateMd', () => {
  it('debería ser una función', () => {
    expect(typeof validateMd).toBe('function');
  });

  it('debería retornar false', () => {
    expect(fileExtension(validateMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js'))).toBe(false);
  });

  it('debería retornar true', () => {
    expect(fileExtension(validateMd('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md'))).toBe(true);
  });
});
