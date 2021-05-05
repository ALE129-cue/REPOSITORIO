console.log('+-----VALIDA SI EL NUMERO ES CAPICUA-------+');
let numero;

console.log('DIGITE EL NUMERO-->'); 

process.stdin.on('data', (data) => {       
    numero = data.toString().trim();        
    let Izquirda = 0;                           // Valida por la Izquirda
    let Derecha = numero.length -1;           // Valida por la Derecha
    let medio = parseInt(Derecha /2);          // Encuentra el medio

    while(numero[Izquirda] == numero[Derecha]){   
        if(medio == Izquirda){
             console.log("¡ES NUMERO CAPICUA!")
             break;
        }
        Derecha--;
        Izquirda++;
    }
    if(medio != Izquirda)
    console.log("¡NO ES NUMERO CAPICUA!")

    process.exit();
})