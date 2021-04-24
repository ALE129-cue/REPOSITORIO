console.log('+-----RETO-------+');
const Vehiculo = {
    TamañodeTanque: 100,
    KilometroLitro: 2,
    RadioLlantas: 7.3,
    Color: 'verde',
    EstadoVehiculo : true,
    OpcionEncendido : 2,
    CantidadCombustible: 30,
    IndiRecorridoMetros: 0,
    IndiAceleracion: 0,
    
    recoridoGiroLlanta() {
        this.recoridoGiroLlanta = this.RadioLlantas * 2 * Math.PI;
        console.log(`La distancia recorrida es:---> ${(this.recoridoGiroLlanta/100).toFixed(3)}`);
    },
    llenarTanqueV(){
    let revisorCatidadCombustible = Math.random() * 100;
        if(revisorCatidadCombustible <= (this.TamañodeTanque - this.CantidadCombustible)){
            this.CantidadCombustible += revisorCatidadCombustible;
            console.log(`ESTADO DEL TANQUE ${this.CantidadCombustible} <<LITROS>>`);
        }
        else{
            console.log('¡TANQUE LLENO!')
        }
    },
    EncerderV(){
        switch (this.OpcionEncendido){
            case 1:
                console.log('¡ENCENDIDO(ON)...');
                break;
            case 2 :
                console.log('¡...APAGADO (OFF)!');
                break;
            default:
                console.log('¡PARA ENCERDER EL AUTO (true), PARA APAGAR (false))');         
        }
        if(!this.EstadoVehiculo){
            if(!this.CantidadCombustible >= 2){
                    this.EstadoVehiculo = false;
                    console.log('¡VEHICULO APAGADO!');
                    this.AcelerarV();
            }
    
        }else{
            console.log('¡VEHICULO ENCENDIDO!');
        }
       
    },
    ApagarV(){
        if(this.EstadoVehiculo){
            this.EstadoVehiculo = false;
            console.log('¡...APAGADO!');
        }else{
            console.log('¡ENCENDIDO...!');
        }
    } ,
    AcelerarV(){
        if(this.CantidadCombustible > 0){
            this.IndiAceleracion = Math.random() * 100 ;
            console.log(`¡ACELERANDO A..:! ${this.IndiAceleracion}>>KILOMETROS`);
            this.IndiRecorridoMetros += this.IndiAceleracion;
            console.log(`¡DISTANCIA RECORRIDA:-->! ${this.IndiRecorridoMetros}>>KILOMETROS`);
            let Consumo = this.IndiAceleracion * this.KilometroLitro
            this.CantidadCombustible -= Consumo;
            console.log(`<<LITROS CONSUMIDOS>> ${Consumo}`);
            console.log(`LITROS ACTUALES: ${this.CantidadCombustible}` );
    
        }else{
            this.ApagarV();
            console.log('¡SIN COMBUSTIBLE!'); 
          }
    }
    //Se necesita conocer cuando cuantos kilometros recorrio el vehiculo.
    
    }
    console.log('+........ATRIBUTOS..........+');
    console.table(Vehiculo);
    console.log('+.......Recorrido, con giro de la Llanta.........+');
    Vehiculo.recoridoGiroLlanta();
    console.log('+.......Llenar de combustible el Tanque.........+');
    Vehiculo.llenarTanqueV();
    console.log('+.......Encender el Vehiculo.........+');
    Vehiculo.EncerderV();
    console.log('+.......Apagar el Vehiculo.........+');
    Vehiculo.ApagarV();
    console.log('+.......Aceleracion del Vehiculo.........+');
    Vehiculo.AcelerarV();