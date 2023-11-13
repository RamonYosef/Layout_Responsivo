import { Col, Container, Row } from 'react-bootstrap'
import Card from '../Card'
import './style.scss'

const Produto = () => {
  return (
    <Container  className="wrapper_Produto">
      <Row className='row_list'>
        <Col>
          <div className="box_produtos">
            <h1 className="titulo">Produtos</h1>
            <Row className="list_card" xl={5} lg={3} md={2} xs={1}>
              <Col className='box_card'><Card /></Col>
              <Col className='box_card'><Card /></Col>
              <Col className='box_card'><Card /></Col>
              <Col className='box_card'><Card /></Col>
              <Col className='box_card'><Card /></Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Produto
