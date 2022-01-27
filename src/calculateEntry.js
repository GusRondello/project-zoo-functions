const { prices } = require('../data/zoo_data');

// Com a ajuda do Raphael Martins realizei o requisito 6 na mentoria do dia 3

function countEntrants(entrants) {
  const children = entrants.filter((pessoa) => pessoa.age < 18).length;
  const adults = entrants.filter((pessoa) => pessoa.age >= 18 && pessoa.age < 50).length;
  const seniors = entrants.filter((pessoa) => pessoa.age >= 50).length;
  const result = { adult: adults, child: children, senior: seniors };
  return result;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { adult, child, senior } = countEntrants(entrants);
  return (adult * prices.adult) + (senior * prices.senior) + (child * prices.child);
}

module.exports = { calculateEntry, countEntrants };
