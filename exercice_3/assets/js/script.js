// let firstNumber = document.getElementById("formFirstNumber");
// let secondNumber = document.getElementById("formSecondNumber");

// function formNumber() {
//     let result = firstNumber.value * secondNumber.value;
//     alert(result);
// };


// with arrow function :

let firstNumber = document.getElementById("formFirstNumber");
let secondNumber = document.getElementById("formSecondNumber");

let formNumber = () => {
    let result = firstNumber.value * secondNumber.value;
    alert(result);
};

// ou

// let formNumber = () => {
//      alert(firstNumber.value * secondNumber.value);
// };

