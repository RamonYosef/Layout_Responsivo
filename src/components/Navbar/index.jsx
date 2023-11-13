import './style.scss'
import menu from '../Img/menu (1).png'
import X from '../Img/X.png'
import { Container } from 'react-bootstrap'
import { useState } from 'react'
import Menu from '../../Menu'

const Navbar = () => {
  const [show, setShow] = useState(false)

  return (
    <Container fluid className="wrapper_Navbar">
      <div className="box_nav">
        <h1 className="titulo">Logo</h1>

        <ul className="list_links">
          <li>
            <a href="#" className="links">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="links">
              produtos
            </a>
          </li>
          <li>
            <a href="#" className="links">
              Newsletters
            </a>
          </li>
        </ul>

        {show === false ? (
          <img
            src={menu}
            alt=""
            className="menu"
            onClick={() => {
              setShow(true)
            }}
          />
        ) : (
          <img
            src={X}
            alt=""
            className="menu"
            onClick={() => {
              setShow(false)
            }}
          />
        )}

       
      </div>
      {show == true ? <Menu className='menu_nav'/> : ''}
    </Container>
  )
}

export default Navbar
