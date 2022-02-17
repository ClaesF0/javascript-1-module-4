// 1. create a variable and assign the end point url to it , call it randomUserUrl
const randomUserUrl = "https://randomuser.me/api/"
// 2. select the wrapper div

const wrapperDiv = document.querySelector (".wrapper")

// 3. make the API call

fetch(randomUserUrl)
    .then(function (response){
//console.log the response and convert it to JSON
        return response.json();
    })
    .then(function (jsonData){
        console.log(jsonData.results)
        const results = jsonData.results;
        for(let i = 0; i < results.length; i++) {
            console.log(results[i]);
            //we want names
            //and large image
            const firstName = results[i].name.first;
            const lastName = results[i].name.last;
            const personImg = results[i].picture.large;
            console.log (firstName);
            console.log (lastName);
            console.log (personImg);
            wrapperDiv.innerHTML += `
            <h1>${firstName} ${lastName}</h1>
            <img src="${personImg}" alt="Picture of ${firstName} + ${lastName}" title="${firstName} ${lastName}'s profile pic"/>
            `
        }
    })
    .catch(function(error){
        console.log(error)
    })

    //picture.large
    