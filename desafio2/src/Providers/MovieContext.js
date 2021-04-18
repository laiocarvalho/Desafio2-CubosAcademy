import {useState, useEffect} from 'react';
import {createContainer} from 'unstated-next';
import json from './MovieGenders.json'

const MovieProvider = ()=>{

  const url= "https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR";
  const [movieInformation, setMovieInformation]= useState([]);
  const [top5Movies, setTop5Movies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topGenres, setTopGenres] = useState([]);
  const [genero, setgenero] = useState();
  const genreData = json.genres.find((el) => el.name === genero);

  const getGenre = ()=>{
    if(genero === 'Ação'){
        return "Ação";
    }else if(genero === 'Romance'){
        return "Romance";
    }else if(genero === 'Ficção científica'){
        return "Ficção científica";
    }else if(genero === 'Terror'){
        return "Terror";
    }
  }

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
        console.log(genero)
        console.log(genreData)
        console.log(movieInformation)
    });
},[getGenre()])

useEffect(()=>{
  if (genreData !== undefined) {
      fetch(`https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?with_genres=${genreData.id}&language=pt-BR`)
      .then((response)=>{
          return response.json();
      })
      .then((data)=>{
          setTopGenres(data.results);
      })
      console.log(`1 ${genero}`)
        console.log(genreData)
   }
},[getGenre()])

 return {loading,top5Movies,movieInformation,topGenres,genero,setgenero,getGenre}
}


export const MovieContainer = createContainer (MovieProvider);