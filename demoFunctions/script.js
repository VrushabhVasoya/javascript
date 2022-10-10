"use strict";

const bookings = [];
const flightBooking = (
  flightNumber,
  noPassengers = 1,
  price = 199 * noPassengers
) => {
  const booking = {
    flightNumber,
    noPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

flightBooking("EI143", 3, 249);
flightBooking("EI143", 5);

//Primitive type & reference Type
const flight = "LH999";

const rahul = {
  name: "rahul rathod",
  passport: 1234567890,
};

const checkIn = (flightNum, passenger) => {
  flightNum = "LH856";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 1234567890) {
    console.log("Check IN");
  } else {
    Console.log("Wrong");
  }
};

checkIn(flight, rahul);
console.log(flight);
console.log(rahul);

// checkIn Functions Works???

//new Variable for Primitive type
// flightNum = flight
// passenger = rahul
// but object will assign address of Memory Heap

const goAir = {
  name: "Go Air",
  code: "GA",
  bookings: [],
  book(flightNum, passengerName) {
    console.log(
      `${passengerName} has been done booking in ${this.code}${flightNum} with ${this.name}`
    );
    this.bookings.push({
      passengerName,
      flightNum: `${this.code}${flightNum}`,
    });
  },
};

const airIndia = {
  name: "Air India",
  code: "AI",
  bookings: [],
};

const book = goAir.book;

goAir.book("143", "Rahul Rathod");
console.log(goAir);

//not Worked
// book("256", "Harsh Rathod");

//Call Function
book.call(airIndia, 256, "Harsh Rathod");
console.log(airIndia);

book.call(goAir, "545", "Jagruti Rathod");
console.log(goAir);

book.apply(goAir, ["245", "Khushi Ramoliya"]);

book.bind(goAir)("524", "Komal Chavda");

// Coding Challenge #1
// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an
// array with the number of replies for each option. This data is stored in the starter
// 'poll' object below.
// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = prompt(
      `${this.question}\n\n${this.options[0]}\n${this.options[1]}\n${this.options[2]}\n${this.options[3]}`
    );
    if (
      !isNaN(answer) &&
      Number(answer) <= this.answers.length - 1 &&
      Number(answer) >= 0
    ) {
      this.answers[answer]++;
    } else {
      alert("Incorrect answers");
    }
  },
};

const answerBtn = document.querySelector(".answer");

answerBtn.addEventListener("click", poll.registerNewAnswer.bind(poll));

//immediately Invoked Function Expressions
(function () {
  console.log("This will Never Run");
})();

(() => console.log("immediately Invoked Function Expressions"))();
