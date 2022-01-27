const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const managerEmployees = [];
    const filtro = employees.filter((employee) => employee.managers.includes(managerId));
    filtro.forEach((nomeCompleto) =>
      managerEmployees.push(`${nomeCompleto.firstName} ${nomeCompleto.lastName}`));
    return managerEmployees;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));
getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
