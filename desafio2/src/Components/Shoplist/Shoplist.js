import React, { useState } from "react";
import "./Shoplist.css";
import bag from "../../Images/Bag.png";
import ContentShoplist from "./ContentShoplist/ContentShoplist";
import empty from "../../Images/EmptyShoplist.png";

export default function Shoplist({inputValue, shopList, qtddefilmes}) {
  const [cupomInputValue,setcupomInputValue]=useState();
  
  const getCupomInputValue = event=>{
    const target = event.target;
    const valor = target.value;
    setcupomInputValue(valor)
  }
  
  return (
    <div className="shoplist-conteiner">
      <header className="shoplist-header"><img src={bag}/> Sacola</header>
      <div className="shoplist-content">
        {shopList.length > 0 
        ? <ContentShoplist shopList = {shopList} cupomInputValue={cupomInputValue} inputValue={inputValue}
/>
        :<div className="shoplist-titles">
              <h2>Sua sacola está vazia</h2>
              <p>adicione filmes agora</p>
              <img className="shoplist-image" src={ empty } alt="#" />
         </div>}
      </div>
      <div className="shoplist-conteiner-footer">
        <p>Insira seu cupom</p>
        <input
          className="shoplist-cupom-input"
          value={inputValue}
          type="text"
          placeholder="Cupom de desconto" onChange={getCupomInputValue}></input>
        {shopList.length > 0 
        ? <button className="shoplist-confirm-button-style">Confirme seus dados</button>
        : ''}
      </div>
    </div>
  );
}
