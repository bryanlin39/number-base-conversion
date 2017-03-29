function toDecimal(number, base) {
  var reversed = reverse(number);
  var decimal = 0
  for (var i = 0; i < reversed.length; i++) {
    decimal = decimal + reversed[i] * base ** i;
  }
  var decimalString = decimal.toString()
  return decimalString
}

function reverse(string){
    return string.split("").reverse().join("");
}

// function fromDecimal, looked up and codified
function fromDecimal(number, base) {
  var array = []
  while (number > 0) {
    array.push(number % base)
    number = (number - number % base)/base
  }
  var result = array.reverse().join("");
  return result
}

var newBaseNumber = "";
function convertBases(string, baseFrom, baseTo) {
  var decimalNumber = toDecimal(string, baseFrom)
  var newBaseNumber= fromDecimal(decimalNumber, baseTo)
  return newBaseNumber;
}

console.log(convertBases("14", 10, 3));


// function decimalToBinary, self-derived
//
// function decimalToBinary(number) {
//   var biggestFactor = Math.floor(Math.log2(number))
//   console.log(biggestFactor)
//   var binary = []
//   for (var i = biggestFactor; i >= 0 ; i = i - 1) {
//     if (number >= 2**i) {
//       binary.push("1")
//       number = number - 2**i
//     } else {
//       binary.push("0")
//     }
//   }
//   return binary
// }
