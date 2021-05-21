import React from 'react'

console.log( 'Componete Capturador de eventos en pantalla');


const ComponenteEventoApp = () => {
    console.log('.:ComponenteEventoApp:.');

const eventoClick = (e) => {
    console.log(e);
}

return(
<>
    <h1>Evento de Componete React</h1>
    <h5>Capturado Evento de Click</h5>
    <hr></hr>
   <button  onClick={eventoClick}>Click Aqui!</button>
</>
);
}
export  default ComponenteEventoApp;