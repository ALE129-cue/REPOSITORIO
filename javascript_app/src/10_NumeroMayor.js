console.log('+-----VALIDA EL NUMERO MAYOR-------+');
let numero;

console.log('DIGITE UN NUMERO>>>:');   

process.stdin.on('data', (data) => {        
    numero = data.toString().trim();        
    let NumAlto = 0;                        //Determina el numero mas alto

    for(let i=0; i<numero.length; i++){
        NumAlto = (NumAlto < numero[i]) ? numero[i] : NumAlto;
    }
    
    process.stdout.write(`EL NUMERO MAYOR ES: << ${NumAlto} >>`);
    process.exit();
})