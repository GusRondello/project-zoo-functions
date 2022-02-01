const { species, employees } = require('../data/zoo_data');

function getEmployeResponsible(funcionario) {
  const firstIdResponsible = employees.find((employee) => employee.id === funcionario).responsibleFor[0];
  return firstIdResponsible;
}

function getAnimalResidents(idAnimalResponsible) {
  const animalResidents = species.find((especie) => especie.id === idAnimalResponsible).residents;
  const olderResidentAge = animalResidents.reduce((acc, cur) => (cur.age > acc ? cur.age : acc), 0);
  const olderResidet = animalResidents.filter((resident) => resident.age === olderResidentAge); // preciso pegar as keys value para registrar em uma array e retornar como resposta da função final
  return olderResidet;
}

function getOldestFromFirstSpecies(id) {
}

// console.log(test);
console.log(getAnimalResidents('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));
// console.log(getEmployeResponsible('9e7d4524-363c-416a-8759-8aa7e50c0992'));
// console.log(checkOldestAnimal());
// console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
