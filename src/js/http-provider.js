let page=1;
const jokeUrl='https://api.chucknorris.io/jokes/random';
const urlUsuarios = `https://reqres.in/api/users?page=${page}`;


const obtenerChiste=async() =>{

    try {
        const resp=await fetch(jokeUrl);

        if (!resp.ok) throw 'No se pudo realizar la peticion';

        return await resp.json();
    } catch (error) {
        throw error;
    }

}

const obtenerUsuarios = async() => {

    const resp = await fetch( urlUsuarios );
    const { data:usuarios } = await resp.json();

    return usuarios; 
}

export{
    obtenerChiste,
    obtenerUsuarios
}
//Comprobado
//proba 2