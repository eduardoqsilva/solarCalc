import OpenMeteo from './mediaIrradianciaMensal';
import inversores from './inversorFoto';
import Painel from './solarPanel';


const painel = Painel[1];



interface TotalInfo {
    mediaIrradiacaoAnual: number;
    mediaPotCorrigida: number;
    mediaTemperaturaAnual: number;
    qtdModulos: number;
    potSistema: number;
    energiaGeradaArray: { meses: string[]; dados: number[] };
    mediaIrradiacao: { meses: string[]; dados: number[] };
    mediaTemp: { meses: string[]; dados: number[] };
    energiaTotal: number;
    co2: number;
    arvores: number;
    areaInstalacao: number;
}

const totalInfo: TotalInfo = {
    mediaIrradiacaoAnual: 0,
    mediaPotCorrigida: 0,
    mediaTemperaturaAnual:0,
    qtdModulos: 0,
    potSistema: 0,
    energiaGeradaArray: { meses: [], dados: [] },
    mediaIrradiacao: { meses: [], dados: [] },
    mediaTemp: { meses: [], dados: [] },
    energiaTotal: 0,
    co2: 0,
    arvores: 0,
    areaInstalacao: 0,
};


async function getData(latitude: number, longitude: number, consumo: number) {
    const openMeteo = new OpenMeteo(latitude, longitude);
    try {
        await openMeteo.addMedia();


        const mediaIrradiacaoAnual = OpenMeteo.meses.reduce((total, mes) => {
            if (mes.mediaIrradiacao) {
                return total + mes.mediaIrradiacao;
            } else {
                return total;
            }
        }, 0) / 12;

        const mediaTemperaturaAnual = OpenMeteo.meses.reduce((total, mes) => {
            if (mes.mediaTemperatura) {
                return total + mes.mediaTemperatura;
            } else {
                return total;
            }
        }, 0) / 12;

        const rendimentoInversor = inversores.inversor4.getEficiencia();
        const potCorrigida = painel.calcularPotenciaCorrigida(Number(mediaTemperaturaAnual));
        const potSaidaInversor = painel.calculaPotSaidaInversor(potCorrigida, rendimentoInversor, 1);
        const energiaGerada = painel.calculoEnergiaGeradaMensal(30, Number(mediaIrradiacaoAnual) / 1000, 0.98, Number(potSaidaInversor));


        totalInfo.mediaIrradiacaoAnual = Number(mediaIrradiacaoAnual.toFixed(2));
        totalInfo.mediaPotCorrigida = Math.ceil(potCorrigida);
        totalInfo.mediaTemperaturaAnual = Number(mediaTemperaturaAnual.toFixed(2));
        const qtd = Math.ceil(consumo / Number(energiaGerada));
        totalInfo.qtdModulos = qtd;
        totalInfo.potSistema = qtd * painel.potPico;

        const energiaGeradaMes = [];
        const mediaIrradiacao = [];
        const mediaTemp = [];
        const meses = [];
        
        for (let i = 0; i < OpenMeteo.meses.length; i++) {
            const mes = OpenMeteo.meses[i];
            
            mediaIrradiacao.push(mes.mediaIrradiacao !== undefined ? mes.mediaIrradiacao : 0);
            mediaTemp.push(mes.mediaTemperatura !== undefined ? mes.mediaTemperatura : 0);
            meses.push(mes.nome);
            const potCorrigida = painel.calcularPotenciaCorrigida(Number(mes.mediaTemperatura));
            const potSaidaInversor = painel.calculaPotSaidaInversor(potCorrigida, rendimentoInversor, qtd);

            const energiaGerada = painel.calculoEnergiaGeradaMensal(mes.dias, mes.mediaIrradiacao !== undefined ? mes.mediaIrradiacao : 0 / 1000, 0.98, potSaidaInversor);
            energiaGeradaMes.push(energiaGerada);
            // OpenMeteo.meses[i].energiaGerada = energiaGerada;
        }

        totalInfo.energiaGeradaArray = { meses: meses, dados: energiaGeradaMes };
        totalInfo.mediaIrradiacao = { meses: meses, dados: mediaIrradiacao };
        totalInfo.mediaTemp = { meses: meses, dados: mediaTemp };
        const energiaTotal = totalInfo.energiaGeradaArray.dados.reduce((total, mes) => total + mes, 0);
        //console.log(energiaTotal.toFixed(2))
        totalInfo.energiaTotal = Number(energiaTotal.toFixed(2));
        totalInfo.co2 = Number((energiaTotal * 0.295).toFixed(2));
        totalInfo.arvores = Math.floor((totalInfo.co2 / 1000) * 7.14451202);
        //totalInfo.dadosMes = OpenMeteo.meses;
        totalInfo.areaInstalacao = Number((qtd * painel.areaInstalacao).toFixed(2));
        //console.log(totalInfo)

        return totalInfo;
    } catch (error) {
        console.log(error);
    }
}


export default getData;

//getData(-17, -50, 5000);

// Para cada 1 kWh  = 0.295 co²
//  1kWh = 0.00029499999999999996  = TON co² === 0.002107631045605 Arvores
//


// 1189 kWh * 0.295 = 350.755 co²

// (350.755/1000 ) * 7.14451202/1000  = 2.505973313224345 Arvores 


