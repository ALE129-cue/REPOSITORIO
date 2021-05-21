import React, { useState } from 'react'

console.log( 'Componete Contador o Acumulador');


const ComponenteContadorApp = ({valor_contador}) => {
    console.log('.:ComponenteContadorApp:.');

    const [contador, setContador] = useState(valor_contador);

const ContarClick = () => {
    setContador (contador + 1);
    console.log('Contador = ', contador);
}

return(
<>
    <h1>Contador Componete React</h1>
    <h5>Acumulador  de Click</h5>
    <hr></hr>
    <h1>Contador = {contador}</h1>
   <button  onClick={ContarClick}>Contar +1</button>
</>
);
}
export  default ComponenteContadorApp;