/* eslint-disable no-irregular-whitespace */
/* eslint-disable no-useless-escape */
const logo = `
███    ███ ██████  ██      ██ ███    ██ ██   ██ ███████  ██████   ██ ██   ██ 
████  ████ ██   ██ ██      ██ ████   ██ ██  ██  ██      ██  ████ ███ ██   ██ 
██ ████ ██ ██   ██ ██      ██ ██ ██  ██ █████   ███████ ██ ██ ██  ██ ███████ 
██  ██  ██ ██   ██ ██      ██ ██  ██ ██ ██  ██       ██ ████  ██  ██      ██ 
██      ██ ██████  ███████ ██ ██   ████ ██   ██ ███████  ██████   ██      ██ 
                                                                             
`;

const help = `
⠀⠀⠀⠀⣠⣶⡾⠏⠉⠙⠳⢦⡀⠀⠀⠀⢠⠞⠉⠙⠲⡀⠀     Options:
⠀⠀⠀⣴⠿⠏⠀⠀⠀⠀⠀⠀⢳⡀ ⠀⡏⠀⠀⠀⠀⢷      [--validate, -v, validate link]
⠀⠀⢠⣟⣋⡀⢀⣀⣀⡀⠀⣀⡀⣧⠀⢸⠀⠀⠀⠀⠀ ⡇     * Will return the status of the links from the .md file
⠀⠀⢸⣯⡭⠁⠸⣛⣟⠆⡴⣻⡲⣿⠀⣸⠀⠀OK⠀ ⡇     [--stats, -s, statistic]
⠀⠀⣟⣿⡭⠀⠀⠀⠀⠀⢱⠀⠀⣿⠀⢹⠀⠀⠀⠀⠀ ⡇     * It will return the total number of links and unique    
⠀⠀⠙⢿⣯⠄⠀⠀⠀⢀⡀⠀⠀⡿⠀⠀⡇⠀⠀⠀⠀⡼      links in your .md file
⠀⠀⠀⠀⠹⣶⠆⠀⠀⠀⠀⠀⡴⠃⠀⠀⠘⠤⣄⣠⠞⠀      [--help, -h, I need help]
⠀⠀⠀⠀⠀⢸⣷⡦⢤⡤⢤⣞⣁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀     * if you need help to know what commands you will use 
⠀⠀⢀⣤⣴⣿⣏⠁⠀⠀⠸⣏⢯⣷⣖⣦⡀⠀⠀⠀⠀⠀⠀     [--stats --validate']
⢀⣾⣽⣿⣿⣿⣿⠛⢲⣶⣾⢉⡷⣿⣿⠵⣿⠀⠀⠀⠀⠀⠀     * will return amount of total, unique and broken links
⣼⣿⠍⠉⣿⡭⠉⠙⢺⣇⣼⡏⠀⠀⠀⣄⢸⠀⠀⠀⠀⠀⠀     
⣿⣿⣧⣀⣿………⣀⣰⣏⣘⣆⣀⣀⢸
`;
// ---help---

module.exports = {
  logo, help,
};
