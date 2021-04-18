import React,{useEffect, useState} from 'react'
import './MoreInfoMoviePage.css'
import {Link} from 'react-router-dom'
export default function MoreInfoMoviePage({match}) {
  const url = `http://api.themoviedb.org/3/movie/${match.params.id}?api_key=1537b19718735fa29971dd371049a10c&&language=pt-BR&append_to_response=videos`
  const [movieInfo, setmovieInfo] = useState([])
  const [movieVideoKey, setmovieVideoKey] = useState();
  const [loading, setLoading] = useState(true);



  const fetchMovie = async ()=>{
    const response = await fetch(url)
    const data = await response.json()
    setmovieInfo(data)
    console.log(movieInfo)
    if (data.videos.results.length > 0){
      setmovieVideoKey(data.videos.results[0].key)
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchMovie();
  },[])

  const formataData = (data)=>{
    const novaData = data.split("-");
    novaData.reverse();
    const novaDataFormatada= novaData.join("-");
    return novaDataFormatada
  }

  return (
    <div className="info-movie-page-wrapper">
      {loading 
      ? "Carregando" 
      :<div className="info-movie-page-main-column">
          <div className="info-content">
            <h1>{movieInfo.title}</h1>
            <img 
              src ={`https://image.tmdb.org/t/p/original/${movieInfo.backdrop_path}`}
              className="movie-info-poster"
            />
            <h2>{movieInfo.tagline}</h2>
            {  console.log(movieVideoKey)}
            <h4>Sinopse:</h4>
            <p className="sinopse">{movieInfo.overview}</p>
            <h4>Data de lançamento: {formataData(movieInfo.release_date)} </h4>
          </div>
        </div>
      }
      <div className="info-movie-page-aside-column">
        {movieVideoKey !== undefined 
            ?<iframe 
            className="movie-trailer"
            width="560" 
            height="315" 
            src = {`https://www.youtube.com/embed/${movieVideoKey}`}
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen="true">
          </iframe>
            :<div className="unavailable-video-message">Vídeo não disponível =(</div>
            }
          <Link 
            to='/' 
            className="info-page-button-container">
            <button>
              Voltar para página principal
            </button>
          </Link>
      </div>
     
    </div>
  )
}
