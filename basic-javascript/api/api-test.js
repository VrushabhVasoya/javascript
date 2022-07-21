const fs = require("fs");

let arr = () => {
  fetch("https://ghibliapi.herokuapp.com/films")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.sort((a, b) => a.rt_score - b.rt_score);
      console.log(data);
      fs.writeFileSync("read.txt", data);
      for (let x in data) {
        document.write(
          ` <br><b>Movie Name :</b> ${data[x].title}<br><b> Producer:</b> ${data[x].producer}  <br>`
        );
      }
    });
};

// let data_string = JSON.stringify(data);
// let file = new Blob([data_string], { type: "text" });
// let anchor = document.createElement("a");
// anchor.href = URL.createObjectURL(file);
// anchor.download = "save.txt";
// anchor.click();
