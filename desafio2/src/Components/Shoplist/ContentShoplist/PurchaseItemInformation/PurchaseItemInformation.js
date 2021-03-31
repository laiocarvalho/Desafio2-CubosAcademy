import React, { useState } from "react";
import "./PurchaseItemInformation.css";
import add from "../../../../Images/add.png";
import deletee from "../../../../Images/delete.png";

export default function PurchaseItemInformation({
  movieTitle,
  incrementaQtdMovies,
  decrementaQtdMovies,
  moviePrice,
  posterPath,
  movieId,
  qtdNoCarrinho,
}) {
  return (
    <div className="purchase-item-information-content">
      <img
        className="purchase-item-information-content-poster"
        src={posterPath}
      />
      <div className="purchase-item-information-content-priceandtitle">
        <div className="price-button-conteiner">
          <span>R$ {moviePrice}</span>
          <div className="deleteAdd-button-conteiner">
            <button
              className="deleteAdd-button-style purchase-item-information-addbutton"
              onClick={() => incrementaQtdMovies(movieId)}
            >
              <img src={add} />
            </button>
            <span>{qtdNoCarrinho}</span>
            <button
              className="deleteAdd-button-style purchase-item-information-deletebutton"
              onClick={() => decrementaQtdMovies(movieId)}
            >
              <img src={deletee} />
            </button>
          </div>
        </div>
        <span>{movieTitle}</span>
      </div>
    </div>
  );
}
