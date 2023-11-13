import './style.scss'
import icon1 from '../Img/secure-shield 1.png'
import icon2 from '../Img/secure-shield 1 (1).png'
import icon3 from '../Img/delivery 1.png'
import CTA_img from '../Img/depositphotos_317939792-stock-photo-young-woman-over-isolated-yellow 1.png'
import { Container, Row, Col } from 'react-bootstrap'

const CTA = () => {
  return (
    <Container className="wrapper_CTA">
      <Row className='box_card'>
        <Col md={6}>
          <div className="box_img">
            <img src={CTA_img} alt="" className="img" />
          </div>
        </Col>
        <Col md={6}>
          <div className="list_group">
            <Row xs={1} md={1} lg={2}>
              <Col className='box_group'>
                <div className="group">
                  <img src={icon1} alt="" className='icon'/>
                  <h1 className="titulo">Alta segurança</h1>
                  <p className="txt">Compre com segurança, protegemos seus dados.</p>
                </div>
              </Col>
              <Col className='box_group'>
                <div className="group">
                  <img src={icon2} alt="" />
                  <h1 className="titulo">Entrega rápida</h1>
                  <p className="txt">
                    Entrega rápida garantida. Receba seus pedidos em tempo recorde!
                  </p>
                </div>
              </Col>
              <Col className='box_group'>
                <div className="group">
                  <img src={icon3} alt="" />
                  <h1 className="titulo">Frete grátis</h1>
                  <p className="txt">Aproveite o frete grátis em todas as compras. Compre agora!</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default CTA
