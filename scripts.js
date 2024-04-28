let inputValue = document.getElementById("text-input")
const checkButton = document.getElementById("check-btn")
let result = document.getElementById("result")

checkButton.addEventListener("click", () => {
  if (inputValue.value == "") {
    alert("Please input a value")
  } else {
    checkIt(inputValue.value)
  }

  // else if(inputValue.value == "A"){
  //   result.innerText = "A is a palindrome";
  // }else if(inputValue.value == "eye"){
  //   result.innerText = "eye is a palindrome";
  // }
})

const checkIt = (inputed) => {
  let Result
  let splited = inputed.split("")
  console.log(splited + "   splited")
  let reversed = splited.reverse()
  console.log(reversed + "    reversed")
  let joined = reversed
    .join("")
    .match(/[a-z0-9]/gi)
    .join("")
    .toLowerCase()
  console.log(joined + "    joined")

  //---
  console.log(inputed + "     input")
  let refInput1 = inputed.replace(/(^_)/gi, "")
  console.log(refInput1 + "     refined input")
  let refInput = refInput1
    .replace(/[.,\s]/g, "")
    .toLowerCase()
    .match(/[a-z0-9+]/g)
    .join("")
  console.log(refInput + "     refined input")
  if (joined === refInput) {
    Result = `${inputed} is a palindrome`
    result.innerText = Result
  } else {
    Result = `${inputed} is not a palindrome`
    result.innerText = Result
  }
  return Result
}

// let text = "_eyge";
// let textRegex = /[a-z]/ig;
// let insult = text.match(textRegex);
// console.log(insult);
