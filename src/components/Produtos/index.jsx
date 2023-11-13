import { Col, Container, Row } from 'react-bootstrap'
import Card from '../Card'
import './style.scss'

const Produto = () => {
  return (
    <Container className="wrapper_Produto">
      <Row className="row_list">
        <Col>
          <div className="box_produtos">
            <div className="box_txt">
              <h1 className="titulo">Produtos</h1>
            </div>
            <Row className="list_card" xxl={5} xl={4} lg={3} md={2} xs={1}>
              <Col className="box_card">
                <Card />
              </Col>
              <Col className="box_card">
                <Card />
              </Col>
              <Col className="box_card">
                <Card />
              </Col>
              <Col className="box_card">
                <Card />
              </Col>
              <Col className="box_card">
                <Card />
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Produto
