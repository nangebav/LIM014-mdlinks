/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-useless-escape */
const chalk = require('chalk');

const logo = `
███    ███ ██████  ██      ██ ███    ██ ██   ██ ███████  ██████   ██ ██   ██ 
████  ████ ██   ██ ██      ██ ████   ██ ██  ██  ██      ██  ████ ███ ██   ██ 
██ ████ ██ ██   ██ ██      ██ ██ ██  ██ █████   ███████ ██ ██ ██  ██ ███████ 
██  ██  ██ ██   ██ ██      ██ ██  ██ ██ ██  ██       ██ ████  ██  ██      ██ 
██      ██ ██████  ███████ ██ ██   ████ ██   ██ ███████  ██████   ██      ██ 
                                                                             
`;

const help = `
******************************************************************************************************

⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀     Options:
⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀ ⠀⡏⠀⠀⠀⠀⢷      [${chalk.bold.yellow('--validate, -v, validate link')}]
⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇     ${chalk.white('* Will return the status of the links from the .md file')}
⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀OK⠀ ⡇     [${chalk.bold.yellow('--stats, -s, statistic')}]
⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇     ${chalk.white('* It will return the total number of links and unique')}    
⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼      ${chalk.white('links in your .md file')}
⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀      [${chalk.bold.yellow('--help, -h, I need help')}]
⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     ${chalk.white('* if you need help to know what commands you will use')}
⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀     [${chalk.bold.yellow('--stats --validate')}]
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀     ${chalk.white('* will return amount of total, unique and broken links')}
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀     
⣿⣿⣧⣀⣿………⣀⣰⣏⣘⣆⣀⣀⢸

******************************************************************************************************
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
  logo, help, saludo, fail,
};
