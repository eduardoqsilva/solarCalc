import OpenMeteo from './mediaIrradianciaMensal.js';
import inversores from './inversorFoto.js';
import Painel from './solarPanel.js';


const totalInfo = {};


async function getData(latitude, longitude, consumo) {
    const openMeteo = new OpenMeteo(latitude, longitude);
    try {
        await openMeteo.addMediaIrradiacao();
        await openMeteo.addMediaTemperatura();


        const mediaIrradiacaoAnual = OpenMeteo.meses.reduce((total, mes) => {
            return total + parseFloat(mes.mediaIrradiacao);
        }, 0) / 12;

        const mediaTemperaturaAnual = OpenMeteo.meses.reduce((total, mes) => {
            return total + parseFloat(mes.mediaTemperatura);
        }, 0) / 12;

        const rendimentoInversor = inversores.inversor4.getEficiencia();
        const potCorrigida = Painel[0].calcularPotenciaCorrigida(Number(mediaTemperaturaAnual));
        const potSaidaInversor = Painel[0].calculaPotSaidaInversor(potCorrigida, rendimentoInversor, 1);
        const energiaGerada = Painel[0].calculoEnergiaGeradaMensal(30, Number(mediaIrradiacaoAnual) / 1000, 0.98, Number(potSaidaInversor));

        totalInfo.mediaIrradiacaoAnual = mediaIrradiacaoAnual;
        totalInfo.mediaPotCorrigida = potCorrigida;
        totalInfo.mediaTemperaturaAnual = mediaTemperaturaAnual;
        const qtd = Math.ceil(consumo / Number(energiaGerada));
        totalInfo.qtdModulos = qtd;

        // console.log(`Média anual de irradiância: ${mediaIrradiacaoAnual.toFixed(2)} W/m²`);
        // console.log(`Média anual de temperatura: ${mediaTemperaturaAnual.toFixed(2)} C°`);
        // console.log(`Energia gerada por 1 modulo : ${energiaGerada} kWh`);
        // console.log(`Quantidade de painéis fotovoltaicos ${qtd}`);
        // console.log(qtd * Painel[0].potPico)
        //console.log(`Rendimento do inversor: ${rendimentoInversor}`);

        for (let i = 0; i < OpenMeteo.meses.length; i++) {
            const mes = OpenMeteo.meses[i];
            const potCorrigida = Painel[0].calcularPotenciaCorrigida(Number(mes.mediaTemperatura));
            const potSaidaInversor = Painel[0].calculaPotSaidaInversor(potCorrigida, rendimentoInversor, qtd);

            const energiaGerada = Painel[0].calculoEnergiaGeradaMensal(mes.dias, mes.mediaIrradiacao / 1000, 0.98, potSaidaInversor);
            //console.log(`${mes.nome}: ${energiaGerada} kWh`);
            OpenMeteo.meses[i].energiaGerada = energiaGerada;
        }

        totalInfo.dadosMes = OpenMeteo.meses;
           
        console.table(totalInfo.dadosMes);
        return totalInfo;
    } catch (error) {
        console.log(error);
    }
}


export default getData;


getData(-22, -43, 300);

//-22.87



