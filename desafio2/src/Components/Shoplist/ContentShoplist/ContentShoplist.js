import React from 'react'
import './ContentShoplist.css'
import PurchaseItemInformation from './PurchaseItemInformation/PurchaseItemInformation';
import {ShoplistContainer} from '../../../Providers/ShoplistContext'

export default function ContentShoplist({cupomInputValue}) {
    const {shopList} = ShoplistContainer.useContainer();
    const {cupomText} = ShoplistContainer.useContainer();
    const subTotalPrice = shopList.reduce(
        (valorPrevio, elem) => valorPrevio + elem.MoviePrice * elem.qtdNoCarrinho, 0)

    return (
        <div className="carrinhocomcompra">    
            {shopList.map((purchaseInfos)=>
                <PurchaseItemInformation key={shopList.MovieId} {...purchaseInfos}/>)
            }
            <div className="shoplist-subtotal-conteiner">
                <p>Subtotal </p>
                <span className="shoplist-subtotal-price">R$
                      {cupomInputValue === 'HTMLNAOELINGUAGEM' 
                      ||cupomText ==='HTMLNAOELINGUAGEM' 
                      ? (subTotalPrice * 50) / 100 : subTotalPrice}
                </span>
            </div>
        </div>
    )
}
