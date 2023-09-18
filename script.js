let input1 = prompt("Enter the first number:");
let input2 = prompt("Enter the second number:");

let num1 = parseFloat(input1);
let num2 = parseFloat(input2);

if (!isNaN(num1) && !isNaN(num2)) {
  let sum = num1 + num2;
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
} else if (isNaN(num1) && isNaN(num2)) {
  alert("Invalid input. Please enter valid numbers.");
} else {
  alert("Invalid input. Please enter a valid number for both inputs.");
}
