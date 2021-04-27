// ---total---
const total = (arr) => {
  const link = arr.map((arrObj) => arrObj.href);
  return link.length;
};
// --unique--
const unique = (arr) => {
  const arrayHref = arr.map((obj) => obj.href);
  const newSet = [...new Set(arrayHref)];
  return newSet.length;
};
  // ---broken---
const broken = (arr) => {
  const status = arr.map((arrObj) => arrObj.status);
  const StatusFail = (status.filter((obj) => obj === 404));
  return StatusFail.length;
};

module.exports = { total, unique, broken };
