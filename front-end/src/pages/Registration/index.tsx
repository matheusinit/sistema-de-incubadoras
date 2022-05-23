import React, { ChangeEvent, FormEvent, useState } from 'react'
import { Container, Form, Button, Row, Col, InputGroup } from 'react-bootstrap'
import api from '../../api'

const Registration: React.FC = () => {
  const [partners, setPartner] = useState([{ name: '' }])
  const [partnerText, setPartnerText] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [corporateName, setCorporateName] = useState('')
  const [tradeName, setTradeName] = useState('')
  const [businessArea, setBusinessArea] = useState('')
  const [timeInMarket, setTimeInMarket] = useState(0)
  const [shareCapital, setShareCapital] = useState(0)
  const [employeesCLTQuantity, setEmployeesCLTQuantity] = useState(0)
  const [outsorcedEmployeeQuantity, setOutsorcedEmployeeQuantity] = useState(0)
  const [internQuantity, setInternQuantity] = useState(0)
  const [website, setWebsite] = useState('')
  const [instagram, setInstagram] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAddPartner = () => {
    setPartner([...partners, { name: partnerText }])
    setPartnerText('')
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

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    api.post('/company', {
      cnpj,
      corporateName,
      tradeName,
      businessArea,
      timeInMarket,
      shareCapital,
      employeesCLTQuantity,
      outsorcedEmployeeQuantity,
      internQuantity,
      partnerQuantity: partners.length,
      password,
      website,
      instagram,
      facebook,
      twitter,
      linkedin,
      whatsapp,
      email
    }).then((response) => {
      history.pushState({}, undefined, '/')
      location.reload()
    }).catch((error) => console.log(error))
  }

  const handleChangeOfCnpj = (event: ChangeEvent<HTMLInputElement>) => {
    setCnpj(event.target.value)
  }

  const handleChangeOfCorporateName = (event: ChangeEvent<HTMLInputElement>) => {
    setCorporateName(event.target.value)
  }

  const handleChangeOfTradeName = (event: ChangeEvent<HTMLInputElement>) => {
    setTradeName(event.target.value)
  }

  const handleChangeOfBusinessArea = (event: ChangeEvent<HTMLInputElement>) => {
    setBusinessArea(event.target.value)
  }

  const handleChangeOfTimeInMarket = (event: ChangeEvent<HTMLInputElement>) => {
    setTimeInMarket(Number(event.target.value))
  }

  const handleChangeOfShareCapital = (event: ChangeEvent<HTMLInputElement>) => {
    setShareCapital(Number(event.target.value))
  }

  const handleChangeOfEmployeesCLTQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setEmployeesCLTQuantity(Number(event.target.value))
  }

  const handleChangeOfOutsorcedEmployeeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setOutsorcedEmployeeQuantity(Number(event.target.value))
  }

  const handleChangeOfInternQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    setInternQuantity(Number(event.target.value))
  }

  const handleChangeOfWebsite = (event: ChangeEvent<HTMLInputElement>) => {
    setWebsite(event.target.value)
  }

  const handleChangeOfInstagram = (event: ChangeEvent<HTMLInputElement>) => {
    setInstagram(event.target.value)
  }

  const handleChangeOfFacebook = (event: ChangeEvent<HTMLInputElement>) => {
    setFacebook(event.target.value)
  }

  const handleChangeOfTwitter = (event: ChangeEvent<HTMLInputElement>) => {
    setTwitter(event.target.value)
  }

  const handleChangeOfLinkedin = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkedin(event.target.value)
  }

  const handleChangeOfWhatsapp = (event: ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(event.target.value)
  }

  const handleChangeOfEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handleChangeOfPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  return (
    <Container className='p-3' fluid="sm">
      <h2 className="fw-normal mb-5">Registro</h2>

      <Form onSubmit={handleOnSubmit}>
        <fieldset className="mb-5">
          <legend>Dados</legend>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>CNPJ</Form.Label>
                <Form.Control type="text" placeholder="31.869.716/0001-53" onChange={handleChangeOfCnpj} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Razão social</Form.Label>
                <Form.Control type="text" placeholder="Razão social" onChange={handleChangeOfCorporateName} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome fantasia</Form.Label>
                <Form.Control type="text" placeholder="Nome fantasia" onChange={handleChangeOfTradeName} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Área de atuação</Form.Label>
                <Form.Control type="text" placeholder="Área de atuação" onChange={handleChangeOfBusinessArea} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Tempo de atuação (em meses) </Form.Label>
            <Form.Control type="number" placeholder="12" onChange={handleChangeOfTimeInMarket} />
          </Form.Group>
        </fieldset>

        <fieldset className="mb-5">
          <legend>Financeiro</legend>

          <Row>
            <Col sm={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Capital social</Form.Label>
                <Form.Control type="number" placeholder="2300.00" step="0.01" onChange={handleChangeOfShareCapital} />
              </Form.Group>
            </Col>

            <Col sm={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Número de funcionários CLT</Form.Label>
              <Form.Control type="number" placeholder="8" onChange={handleChangeOfEmployeesCLTQuantity} />
            </Form.Group>
            </Col>

            <Col sm={12} md={4}>
            <Form.Group className="mb-3">
              <Form.Label>Número de funcionários Terceirizados</Form.Label>
              <Form.Control type="number" placeholder="5" onChange={handleChangeOfOutsorcedEmployeeQuantity} />
            </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Número de estagiários</Form.Label>
                <Form.Control type="number" placeholder="3" onChange={handleChangeOfInternQuantity} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Nome dos sócios</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control type="text" aria-describedby="add-button" value={partnerText} onChange={handleChangeOfPartner} />
                  <Button variant="outline-secondary" id="add-button" onClick={handleAddPartner}>Adicionar</Button>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {partners.map((partner, index) => {
            return partner.name !== '' &&
              (<Form.Group key={index}>
              <Form.Label>Novo sócio</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control type="text" name="name" placeholder="Nome do sócio" value={partner.name} disabled />
                {partners.length - 1 === index && <Button variant="outline-warning" onClick={handlePopPartner}>Remover</Button> }
              </InputGroup>
            </Form.Group>)
          }
          )}
        </fieldset>

        <fieldset className="mb-5">
          <legend>Contato</legend>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" placeholder="www.localhost.com" onChange={handleChangeOfWebsite} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Instagram</Form.Label>
                <Form.Control type="text" placeholder="@matheus_oliveira" onChange={handleChangeOfInstagram} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Facebook</Form.Label>
                <Form.Control type="text" placeholder="facebook.com/matheus-oliveira" onChange={handleChangeOfFacebook} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Twitter</Form.Label>
                <Form.Control type="text" placeholder="@matheus_oliveira" onChange={handleChangeOfTwitter} />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Linkedin</Form.Label>
                <Form.Control type="text" placeholder="www.linkedin.com/in/matheus-silva13" onChange={handleChangeOfLinkedin} />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Whatsapp</Form.Label>
                <Form.Control type="text" placeholder="(84) 9 9610-2932" onChange={handleChangeOfWhatsapp} />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="email@email.com" onChange={handleChangeOfEmail} />
          </Form.Group>
        </fieldset>

        <fieldset className="mb-5">
          <legend>Conta</legend>

          <Row>
            <Col md={12}>
              <Form.Group className="mb-3">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="text" placeholder="3hz&m&/Ba\^2xR3q" onChange={handleChangeOfPassword} />
              </Form.Group>
            </Col>
          </Row>
        </fieldset>

        <Button variant="primary" type="submit">Cadastrar</Button>
      </Form>
    </Container>
  )
}

export default Registration
