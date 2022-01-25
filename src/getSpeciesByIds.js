const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const animals = [];
  ids.forEach((animalId) => animals.push(data.species.find((value) => value.id === animalId)));
  return animals;
}
// com ajuda da Ana na mentoria do dia 1 entendi como poderia voltar esse resultado no forEach.

module.exports = getSpeciesByIds;
