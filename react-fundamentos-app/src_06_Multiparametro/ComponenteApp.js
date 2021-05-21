import React from 'react'

const persona = {
    nombre : 'Alejandro',
    apellido : 'Cuellar',
    email : 'alejocuellar@gmail.com'
}

const ComponenteApp = ({parm01, parm02, parm03 = 'SIN VALOR'}) => {
    console.log ('Component Varios parametros');
    console.log ('parametro 1:', parm01);
    console.log ('parametro 2:', parm02);
    console.log ('parametro 3:', parm03);


    return(
        <>
        <h1>Saludo desde un Funcion Componente React</h1>)
        <h5>Multiparemetros</h5>
        <hr></hr>
        <p>Parametro 01 = {parm01}</p>
        <p>Parametro 02 = {parm02}</p>
        <p>Parametro 03 = {parm03}</p>
        <hr></hr>
        
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );
}
export default ComponenteApp;
