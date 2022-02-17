// 1. select input with ID firstname
const firstName = document.querySelector("#firstName");
const errorContainerMessage = document.querySelector(".error__message") 
const errorContainerSVG = document.getElementById("error-icon");

// 2. add an event to the input which should be keyup or onkeyup
//write a name, a dot, and what you want to track (f.eks keyup eller onkeyup)
firstName.addEventListener("keyup", logLengthMsg);

//3. get the length of the input
//create the function

function logLengthMsg (event) {
    console.log("here");
    // get the value of the input
    const inputValue = event.target.value.trim();
    console.log("inputValue: ", inputValue);
    const valueLength = inputValue.length;
    console.log("valueLength: ", valueLength)
    if (valueLength > 0) {
        console.log("the input has a value")
        errorContainerMessage.innerHTML = "the input has a value";
        errorContainerSVG.style.display = "block";
    } else {
        console.log("the input doesnt have a value")
        errorContainerMessage.innerHTML = "the input doesnt have a value";
        errorContainerSVG.style.display = "block";
    }
}

//4. make a condition ->
//if the length is greater than zero, then show message "the input has a value"
//else
//show a message "the input does not have a value"


