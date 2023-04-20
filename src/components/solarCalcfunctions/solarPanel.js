class PainelSolar {
    constructor(modelo, potPico, voc, vmpp, correnteNominal, isc, tempVoc, tempPmax, tempIsc, noct, comprimento, largura, area, areaInstalacao) {
        this.modelo = modelo;
        /*** Potência pico do módulo fotovoltáico(W) */
        this.potPico = potPico;
        /*** Tensão em circuito aberto do módulo Fotovoltáico(A) */
        this.voc = voc;
        /*** Tensão em máxima potência do módulo fotovoltáico(A) */
        this.vmpp = vmpp;
        /*** Corrente nominal(A) */
        this.correnteNominal = correnteNominal;
        /*** Corrente de Curto Circuito do módulo fotovoltáico(A) */
        this.isc = isc;
        /*** Coeficiente de temperatura de Voc ( %/grau Celsius ) */
        this.tempVoc = tempVoc;
        /*** Coeficiente de temperatura de Pmax ( %/grau Celsius ) */
        this.tempPmax = tempPmax;
        /*** Coeficiente de temperatura de Isc ( %/grau Celsius ) */
        this.tempIsc = tempIsc;
        /*** NOCT */
        this.noct = noct;
        /*** Comprimento(m) */
        this.comprimento = comprimento;
        /*** largura(m) */
        this.largura = largura;
        /*** Area(m²) */
        this.area = area;
        /*** Area de Instalação(m²) */
        this.areaInstalacao = areaInstalacao;
    }
    /*** Potência Corrigida em função da temperatura */
    calcularPotenciaCorrigida(temperatura, perdasDC) {
        /*** Intervalo de valores de perdas  */
        if (perdasDC >= 0 && perdasDC <= 1) {
        } else {
            perdasDC = 0.10;
        }
        /*** Perdas em % */
        const perdas = perdasDC;
        /*** Radiação solar média ao longo do dia todo */
        const radiacaoSolar = 1000;
        /*** Temperatura da Celula fotovoltaica */
        const tempCelula = temperatura + radiacaoSolar * ((this.noct - 20) / 800 * 0.9);
        //console.log(tempCelula)
        /*** Potência Corrigida */
        const potCorrigida = this.potPico * (1 - (this.tempPmax / 100 * (-1)) * (tempCelula - 25));
        return (potCorrigida * (1 - perdas)).toFixed(3);
    }


    calculaPotSaidaInversor(potCorrigida, rendimentoInversor, qtdPaineis) {
        /*** Potência na saída do inversor considerando o rendimento. Para 1 painel (USADA PARA CALCULAR A QTD DE PAINÉIS) (W) */
        const potRendimentoInversor = (potCorrigida * (rendimentoInversor / 100)).toFixed(3);
        /*** Potência gerada pela quantidade escolhida de painéis (na saída do inversor considerando perdas) (kW) */
        const potTotal = qtdPaineis * potRendimentoInversor / 1000;
        return potTotal;
    }

    calculoEnergiaGeradaMensal (diasMes,irradiacaoSolar,fatorDeCorrecao,potenciaTotalSistema){
        const f = fatorDeCorrecao || 0.98;
        return (diasMes*irradiacaoSolar*f*potenciaTotalSistema).toFixed(3);
    }

}


const painel270w = new PainelSolar("Canadian Risen 270w", 270, 38.2, 31.2, 8.67, 9.2, -0.33, -0.39, 0.033, 45, 1.64, 0.99, 1.63, 1.79);
const painel330w = new PainelSolar("Canadian Risen 330w", 330, 46.3, 38.1, 8.7, 9.25, -0.32, -0.40, 0.034, 45, 1.96, 0.99, 1.94, 2.13);
const painel325w = new PainelSolar("Canadian Risen 325w", 325, 45.5, 37, 8.78, 9.34, -0.31, -0.41, 0.053, 45, 1.96, 0.99, 1.94, 2.13);

const paineis = [painel270w, painel330w, painel325w];

export default paineis;
