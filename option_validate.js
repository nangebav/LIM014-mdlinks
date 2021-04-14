const axios = require('axios');

// Validación de link
const optionValidate = (arr) => {
  const validateLinks = arr.map((obj) => axios.get(obj.href)
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
      status: res.status ? res.status : 404,
      message: 'FAIL',
    })));
  return Promise.all(validateLinks);
};

// optionValidate(b).then((values) => {
// console.log(values);
// });

module.exports = {
  optionValidate,
};
