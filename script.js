let a = prompt("Enter first number");
let b = prompt("Enter second number");

	if(a!=undefined && b!=undefined)
         document.getElementById('output').innerText = parseInt(a)+parseInt(b);
	else
		document.getElementById('output').innerText = "Invalid input. Please enter a valid number.";