"use strict";

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class WorkOut {
  date = new Date();
  id = (Date.now() + "").slice(-10);
  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; //in km
    this.duration = duration; //in minutes
  }

  _setDescription() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends WorkOut {
  type = "running";
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends WorkOut {
  type = "cycling";
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    // km/hours
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([1, -2], 5.2, 24, 178);
// const cycle1 = new Cycling([1, -2], 27, 95, 523);
// console.log(run1);
// console.log(cycle1);

class App {
  #map;
  #mapEvent;
  #workouts = [];
  constructor() {
    //Get User's Position
    this._getPosition();

    // Get Local Storage Data
    this._getLocalStorage();

    form.addEventListener("submit", this._newWorkOut.bind(this));
    inputType.addEventListener("change", this._toggleElevationField);
    containerWorkouts.addEventListener("click", this._movetoPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert("Couldn't get your Position...");
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];
    //("map") is id of div element wherw we wnat to show map
    this.#map = L.map("map").setView(coords, 15);

    L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    L.marker(coords)
      .addTo(this.#map)
      .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
      .openPopup();

    this.#map.on("click", this._showForm.bind(this));

    this.#workouts.forEach((work) => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove("hidden");
    inputDistance.focus();
  }

  _toggleElevationField() {
    inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
    inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
  }
  _hideForm() {
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        "";

    // form.style.display = "none";
    form.classList.add("hidden");
  }

  _newWorkOut(e) {
    const validInputs = (...inputs) => {
      return inputs.every((input) => Number.isFinite(input));
    };

    const isPositiveNumbers = (...inputs) => {
      return inputs.every((input) => input > 0);
    };
    e.preventDefault();
    const { lat, lng } = this.#mapEvent.latlng;

    //GEt Data from Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    let workout;

    //If WorkOut is Running,Create Running Object
    if (type === "running") {
      const cadence = +inputCadence.value;
      console.log(distance, duration, cadence);

      //Check Data is Valid or not

      if (
        !validInputs(distance, duration, cadence) ||
        !isPositiveNumbers(distance, duration, cadence)
      ) {
        return alert("Input Should be Positive Numbers.");
      }

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    //If WorkOut is Cycling,Create Cycling Object
    if (type === "cycling") {
      const elevationGain = +inputElevation.value;

      //Check Data is Valid or not
      if (
        !validInputs(distance, duration, elevationGain) ||
        !isPositiveNumbers(distance, duration)
      ) {
        return alert("Input Should be Positive Numbers.");
      }

      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }

    //Add new Object to WorkOut array
    this.#workouts.push(workout);
    console.log(workout);

    //Render WorkOut on Map as Marker
    this._renderWorkoutMarker(workout);

    //render workout in list
    this._rendorWorkoutList(workout);

    //Hide form + clear input Fields
    this._hideForm();

    //set on LocalStorages

    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === "running" ? "🏃" : "🚴"} ${workout.description}`
      )
      .openPopup();
  }

  _rendorWorkoutList(workout) {
    let html = `<li class="workout workout--${workout.type}" data-id="${
      workout.id
    }">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">${
              workout.type === "running" ? "🏃" : "🚴"
            }</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>`;

    if (workout.type === "running") {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;
    }
    if (workout.type === "cycling") {
      html += `<div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;
    }

    form.insertAdjacentHTML("afterend", html);
  }

  _movetoPopup(e) {
    const workoutEl = e.target.closest(".workout");
    if (!workoutEl) {
      return;
    }

    const workout = this.#workouts.find(
      (work) => work.id === workoutEl.dataset.id
    );

    console.log(workout);
    this.#map.setView(workout.coords, 15, {
      animation: true,
      pan: { duration: 1 },
    });
  }

  _setLocalStorage() {
    localStorage.setItem("workouts", JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem("workouts"));
    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach((work) => {
      this._rendorWorkoutList(work);
    });
  }

  _resetLocalStorage() {
    localStorage.removeItem("workouts");
    location.reload();
  }
}

const app = new App();
