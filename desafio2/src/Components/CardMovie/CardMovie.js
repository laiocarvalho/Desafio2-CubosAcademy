import React from 'react'
import './CardMovie.css'
import { AiOutlineStar } from 'react-icons/ai'


function CardMovie({title, poster_path,price,vote_average,id,genre_ids}) {    
   
    const editatitulo =()=>{
        const novotitulo = title.slice(0,15)+ "...";
        return novotitulo;  
    }

    return (
        <div className="card">
           <div className="movie-card-information">
               <img className="movie-poster" src={poster_path} alt="#"/>
               <div className='teste'>
               <span className="movie-title">{title.length > 17 ? editatitulo() : title}</span>
                <div className="movie-card-avaliation-conteiner">
                    <AiOutlineStar className="movie-card-star-icon"/>
                    <span className="movie-card-avaliation">{vote_average}</span>
                </div>
               </div>
           </div>
           <div className="movie-card-footer">
                <button onClick={()=>{
                    alert('clicou no filme '+ title)
                }}>
                    <span>Sacola</span>
                    <span>R$ {price}</span>
                </button>
            </div>
        </div>
    )
}

export default CardMovie
