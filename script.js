//defining variables
let operator = "";
let number1 = "";
let number2 = "";

document.addEventListener('DOMContentLoaded', function() {
    function add(x, y) {
      return x + y;
    }
    
    function subtract(x, y) {
      return x - y;
    }
    
    function multiply(x, y) {
      return x * y;
    }
    
    function divide(x, y) {
      return x / y;
    }
    
    function operate(operator, number1, number2) {
      switch (operator) {
        case "+":
          return add(number1, number2);
        case "-":
          return subtract(number1, number2);
        case "*":
          return multiply(number1, number2);
        case "/":
          return divide(number1, number2);
        default: 
          return "Unsupported Operator";
      }
    }
    
    function displayResult(result) {
      const resultElement = document.getElementById("calcdisplay");
      resultElement.textContent = result;
    }
    
    document.querySelector('#clear').addEventListener('click', function(){
      operator = '';
      number1 = '';
      number2 = '';
      displayResult('');
    });
  });  
  