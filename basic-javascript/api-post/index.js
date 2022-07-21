window.onload = () => {
  const tbody = document.getElementById("tb");
  // const raw = document.getElementById("raw");
  // const job = document.getElementById("job");
  // console.log(tbody, raw, job);
  let score = localStorage.getItem("user");
  let scr = JSON.parse(score);
  console.log(scr);
  if (scr === null) {
    table.style.display = "none";
  }

  scr.map((data) => {
    let tr = document.createElement("tr");
    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        let td = document.createElement("td");
        td.innerHTML = `${data[key]}`;
        tr.appendChild(td);
      }
    }

    console.log(tbody);
    tbody.appendChild(tr);
    console.log(tr);
  });
};

let selector = null;
const myFunc = () => {
  if (selector == null) {
    data();
  } else {
    update();
    // selector = null;
  }
};
const data = () => {
  let name = document.getElementById("name").value.trim();
  let job = document.getElementById("job").value.trim();
  if (name === "") {
    alert("name cannot be blank");
    return false;
  } else if (!isNaN(name)) {
    alert("name is not a number");
    return false;
  } else if (job === "") {
    alert("password cannot be blank");
    return false;
  } else if (!isNaN(job)) {
    alert("job is not a number");
    return false;
  }

  document.getElementById("table").style.display = "block";
  let table = document.getElementById("table");
  let row = table.insertRow(-1);
  let nm = row.insertCell(0);
  let jb = row.insertCell(1);
  let up = row.insertCell(2);
  nm.innerHTML = document.getElementById("name").value;
  jb.innerHTML = document.getElementById("job").value;
  up.innerHTML = `<button id="edit" onClick="edit(this)">Edit</button>`;

  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      job: job,
      // update: update,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);

      let record = new Array();
      record = JSON.parse(localStorage.getItem("user"))
        ? JSON.parse(localStorage.getItem("user"))
        : [];
      record.push({
        name: data.name,
        job: data.job,
      });
      localStorage.setItem("user", JSON.stringify(record));
      return edit(record);
      // console.log(record);
    });
  document.getElementById("name").value = "";
  document.getElementById("job").value = "";
};
const edit = (e) => {
  selector = e.parentElement.parentElement;
  // console.log(selector);
  document.getElementById("name").value = selector.cells[0].innerHTML;
  document.getElementById("job").value = selector.cells[1].innerHTML;
  return selector;
};
const update = (selector) => {
  localStorage.setItem("user", JSON.stringify(selector));
  selector.cells[0].innerHTML = document.getElementById("name").value;
  selector.cells[1].innerHTML = document.getElementById("job").value;
};
