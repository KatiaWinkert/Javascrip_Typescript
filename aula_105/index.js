// Classe é molde que cria objetos
class ControleRemoto {
    constructor(tv) {
        this.tv = tv; 
        this.volume = 0 ;         
    }

    
    //metodos > metodos de instancia 
    aumentarVolume() {
        this.volume += 2; 
    }

    diminuirVolume() {
        this.volume -= 2;
    }

    // metodo estatico; 
    static soma (x, y ) {

        return x + y;
    }

}


const controle1 = new ControleRemoto ('LG'); 
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1)

console.log(ControleRemoto.soma(3, 5));
 

// metodos estaticos são metodos que estão em referencia
//apenas a Classe e nao as instancias da classe. 
// para que o metodo estatico seja usado antes de iniciar o metodo se coloca a 
// palavra > Static , esse medo voce somente consegue acessar ele pela classe
//  ex: ContorleRemoto.trocaPilha (); 



