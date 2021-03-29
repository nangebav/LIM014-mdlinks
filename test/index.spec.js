/* eslint-disable no-undef */
const {
  fileExists,
  validateAbsolute,
  validateFile,
  pathExtname,
  validateMd,
} = require('../index.js');

// Validar la ruta
describe('fileExists', () => {
  it('debería ser una función', () => {
    expect(typeof fileExists).toBe('function');
  });
  it('debería retornar true si existe la ruta', () => {
    expect(fileExists('links_de_prueba_test/prueba_mdlinks_2')).toBe(true);
  });
  it('debería retornar false si no existe la ruta', () => {
    expect(fileExists('links_de_prueba_test/prueba_mdlinks_3')).toBe(false);
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

// Verificar si es archivo.
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

// Obtener la extención del archivo.
describe('pathExtname', () => {
  it('debería ser una función', () => {
    expect(typeof pathExtname).toBe('function');
  });

  it('debería retornar la extención del archivo', () => {
    expect(pathExtname('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md')).toBe('.md');
  });
});

// Validar si archivo es .md
describe('validateMd', () => {
  it('debería ser una función', () => {
    expect(typeof validateMd).toBe('function');
  });

  it('debería retornar false si no es un archivo .md', () => {
    expect(validateMd(pathExtname('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js'))).toBe(false);
  });

  it('debería retornar true si es un archivo .md', () => {
    expect(validateMd(pathExtname('/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md'))).toBe(true);
  });
});
