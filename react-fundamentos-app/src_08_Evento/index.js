import React from 'react';
import ReactDOM from 'react-dom';

//Hoja de estilo 
import './index.css'

//Componete creados 
import ComponenteEventoApp from './ComponenteEventoApp'


const Saludo = <h1>Hola desde APP Fundamentos React</h1>;
const divRoot = document.querySelector('#root');

ReactDOM.render(<ComponenteEventoApp/> , divRoot);
