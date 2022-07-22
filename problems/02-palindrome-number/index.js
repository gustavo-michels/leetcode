
function isPalindrome (numberInput) {
  const numberInputText = numberInput.toString()
  const numberInputTextInverted = numberInputText.split("").reverse().join("")
  if (numberInputText === numberInputTextInverted) {
    return true
  }
  return false
}

const numberInput1 = 121
console.log(isPalindrome(numberInput1))

const numberInput2 = -121
console.log(isPalindrome(numberInput2))

const numberInput3 = 10
console.log(isPalindrome(numberInput3))
