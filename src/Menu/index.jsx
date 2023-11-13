import { Col, Container, Row } from 'react-bootstrap'
import './style.scss'

const Menu = () => {
  return (
    <Container className="wrapper_Menu" fluid>
      <ul className="list_links_menu">
        <li>
          <a href="#" className="links_menu">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="links_menu">
            produtos
          </a>
        </li>
        <li>
          <a href="#" className="links_menu">
            Newsletters
          </a>
        </li>
      </ul>
    </Container>
  )
}

export default Menu
