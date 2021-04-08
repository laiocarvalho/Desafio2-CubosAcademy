import React,{useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import './CardMovieListAll.css'
import json from '../genres.json'

export default function CardMovieListAll({ genre, listLength,catchmovieinformation}) {
    const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";    
    const [movieInformation, setMovieInformation]= useState([]);
    const [top5Movies, setTop5Movies] = useState([]);
    const [loading, setLoading] = useState(true);
    const genreData = json.genres.find((el) => el.name === genre);
    const [topGenres, setTopGenres] = useState([]);
    
    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setMovieInformation(
                // genre 
                // ? data.results.filter((d) => d.genre_ids.includes(genreData.id))
                // :
                data.results
                );
            setTop5Movies(data.results.slice(0,5));
            setLoading(false)
        });
    },[genre])
    
    if (genreData !== undefined) {
        fetch(`https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=${genreData.id}&language=pt-BR`)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            setTopGenres(data.results);
        })
      
    }
    
    return (
     

        <div className="cardmovie-list">   
            {listLength === 5  
            ? loading ? <div>Loading</div> : top5Movies.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation} />) 
            :listLength === 20 && genre === undefined 
            ?movieInformation.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation}/>)
            :listLength === 20 && genre!== undefined
            ?loading ? <div>Loading</div> : topGenres.map((movies) => <CardMovie key ={movies.id} {...movies} catchmovieinformation={catchmovieinformation}/>)  
            : 'erro'
            }
        </div>
    )
}
