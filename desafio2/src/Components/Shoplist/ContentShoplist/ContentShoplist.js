import React, {useState} from 'react'

import './ContentShoplist.css'
import PurchaseItemInformation from './PurchaseItemInformation/PurchaseItemInformation'

export default function ContentShoplist({shopList, cupomInputValue, inputValue}) {
    
    const [precofinal, setprecofinal] = useState(0);
    const subTotalPrice = shopList.reduce((valorPrevio, elem) => valorPrevio + elem.moviePrice, 0)
   
    return (
        <div className="carrinhocomcompra">    
            {shopList.map((purchaseInfos)=>
                <PurchaseItemInformation key={purchaseInfos.movieId} {...purchaseInfos} 
                />)
            }
            <div className="shoplist-subtotal-conteiner">
                <p>Subtotal </p>
                <span className="shoplist-subtotal-price">R$
                      {cupomInputValue === 'HTMLNAOELINGUAGEM' 
                      ||inputValue ==='HTMLNAOELINGUAGEM' 
                      ? (subTotalPrice * 50) / 100 : subTotalPrice}
                </span>
            </div>
        </div>
    )
}
