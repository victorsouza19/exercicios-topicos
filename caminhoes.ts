// caminhões:  capacidade  de  carga,  número  de  eixos;

import { Veiculo } from './veiculo';

export class Caminhao extends Veiculo {

    // criando atributos
    private capacidadeCarga: string;
    private numEixos: string;

    

    // métodos construtores
    constructor();
    constructor(placa: string, numeroChassi: string, capacidadeCarga: string, numEixos: string, fabricante: string, modelo: string, fabricacao: number, cor: string);

    // implementando esses métodos /\
    constructor(capacidadeCarga?: any, numEixos?: any, fabricante?: any, modelo?: any, fabricacao?: any, cor?: any, placa?: any, numeroChassi?: any){

        // definindo quais atributos cada campo vai receber 
        super(fabricante, modelo, fabricacao, cor, placa, numeroChassi),
        this.capacidadeCarga = capacidadeCarga,
        this.numEixos = numEixos

    };

    
    // para criar métodos, clicar no atributo (botão direito) > refatorar > gerar getters e setters

    getcapacidadeCarga(): string {
        return this.capacidadeCarga;
    }

    setcapacidadeCarga(value: string) {
        this.capacidadeCarga = value;
    }



    getnumEixos(): string {
        return this.numEixos;
    }
    setnumEixos(value: string) {
        this.numEixos = value;
    }




    // criando o toString só pra gente poder ver o que foi atribuido
    public toString(): string{

        // buscar o método toString lá na classe veículo
        return super.toString() +
        "\nCapacidade Carga" + this.capacidadeCarga +
        "\nnumEixos" + this.numEixos
    }


};