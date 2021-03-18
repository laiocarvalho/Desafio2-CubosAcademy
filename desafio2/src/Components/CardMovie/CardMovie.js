import React from 'react'
import './CardMovie.css'
import { AiOutlineStar } from 'react-icons/ai'


function CardMovie({movieinformation}) {    

    return (
        <div className="card">
           <img className="movie-poster" alt="Movie Poster" src={movieinformation.results[0].poster_path}/>
           <div className="movie-card-information">
                <span className="movie-title">titulo do filme</span>
                <div className="movie-card-avaliation-conteiner">
                    <AiOutlineStar className="movie-card-star-icon"/>
                    <span className="movie-card-avaliation"></span>
                </div>
           </div>
           
           <div className="movie-card-footer">
                <button>
                    <span>Sacola</span>
                    <span>R$</span>
                </button>
            </div>
        </div>
    )
}

export default CardMovie
