const jokeUrl ='https://api.chucknorris.io/jokes/random';

// fetch(jokeurl).then(resp => {
//     resp.json().then (data=>{
//         console.log(data.value);
//     })
//})

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(data=>console.log(data.value));

//push