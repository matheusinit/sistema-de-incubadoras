import React from 'react'
import { Button, Container, Form, Row, Col } from 'react-bootstrap'

const RegisterCapital: React.FC = () => {
  return (
    <Container className="p-3" fluid="sm">
      <h2 className="fw-normal mb-5">Dados financeiros</h2>

      <Form>
        <fieldset className="mb-5">
          <legend>Anual</legend>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de 2019</Form.Label>
            <Form.Control type="text" placeholder="20.000,00" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de 2020</Form.Label>
            <Form.Control type="text" placeholder="17.500,00" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de 2021</Form.Label>
            <Form.Control type="text" placeholder="22.035,00" />
          </Form.Group>
        </fieldset>

        <fieldset className="mb-5">
          <legend>Mensal</legend>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de outubro de 2021</Form.Label>
            <Form.Control type="text" placeholder="3.500,00" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de novembro de 2021</Form.Label>
            <Form.Control type="text" placeholder="3.200,00" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Faturamento de dezembro de 2021</Form.Label>
            <Form.Control type="text" placeholder="2.800,00" />
          </Form.Group>
        </fieldset>

        <Row className="d-flex justify-content-end">
          <Col sm={12} md={4} lg={3}>
            <Button variant="primary" className="w-100" type="submit">Adicionar faturamento</Button>
          </Col>
        </Row>
      </Form>
    </Container>
  )
}

export default RegisterCapital
