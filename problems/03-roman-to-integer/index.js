const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}

function romanToInt(numberToConvert) {
  let accumulator = 0;

  for(let i = 0; i < numberToConvert.length; i++) {
    if (numberToConvert[i] === "I" && numberToConvert[i + 1] === "V") {
      accumulator += 4;
      i++;
    } else if (numberToConvert[i] === "I" && numberToConvert[i + 1] === "X") {
      accumulator += 9;
      i++;
    } else if (numberToConvert[i] === "X" && numberToConvert[i + 1] === "L") {
      accumulator += 40;
      i++;
    } else if (numberToConvert[i] === "X" && numberToConvert[i + 1] === "C") {
      accumulator += 90;
      i++;
    } else if (numberToConvert[i] === "C" && numberToConvert[i + 1] === "D") {
      accumulator += 400;
      i++;
    } else if (numberToConvert[i] === "C" && numberToConvert[i + 1] === "M") {
      accumulator += 900;
      i++;
    } else {
      accumulator += romanHash[numberToConvert[i]]
    }
  }
  return accumulator
}

const numberToConvert1 = "III";
const numberToConvert2 = "LVIII";
const numberToConvert3 = "MCMXCIV";

console.log(romanToInt(numberToConvert1))
console.log(romanToInt(numberToConvert2))
console.log(romanToInt(numberToConvert3))
