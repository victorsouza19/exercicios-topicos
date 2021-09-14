//  potência,  capacidade  de  aceleração;

import { Veiculo } from './veiculo';

export class CarroEsporte extends Veiculo {

    // criando atributos
    private potencia: number;
    private aceleracao: string;

    

    // métodos construtores
    constructor();
    constructor(placa: string, numChassi: string, potencia: number, aceleracao: string, fabricante: string, modelo: string, fabricacao: number, cor: string);

    // implementando esses métodos /\
    constructor(potencia?: any, aceleracao?: any, fabricante?: any, modelo?: any, fabricacao?: any, cor?: any, placa?: any, numChassi?: any){

        // definindo quais atributos cada campo vai receber 
        super(fabricante, modelo, fabricacao, cor, placa, numChassi),
        this.potencia = potencia,
        this.aceleracao = aceleracao

    };

    
    // para criar métodos, clicar no atributo (botão direito) > refatorar > gerar getters e setters

    getpotencia(): number {
        return this.potencia;
    }

    setpotencia(value: number) {
        this.potencia = value;
    }



    getaceleracao(): string {
        return this.aceleracao;
    }
    setaceleracao(value: string) {
        this.aceleracao = value;
    }




    // criando o toString só pra gente poder ver o que foi atribuido
    public toString(): string{

        // buscar o método toString lá na classe veículo
        return super.toString() +
        "Potência" + this.potencia +
        "Aceleração" + this.aceleracao
    }


};