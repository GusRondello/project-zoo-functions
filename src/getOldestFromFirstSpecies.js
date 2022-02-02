const { species, employees } = require('../data/zoo_data');

// Tive ajuda do Imar Mendes para realizar organizar as repostas das funções criadas e também da Ana na mentoria para realizar as HOF's corretas para as funções.

function getEmployeResponsible(funcionario) {
  const firstIdResponsible = employees
    .find((employee) => employee.id === funcionario).responsibleFor[0];
  return firstIdResponsible;
}

function getAnimalResidents(idAnimalResponsible) {
  const animalResidents = species.find((especie) => especie.id === idAnimalResponsible).residents;
  const olderResidentAge = animalResidents.reduce((acc, cur) => (cur.age > acc ? cur.age : acc), 0);
  const olderResident = animalResidents.filter((resident) => resident.age === olderResidentAge); // preciso pegar as keys value para registrar em uma array e retornar como resposta da função final
  console.log(olderResident);
  return [olderResident[0].name, olderResident[0].sex, olderResident[0].age];
}

function getOldestFromFirstSpecies(id) {
  const idFuncionario = getEmployeResponsible(id);
  const resultado = getAnimalResidents(idFuncionario);
  return resultado;
}

module.exports = getOldestFromFirstSpecies;
