// Strict Mode
"use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;

// if (hasDriversLicense) console.log("I can drive :)");

//Functions
function logger() {
  console.log("My name is Rahul");
}

logger();

function add(a, b) {
  const add = a + b;
  return add;
}

console.log(add(5, 10));

function calcAge(birthYear) {
  return 2021 - birthYear;
}

console.log(calcAge(2001));

//anonymous function
const calcAge1 = function (birthYear) {
  return 2021 - birthYear;
};

console.log(calcAge1(1998));

//arrow functions

const ageArrow = (birthYear) => 2021 - birthYear;
const age = (birthYear) => {
  return 2021 - birthYear;
};
const ageFunction = function (birthYear) {
  return 2021 - birthYear;
};

console.log(age(2001));

//Function Calling Functions

const retirementTime = (totalYear, bithYear) => {
  return totalYear - ageArrow(bithYear);
};

console.log(retirementTime(65, 2001));

// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

const calcAvg = (match1, match2, match3) => (match1 + match2 + match3) / 3;

const dolphinsAvgScore = calcAvg(44, 23, 71);
const koaslasAvgScore = calcAvg(65, 54, 49);

console.log(dolphinsAvgScore, koaslasAvgScore);
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log("Winner is Dolphin's :) ");
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log("Winner is Koalas's");
  } else {
    console.log("No Team is Winner :) ");
  }
};

checkWinner(dolphinsAvgScore, koaslasAvgScore);

// arrays

const fruit1 = "apple";
const fruit2 = "orange";
const fruit3 = "mango";
const fruit4 = "strawberry";
const fruit5 = "kiWi";

const fruit = ["apple", "mango", "orange", "strawberry", "kiwi"];
console.log(fruit);

const years = new Array(2000, 2001, 2202, 2003);
console.log(years);

console.log(fruit[0]);

console.log(fruit.length);
console.log(fruit[fruit.length - 1]);

fruit[3] = "pineapple";
console.log(fruit);

const rahul = ["Rahul", "Rathod", 2021 - 2001, fruit];
console.log(rahul);

//add Elements
const newLength = fruit.push("watermelon");
fruit.unshift("jasbsv");
console.log(fruit);
console.log(newLength);

//Remove Elements
const pooped = fruit.pop();
console.log(fruit);
console.log(pooped);
fruit.shift();
console.log(fruit);

console.log(fruit.indexOf("apple"));

console.log(fruit.includes("apple"));

// Code Challenge 2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

const calcTip = (billAmount) =>
  billAmount > 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;

const bills = new Array(125, 555, 44);
console.log(bills);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
console.log(tips);

const totals = new Array(
  bills[0] + tips[0],
  tips[1] + bills[1],
  bills[2] + tips[2]
);
console.log(totals);

// Important
//Object Concept

const jsonArray = {
  firstname: "Rahul",
  lastname: "Rathod",
  age: 20,
  job: "jr. JavaScipt Developer",
  company: "Exhibyte Solution",
};
console.log(jsonArray);
console.log(jsonArray.firstname);
console.log(jsonArray.lastname);
console.log(jsonArray["lastname"]);

jsonArray.age = 21;
console.log(jsonArray);

const nameKey = "name";
console.log(jsonArray["first" + nameKey]);

const interested = prompt("What you want to know??");
if (jsonArray[interested]) {
  console.log(jsonArray[interested]);
} else {
  console.log("Wrong Request");
}

jsonArray.website = "rahulrathod.epizy.com";
console.log(jsonArray);

//object Methods

const rahulBio = {
  firstname: "Rahul",
  lastname: "Rathod",
  birthyear: 2001,
  job: "jr. JavaScript Developer",
  hasDrivingLicense: true,
  calcAge: function () {
    this.age = 2021 - this.birthyear;
    return this.age;
  },
};

console.log(rahulBio.calcAge());
console.log(rahulBio["calcAge"]());
console.log(rahulBio["age"]);

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

const johnsData = {
  fullname: "John Smith",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const marksData = {
  fullname: "Mark Miller",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

marksData.calcBMI();
johnsData.calcBMI();
console.log(marksData.bmi);
console.log(johnsData.bmi);

if (johnsData.bmi > marksData.bmi) {
  console.log(
    `${johnsData.fullname}'s BMI (${johnsData.bmi}) is higher than ${marksData.fullname}'s BMI (${marksData.bmi})`
  );
} else {
  console.log(
    `${marksData.fullname}'s BMI (${marksData.bmi}) is higher than ${johnsData.fullname}'s BMI (${johnsData.bmi})`
  );
}

//Looping Challenge

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting Weights Repetition ${rep} 🏋️`);
}

for (let exc = 1; exc <= 3; exc++) {
  console.log(`--- starting excercise ${exc}`);
  for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting Weights Repetition ${rep} 🏋️`);
  }
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting Repetitions ${rep} 🏋️‍♀️`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6);
console.log(dice);

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

const billchals = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tipchals = [],
  totalchals = [];

const calchalTip = (billAmount) =>
  billAmount > 50 && billAmount <= 300 ? billAmount * 0.15 : billAmount * 0.2;

for (let i = 0; i < billchals.length; i++) {
  tipchals.push(calchalTip(billchals[i]));
  totalchals.push(billchals[i] + tipchals[i]);
}

console.log(billchals);
console.log(tipchals);
console.log(totalchals);
