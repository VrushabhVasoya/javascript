let id = "no";
window.onload = () => {
  selectData();
};
const manageData = () => {
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      job: job,
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
    });
  // console.log(data);

  if (name == "") {
    alert("enter the blank");
  } else {
    if (id == "no") {
      let arr = getCrudData();
      if (arr == null) {
        let data = [{ name: name, job: job }];
        setCrudData(data);
        console.log(data);
      } else {
        arr.push({ name: name, job: job });
        setCrudData(arr);
        console.log(arr);
      }
    } else {
      let arr = getCrudData();
      arr[id] = [name, job];

      setCrudData(arr);
    }
    document.getElementById("name").value = "";
    document.getElementById("job").value = "";
    selectData();
  }
};
const selectData = () => {
  let arr = getCrudData();
  if (arr != null) {
    let html = "";
    let sno = 1;
    for (let k in arr) {
      html =
        html +
        `<tr><td>${sno}</td><td>${arr[k].name}</td><td>${arr[k].job}</td><td><a href="javascript:void(0)" onclick="editData(${k.name})">Edit</a>&nbsp;<a href="javascript:void(0)" onclick="deleteData(${k})">Delete</a></td></tr>`;
      sno++;
    }
    document.getElementById("root").innerHTML = html;
  }
};
const editData = (rid) => {
  //   debugger;
  id = rid;
  let arr = getCrudData();
  document.getElementById("name", "job").value = {
    name: arr[rid].name,
    job: arr[rid].job,
  };
  //   document.getElementById("job").value = arr[id];
  console.log(arr[rid]);
};
const deleteData = (rid) => {
  let arr = getCrudData();
  arr.splice(rid, 1);
  setCrudData(arr);
  selectData();
};
function getCrudData() {
  let arr = JSON.parse(localStorage.getItem("crud"));
  return arr;
}

function setCrudData(arr) {
  localStorage.setItem("crud", JSON.stringify(arr));
}
