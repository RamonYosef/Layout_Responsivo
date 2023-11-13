import { Container } from 'react-bootstrap'
import './style.scss'

const Banner = () => {
  return (
    <Container fluid className="wrapper_Banner">
      <div className="box_txt">
        <h1 className="txt_primary">Bem-vindo</h1>
        <p className="txt">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam placerat nibh quis magna
          volutpat, in maximus massa ultrices. Aliquam erat volutpat. Phasellus condimentum
          pellentesque sem, sit amet malesuada lorem sodales ac.
        </p>
      </div>
    </Container>
  )
}

export default Banner
