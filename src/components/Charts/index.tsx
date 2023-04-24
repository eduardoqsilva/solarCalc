import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from 'chart.js';

import { Bar, Line } from 'react-chartjs-2'
import type { ChartData, ChartOptions } from 'chart.js';
import { colors } from '../../styles/variables';
import { Wrapper } from './chart.styled';


interface BarType {
  dat: number[]
  labels: string[]
  title: string
  dataLegend: string
}
export function BarChart({ dat, labels,title, dataLegend }: BarType) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options: ChartOptions<'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false
        },
        ticks: {
          color: colors.chart1,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: colors.chart2,
        },
        border: {
          display: false
        },
        ticks: {
          color: colors.chart1,
          stepSize: 150,
          // callback: (value) => value + ' kWh'
        },
      },

    },

    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: title,
        align: 'start',
        padding: {
          top: 0,
          bottom: 30
        },
        color: colors.gray7
      },
    },
  }

  const data: ChartData<'bar'> = {
    labels: labels,
    datasets: [{
      label: dataLegend,
      data: dat,
      borderWidth: 0,
      backgroundColor: colors.yellow,
      borderRadius: 3,
      barThickness: 'flex',
    }],
  }

  return (
    <Wrapper>
      <Bar
        options={options}
        data={data}
        width={'100%'}
        height={'100%'}
      />
    </Wrapper>
  )
}

interface LineType {
  dat: number[]
  labels: string[]
  title: string
  dataLegend: string
}

export function LineChart({ dat, labels, title, dataLegend }: LineType) {

  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,

    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        border: {
          display: false
        },
        ticks: {
          color: colors.chart1,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: colors.chart2,
        },
        border: {
          display: false
        },
        ticks: {
          color: colors.chart1,
          stepSize: 2000,
          // callback: (value) => value + ' C°'
        },
      },

    },
    plugins: {
      title: {
        display: true,
        text: title,
        align: 'start',
        padding: {
          top: 0,
          bottom: 30
        },
        color: colors.gray7
      },
      legend: {
        display: false
      }
    }
  }
  const data: ChartData<'line'> = {
    labels: labels,
    datasets: [{
      label: dataLegend,
      data: dat,
      borderWidth: 4,
      pointBorderWidth: 1,
      pointHoverBorderWidth: 10,
      pointRadius: 5,
      pointBackgroundColor: colors.yellow,
      borderColor: colors.yellow,
      tension: 0.4,
    }],
  }

  return (
      <Wrapper>
        <Line
          data={data}
          options={options}
          width={'100%'}
          height={'100%'}
        />
      </Wrapper>
  )
}