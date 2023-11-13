import { Col, Container, Row } from 'react-bootstrap'
import './style.scss'

const Email = () => {
  return (
    <Container className="wrapper_Email">
      <Row>
        <Col>
          <div className="box_form">
            <div className="box_txt">
              <h1 className="titulo">Fique por dentro das promos!!</h1>
              <p className="txt">
                Assine nossa newsletts para receber nossas promoções em primeira mão
              </p>
            </div>
            <div className="form">
              <input type="text" placeholder="Digite seu E-mail" className="input_Form" />
              <button className="btn">ENVIAR</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Email
