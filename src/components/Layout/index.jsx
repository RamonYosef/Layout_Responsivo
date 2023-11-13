import Banner from '../Banner'
import CTA from '../CTA'
import Email from '../Email'
import Navbar from '../Navbar'
import Novidades from '../Novidades'
import Produto from '../Produtos'
import './style.scss'

const Layout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Banner />
      <Novidades/>
      <CTA />
      <Produto/>
      <Email/>
    </div>
  )
}

export default Layout
