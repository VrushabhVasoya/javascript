"use strict";

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calcAge = function () {
  //     console.log(new Date().getFullYear() - this.birthYear);
  //   };
};
Person.prototype.species = "Homo Sapiens";
Person.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

console.log(Person.prototype);

const rahul = new Person("Rahul", 2001);
console.log(rahul);
console.log(rahul.__proto__);
console.log(Person.prototype.isPrototypeOf(rahul));

console.log(rahul instanceof Person);
console.log(rahul.hasOwnProperty("firstName"));
console.log(rahul.hasOwnProperty("species"));

console.log(rahul.__proto__.__proto__);

console.dir(Person.prototype.constructor);
const harsh = new Person("Harsh", 2001);
console.log(harsh);
// harsh.calcAge();

rahul.calcAge();

class PersonObject {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance Method
  //Methods will added into .prototype Property
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  }

  greeting() {
    console.log(`Heyy ${this._fullName}`);
  }

  get age() {
    return new Date().getFullYear() - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a Full Name`);
    }
  }

  get fullName() {
    return this._fulName;
  }

  //static method
  static hey() {
    console.log("Hii there :)");
    console.log(this);
  }
}

// PersonObject.prototype.greeting = function () {
//   console.log(`Heyy ${this.firstName}`);
// };

const Rahul = new PersonObject("Rahul Rathod", 2001);
console.log(Rahul);
console.log(Rahul.age);
Rahul.calcAge();
Rahul.greeting();
PersonObject.hey();

Rahul.fullName = "Rahul Rathod";

// using Object.create

const Personproto = {
  calcAge() {
    console.log(new Date().getFullYear() - this.birthYear);
  },
};

const person = Object.create(Personproto);
console.log(person);

person.name = "Rahul";
person.birthYear = 2001;

person.calcAge();

const PersonProto = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};
PersonProto.prototype.calcAge = function () {
  console.log(new Date().getFullYear() - this.birthYear);
};

const StudentProto = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  // this.firstName = firstName;
  // this.birthYear = birthYear;
  this.course = course;
};

StudentProto.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} am I study ${this.course}`);
};
const student1 = new StudentProto("Rahul", 2001, "Computer Science");
student1.introduce();
