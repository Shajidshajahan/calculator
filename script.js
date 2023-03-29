//1 display number in the text box

function display(num) {
    result.value += num
}
//2 clear text box
function clearBox() {
    result.value ="";
}
//evaluate experation
function evaluateExp() {
  //method 1
  
    exp=result.value
    output=eval(exp)
    result.value=output

  //method 2
//   result.value=eval(result.value)
    
}
//3 remove last iteam from the text

function removeLast() {
    currentExp=result.value
    result.value=currentExp.slice(0,-1)
    
}