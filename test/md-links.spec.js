/* eslint-disable no-undef */
const axios = require('axios');
const { mdLinks } = require('../md-links');

jest.mock('axios');

const path = '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md';

const status200 = [
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.1.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/Desktop/link de prueba/1.md',
    message: 'OK',
    status: 200,
  },
];
const axiosResolve = {
  status: 200,
  statusText: 'OK',
};
const status404 = [
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.1.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/Desktop/link de prueba/1.md',
    message: 'FAIL',
    status: 404,
  },
];
const axiosResolveF = {
  status: 404,
  statusText: 'FAIL',
};

const b = [
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

const d = [
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
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.2.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: '02.2.2 Node.js file system - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
  },
  {
    href: 'https://gonzalonavarro.es/blog/error-500/',
    text: '02.2.3 Gonzalonavarro Web',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
  },
  {
    href: 'https://www.reddit.com/r/Ai/broken_link_error_code_500_when_you_reply_to_a/',
    text: '02.2.4 airbnb',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
  },
];

describe('mdLinks', () => {
  it('es una función', () => { expect(typeof mdLinks).toBe('function'); });

  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de tres propiedades', () => expect(mdLinks(path, { validate: false })).resolves.toEqual(b));

  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de tres propiedades', () => expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2')).resolves.toEqual(d));

  test('Debería recibir ruta absoluta de directorio y retornar array de cinco propiedades con status ok', () => {
    axios.get.mockResolvedValue(axiosResolve);
    return mdLinks('/home/laboratoria/Desktop/link de prueba', { validate: true }).then((data) => {
      expect(data).toEqual(status200);
    });
  });

  test('Debería recibir ruta absoluta de directorio y retornar array de cinco propiedades con status fail', () => {
    axios.get.mockResolvedValue(axiosResolveF);
    return mdLinks('/home/laboratoria/Desktop/link de prueba', { validate: true }).then((data) => {
      expect(data).toEqual(status404);
    });
  });

  test('Debería recibir ruta absoluta de un archivo y retornar array de cinco propiedades con status fail', () => {
    axios.get.mockResolvedValue(axiosResolveF);
    return mdLinks('/home/laboratoria/Desktop/link de prueba/1.md', { validate: true }).then((data) => {
      expect(data).toEqual(status404);
    });
  });

  it('Debería detenerse si no es un archivo md', () => {
    mdLinks('links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js')
      .catch((values) => expect(values).toBe('No es un archivo marckdown (.md)'));
  });

  it('Debería leer un un archivo md sin links', () => {
    mdLinks('links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio/3.md')
      .catch((values) => expect(values).toBe('No hay Links'));
  });

  it('Debería leer un directorio con un archivo md sin links', () => {
    mdLinks('links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio')
      .catch((values) => expect(values).toBe('No hay Links'));
  });
  it('Debería detenerse si el directorio no existe', () => {
    mdLinks('links_de_pruebas_test/prueba_mdlinks_2/directorio dentro de otros directorio')
      .catch((values) => expect(values).toBe('No Existe la ruta'));
  });
});
