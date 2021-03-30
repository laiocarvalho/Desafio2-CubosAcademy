import React, {useState} from 'react';
import './PurchaseItemInformation.css';
import add from "../../../../Images/add.png";
import deletee from "../../../../Images/delete.png"

export default function PurchaseItemInformation({movieTitle, movieId, moviePrice, posterPath, qtdNoCarrinho }) {
    
    const [movieCount, setmovieCount] = useState(0);
    
    const incrementaQtdMovies = ()=>{
        setmovieCount(movieCount + 1)
    }
    const decrementaQtdMovies = ()=>{
        setmovieCount(movieCount - 1)
    }
    const FinalMovieCount = qtdNoCarrinho + movieCount ;
    
    return (
        <div className="purchase-item-information-content">
         
            <img className="purchase-item-information-content-poster" src={posterPath} />
            <div className="purchase-item-information-content-priceandtitle">
                <div className="price-button-conteiner">
                    <span>R$ {moviePrice}</span>
                    <div className="deleteAdd-button-conteiner">
                        <button className="deleteAdd-button-style purchase-item-information-addbutton" 
                                onClick={incrementaQtdMovies}
                                >
                                <img src={add}/>
                        </button>
                        <span >{FinalMovieCount}</span>
                        <button className="deleteAdd-button-style purchase-item-information-deletebutton"
                                onClick={decrementaQtdMovies}
                                >
                                <img src={deletee}/>
                        </button>
                    </div>
                </div>
                <span>{movieTitle}</span>
            </div>
        </div>
    )
}
