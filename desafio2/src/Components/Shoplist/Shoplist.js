import React, { useState } from "react";
import "./Shoplist.css";
import bag from "../../Images/Bag.png";
import ContentShoplist from "./ContentShoplist/ContentShoplist";
import empty from "../../Images/EmptyShoplist.png";
import { Link } from 'react-router-dom'
import {ShoplistContainer} from '../../Providers/ShoplistContext'


export default function Shoplist({Botao}) {
  const [cupomInputValue,setcupomInputValue]=useState();
  const {cupomText} = ShoplistContainer.useContainer();
  const {shopList} = ShoplistContainer.useContainer([]);
  
  const getCupomInputValue = event=>{
    const target = event.target;
    const valor = target.value;
    setcupomInputValue(valor)
  }
  
  return (
    <div className="shoplist-conteiner">
      <header className="shoplist-header"><img src={bag} alt="#"/> Sacola</header>
      <div className="shoplist-content">
        {shopList.length === 0 
        ? 
          <>
              <h2>Sua sacola está vazia</h2>
              <p>adicione filmes agora</p>
              <img className="shoplist-image" src={ empty } alt="#" />
          </>
        :
        <ContentShoplist cupomInputValue={cupomInputValue}/>}
      </div>
        
      <div className="shoplist-conteiner-footer">
        <p>Insira seu cupom</p>
        <input
          className="shoplist-cupom-input"
          value={cupomText}
          type="text"
          placeholder="Cupom de desconto" onChange={getCupomInputValue}></input>
        {shopList.length !== 0 
        ? <Link to ='/page2'>
           {Botao}
          </Link>
        : ''
        }
      </div>
    </div>
  );
}
