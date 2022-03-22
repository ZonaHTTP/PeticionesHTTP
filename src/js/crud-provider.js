
const urlCRUD = 'https://reqres.in/api/users';


const getUsuario = async (id) =>{

    const resp = await fetch(`${urlCRUD}/${id}`);

    const { data } = await resp.json();

    return data;

}

const crearUsuario = async ( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method : 'POST',
        body : JSON.stringify( usuario ),
        headers : {
            'Content-Type' : 'application/json'
        }
    } );

    return await resp.json();



}


const actualizarUsuario = async ( id, usuario ) => {

    const resp = await fetch( `${urlCRUD}/${id}`, {
        method : 'PATCH',
        body : JSON.stringify( usuario ),
        headers : {
            'Content-Type' : 'application/json'
        }
    } );

    return await resp.json();



}


const borrarUsuario = async ( id ) => {

    try{

        const resp = await fetch( `${urlCRUD}/${id}`, {
            method : 'POST'
        }) ;
    
    
        return (resp.ok) ? 'Cliente eliminado' : 'No se pudo eliminar el cliente';
    }
    catch(err){
        throw err;
    }
}


export {
    getUsuario,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario

}