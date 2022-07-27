function isValid(inputString) {
  let brackets = {
    "}":"{",
    "]":"[",
    ")":"("
  }

  let stack = []

  for(let i=0; i<inputString.length; i++) {
    if (inputString[i] == "("
      || inputString[i] == "["
      || inputString[i] == "{")
    {
      stack.push(inputString[i])
    } else {
      if (brackets[inputString[i]] == stack[stack.length-1]) {
        stack.pop()
      } else return false
    }
  }

  if(stack.length == 0) return true
  else return false
}

const input1 = "()"
const input2 = "()[]{}"
const input3 = "(]"

console.log(isValid(input1))
console.log(isValid(input2))
console.log(isValid(input3))
