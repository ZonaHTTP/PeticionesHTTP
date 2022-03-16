const jokeUrl ='https://api.chucknorris.io/jokes/random';

// fetch(jokeUrl).then(resp => {
//     console.log(resp);
//     resp.json().then (data=>{
//         console.log(data);
//     })
// })

fetch(jokeUrl)
    .then(resp => resp.json())
    .then(data => console.log(data.value));