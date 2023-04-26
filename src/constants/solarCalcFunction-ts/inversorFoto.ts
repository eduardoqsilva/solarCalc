class InversorFotovoltaico {
    modelo: string;
    tensaoMaxima: number;
    tensaoMinima: number;
    correnteMaxima: number;
    eficienciaMedia: number;
    potenciaMaximaEntradaCC: number;

    constructor(modelo: string, tensaoMaxima: number, tensaoMinima: number, correnteMaxima: number, eficienciaMedia: number, potenciaMaximaEntradaCC: number) {
        this.modelo = modelo;
        this.tensaoMaxima = tensaoMaxima;
        this.tensaoMinima = tensaoMinima;
        this.correnteMaxima = correnteMaxima;
        this.eficienciaMedia = eficienciaMedia;
        this.potenciaMaximaEntradaCC = potenciaMaximaEntradaCC;
    }

    getEficiencia(): number {
        return this.eficienciaMedia;
    }

    getPotenciaMaximaEntrada(): number {
        return this.potenciaMaximaEntradaCC;
    }

    getCorrenteMaxima(): number {
        return this.correnteMaxima;
    }

    getTensaoMaxima(): number {
        return this.tensaoMaxima;
    }

    getTensaoMinima(): number {
        return this.tensaoMinima;
    }
}

const inversor1 = new InversorFotovoltaico("BBPower 1.6kW", 500, 120, 14, 97.0, 1700);
const inversor2 = new InversorFotovoltaico("BBPower 3kW", 500, 210, 15, 97.2, 3150);
const inversor3 = new InversorFotovoltaico("BBPower 5kW", 500, 175, 15, 97.5, 5200);
const inversor4 = new InversorFotovoltaico("BBPower 12kW", 800, 380, 20, 98, 12250);
const inversor5 = new InversorFotovoltaico("BBPower 20kW", 800, 500, 20, 97.5, 20500);

export default {
    inversor1,
    inversor2,
    inversor3,
    inversor4,
    inversor5
};
