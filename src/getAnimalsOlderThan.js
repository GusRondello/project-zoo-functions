const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, idade) {
  const filtroNome = species.find(({ name }) => name === animal);
  return filtroNome.residents.every(({ age }) => age >= idade);
}
module.exports = getAnimalsOlderThan;
