import React, {useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import './CardMovieList.css'


export default function CardMovieList() {
    const [loading, setLoading] = useState(true);
    const [top5movies, settop5movies] = useState([]);    
    const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
    
    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            settop5movies(data.results.slice(0,5));
            setLoading(false);
        });
    },[])

    return (
        <div className="cardmovie-list">   
                {loading ? <div>Loading</div> : top5movies.map((movies) => <CardMovie key ={movies.id} {...movies}/>)}
        </div>
    )
}
