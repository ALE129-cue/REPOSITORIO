console.log('+-----------------String Template-------------------+');

const apellido = 'Cuellar';
let nombre = 'Alejandro';

let variableNum = 11;

//console.log('señor'+apellido+ 'su multiplicacion es:' +(11*7));
console.log(`STRING TEMPLATE : Señor: --> ${nombre + apellido} su nombre es: ${ variableNum * 7}` );

let stringTemplate = `STRING TEMPLATE: Señor ${apellido}
Su Multiplicacion es: --> ${variableNum * 8}`;

console.log(stringTemplate);

console.log(`Llamado de una funcion desde String Template ==>> ${fx_randomico('XYZ')}` );

function fx_randomico(parmString){
return `Numero Random ${Math.random() * 100} Parametro >>>> ${parmString}`;
console.log('+_____________RETO________________+')
var val1 = 100,
    val2 = '200';
 
console.info( `The sum: ${ val1 + val2 }` ); // 100200
 
var val3 = 100,
    val4 = undefined;
 
console.info( `The sum: ${ val3 + val4 }` ); // NaN
}