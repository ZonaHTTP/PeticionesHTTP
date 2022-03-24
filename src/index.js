// import { init } from './js/usuarios-page';
// import { obtenerChiste } from "./src/js/http-provider.js";
import * as CRUD from './js/crud-provider';
// obtenerChiste().then(console.log);
// init();
CRUD.getUsuario( 2 ).then (console.log);

CRUD.crearUsuario({
    name:"Antón",
    job:"Programador e deseñador de blogs"
});
CRUD.actualizarUsuario(1,{
    name:"Antón Vega"
});
CRUD.borrarUsuario(1).then(console.log);