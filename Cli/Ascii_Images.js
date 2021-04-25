/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-useless-escape */
const chalk = require('chalk');

const color = {
  purple: chalk.bold.rgb(142, 121, 146),
  pink: chalk.bold.rgb(241, 141, 143),
  lilaBaby: chalk.bold.rgb(241, 191, 255),
  yellowBaby: chalk.bold.rgb(241, 239, 141),
  blueBaby: chalk.bold.rgb(141, 193, 241),
  greenBaby: chalk.bold.rgb(193, 241, 141),
  blue: chalk.blue,
  red: chalk.bold.rgb(233, 73, 76),
  redTwo: chalk.bold.rgb(228, 28, 48),
  orange: chalk.underline.rgb(241, 154, 62),
  yellow: chalk.rgb(255, 255, 95),
  green: chalk.bold.rgb(160, 233, 55),
  whitebold: chalk.bold.white,
  redBright: chalk.redBright,
  magenta: chalk.bold.magenta,
};

const logo = `
${chalk.rgb(241, 191, 255)('███    ███ ██████  ██      ██ ███    ██ ██   ██ ███████  ██████   ██ ██   ██')}
${chalk.rgb(184, 221, 255)('████  ████ ██   ██ ██      ██ ████   ██ ██  ██  ██      ██  ████ ███ ██   ██')}
${chalk.rgb(186, 251, 217)('██ ████ ██ ██   ██ ██      ██ ██ ██  ██ █████   ███████ ██ ██ ██  ██ ███████')} 
${chalk.rgb(255, 254, 229)('██  ██  ██ ██   ██ ██      ██ ██  ██ ██ ██  ██       ██ ████  ██  ██      ██')} 
${chalk.rgb(255, 191, 220)('██      ██ ██████  ███████ ██ ██   ████ ██   ██ ███████  ██████   ██      ██')} 
                                                                             
`;

const help = color.whitebold`
============================================================================================================
                                            HELP!!                                                                   
============================================================================================================
⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀                     
⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀ ⠀⡏⠀⠀⠀⠀⢷                    ${color.greenBaby('--validate, -v, validate link')}
⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇   ${color.yellowBaby('Devuelve estadísticas que necesiten de los resultados de la validación')}
⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀OK⠀ ⡇                    
⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇                       ${color.pink('--stats, -s, statistic')}
⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼            ${color.yellowBaby('Muestra estadisticas de los links(Total, Unique).')}
⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀                 
⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀                      ${color.magenta('-s -v, --stats --validate')}
⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀        ${color.yellowBaby('Muestra estadisticas de los links(Total, Unique, Broken).')}            
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀     
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⣄ ⢸⠀⠀⠀⠀⠀⠀                    ${color.blueBaby('--help, -h, I need help')}  
⣿⣿  ⣿    ⣏⣘   ⢸ ⢸             ${color.yellowBaby('Si necesita ayuda para saber qué comandos utilizarás.')} 
⣿⣿⣧⣀⣿⣀⣀⣀⣰⣏⣘⣆⣀⣀⣰⣀⣰   
============================================================================================================
`;
// ---help---
const saludo = `
╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝
`;

const fail = `
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
████▌▄▌▄▐▐▌█████
████▌▄▌▄▐▐▌▀████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`;

module.exports = {
  logo, help, saludo, fail, color,
};
