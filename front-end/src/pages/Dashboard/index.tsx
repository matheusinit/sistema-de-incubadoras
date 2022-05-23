import React, { useEffect, useState } from 'react'
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
import api from '../../api'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
)

interface Invoice {
  id: string
  month: number
  total: number
  year: number
}

interface Company {
  employeesCLTQuantity: number
  outsorcedEmployeeQuantity: number
  internQuantity: number
}

const Dashboard: React.FC = () => {
  const [invoiceTotal, setInvoiceTotal] = useState(0)
  const [employeesTotal, setEmployeesTotal] = useState(0)
  const [latestInvoiceTotalByCompany, setLatestInvoiceTotalByCompany] = useState([] as number[])
  const [latestYears, setLatestYears] = useState([] as string[])
  const [latestTotalInvoiceInMonths, setLatestTotalInvoiceInMonths] = useState([] as number[])

  useEffect(() => {
    const year = new Date().getFullYear() - 1

    api.get(`/invoice/year/${year}`).then((response) => {
      const invoices = response.data

      invoices.forEach((invoice: Invoice) => {
        setInvoiceTotal(invoiceTotal + invoice.total)
      })
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    api.get('/company').then((response) => {
      const company = response.data

      let totalEmployees = 0

      company.forEach((company: Company) => {
        const { employeesCLTQuantity, internQuantity, outsorcedEmployeeQuantity } = company

        totalEmployees += (employeesCLTQuantity + internQuantity + outsorcedEmployeeQuantity)
      })

      setEmployeesTotal(totalEmployees)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  useEffect(() => {
    let year = new Date().getFullYear() - 3
    const latestYears = []
    const latestInvoice = []

    for (let i = 0; i < 3; i++) {
      latestYears.push(`${year}`)
      year++
    }

    setLatestYears(latestYears)

    latestYears.forEach((year) => {
      api.get(`/invoice/year/${year}`).then((response) => {
        const invoices = response.data
        let invoiceTotal = 0

        invoices.forEach((invoice: Invoice) => {
          invoiceTotal += invoice.total
        })

        latestInvoice.push(invoiceTotal)
      }).catch((error) => {
        console.log(error)
      })

      setLatestInvoiceTotalByCompany(latestInvoice)
    })
  }, [])

  useEffect(() => {
    const now = new Date()
    const currentYear = now.getFullYear() - 1
    const latestTotalInMonths = []

    const trimest = [10, 11, 12]

    trimest.forEach((month) => {
      api.get(`/invoice/${month}/${currentYear}`).then((response) => {
        let total = 0
        const invoices = response.data

        invoices.forEach((invoice: Invoice) => {
          total += invoice.total
        })

        latestTotalInMonths.push(total)
      }).catch((error) => console.log(error))

      setLatestTotalInvoiceInMonths(latestTotalInMonths)
    })
  }, [])

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

        <Container className="p-0 bg-light flex-grow-1 overflow-auto" fluid>
          <main className="px-5 pt-4 h-100">
            <Row className="mb-3">
              <Col md="6" className="mb-sm-2 mb-md-0">
                <Card label='Faturamento no último ano' content={`R$ ${invoiceTotal}`} />
              </Col>

              <Col md="6" className="mb-sm-2 mb-md-0">
                <Card label='Total de funcionários' content={employeesTotal} />
              </Col>
            </Row>

            <section className="bg-white px-4 py-4 rounded border mb-3">
              <h3 className="mb-3 fw-normal">Gráficos</h3>
              <Row>
                <Col className="d-flex align-items-end">
                  <LineChartYearly dataInput={latestInvoiceTotalByCompany} labels={latestYears} />
                </Col>
                <Col className="d-flex flex-column align-items-center">
                  <Form.Select className="mb-3 w-50">
                    {latestYears.map((option) =>
                      <option value={option} key={option}>{option}</option>
                    )}
                  </Form.Select>

                  <LineChartMonthly dataInput={latestTotalInvoiceInMonths} labels={['Outubro', 'Novembro', 'Dezembro']} />
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
