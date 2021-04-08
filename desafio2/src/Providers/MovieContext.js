import {useState, useEffect} from 'react';
import {createContainer} from 'unstated-next';


const MovieProvider = ()=>{
  const [top5Movies, setTop5Movies] = useState([]);
  const [, setLoading] = useState(true);

  const getTop5 = async ()=>{
    const response = await fetch(`https://tmdb-proxy-workers.vhfmag.workers.dev/3/discover/movie?language=pt-BR`);
    const data = await response.json()
    setTop5Movies(data.results.slice(0,5));
    setLoading(false)
  }

 useEffect( () => {
    getTop5();
 },[])

 return {top5Movies, setTop5Movies}
}


export const MovieContainer = createContainer (MovieProvider);