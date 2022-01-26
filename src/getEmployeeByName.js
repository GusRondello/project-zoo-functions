const { employees } = require('../data/zoo_data');

function getEmployeeByName(name) {
  return name === undefined ? {} : employees
    .find(({ firstName, lastName }) => firstName === name || lastName === name);
}

module.exports = getEmployeeByName;
