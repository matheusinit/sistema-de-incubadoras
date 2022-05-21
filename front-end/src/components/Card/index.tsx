import React from 'react'

const Card: React.FC = () => {
  return (
    <div className="ps-3 pe-5 pt-3 pb-3 border rounded bg-light">
      <div className="fw-light text-muted">Faturamento no último ano</div>
      <div className="fs-1">R$ 25.000</div>
    </div>
  )
}

export default Card
