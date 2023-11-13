import { Col, Container, Row } from 'react-bootstrap'
import black from '../Img/Rectangle 3.png'
import './style.scss'

const CardBlackFriday = () => {
  return (
    <Container className="wrapper_CardBlackFriday" fluid>
   
      <img src={black} alt="" className='img-black'/>
   
     
      <div className="box_txt">
        <h1 className="off">50% OFF</h1>
        <p className="txt">Em todos produtos da loja</p>
      </div>
    </Container>
  )
}

export default CardBlackFriday
