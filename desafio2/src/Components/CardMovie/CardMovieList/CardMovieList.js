import React, {useState, useEffect} from 'react'
import CardMovie from '../CardMovie'
import './CardMovieList.css'


export default function CardMovieList() {
    const [movieInformation, setMovieInformation]= useState([]);

    const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
    useEffect(()=>{
        fetch(url)
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            setMovieInformation(data);
        });
    },[])
    
    console.log(movieInformation)
    return (
        <div className="cardmovie-list">
            <CardMovie movieinformation ={movieInformation}/>
            <CardMovie movieinformation ={movieInformation}/>
            <CardMovie movieinformation ={movieInformation}/>
        </div>
    )
}
