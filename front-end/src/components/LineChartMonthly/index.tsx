import React from 'react'
import { Line } from 'react-chartjs-2'

interface Chart {
  labels: string[]
  dataInput: any[]
}

const LineChartMonthly: React.FC<Chart> = ({ labels, dataInput }) => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Faturamento dos últimos três meses'
      },
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  }
  // const labels = ['Outubro', 'Novembro', 'Dezembro']
  const data = {
    labels,
    datasets: [
      {
        label: 'Faturamento mensal',
        data: dataInput,
        // data: [4700, 4200, 4400],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return (
    <div className='w-100'>
      <Line data={data} options={options} className='w-100' />
    </div>
  )
}

export default LineChartMonthly
