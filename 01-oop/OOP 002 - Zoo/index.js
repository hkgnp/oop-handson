class Animal {
  constructor(name, type, hungerInKg) {
    this.name = name;
    this.type = type;
    this.hunger = hungerInKg;
  }

  calculateFoodCost(foodCost) {
    return foodCost * this.hunger;
  }
}

let lion = new Animal('Royal', 'Lion', 40);
console.log(lion.calculateFoodCost(2));

///////////////////////
// DO PART B HERE:
/////////////////////

let zoo = new Array();
zoo.push(new Animal('Fluffy', 'Golden Retriever', 25));
zoo.push(new Animal('Zodiac', 'Border Collie', 30));
zoo.push(new Animal('Korin', 'German Shepherd', 50));
zoo.push(new Animal('Pancake', 'Corgi', 35));
zoo.push(new Animal('Milo', 'Penguin', 30));
console.log(zoo);
// NOTE: THIS IS AN INCOMPLETE FUNCTION
function calculateTotalCost(zoo) {
  let totalCost = 0;
  for (let a of zoo) {
    totalCost += a.calculateFoodCost(5);
  }
  return totalCost;
}

console.log(calculateTotalCost(zoo));
