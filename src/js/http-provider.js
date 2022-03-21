const jokeUrl='https://api.chucknorris.io/jokes/random';

const obtenerChiste=async() =>{

    try {
        const resp=await fetch(jokeUrl);

        if (!resp.ok) throw 'No se pudo realizar la peticion';

        return await resp.json();
    } catch (error) {
        throw error;
    }

}


export{
    obtenerChiste
}
//Comprobado
//Comentario para subir