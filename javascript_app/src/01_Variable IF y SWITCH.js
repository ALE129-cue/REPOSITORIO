//Variable y Constantes
console.log('Alacance de Variable');

var variableGlobal = 'Variable de alcance Global';
const varConstante = 'Constante durante ejecucion';
let varLetLocal = 'ABC';
let varLetnumeroc = '1112';

console.log('Variable Global 1.'+variableGlobal);
console.log('Constante =  '+varConstante);


{
    variableGlobal = 'otro valor';
    console.log('Variable Global 2.'+variableGlobal);
    let varLetLocal = 'XYZ';
    console.log('LetLocal:' +varLetLocal);
}
console.log('letLocal' +varLetLocal)
console.log('+-----------------EVALUACION-----------------------+');
let evaluacionIF = true;
if (evaluacionIF){
    
    console.log('Adentro del IF');
    let letNumeroY = 11;
    let letNumeroX = 76;

    console.log('Operacion * = '+(letNumeroX * letNumeroY));

}else{
    console.log('Estamos en el ELSE de if');
}
console.log('+--------------SELECTOR--------------------------+');
 let letKey = 3;
switch(letKey){
case 1:
    console.log('Caso para 1');
    break;
case 2:
        console.log('Caso para 2');
        break;   
 case 3:
            console.log('Caso para 3');
            break; 
    default:
        console.log('Valor no determinado en el selector');
        break;

}
 

 
/*

switch(key){

    case value:
        break;

        default:
            break;
}
while(false){

}
do {


}while(true);

for (let index = 0; index < array.length; index++){
    cons element =array[index];
}

array.forEach(element =>{

});

try{

}*/