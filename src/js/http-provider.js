const jokeUrl='https://api.chuknorris.io/jokes/random';
const obtenerChiste = async () => {
    try{
    const resp = await fetch (jokeUrl);
    if(!resp.ok) return alert ('No se puedo realizar la petición');
    const chiste = await resp.json();
    }catch (err){
        throw err;
    }
    return chiste;
} 

export {
    obtenerChiste
}


