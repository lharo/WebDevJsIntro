// Variables and Constants
let age = 25; // variable
const name = 'Alice'; // constant

// Changing value of 'let' variable
age = 26; 
console.log("Name: " + name + ", Age: " + age);

// Data Types
let message = "Hello, world"; // String
let number = 42; // Number
let isStudent = true; // Boolean

let person = { 
  firstName: "John", 
  lastName: "Doe", 
  age: 30 
}; // Object

let numbers = [1, 2, 3, 4, 5]; // Array

console.log(message);
console.log(person.firstName + " is " + person.age + " years old.");
console.log("Numbers array:", numbers);

// Functions
function greet(name) {
  return "Hello, " + name;
}

const greetArrow = (name) => "Hello, " + name;

console.log(greet("Alice")); // Output: Hello, Alice
console.log(greetArrow("Bob")); // Output: Hello, Bob

// Conditionals
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log("For loop count: " + i);
}

let j = 0;
while (j < 5) {
  console.log("While loop count: " + j);
  j++;
}

// ForEach loop for Arrays
numbers.forEach(number => console.log("ForEach number: " + number));

// Objects
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  start: function() {
    console.log("The car has started.");
  }
};

console.log("Car make: " + car.make);
car.start(); // Calling methods

// Arrays
let fruits = ["apple", "banana", "cherry"];
console.log("First fruit: " + fruits[0]);

fruits.push("orange");
console.log("Updated fruits array: " + fruits);

// DOM Manipulation (assume you have an HTML button with id="btn")
// <button id="btn">Click Me</button>
document.getElementById('btn').addEventListener('click', function() {
  alert("Button clicked!");
});
