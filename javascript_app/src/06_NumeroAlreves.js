console.log('+-----IMPRIME LOS NUMEROS AL REVES-------+');
let numero;

console.log('DIGITE UN NUMERO>>>:');
process.stdin.on('data', (data) => {       
    numero = data.toString().trim();       
    let numero_Alreves = '';

    for(let i=(numero.length-1); i>=0; i--){   
        numero_Alreves += numero[i];         
    }

    parseInt(numero_Alreves, 10)
    
    console.log(`NUMERO AL REVES>>>: ${numero_Alreves}`);
    process.exit();
})