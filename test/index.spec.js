/* eslint-disable no-undef */
const axios = require('axios');

jest.mock('axios');

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

const { optionValidate } = require('../option_validate.js');

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
  const b = [
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio/3.md',
  ];
  const c = ['/home/laboratoria/LIM014-mdlinks/reglas de expresiones regulares.md'];
  const abLinks = [
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
  const cLink = [
    {
      href: 'https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions',
      text: 'Not defined',
      file: '/home/laboratoria/LIM014-mdlinks/reglas de expresiones regulares.md',
    },
  ];

  it('debería mostrame los valores de todos los links que estan en el archivo md', () => {
    expect(links(a)).toEqual(abLinks);
  });
  it('debería mostrame solo los valores de todos los links que estan en el archivo md', () => {
    expect(links(b)).toEqual(abLinks);
  });
  it('debería mostrame los valores del link, pero el text debería decir not defined ', () => {
    expect(links(c)).toEqual(cLink);
  });
});
// TEST PARA EVALUAR ESTADOS DE CADA LINK
// Función para leer directorio:
describe('optionValidate', () => {
  test('debería ser una función', () => {
    expect(typeof optionValidate).toBe('function');
  });

  it('Debería devolver un objeto con mensaje ok', () => {
    const a = [
      {
        href: 'https://nodejs.org/es/about/',
        text: '02.1.1 Acerca de Node.js - Documentación oficial',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
      },
    ];
    const aStatus200 = [
      {
        href: 'https://nodejs.org/es/about/',
        text: '02.1.1 Acerca de Node.js - Documentación oficial',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
        status: 200,
        message: 'OK',
      },
    ];
    const axiosResolve = {
      status: 200,
      statusText: 'OK',
    };
    axios.get.mockResolvedValue(axiosResolve);
    return optionValidate(a).then((values) => { expect(values).toEqual(aStatus200); });
  });
});

// Demostrar la validación fail de links
describe('Validación de links', () => {
  it('Debería ser una función', () => {
    expect(typeof optionValidate).toBe('function');
  });
  it('Debería devolver un array con status fail', () => {
    const b = [
      {
        href: 'https://www.genbeta/web_',
        text: '02.1.4 Genbeta Web site',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
      },
    ];
    const bStatus404 = [
      {
        href: 'https://www.genbeta/web_',
        text: '02.1.4 Genbeta Web site',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
        status: 404,
        message: 'FAIL',
      },
    ];
    const axiosResolve2 = {
      status: 404,
      statusText: 'Fail',
    };

    axios.get.mockRejectedValue(axiosResolve2);
    return optionValidate(b).then((data) => {
      expect(data).toEqual(bStatus404);
    });
  });

  it('Debería devolver un array con status fail', () => {
    const b = [
      {
        href: 'https://www.genbeta/web_',
        text: '02.1.4 Genbeta Web site',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
      },
    ];
    const bStatus404 = [
      {
        href: 'https://www.genbeta/web_',
        text: '02.1.4 Genbeta Web site',
        file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
        status: 404,
        message: 'FAIL',
      },
    ];
    const axiosResolve3 = {
      status: undefined,
      statusText: 'Fail',
    };

    axios.get.mockRejectedValue(axiosResolve3);
    return optionValidate(b).then((data) => {
      expect(data).toEqual(bStatus404);
    });
  });
});
