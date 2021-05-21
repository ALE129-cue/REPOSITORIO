import React from 'react'
import PropTypes from 'prop-types'

const persona = {
    nombre : 'Alejandro',
    apellido : 'Cuellar',
    email : 'alejocuellar@gmail.com'
}

const ComponenteApp = (props) => {
    console.log ('Component parametros Props');
    console.log ('parametro 1:', props.parm01);
    console.log ('parametro 2:', props.parm02);
    console.log ('parametro 3:', props.parm03);


    return(
        <>
        <h1>Saludo desde un Funcion Componente React</h1>)
        <h5>Multiparemetros props.</h5>
        <hr></hr>
        <p>Parametro 01 = {props.parm01}</p>
        <p>Parametro 02 = {props.parm02}</p>
        <p>Parametro 03 = {props.parm03}</p>
        <hr></hr>
        
        <p>{JSON.stringify(persona, null, null)}</p>
        </>
    );

}
ComponenteApp.defaultProps = {
    parm03: 'SIN VALORES...'
}
export default ComponenteApp;
