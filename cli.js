// const { mdLinks } = require('./md-links.js');

// ---total---
const total = (arr) => {
  const link = arr.map((arrObj) => arrObj.href);
  return link.length;
};

// ---unique---
const unique = (arr) => {
  const status = arr.map((arrObj) => arrObj.status);
  const StatusOk = (status.filter((obj) => obj === 200));
  return StatusOk.length;
};

// ---broken---
const broken = (arr) => {
  const status = arr.map((arrObj) => arrObj.status);
  const StatusFail = (status.filter((obj) => obj === 404));
  return StatusFail.length;
};

// ----------STATS----------------------------------------------------------------------------
// Esta función retornará cantidad de links totales y cantidad de links únicos:
// opción --stats, el output (salida) será un texto con estadísticas básicas sobre los links.
// opción --stats --validate, estadísticas de links, únicos y rotos.

const stats = (fivePropArray, options) => {
  if (options && options.validate === false) {
    return `Total: ${total(fivePropArray)} Unique: ${unique(fivePropArray)}`;
  }
  return `Total: ${total(fivePropArray)} Unique: ${unique(fivePropArray)} Broken: ${broken(fivePropArray)}`;
};

// const a = mdLinks('links_de_prueba_test/prueba_mdlinks_2', { validate: true })
//  .then((values) => values);

// console.log(total(a));
// ---validate---
// Esta función retornará el mensaje de ok o fail
// ---Validate y stats---
// Esta función retornará cantidad de links totales, únicos y rotos

module.exports = {
  total, broken, unique, stats,
};
