# Question 2 - Zoo

A zoo has many animals.

**Part A - Create a Class named Animal**

An animal has the following properties:

- name (example: "Fluffy", "Lucky", "Inuit")
- type (example: "Dog", "Leopard", "Zombie Dinosaur"
- hunger (how much food the animal eats per day measured in _kilograms_)

The animal class must have the following methods

1. A constructor that sets the name, type and hunger of the animal
2. calculateFoodCost(_dollarsPerKilogram_) --\_ dollarsPerKilogram is how much dollar each kilogram of food will cost. This method should return how much it costs to feed this animal for a day

Your class must be able to do the following

```
let  lion = new Animal("Royal", "Lion", 40);
```

```
console.log ( lion.calculateFoodcost(2) );  // expects to see 80
```

**Part B - Array of animals**

- Outside of the animal class, define an array named zoo.
- Create 5 animals with different amount of hunger.
- Put those 5 animals in the array
- Pass `zoo` to a function **outside of the class** called _calculateTotalCost()_. It should return the total cost of feeding the zoo. Assume it costs $5 per kilogram of food

```
var zoo = new Array();
```

```
// add 5 animals to zoo
zoo.add(new Animal("Fluffy", "Golden Retriever", 25));
zoo.add(new Animal("Zodiac", "Border Collie", 30));
zoo.add(new Animal("Korin", "German Shepherd", 50));
zoo.add(new Animal("Pancake", "Corgi", 35));
zoo.add(new Animal("Milo", "Penguin", 30));
```

```
console.log(calculateTotalCost(zoo)) // return the total cost to feed the animals
```
