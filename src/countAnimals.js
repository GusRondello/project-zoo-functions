const { species } = require('../data/zoo_data');

// Tive a ajuda de Leo Araujo no terceiro dia de projeto nos requisito 4 e 5 para entender qual era o melhor HOF a ser utilizado.

function countAnimals(...animal) {
  if (animal.length === 0) {
    const todosAnimais = {};
    species.forEach((especie) => { todosAnimais[especie.name] = especie.residents.length; });
    return todosAnimais;
  }
  const [{ specie: value, sex: sexo }] = animal;
  const filtraEspecie = species.find((specie) => specie.name === value).residents;

  if (!sexo) {
    return filtraEspecie.length;
  } const filtraPorSexo = filtraEspecie.filter((residente) => residente.sex === sexo);
  return filtraPorSexo.length;
}

module.exports = countAnimals;
