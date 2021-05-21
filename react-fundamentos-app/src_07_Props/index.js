import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilo 
import './index.css'

//Componete creados 
import ComponenteApp from './ComponenteApp'


const Saludo = <h1>Hola desde APP Fundamentos React</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(< ComponenteApp parm01 = '001' parm02 = 'NO HAY NAD'/> , divRoot);
