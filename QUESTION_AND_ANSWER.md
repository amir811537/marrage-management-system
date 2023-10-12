1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

    A: {}
    B: ReferenceError: greetign is not defined
    C: undefined

Answer B

There's a typographical error in the code. It assigns an empty object to the misspelled variable "greetign" instead of "greeting." As a result, it will throw a ReferenceError because "greetign" is not defined, and it won't log anything.


2. Write the correct answer from the following options and give an explanation (2-5 lines).

function sum(a, b) {
  return a + b;
}

sum(1, "2");

    A: NaN
    B: TypeError
    C: "12"
    D: 3

Answer C

In JavaScript, when you use the + operator to add a number and a string, the number is coerced into a string, and they are concatenated. So, 1 + "2" results in the string "12."

3. Write the correct answer from the following options and give an explanation (2-5 lines).

const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

    A: ['🍕', '🍫', '🥑', '🍔']
    B: ['🍝', '🍫', '🥑', '🍔']
    C: ['🍝', '🍕', '🍫', '🥑', '🍔']
    D: ReferenceError

Answer A

The code initially assigns the first element of the food array ("🍕") to the favoriteFood property of the info object. However, later, it reassigns the value of info.favoriteFood to "🍝." This change does not affect the food array, so when you log food, it remains unchanged.

4. Write the correct answer from the following options and give an explanation (2-5 lines).

function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

    A: Hi there,
    B: Hi there, undefined
    C: Hi there, null
    D: ReferenceError

Answer B


The sayHi function expects an argument "name," but it's called without any arguments. In this case, "name" is undefined, so the function returns "Hi there, undefined."

5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

    A: 1
    B: 2
    C: 3
    D: 4

Answer B

The forEach loop iterates through the nums array and increments the count variable whenever a truthy value is encountered. In this case, the values 1, 2, and 3 are truthy, so count is incremented three times, resulting in a value of 3 when logged.