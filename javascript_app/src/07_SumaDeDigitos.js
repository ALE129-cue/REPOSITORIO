console.log('+-----SUMA LOS DIGITOS QUE SE LE INDIQUEN-------+');
let numero;


console.log('DIGITE UN VALOR-->')
process.stdin.on('data', (data) => {        
    numero = data.toString().trim();        
    let suma = 0;

    for(let i=0; i<numero.length; i++){
        suma += parseInt(numero[i], 10);   
    }
    
    console.log(`LA SUMA ES: ${suma}`);
    process.exit();
})