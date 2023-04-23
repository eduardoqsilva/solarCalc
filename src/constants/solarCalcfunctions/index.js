import OpenMeteo from './mediaIrradianciaMensal.js';
import inversores from './inversorFoto.js';
import Painel from './solarPanel.js';

const painel = Painel[1];



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
        const potCorrigida = painel.calcularPotenciaCorrigida(Number(mediaTemperaturaAnual));
        const potSaidaInversor = painel.calculaPotSaidaInversor(potCorrigida, rendimentoInversor, 1);
        const energiaGerada = painel.calculoEnergiaGeradaMensal(30, Number(mediaIrradiacaoAnual) / 1000, 0.98, Number(potSaidaInversor));


        totalInfo.mediaIrradiacaoAnual = mediaIrradiacaoAnual;
        totalInfo.mediaPotCorrigida = potCorrigida;
        totalInfo.mediaTemperaturaAnual = mediaTemperaturaAnual;
        const qtd = Math.ceil(consumo / Number(energiaGerada));
        totalInfo.qtdModulos = qtd;
        totalInfo.potSistema = qtd*painel.potPico;
    
        // console.log(`Média anual de irradiância: ${mediaIrradiacaoAnual.toFixed(2)} W/m²`);
        // console.log(`Média anual de temperatura: ${mediaTemperaturaAnual.toFixed(2)} C°`);
        // console.log(`Energia gerada por 1 modulo : ${energiaGerada} kWh`);
        // console.log(`Quantidade de painéis fotovoltaicos ${qtd}`);
        // console.log(qtd * painel.potPico)
        // console.log(`Rendimento do inversor: ${rendimentoInversor}`);

        for (let i = 0; i < OpenMeteo.meses.length; i++) {
            const mes = OpenMeteo.meses[i];
            const potCorrigida = painel.calcularPotenciaCorrigida(Number(mes.mediaTemperatura));
            const potSaidaInversor = painel.calculaPotSaidaInversor(potCorrigida, rendimentoInversor, qtd);

            const energiaGerada = painel.calculoEnergiaGeradaMensal(mes.dias, mes.mediaIrradiacao / 1000, 0.98, potSaidaInversor);
            
            OpenMeteo.meses[i].energiaGerada = energiaGerada;
        }

        const energiaTotal = OpenMeteo.meses.reduce((total, mes) => total + parseFloat(mes.energiaGerada), 0);
        console.log(energiaTotal.toFixed(2))
        totalInfo.energiaTotal = energiaTotal.toFixed(2);
        totalInfo.co2 = energiaTotal*0.295;
        totalInfo.arvores = Math.floor((totalInfo.co2/1000 ) * 7.14451202);
        totalInfo.dadosMes = OpenMeteo.meses;
        totalInfo.areaInstalacao = qtd*painel.areaInstalacao;
        //console.log(totalInfo)
              
        return totalInfo;
    } catch (error) {
        console.log(error);
    }
}


export default getData;

//getData(-22, -43, 1000);

// Para cada 1 kWh  = 0.295 co² 
//  1kWh = 0.00029499999999999996  = TON co² === 0.002107631045605 Arvores
//  


// 1189 kWh * 0.295 = 350.755 co² 

// (350.755/1000 ) * 7.14451202/1000  = 2.505973313224345 Arvores 


