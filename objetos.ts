
import { Veiculo } from './veiculo';
import { CarroEsporte } from './carrosesportes';
import { Caminhao } from './caminhoes';



//Criando objeto
let veiculo1: Veiculo = new Veiculo();

// passando valores para os atributos da classe Veiculo
veiculo1.setNumChassi('ABCDEF123');

// pegando o numero do chassi do veículo 1
// console.log( veiculo1.getNumChassi() );



// Caminhao

let caminhao1: Caminhao = new Caminhao('ABC-1234', 'abcfasodfhnsoi133242', '200kg', '6', 'Mercedez', 'C160', 2007, 'Azul');
console.log(caminhao1.toString());

let carroesporte1: CarroEsporte = new CarroEsporte();
carroesporte1.setCor('Amarelo');
carroesporte1.setFabricacao(2010);
carroesporte1.setFabricante('Volvo');
carroesporte1.setPlaca('ABC-1245');

console.log("\n" + carroesporte1.toString());
