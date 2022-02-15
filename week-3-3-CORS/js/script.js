/*
const url = "https://elephant-api.herokuapp.com/elephants";
const proxy = "https://noroffcors.herokuapp.com/";

const corsFix = proxy + url;

const resultsContainer = document.querySelector(".results");


async function makeApiCall() {
    try {
        const response = await fetch(corsFix);

        const results = await response.json();

        console.log(results);

    } catch (error) {
        console.log(error);
        resultsContainer.innerHTML = alert("error", error);
    }
}
*/
//makeApiCall();

/* 
create a folder and call it cors
create another folder and call it js
create a script file .js empty file
create an empty handlers folder
add alert.js script empty file
create your index.html
make sure you have the scripts linked in your index.html
*/

const resultsContainer = document.querySelector(".results");

const url = "https://elephant-api.herokuapp.com/elephants";
//my proxy server
const proxy = "https://noroffcors.herokuapp.com/";


const corsFixUrl = proxy + url;

async function makeApiCall(){
    try {
            const response = await fetch(corsFixUrl);
            //convert the response to be JSON data
            const elephantsData = await response.json();
            console.log(elephantsData);
            resultsContainer.innerHTML = alert ("success", "hey API was success")

    } catch(error){
        console.log(e)
        resultsContainer.innerHTML = alert("error", e);
    }
}

makeApiCall().then();