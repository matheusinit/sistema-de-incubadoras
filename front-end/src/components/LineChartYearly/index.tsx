import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChartYearly: React.FC = () => {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Faturamento anual de todas empresas'
      },
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false
  }
  const labels = [2019, 2020, 2021]
  const data = {
    labels,
    datasets: [
      {
        label: 'Faturamento',
        data: [25000, 22000, 30000],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)'
      }
    ]
  }

  return (
    <div className="w-100">
      <Line data={data} options={options} className="w-100" />
    </div>
  )
}

export default LineChartYearly
