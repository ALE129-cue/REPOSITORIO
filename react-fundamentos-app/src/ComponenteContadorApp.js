import React, { useState } from 'react'

console.log( 'Componete Contador o Acumulador');


const ComponenteContadorApp = ({valor_contador}) => {
    console.log('.:ComponenteContadorApp:.');

    const [contador, setContador] = useState(valor_contador);

    const funcionSUMAR = () => {
        setContador(contador + 1);
        console.log('Contador = ', contador);
    }
    const funcionREINICIAR = () => {
        setContador(valor_contador);
        console.log('Contador = ', contador);
    }
    const funcionRESTAR = () => {
        setContador(contador - 1);
        console.log('Contador = ', contador);
    }

return(
<>
            <h1>Componente Contador  React</h1>
            <h5>Acumulador de Clicks</h5>
            <hr></hr>
            <h1>Contador = {contador}</h1>
            <hr></hr>
            <button onClick={funcionSUMAR}>SUMAR +1</button>
            <button onClick={funcionREINICIAR}>.:REINICIAR:.</button>
            <button onClick={funcionRESTAR}>RESTAR -1</button>
</>
);
}
export  default ComponenteContadorApp;