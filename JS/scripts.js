function calculateTip() {
//Get the value the user inputs (bill amount, service quality, number of people splitting the bill)
var billAmount = document.getElementById("billAmt").value;
console.log(billAmount);

var serviceQuality = document.getElementById("serviceQual").value;
console.log(serviceQuality);

var numberOfPeople = document.getElementById("numPeople").value;
console.log(numberOfPeople);

//Validate their input (to make sure what they input is usable)
//Bill Amount - Word, Negative values, Empty String

var amount = Number(billAmount); //Try to turn the value of billAmount into a number

if (isNaN(amount) || amount <= 0) {
    //If amount can't be converted into a number or is less than or equal to 0, show an error
    alert("Invalid input of bill amount.");
    return; //Return to exit the function if the bill amount is invalid
}

//If we make it here, the amount is good

//Service Selector - Not Choosing an option

var service = Number(serviceQuality); //Convert serviceQuality into a number

if (service === 0) {
    alert("You must pick an option for service quality.");
    return;
}

//Number of People - Word, Negative values, Epmty String, Decimal values

var people = Number(numberOfPeople);

if (isNaN(people) || people < 1) {
    alert("Enter a valid number of people splitting the bill.");
    return;
}

//Calculate the amount if tip each person needs to pay

var tipPerPerson = (amount * service) / people

tipPerPerson = tipPerPerson.toFixed(2); //Round the tip per person to 2 decimal places

console.log(tipPerPerson);

//Display that information to the user

document.getElementById("tipAmount").style.display = "block"; //Display the hidden tipAmount div when we're ready to show the calculated tip
document.getElementById("tip").innerText = tipPerPerson;
}

//Function that is executed when the button is clicked
//We are passing an anoymous function (a function without a name to the button's onclick handler when it's clikced)
document.getElementById("calculateTip").onclick = function() {
    calculateTip();
}