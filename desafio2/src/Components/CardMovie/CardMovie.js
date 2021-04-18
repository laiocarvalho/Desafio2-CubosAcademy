import React from 'react'
import './CardMovie.css'
import { AiOutlineStar } from 'react-icons/ai'
import {ShoplistContainer} from '../../Providers/ShoplistContext'
import {Link} from 'react-router-dom'

function CardMovie({id,title, poster_path,vote_average, price }) {    
    const {catchMovieInformation} = ShoplistContainer.useContainer()
    const editatitulo =()=>{
        const novotitulo = title.slice(0,14)+ "...";
        return novotitulo;  
    }
    
    return (
        <div className="card">
            <div className="card-poster-container">
                <img className="movie-poster" src={poster_path} alt="#" />
                <div className="card-movie-filter">
                    <Link to={`/MovieInfo/${id}`}><button className="movie-card-more-information-button">Mais Informações</button></Link>
                </div>
            </div>
            
           <div className="movie-card-footer">
                <span className="movie-title">{title.length > 15 ? editatitulo() : title}</span>
                <div className="movie-card-avaliation-conteiner">
                    <AiOutlineStar className="movie-card-star-icon"/>
                    <span className="movie-card-avaliation">{vote_average}</span>
                </div>
                <button onClick={()=>catchMovieInformation( id, title, price, poster_path)}>
                    <span>Sacola</span>
                    <span>R$ {price}</span>
                </button>
            </div>
        </div>
    )
}

export default CardMovie
