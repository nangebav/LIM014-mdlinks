/* eslint-disable no-console */
const { program } = require('commander');
const chalk = require('chalk');
// const { table } = require('table');
const { mdLinks } = require('../md-links.js');

const { logo, help } = require('./Ascii_Images.js');
const { total, unique, broken } = require('./cli_fuctions.js');

const color = {
  blue: chalk.blue,
  red: chalk.bold.rgb(255, 0, 40),
  orange: chalk.underline.rgb(241, 154, 62),
  yellow: chalk.rgb(255, 255, 95),
  green: chalk.bold.rgb(160, 233, 55),
  whitebold: chalk.bold.white,
  redBright: chalk.redBright,
  magenta: chalk.bold.magenta,
};

program.version('0.0.1'); // Esta es la librería del Cli

// ----------validate----------------------------------------------------------------------------
const notOption = (arr) => {
  mdLinks(arr)
    .then((values) => {
      values.forEach((e) => {
        const link = e.message === 'OK' ? color.orange(e.href) : color.red(e.href);
        console.log(color.whitebold`* Link: ${link}│ Text: ${chalk.rgb(154, 135, 157)(e.text)} `);
      });
    })
    .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
};

// ----------validate----------------------------------------------------------------------------
const validate = (arr) => {
  mdLinks(arr, { validate: true })
    .then((values) => {
      values.forEach((e) => {
        const link = e.message === 'OK' ? color.orange(e.href) : color.red(e.href);
        const status = e.message === 'OK' ? color.yellow(e.status) : color.red(e.status);
        const message = e.message === 'OK' ? color.green(e.message) : color.red(e.message);
        console.log(color.whitebold`* Link: ${link} * │ Status: ${status} ${message} │ Text: ${chalk.rgb(154, 135, 157)(e.text)} `);
      })
        .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
    });
};
// ----------stats----------------------------------------------------------------------------
const stats = (md) => mdLinks((md), { validate: true })
  .then((values) => console.log(`* Total: ${total(values)} | Unique: ${unique(values)}`))
  .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
// ----------validate y stats--------------------------------------------------------------------
const statsValidate = (md) => mdLinks((md), { validate: true })
  .then((values) => console.log(`* Total: ${total(values)} | Unique: ${unique(values)} | Broken: ${broken(values)}`))
  .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
// statsValidate();

// CLI
program
// program.parse (argumentos) procesa los argumentos, dejando cualquier argumento no consumido
  .description('MdLinks by Nancy Bautista')
  .arguments('path')
  .option('-v, --validate', 'validate link')
  .option('-s, --stats', 'statistic')
  .option('-v -s, --validate --stats', 'validate link and status')
  .option('-h, --help', 'I need help')
  .action((path) => {
    const options = program.opts();
    if (!options.validate && !options.stats) {
      return notOption(path);
    } if (options.validate && !options.stats) {
      return validate(path);
    } if (options.stats && !options.validate) {
      return stats(path);
    } if (options.stats && options.stats) {
      return statsValidate(path);
    } if (options.help) {
      console.log(logo, help);
    }
  })
  .parse(process.argv);
/* argv de NodeJs => devuelve una matriz de cadenas de argumentos de la línea decomandos. */
