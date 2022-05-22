import React from 'react'
import { Button, Container, Row, Col, Form } from 'react-bootstrap'
import Card from '../../components/Card'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
} from 'chart.js'
import './dashboard.css'
import LineChartMonthly from '../../components/LineChartMonthly'
import LineChartYearly from '../../components/LineChartYearly'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
)

const Dashboard: React.FC = () => {
  return (
    <Container className="p-0" fluid>
      <header className="d-flex justify-content-between align-items-center py-2 px-3 mb-4">
        <div className="fw-bold fs-5">Dashboard</div>

        <nav className="d-flex justify-content-between">
          <Button variant='primary' className="fw-bold me-3">Conta</Button>
          <Button variant='primary' className="fw-bold me-3">Incubadoras</Button>
          <Button variant='danger' className="fw-bold">Sair</Button>
        </nav>
      </header>

      <main className="px-4 pb-5">
        <div className="d-flex justify-content-between mb-5">
          <Card />
        </div>

        <h2 className="mb-3">Gráficos</h2>

        <Row>
          <Col className="d-flex align-items-end">
            <LineChartYearly />
          </Col>
          <Col className="d-flex flex-column align-items-center">
            <Form.Select className="mb-3 w-50">
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
            </Form.Select>

            <LineChartMonthly />
          </Col>
        </Row>

      </main>
    </Container>
  )
}

export default Dashboard
