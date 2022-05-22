import React from 'react'
import { Container, Row, Col, Form, Navbar, Nav, NavDropdown } from 'react-bootstrap'
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
    <div className="dashboard">
      <Container className="p-0 d-flex vh-100 position-fixed top-0 bottom-0 start-0 end-0" fluid>
        <aside>
          <div className="d-flex flex-column p-3 w-100 h-100 border-end">
            <a href="/" className="d-flex align-items-center mb-0 text-black text-decoration-none">
              <span className="fs-4">SFdI</span>
            </a>

            <hr />

            <Nav variant="pills" defaultActiveKey="/" className="flex-column mb-auto">
              <Nav.Item>
                <Nav.Link href="/">Dashboard</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/incubadoras" className="text-dark">Incubadoras</Nav.Link>
              </Nav.Item>
            </Nav>

            <hr />

            <Navbar>
              <Navbar.Toggle aria-controls="navbar-light-example"/>
              <Navbar.Collapse id="navbar-light-example">
                <Nav>
                  <NavDropdown
                    id="nav-dropdown-light-example"
                    title="Matheus"
                    menuVariant="light"
                    drop={'up'}
                  >
                    <NavDropdown.Item href="#action/3.1">Sair</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </aside>

        <Container className="p-0 me-0 flex-grow-1 overflow-auto" fluid>
          <main className="px-4 bg-light pt-4 h-100">
            <div className="d-flex justify-content-between mb-3">
              <Card />
            </div>

            <section className="bg-white px-4 py-4 rounded border mb-3">
              <h3 className="mb-3 fw-normal">Gráficos</h3>
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
            </section>

            <section className="bg-white px-4 py-4 rounded border mb-3">
              <h3 className="mb-3 fw-normal">Gráficos</h3>
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
            </section>

          </main>
        </Container>
      </Container>
    </div>
  )
}

export default Dashboard
