console.log('+-----IDENTIFICA EL NUMERO PRIMO-------+');
let numero;
let primo;

console.log('DIGITE UN NUMERO>>>:');    

process.stdin.on('data', (data) => {       
    numero = data.toString().trim();     
    let aux = 0;

    for(let i=1; i<=parseInt(numero); i++){
        if(parseInt(numero)%i == 0) aux++;
        primo = (aux==2) ? `¡EL NUMERO << ${numero} >> ES PRIMO!` : `¡EL NUMERO << ${numero} >> NO ES PRIMO!`;
    }
    
    console.log(primo);
    process.exit();
})