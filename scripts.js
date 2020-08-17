let theScreen = document.getElementById('screen')
let clearBtn = document.getElementById('clear')

function displayNum(n1){
parseInt(n1)
theScreen.innerText = theScreen.innerText + n1
}
function displayOperation(operation){
    theScreen.innerText = theScreen.innerText + operation
}
function displayValue(){
    theScreen.innerText = (eval(theScreen.innerText))
  
}
function clearScreen(){
     theScreen.innerText = ''
 }  
















// displayNum(n1)
// // EQUAL SIGN
// function equalsSign(){
//     getResult()
// }
// function getResult(){
//     switch
//       case: +
//       return n1+n1


// }