#!/usr/bin/env node
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const { program } = require('commander');
// const { table } = require('table');
const { mdLinks } = require('../md-links.js');

const { logo, help, color } = require('./Ascii_Images.js');
const { total, unique, broken } = require('./cli_fuctions.js');

program.version('0.0.1'); // Esta es la librería del Cli

// ----------NOT OPTION----------------------------------------------------------------------------
const notOption = (arr) => {
  mdLinks(arr)
    .then((values) => {
      values.forEach((e) => {
        const link = color.lilaBaby(e.href);
        const text = color.blueBaby(e.text);
        console.log(color.greenBaby`Link: ${link}\nText: ${text}
        `);
      });
    })
    .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
};

// ----------validate----------------------------------------------------------------------------
const validate = (arr) => {
  mdLinks(arr, { validate: true })
    .then((values) => {
      values.forEach((e) => {
        const file = e.message === 'OK' ? color.yellowBaby(e.file) : color.red(e.file);
        const link = e.message === 'OK' ? color.lilaBaby(e.href) : color.red(e.href);
        const status = e.message === 'OK' ? color.blueBaby(e.status) : color.whitebold(e.status);
        const message = e.message === 'OK' ? color.pink(e.message) : color.red(e.message);
        console.log(color.greenBaby`File: ${file} \nLink: ${link} \nStatus: ${status} ${message} \nText: ${color.purple(e.text)}
        `);
      });
    })
    .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));
};

// ----------stats----------------------------------------------------------------------------
const stats = (md) => mdLinks((md), { validate: true })
  .then((values) => {
    const a = color.whitebold`
       ▄▀▄     ▄▀▄       
      ▄█░░▀▀▀▀▀░░█▄      
 ▄▄   █░░░░░░░░░░░█   ▄▄  
█▄▄█▄▄█░░▀░░┬░░▀░░█▄▄█▄▄█  
───────────┬───────────── 
  ${color.pink('Total')}    │   ${color.pink(total(values))}
  ${color.blueBaby('Unique')}   │   ${color.blueBaby(unique(values))}
───────────┴─────────────
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    `;
    console.log(a);
  })
  .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));

// ----------validate y stats--------------------------------------------------------------------
const statsValidate = (md) => mdLinks((md), { validate: true })
  .then((values) => {
    const a = color.whitebold`
       ▄▀▄     ▄▀▄       
      ▄█░░▀▀▀▀▀░░█▄      
 ▄▄   █░░░░░░░░░░░█   ▄▄  
█▄▄█▄▄█░░▀░░┬░░▀░░█▄▄█▄▄█  
───────────┬───────────── 
   ${color.pink('Total')}   │   ${color.pink(total(values))}     
   ${color.blueBaby('Unique')}  │   ${color.blueBaby(unique(values))}     
   ${color.greenBaby('Broken')}  │   ${color.greenBaby(broken(values))}     
───────────┴─────────────
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
    `;
    console.log(a);
  })
  .catch(() => console.log(color.red('(ﾟ◥益◤ﾟ) Error (ʘ言ʘ╬)')));

// -------------------- CLI ----------------------------------------------------------------------
const options = program.opts();
program
  .description('MdLinks by Nancy Bautista')
  .arguments('<path-to-file>')
  .option('-v, --validate', 'validate link')
  .option('-s, --stats', 'statistic')
  .option('-v -s, --validate --stats', 'validate link and status')
  .option('-h, --help', 'I need help')
  .action((path) => {
    if (!options.validate && !options.stats && !options.help) {
      return notOption(path);
    } if (options.validate && !options.stats && !options.help) {
      return validate(path);
    } if (options.stats && !options.validate && !options.help) {
      return stats(path);
    } if (options.stats && options.stats && !options.help) {
      return statsValidate(path);
    } if (options.help && !options.validate && !options.stats) {
      console.log(logo, help);
    }
  })
  .parse(process.argv);
/* argv de NodeJs => devuelve una matriz de cadenas de argumentos de la línea decomandos. */
