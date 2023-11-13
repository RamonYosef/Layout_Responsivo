import './style.scss'
import card from '../Img/Rectangle 5.png'

const Card = () => {
  return (
    <div className="wrapper_Card">
      <img src={card} alt="" className='img_card'/>
      <div className="box_produto">
        <p className="produto">Macbook</p>
        <p className="valor">R$ 15.000,00</p>
      </div>
    </div>
  )
}

export default Card
