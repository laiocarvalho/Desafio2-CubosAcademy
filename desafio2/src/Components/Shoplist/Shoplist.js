import React, { useState } from "react";
import "./Shoplist.css";
import bag from "../../Images/Bag.png";
import EmptyShoplist from "./EmptyShoplist/EmptyShoplist";
import ContentShoplist from "./ContentShoplist/ContentShoplist";

export default function Shoplist({ inputValue }) {
  const [shopList, setShopList] = useState([]);

  return (
    <div className="shoplist-conteiner">
      <div className="shoplist-content">
        {shopList.length > 0 ? <ContentShoplist /> : <EmptyShoplist />}
      </div>
      <div className="shoplist-conteiner-footer">
        <p>Insira seu cupom</p>
        <input
          className="shoplist-cupom-input"
          value={inputValue}
          type="text"
          placeholder="Cupom de desconto"
        ></input>
      </div>
    </div>
  );
}
