const { species } = require('../data/zoo_data');

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
