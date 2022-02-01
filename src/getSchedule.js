const { species, hours } = require('../data/zoo_data');

// Com ajuda de Lalá consegui utilizar os HOF's certos para as funções abaixo.

const weekDays = Object.keys(hours);
const especies = species.map((currentAnimal) => currentAnimal.name);

function fillterAnimalByDay(day) {
  return species.filter((dia) => dia.availability.includes(day)).map((nome) => nome.name);
}

const creatWeekObject = (dayOfWeek) => {
  if (dayOfWeek === 'Monday') {
    return { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  const daySchedule = {
    officeHour: `Open from ${hours[dayOfWeek].open}am until ${hours[dayOfWeek].close}pm`,
    exhibition: fillterAnimalByDay(dayOfWeek) };
  return daySchedule;
};

function weekSchedule() {
  return weekDays.reduce((acc, current) => {
    acc[current] = creatWeekObject(current);
    return acc;
  }, {});
}

function animalSchedule(animal) {
  return species.find((currentAnimal) => currentAnimal.name === animal).availability;
}

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return { Monday: creatWeekObject(scheduleTarget) };
  }
  if (weekDays.includes(scheduleTarget)) {
    const returnObject = {};
    returnObject[scheduleTarget] = creatWeekObject(scheduleTarget);
    return returnObject;
  }
  if (especies.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  return weekSchedule();
}

console.log(getSchedule());

module.exports = getSchedule;
