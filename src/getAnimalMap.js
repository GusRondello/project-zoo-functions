const { species } = require('../data/zoo_data');

const residents1 = species.map((animais) => animais.residents); // array que pega todos os residentes por especie.
const animalRegion = {};
function separeteAnimalByRegions() { // Essa Função separa os animais pela região
  species.forEach((especie) => { animalRegion[especie.location] = []; });
  animalRegion.NE = species.filter((animal) => animal.location === 'NE');
  animalRegion.NW = species.filter((animal) => animal.location === 'NW');
  animalRegion.SE = species.filter((animal) => animal.location === 'SE');
  animalRegion.SW = species.filter((animal) => animal.location === 'SW');
  return animalRegion; // Retorna um objeto com as keys que filtram por região
}

function fillterName(residentsArray, sexo, ordenar) {
  const residentSex = residentsArray.filter((animais) => animais.sex === sexo);
  const residentsNames = residentSex.map((nome) => nome.name);
  /* if (ordenar === true) {
    return residentsNames.sort((a, b) => a > b);
  } */
  return residentsNames;
}

function getAnimalMap(...options) { // Função Principal
  const { includeNames: nomes, sex: sexo, sorted: ordenado } = options;
  const region = separeteAnimalByRegions();
  if (options.length === 0) { // Adiciona o nome das especies a sua respectiva região
    animalRegion.NE = animalRegion.NE.map((nome) => nome.name);
    animalRegion.NW = animalRegion.NW.map((nome) => nome.name);
    animalRegion.SE = animalRegion.SE.map((nome) => nome.name);
    animalRegion.SW = animalRegion.SW.map((nome) => nome.name);
    return region;
  }
  if (nomes === undefined && ordenado === undefined && sexo === 'female') {
    return fillterName(residents1[0], 'female', true);
  }
}

module.exports = getAnimalMap;

console.table(fillterName(residents1, 'female', true));
