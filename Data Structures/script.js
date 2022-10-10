"use strict";

const object = {
  name: "Exhibyte Solution",
  owners: ["Ruta zala", "Dipti Tiwari", "Neelam Malaviya"],
  address: {
    city: "Surat",
    state: "Guajarat",
  },
  services: ["React Js", "Node Js"],
};

const { name: companyName, owners: leaders = [] } = object;

const [frontend, backend] = object.services;
console.log(frontend, backend);

console.log(companyName, leaders);

let a = 111;
let b = 999;

const obj = { a: 23, b: 17, c: 9 };
({ a, b } = obj);

console.log(a, b);

// nested Object
const {
  address: { city: c, state: s },
} = object;

console.log(c, s);

// Spred Operators

const arr = [6, 7, 8, 9];
const newArray = [1, 2, arr[0], arr[1], arr[2], arr[3]];
console.log(newArray);

const newSpread = [1, 2, ...arr];
console.log(newSpread);
const newServices = [...object.services, "vue.js"];
console.log(newServices);

//copy array

const services = [...newServices];
console.log(services);

//Concating Arrays

const newConcat = [...services, ...newArray];
console.log(newConcat);

//Rest Operator
const [l, , m, ...others] = newArray;
console.log(l, m, others);

//Short Circuiting with OR Operator
console.log(3 || "rahul"); //it will return 1st truthy value
console.log(0 || "rahul"); //it will return 1st truthy value
console.log("" || "rahul"); //it will return 1st truthy value

//undefined is falsy value
console.log(undefined || null);
console.log(0 || "" || undefined || "rahul");
console.log(0 || "" || 0); // if all are falsy valuethen it'll return last falsy value.

//Short Circuiting with AND Operator
console.log(0 && "Rahul");
console.log(5 && "Rahul");
console.log(undefined && null);

//Nullish: Null & undefined (Not 0 or '')

// Coding Challenge #1
// We're building a football betting app (soccer for my American friends 😅)!
// Suppose we get data from a web service about a certain game ('game' variable on
// next page). In this challenge we're gonna work with that data.
// Your tasks:
// 1. Create one player array for each team (variables 'players1' and
// 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field
// players. For Bayern Munich (team 1) create one variable ('gk') with the
// goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
// field players
// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk1, ...fieldPlayer1] = player1;
console.log(gk1, ...fieldPlayer1);
const [gk2, ...fieldPlayer2] = player2;
console.log(gk2, ...fieldPlayer2);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, "Thiago", "Coutinho", "Perisic"];
console.log(player1Final);

const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//for of loop
for (const player of player1) {
  console.log(player);
}

for (const data of Object.keys(object)) console.log(data);

for (const [key, value] of Object.entries(object)) console.log(key, value);

//sets
const data = new Set([1, 2, 1, 5, 3, 5, 4]);
console.log(data);
console.log(data.size);
console.log(new Set("rahul"));
console.log(data.has(1));
data.add(6);
data.delete(1);
// data.clear();
console.log(data);

const map = new Map();
map.set("name", "rahul rathod");
map.set("age", 21);
map.delete("age");

map.clear();
console.log(map);
