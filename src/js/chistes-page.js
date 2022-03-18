import { obtenerChiste} from "./http-provider";

const body =document.body;

let olList, btnOtro;

const crearChistesHtml = () => {

        const html =`<h1 class="mt-5">Chistes</h1>
            <hr>
            <button class="btn btn-primary">Otro chiste</button>
        
            <ol class="mt-2 list-group">
            <li class="list-group-item">...</li>
            </ol>
        `;
        const divChistes = document.createElement('div');

        divChistes.innerHTML=html;

        body.append(divChistes);

}

const eventos=()=>{
    olList=document.querySelector('ol');
    btnOtro=document.querySelector('button');

    btnOtro.addEventListener('click', async () =>{
           const chiste= await obtenerChiste();

           dibujarChiste(chiste);
    });

}   

const dibujarChiste=(chiste)=>{
    const olItem =document.createElement('li');
    olItem.innerHTML=`<b>${chiste.id}</b>: ${chiste.value}`;
    olList.append(olItem);
    
}


export const init=() => {
    crearChistesHtml();
    eventos();
}

