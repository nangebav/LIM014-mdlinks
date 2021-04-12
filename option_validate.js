const axios = require('axios');

// Validación de link
const optionValidate = (arr) => arr.map((obj) => axios.get(obj.href)
  .then((res) => ({
    href: obj.href,
    text: obj.text,
    file: obj.file,
    status: res.status,
    message: res.statusText,
  }))
  .catch((res) => ({
    href: obj.href,
    text: obj.text,
    file: obj.file,
    status: res.status ? res.status : 'Not defined',
    message: 'FAIL',
  })));

// const b = links(a);

// Promise.all(optionValidate(b)).then((values) => {
//  console.log(values); // [3, 1337, "foo"]
// });

module.exports = {
  optionValidate,
};