import React,{useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import './CardMovieListAll.css'

import {MovieContainer} from '../../../Providers/MovieContext';

export default function CardMovieListAll({listLength,catchmovieinformation}) {
    const {
        loading,
        top5Movies,
        movieInformation,
        topGenres,
        getGenre
    } = MovieContainer.useContainer();

    return (
        <div className="cardmovie-list">   
            {listLength === 5  
            ? loading ? <div>Loading</div> : top5Movies.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation} />) 
            :listLength === 20 && getGenre() === undefined 
            ?movieInformation.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation}/>)
            :listLength === 20 && getGenre() !== undefined
            ?loading ? <div>Loading</div> : topGenres.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation}/>)  
            : 'erro'
            }
        </div>
    )
}
