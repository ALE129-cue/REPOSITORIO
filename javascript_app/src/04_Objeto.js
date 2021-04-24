console.log('+-----------------Objeto-------------------+');

const persona = {
 nombre: 'Alejandro',
 apellidoPadre: 'Cuellar',
 apellidoMadre: 'Caicedo',
 fechaNacimiento: '1999/12/22',
 direccion:{
     viaPrincipal: 'Calle',
     numeroVia: '66',
     nombreVia: 'Sur',
     placa: '89a-31',
     barrio: 'Las margaritas',
     locacion: 'Sur Occidente',
     comuna: '0'
     }, 
     /*MediasParallegar:{
         facil: 'Carro',
         dificil: 'Bus',
         Imposible: 'Avion',
     }*/
};

console.table(persona);
let otraPersona = {...persona}

otraPersona.nombre = 'Gloria'
otraPersona.apellidoMadre = 'Lozada'
otraPersona.fechaNacimiento = '1968/02/05'

console.log('+________________________+');
console.table(persona);
console.table(otraPersona);

console.log('+______________Objeto Dinamico___________________+');

const personaDinamica =  {
    nombre: 'Alejandro',
    apellidoPadre: 'Cuellar',
    apellidoMadre: 'Caicedo',
    fechaNacimiento: '1999/12/22',
    direccion:{
        viaPrincipal: 'Calle',
        numeroVia: '66',
        nombreVia: 'Sur',
        placa: '89a-31',
        barrio: 'Las margaritas',
        locacion: 'Sur Occidente',
        comuna: '0'
        }, 
 fxNombreCompleto(){

    console.log(`Mi nombre completo es ${this.nombre} ${this.apellidoPadre} ${this.apellidoMadre}`);

 },
 fxTabularAtributos(){
     console.table(this);
 }
   
   };

  // let obj = Object.create(personaDinamica)
   let obj = {...personaDinamica};
   obj.nombre = 'Gloria';
   obj.apellidoPadre = 'Caicedo';
   obj.fxNombreCompleto();
   obj.fxTabularAtributos();
   

   console.table(obj);

  console.log('+_______Ejercicio________+') 

 /*  let {...personaDinamica1}
const personaDinamica1 =  {
    nombre: 'Alejandro',
    apellidoPadre: 'Cuellar',
    apellidoMadre: 'Caicedo',
    fechaNacimiento: '1999/12/22',
    edad: '21',
    direccion:{
        viaPrincipal: 'Calle',
        numeroVia: '66',
        nombreVia: 'Sur',
        placa: '89a-31',
        barrio: 'Las margaritas',
        locacion: 'Sur Occidente',
        comuna: '0'
        }, 
 fxNombreCompleto(){

    console.log(`Mi nombre completo  & Edad es-->${this.nombre} ${this.apellidoPadre} ${this.apellidoMadre} ${this.edad}`);

 },
 fxTabularAtributos(){
     console.table(this);
 }
   
   };
   let obj = {...personaDinamica1};
   obj.nombre = 'Gloria';
   obj.apellidoPadre = 'Caicedo';
   obj.fxNombreCompleto();
   obj.fxTabularAtributos();*/
   

   console.log('+______________Fin Programa____________+')
