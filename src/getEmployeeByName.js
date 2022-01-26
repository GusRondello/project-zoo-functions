const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(name) {
  return name === undefined ? {} : employees.find(({ firstName, lastName }) => firstName === name || lastName === name);
}
/* if (employeeName === undefined) {
  return {};
}
const employeer = employees.find(({ firstName, lastName }) => {
  if (firstName === employeeName) {
    return employeer;
  } if (lastName === employeeName) {
    return employeer;
  } return employeer;
}); */

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
