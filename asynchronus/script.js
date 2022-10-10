"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

const renderError = function (err) {
  countriesContainer.insertAdjacentHTML("beforeend", err);
  countriesContainer.style.opacity = 1;
};
const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
          <img class="country__img" src="${data.flag}" />
          <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies[0].name
            }</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryData = function (country) {
//   //AJAX Call
//   const req = new XMLHttpRequest();
//   req.open("GET", `https://restcountries.eu/rest/v2/name/${country}`);
//   req.send();

//   req.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);
//     const [neighbours] = data.borders;

//     if (!neighbours) return;

//     //AJAX call for neighbour
//     const req2 = new XMLHttpRequest();
//     req2.open("GET", `https://restcountries.eu/rest/v2/alpha/${neighbours}`);
//     req2.send();

//     req2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryData("uae");

// const request = fetch("https://restcountries.eu/rest/v2/name/uae");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => {
//       renderCountry(data[0]);
//       const neighbours = data[0].borders[0];

//       if (!neighbours) return;

//       return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbours}`);
//     })
//     .then((response) => response.json())
//     .then((data) => renderCountry(data, "neighbour"))
//     .catch((err) => {
//       renderError(`Something went Wrong 💥 💥 💥 ${err.message}`);
//     })
//     .finally(() => {
//       // calls always no matter Promises is Fulfilled or Rejected
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getPosition = function () {
//   return new Promise((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition()
//   .then((pos) => {
//     const { lat, lng } = pos.coords;
//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // console.log(data);
//   })
//   .catch((err) => console.error(err));

//Using async Await

const getMyPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    const position = await getMyPosition();
    console.log(position);
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude);

    const res = await fetch(
      `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    );
    const countryData = await res.json();
    console.log(countryData);

    const result = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${countryData.prov}`
    );
    const data = await result.json();
    console.log(data);
    renderCountry(data);
  } catch (err) {
    renderError(err.message);
  }
};

// whereAmI();
btn.addEventListener("click", () => {
  whereAmI();
});
