#!/usr/bin/env node
/* eslint-disable no-console */
const { program } = require('commander');
const chalk = require('chalk');
const { mdLinks } = require('./md-links.js');
const { logo, help } = require('./Ascii_Images.js');

const color = {
  blue: chalk.blue,
  red: chalk.bold.rgb(255, 0, 40),
  orange: chalk.underline.rgb(241, 154, 62),
  yellow: chalk.rgb(255, 255, 95),
  green: chalk.bold.rgb(160, 233, 55),
  whitebold: chalk.bold.white,
  redBright: chalk.redBright,
};

// ---total---
const total = (arr) => {
  const link = arr.map((arrObj) => arrObj.href);
  return link.length;
};

const uniqueLinks = (arr) => {
  const arrayHref = arr.map((obj) => obj.href);
  const newSet = [...new Set(arrayHref)];
  return newSet.length;
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

// if (options.validate) console.log('ingresaste validate');
// if (options.stats) console.log('ingresaste stats');
// if (options.help) console.log('pides ayuda');

// ---help---

// ----------validate----------------------------------------------------------------------------
// Esta función retornará el mensaje de ok o fail
const validate = (arr) => {
  mdLinks(arr, { validate: true })
    .then((values) => {
      values.forEach((e) => {
        const link = e.message === 'OK' ? color.orange(e.href) : color.red(e.href);
        const status = e.message === 'OK' ? color.yellow(e.status) : color.red(e.status);
        const message = e.message === 'OK' ? color.green(e.message) : color.red(e.message);
        console.log(color.whitebold`* Link: ${link} * │ Status: ${status} ${message} │ Text: ${chalk.rgb(154, 135, 157)(e.text)} `);
      });
    })
    .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
};
// validate('links_de_prueba_test');

// ----------stats----------------------------------------------------------------------------
// Esta función retornará cantidad de links totales y cantidad de links únicos:
// opción --stats, el output (salida) será un texto con estadísticas básicas sobre los links.
// opción --stats --validate, estadísticas de links, únicos y rotos.
const stats = (md) => mdLinks((md), { validate: true })
  .then((values) => console.log(color.whitebold`* Total: ${color.yellow(total(values))} | Unique: ${color.green(uniqueLinks(values))}`));
// mdLinks('links_de_prueba_test/prueba_mdlinks_2');
//  .then((values) => values);
// stats('links_de_prueba_test');

// ----------validate y stats--------------------------------------------------------------------
// Esta función retornará cantidad de links totales, únicos y rotos
const statsValidate = (md) => mdLinks((md), { validate: true })
  .then((values) => console.log(color.whitebold`* Total: ${color.yellow(total(values))} | Unique: ${color.green(uniqueLinks(values))} | Broken: ${color.redBright(broken(values))}`));
// statsValidate('links_de_prueba_test');

program.version('0.0.1');

program
  .arguments('path')
  .option('-v, --validate', 'validate link')
  .option('-s, --stats', 'statistic')
  .option('-h, --help', 'I need help')
  .action((path) => {
    const options = program.opts();
    mdLinks(path, options);
    if (options.stats) {
      stats(path);
    } if (options.validate) {
      validate(path);
    }
  });
program.parse(process.argv);
// CLI
const cli = (path, opt) => {
  if (opt.stats && opt.validate) {
    return mdLinks(path, { validate: true })
      .then((values) => console.log(color.whitebold`* Total: ${color.yellow(total(values))} | Unique: ${color.green(uniqueLinks(values))} | Broken: ${color.redBright(broken(values))}`));
  } if (opt.stats) {
    return mdLinks(path, { validate: true })
      .then((values) => color.whitebold`* Total: ${color.yellow(total(values))} | Unique: ${color.green(uniqueLinks(values))}`)
      .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
  } if (opt.validate) {
    return mdLinks(path, { validate: true })
      .then((values) => {
        values.forEach((e) => {
          const link = e.message === 'OK' ? color.orange(e.href) : color.red(e.href);
          const status = e.message === 'OK' ? color.yellow(e.status) : color.red(e.status);
          const message = e.message === 'OK' ? color.green(e.message) : color.red(e.message);
          console.log(color.whitebold`* Link: ${link} │ Status: ${status} ${message} │ Text: ${chalk.rgb(154, 135, 157)(e.text)} `);
        });
      })
      .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
  }
  if (opt.help) {
    console.log(color.blue(logo), color.yellow(help));
  }
};

cli('links_de_prueba_test', options)
  .then((val) => console.log(val));

module.exports = {
  total, broken, unique, validate, stats, statsValidate, cli,
};
