const jokeUrl='https://api.chuknorris.io/jokes/random';
const obtenerChiste = async () => {
    const resp = await fetch (jokeUrl);

    if(!resp.ok) return alert ('No se puedo realizar la petición');
    const chiste = await resp.json();
    
    return chiste;
}

export {
    obtenerChiste
}


