import React from 'react'

const persona = {
    nombre : 'Alejandro',
    apellido : 'Cuellar',
    email : 'alejocuellar@gmail.com'
}

const ComponenteApp = () => {
    console.log ('Component con Objetos');

    return(
        <>
        <h1>Saludo desde un Funcion Componente React</h1>)
        <h5>Retorno Multilinea de un Componete</h5>
        <hr></hr>
        <p>Esta la configuracionpara un componete Multilinea</p>
        <hr></hr>
        <p>Object persona: {persona.nombre}{persona.apellido}</p>
        <p>Object persona: {persona.email}</p>
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
}
export default ComponenteApp;
