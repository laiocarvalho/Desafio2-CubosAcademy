import React,{useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import '../CardMovieList/CardMovieList.css'


export default function CardMovieListAll() {
    const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
    const [movieInformation, setMovieInformation]= useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setMovieInformation(data.results)
            setLoading(false);
        });
    },[])

    
    return (
        <div className="cardmovie-list">   
            {loading ? <div>Loading</div> : movieInformation.map((movies) => <CardMovie key ={movies.id} {...movies}/>)}
        </div>
    )
}
