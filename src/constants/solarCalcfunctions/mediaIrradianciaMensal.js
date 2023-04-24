/*** Media de irradiação Solar Usando a API OpenMeteo para o angulo 0° */

const meses = [  
  {
    nome: 'jan',
    dias: 31,
    numero: 1,
    mediaIrradiacao: '4754.56',
    mediaTemperatura: '26.28'
  },
  {
    nome: 'fev',
    dias: 28,
    numero: 2,
    mediaIrradiacao: '5163.14',
    mediaTemperatura: '25.41'
  },
  {
    nome: 'mar',
    dias: 31,
    numero: 3,
    mediaIrradiacao: '6847.32',
    mediaTemperatura: '27.14'
  },
  {
    nome: 'abr',
    dias: 30,
    numero: 4,
    mediaIrradiacao: '5091.25',
    mediaTemperatura: '23.65'
  },
  {
    nome: 'mai',
    dias: 31,
    numero: 5,
    mediaIrradiacao: '5266.39',
    mediaTemperatura: '21.07'
  },
  {
    nome: 'jun',
    dias: 30,
    numero: 6,
    mediaIrradiacao: '3621.63',
    mediaTemperatura: '19.65'
  },
  {
    nome: 'jul',
    dias: 31,
    numero: 7,
    mediaIrradiacao: '5533.33',
    mediaTemperatura: '21.18'
  },
  {
    nome: 'ago',
    dias: 31,
    numero: 8,
    mediaIrradiacao: '4243.70',
    mediaTemperatura: '20.11'
  },
  {
    nome: 'set',
    dias: 30,
    numero: 9,
    mediaIrradiacao: '4144.61',
    mediaTemperatura: '20.30'
  },
  {
    nome: 'out',
    dias: 31,
    numero: 10,
    mediaIrradiacao: '4733.74',
    mediaTemperatura: '23.79'
  },
  {
    nome: 'nov',
    dias: 30,
    numero: 11,
    mediaIrradiacao: '4944.31',
    mediaTemperatura: '22.74'
  },
  {
    nome: 'dez',
    dias: 31,
    numero: 12,
    mediaIrradiacao: '4284.63',
    mediaTemperatura: '24.38'
  }
];
class OpenMeteo {
  static meses = meses;

  constructor(latitude, longitude) {
    this.latitude = Number(latitude);
    this.longitude = Number(longitude);
  }

  async getClimate(startDate, endDate, timezone) {
    
    try {
      const response = await fetch(
        `https://archive-api.open-meteo.com/v1/archive?latitude=${this.latitude}&longitude=${this.longitude}&start_date=${startDate}&end_date=${endDate}&hourly=temperature_2m,shortwave_radiation&timezone=${timezone}`
      );
      const data = await response.json();
      const climate = data.hourly;
      return climate;
    } catch (error) {
      console.error(error);
      console.log("Algum erro ocorreu.");
      return null;
    }
  }

  async addMedia() {
    for (const mes of OpenMeteo.meses) {
      const startDate = `2022-${String(mes.numero).padStart(2, "0")}-01`;
      const endDate = `2022-${String(mes.numero).padStart(2, "0")}-${String(mes.dias).padStart(2, "0")}`;
      const climate = await this.getClimate(startDate, endDate, "America/Sao_Paulo");

      const temperatures = climate.temperature_2m;
      const ghi = climate.shortwave_radiation;

      const length = temperatures.length;
      const somaTemperatura = temperatures.reduce((acc, cur) => acc + cur, 0);
      const mediaTemperatura = somaTemperatura / length;
      mes.mediaTemperatura = mediaTemperatura.toFixed(2);

      const somaIrradiacao = ghi.reduce((acc, cur) => acc + cur, 0);
      const mediaIrradiacao = somaIrradiacao / mes.dias;
      mes.mediaIrradiacao = mediaIrradiacao.toFixed(2);
    }
  }
}

export default OpenMeteo;

// async function getData(longitude, latitude) { 
//   const openMeteo = new OpenMeteo(longitude, latitude);
//   try {
//     await openMeteo.addMediaIrradiacao();
//     console.table(OpenMeteo.meses)
//   }catch(erro){
//     console.log(erro)
//   }
// }

// getData(-22.87, -43.36);








