import React from 'react'
import './Page3.css'
import CheckImage from '../../Images/Tick Square.png'
import MusicianImage from '../../Images/Musician.png'
import {Link} from 'react-router-dom'
import {ShoplistContainer} from '../../Providers/ShoplistContext'
export default function Page3() {
  const { setshopList} = ShoplistContainer.useContainer();

  
  return (
    <div className="page3-body">
      <div className="page3-content-container">
        <img src={CheckImage} alt="#"/>
        <h2>Sucesso</h2>
        <p>Sua compra foi efetuada com sucesso</p>
        <Link to='/' className="page3-button-container">
          <button 
          className="page3-button"
          onClick={()=>setshopList([])}
          >Voltar para página principal</button>
        </Link>
        <img src={MusicianImage} className="page3-musician-image" alt="#"/>
      </div>
      
    </div>
  )
}
