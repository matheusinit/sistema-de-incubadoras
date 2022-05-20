import React, { ChangeEvent, useState } from 'react'
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap'

const Registration: React.FC = () => {
  const [partners, setPartner] = useState([{ name: "" }])
  const [partnerText, setPartnerText] = useState("")

  const handleAddPartner = () => {
    setPartner([...partners, { name: partnerText }])
    setPartnerText("")
  }

  const handleChangeOfPartner = (event: ChangeEvent<HTMLInputElement>) => {
    setPartnerText(event.target.value)
  }

  const handlePopPartner = () => {
    const partnersLocal = partners

    partnersLocal.pop()
    console.log(partnersLocal)
    setPartner([...partnersLocal])
  }

  return (
    <Container className='p-3' fluid="sm">
      <h2 className="fw-normal mb-5">Registro</h2>

      <Form>
        <fieldset className="mb-5">
          <legend>Dados</legend>
          
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="31.869.716/0001-53" />
              </Form.Group>
            </Col>
            
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Razão social</Form.Label>
                <Form.Control type="text" placeholder="Razão social" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome fantasia</Form.Label>
                <Form.Control type="text" placeholder="Nome fantasia" />
              </Form.Group>
            </Col>
            
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Área de atuação</Form.Label>
                <Form.Control type="text" placeholder="Área de atuação" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Tempo de atuação (em meses) </Form.Label>
            <Form.Control type="number" placeholder="12" />
          </Form.Group>
        </fieldset>

        <fieldset className="mb-5">
          <legend>Financeiro</legend> 

          <Row>
            <Col sm={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Capital social</Form.Label>
                <Form.Control type="number" placeholder="2300.00" step="0.01" />
              </Form.Group>
            </Col>

            <Col sm={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Número de funcionários CLT</Form.Label>
              <Form.Control type="number" placeholder="8" />
            </Form.Group>
            </Col>

            <Col sm={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Número de funcionários Terceirizados</Form.Label>
              <Form.Control type="number" placeholder="5" />
            </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Número de estagiários</Form.Label>
                <Form.Control type="number" placeholder="3" />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome dos sócios</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control type="text" aria-describedby="add-button" value={partnerText}  onChange={handleChangeOfPartner} />
                  <Button variant="outline-secondary" id="add-button" onClick={handleAddPartner}>Adicionar</Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {partners.map((partner, index) => {
            if (partner.name !== "") {
              return (
                <Form.Group key={index}>
                  <Form.Label>Novo sócio</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control type="text" name="name" placeholder="Nome do sócio" value={partner.name} disabled />
                    {partners.length - 1 === index && <Button variant="outline-warning" onClick={handlePopPartner}>Remover</Button> }
                  </InputGroup>
                </Form.Group>
              )
            }
          })}
        </fieldset>        

        <fieldset className="mb-5">
          <legend>Contato</legend>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="www.localhost.com" />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Instagram</Form.Label>
                <Form.Control type="text" placeholder="@matheus_oliveira" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="text" placeholder="facebook.com/matheus-oliveira" />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Twitter</Form.Label>
                <Form.Control type="text" placeholder="@matheus_oliveira" />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Linkedin</Form.Label>
                <Form.Control type="text" placeholder="www.linkedin.com/in/matheus-silva13" />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Whatsapp</Form.Label>
                <Form.Control type="text" placeholder="(84) 9 9610-2932 " />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" />
          </Form.Group>
        </fieldset>

        <Button variant="primary" type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}

export default Registration