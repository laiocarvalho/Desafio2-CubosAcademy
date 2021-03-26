import React,{useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import '../CardMovieList/CardMovieList.css'
import json from '../genres.json'

//genre como undefined é para o filtro "Todos"
export default function CardMovieListAll({ genre, listLength}) {
    const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
    const [AllMoviesInformation, setAllMoviesInformation]= useState([]);
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
            setAllMoviesInformation(data.results);
            setTop5Movies(data.results.slice(0,5));
            setLoading(false)
        });
    },[genre])

    if (genreData != undefined) {
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
            ? loading ? <div>Loading</div> : top5Movies.map((movies) => <CardMovie key ={movies.id} {...movies}/>) 
            :listLength === 20 && genre===undefined 
            ?AllMoviesInformation.map((movies) => <CardMovie key ={movies.id} {...movies}/>)
            :listLength === 20 && genre!=undefined
            ?topGenres.map((movies) => <CardMovie key ={movies.id} {...movies}/>)
            :'erro'
            }
        </div>
    )
}
