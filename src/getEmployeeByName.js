const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const primeiroNome = employees[.firstName];
  if (employeeName === undefined) {
    return {};
  } if (employeeName === primeiroNome) {
    return { id, firstName, lastName, managers, responsibleFor };
  }
}
console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
