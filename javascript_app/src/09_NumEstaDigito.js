console.log('+-----VALIDA SI EL DIGITO ESTA DENTRO DEL NUMERO-------+');
let pregunta = ['DIGITE UN NUMERO-->', 'INDIQUE UN DIGITO-->'];
let numero = [];
let resultado

const Pregunta = (i)  => {
    console.log(pregunta[i]);     
}

process.stdin.on('data', (data) => {        
    numero.push(data.toString().trim())    
    if(numero.length < pregunta.length){
        Pregunta(numero.length)
    }
    else {
        find_character(numero[0], numero[1]);
        process.exit();                  
    }
})

const find_character = (num, find) => {
    resultado = num.indexOf(find)           
    if(resultado != -1){
        console.log(`¡EL DIGITO ESTA EN :! ${resultado} POSICIÒN`);
    }
    else console.log('¡EL DIGITO NO ESTA<<>>!');
}

Pregunta(0);