// veículos  são  armazenados  o  número  do  chassi,  o  número  da  placa,o fabricante,  o  modelo,  o  ano  de  fabricação  e  a  cor.


// criando SuperClasse
export class Veiculo {

    // criando atributos
    protected numeroChassi: string;
    protected placa: string;
    protected fabricante: string;
    protected modelo: string;
    protected fabricacao: number;
    protected cor: string;
    

    // métodos construtores
    constructor();
    constructor(numeroChassi: string, placa: string, fabricante: string, modelo: string, fabricacao: number, cor: string);

    // implementando esses métodos /\
    constructor(numeroChassi?: any, placa?: any, fabricante?: any, modelo?: any, fabricacao?: any, cor?: any){

        // definindo quais atributos cada campo vai receber 
        this.numeroChassi = numeroChassi,
        this.placa = placa,
        this.fabricante = fabricante,
        this.modelo = modelo,
        this.fabricacao = fabricacao,
        this.cor = cor;
    };

    
    // para criar métodos, clicar no atributo (botão direito) > refatorar > gerar getters e setters

    getNumChassi(): string {
        return this.numeroChassi;
    }

    setNumChassi(value: string) {
        this.numeroChassi = value;
    }



    getPlaca(): string {
        return this.placa;
    }
    setPlaca(value: string) {
        this.placa = value;
    }




    getFabricante(): string {
        return this.fabricante;
    }
    setFabricante(value: string) {
        this.fabricante = value;
    }




    getModelo(): string {
        return this.modelo;
    }
    setModelo(value: string) {
        this.modelo = value;
    }




    getFabricacao(): number {
        return this.fabricacao;
    }
    setFabricacao(value: number) {
        this.fabricacao = value;
    }




    getCor(): string {
        return this.cor;
    }
    setCor(value: string) {
        this.cor =value;
    }


    // criando o toString só pra gente poder ver o que foi atribuido
    public toString(): string{
        return "\nNum Chassi: " + this.numeroChassi +
        "\nplaca: " + this.placa +
        "\nfabricante: " + this.fabricante +
        "\nmodelo: " + this.modelo +
        "\nfabricacao" + this.fabricacao +
        "\ncor" + this.cor;
    }


};

