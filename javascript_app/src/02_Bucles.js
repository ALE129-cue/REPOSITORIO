console.log('+-----------------BUCLES-------------------+');

let limiteBucle = 10;
let contador = 0;
console.log('+ Bucle Do While');


do{

    contador ++;
    console.log('contador: '+contador);
}while(contador < limiteBucle); 


let LetCondicion = true; 
while(LetCondicion){
let letRandom = Math.random() * 10;
console.log('Numero Randomico: '+letRandom);
if(letRandom > 5){
    letCondicion = false;
    console.log('Salida del Bucle'+LetCondicion);
}

}

console.log('+_____Buecle con For_____+');
for (let i = 0; i < 20; i++) {
    let count = 0;
    for (let j = 0; j < Math.floor(Math.random() * 20); j++) {
        count++;
    }
    console.log(count);
}