//when i click the button the circle background color to change
//i want when i refresh the circle keeps blue

//1. select the circle by class .circle 
//2. selecte the BTN by its id #circleBTN

const circle = document.querySelector(".circle");
const circleActionBtn = document.querySelector("#circleBTN");

//3. I want when button clicked show a message

/*
circleActionBtn.addEventListener("click", function(){
    localStorage.setItem("bgColor","blue")
    console.log("hei knapp ble klikket");
*/
//get the bgColor and changes my circle color
const bgColor = localStorage.getItem("bgColor")
console.log("bgColor: ", bgColor);
circle.style.backgroundColor = bgColor;

circleActionBtn.addEventListener("click", function (){
    //we are setting the color on a localStorage
    localStorage.setItem("bgColor","blue");
    // 4. I want to change the background colorof the circle to blue
    circle.style.backgroundColor = "blue";
})

//4. I want to change the background color of the circle to blue



// LOCAL STORAGE localStorage
//1. localStorage
localStorage.setItem("name","Hesh");
//create a var
const name = localStorage.getItem("name"); //with only the key
console.log("the name is: ", name)