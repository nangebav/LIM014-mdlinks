/* eslint-disable no-undef */
const { mdLinks } = require('../md-links');
const axios = require('../__Mocks__/axios.js');

const path = '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md';

const a = [
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.1.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: '02.1.2 Node.js file system - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://www.w3schools.com/nodejs_/nodejs_intr',
    text: '02.1.3 Node.js Introduction III',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 404,
    message: 'FAIL',
  },
  {
    href: 'https://www.genbeta/web_',
    text: '02.1.4 Genbeta Web site',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 404,
    message: 'FAIL',
  },
];

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

const c = [
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.1.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: '02.1.2 Node.js file system - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://www.w3schools.com/nodejs_/nodejs_intr',
    text: '02.1.3 Node.js Introduction III',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 404,
    message: 'FAIL',
  },
  {
    href: 'https://www.genbeta/web_',
    text: '02.1.4 Genbeta Web site',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/1.md',
    status: 404,
    message: 'FAIL',
  },
  {
    href: 'https://nodejs.org/es/about/',
    text: '02.2.1 Acerca de Node.js - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://nodejs.org/api/fs.html',
    text: '02.2.2 Node.js file system - Documentación oficial',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://gonzalonavarro.es/blog/error-500/',
    text: '02.2.3 Gonzalonavarro Web',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
    status: 200,
    message: 'OK',
  },
  {
    href: 'https://www.reddit.com/r/Ai/broken_link_error_code_500_when_you_reply_to_a/',
    text: '02.2.4 airbnb',
    file: '/home/laboratoria/LIM014-mdlinks/links_de_prueba_test/prueba_mdlinks_2/2.md',
    status: 404,
    message: 'FAIL',
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
  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de tres propiedades', () => {
    expect(mdLinks(path, { validate: false }).then((values) => (values).toEqual(b)));
  });

  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de cinco propiedades', () => {
    expect(mdLinks(path, { validate: true }).then((values) => (values).toEqual(a)));
  });

  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de cinco propiedades', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2', { validate: true }).then((values) => (values).toEqual(c)));
  });

  it('Debería recibir ruta absoluta de archivo o directorio y retornar array de cinco propiedades', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2').then((values) => (values).toEqual(d)));
  });

  it('Debería detenerse si la ruta no existe', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_3').then((values) => (values).toBe('No Existe la ruta')));
  });

  it('Debería detenerse si no es un archivo md', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2/no_mdlink.js').then((values) => (values).toBe('No es un archivo marckdown (.md)')));
  });

  it('Debería leer un un archivo md sin links', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio/3.md').then((values) => (values).toBe('No hay Links')));
  });

  it('Debería leer un directorio con un archivo md sin links', () => {
    expect(mdLinks('links_de_prueba_test/prueba_mdlinks_2/directorio dentro de otro directorio').then((values) => (values).toBe('No hay Links')));
  });
});
