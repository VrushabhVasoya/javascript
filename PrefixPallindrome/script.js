let s = "codesignal";

const isPallindrome = (str) => {
  return str === str.split("").reverse().join("");
};

const palindromeCutting = (str) => {
  let maxLength = 0;
  let maxPallinString = "";
  for (let i = 2; i < str.length; i++) {
    let subString = str.substring(0, i + 1);
    console.log(subString, 13, i);
    for (let j = subString.length; j >= 0; j--) {
      let sub_subString = subString.substring(0, j);
      if (sub_subString.length <= 1) continue;

      if (isPallindrome(sub_subString)) {
        if (sub_subString.length >= maxLength) {
          maxLength = sub_subString.length;
          maxPallinString = sub_subString;
        }
      }
    }
    str =
      maxPallinString != "" && maxLength != 0
        ? str.substring(maxPallinString.length, str.length)
        : str;
    maxLength = 0;
    maxPallinString = "";
    if (str === "") break;
    console.log(str);
  }
  console.log(`String With remove Pallindrome : ${str}`);
};

palindromeCutting(s);
