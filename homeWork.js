let pizzaPlace = "Hoan Pizza Shack"
let numberOfToppings = 10

console.log(pizzaPlace, "- It's a " + typeof(pizzaPlace) + ". / #" + numberOfToppings + ", It's a " + typeof(numberOfToppings))
console.log(`Welcome to ${pizzaPlace}. We currently offer ${numberOfToppings} toppings.`)

if (numberOfToppings <= 10) {
  console.log('Quality, not quantity');
}
else {
  console.log('A whole lot of pizza.')
}

let numberOfToppings = 1;
while (numberOfToppings <= 10) {
  if (numberOfToppings % 2 == 0)
  console.log(numberOfToppings);
  numberOfToppings++;
}
