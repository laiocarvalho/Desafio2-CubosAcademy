import React from 'react';
import './PurchaseItemInformation.css';
import add from "../../../../Images/add.png";
import deletee from "../../../../Images/delete.png";
import {ShoplistContainer} from '../../../../Providers/ShoplistContext'

export default function PurchaseItemInformation({
    MovieTitle, 
    MovieId, 
    MoviePrice, 
    MoviePoster, 
    qtdNoCarrinho
}) {
    const {incrementaQtdMovies, decrementaQtdMovies} = ShoplistContainer.useContainer()
    
    return (
        <div className="purchase-item-information-content">
         
            <img className="purchase-item-information-content-poster" src={MoviePoster} alt="#"/>
            <div className="purchase-item-information-content-priceandtitle">
                <div className="price-button-conteiner">
                    <span>R$ {MoviePrice}</span>
                    <div className="deleteAdd-button-conteiner">
                        <button className="deleteAdd-button-style purchase-item-information-addbutton" 
                                onClick={()=>incrementaQtdMovies(MovieId)}
                                >
                                <img src={add} alt="#"/>
                        </button>
                        <span >{qtdNoCarrinho}</span>
                        <button className="deleteAdd-button-style purchase-item-information-deletebutton"
                                onClick={()=>decrementaQtdMovies(MovieId)}
                                >
                                <img src={deletee} alt="#"/>
                        </button>
                    </div>
                </div>
                <div className="purchase-information-movie-title-container">
                    {MovieTitle}
                </div>
            </div>
          </div>
    )
  }