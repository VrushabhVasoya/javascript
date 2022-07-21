const myFunc = () => {
  let name = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  fetch("https://reqres.in/api/users", {
    method: "POST",
    body: JSON.stringify({
      name: name,
      email: email,
      id: id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      let store = new Array();
      store = JSON.parse(localStorage.getItem("users"))
        ? JSON.parse(localStorage.getItem("users"))
        : [];
      store.push({
        name: data.name,
        email: data.email,
        id: data.id,
      });
      localStorage.setItem("users", JSON.stringify(store));
      window.location.href = "index.html";
    });
};
let getData = () => {
  let store = JSON.parse(localStorage.getItem("users"));
  return store;
};
console.log(getData());
