
import React, {useState} from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import ConfirmData from '../Buttons/ConfirmData'
import CardMovieListAll from '../CardMovie/CardMovieListAll/CardMovieListAll'
import Shoplist from '../Shoplist/Shoplist'
import './MainContent.css'


export default function MainContent() {
    const [genero, setgenero] = useState();
   
    const getGenre = ()=>{
        if(genero === 'Ação'){
            return "Ação";
        }else if(genero === 'Romance'){
            return "Romance";
        }else if(genero === 'Ficção Cientifica'){
            return "Ficção científica";
        }else if(genero === 'Terror'){
            return "Terror";
        }
    }
    
    const changeGenre = event =>{
        const target = event.target
        const genero = target.value;     
        setgenero(genero)  
    }
    
    return (
        <div className="main-content-conteiner">
            <div className="main-content-column">
                <BannerPromocional/>
                <h3 className="main-content-titles">Top Filmes</h3>
                <CardMovieListAll listLength ={5} />
                <h3 className="main-content-titles">Filmes</h3>
                <div className="main-content-genres-list">
                    <input type="radio" name="genreinput" class="main-content-genres-list-field" id="allmovies"
                    value="Todos" onChange={changeGenre}/>
                    <label for="allmovies" class="main-content-genre-title">Todos</label>

                    <input type="radio" name="genreinput" class="main-content-genres-list-field" id="actionmovies"
                    value="Ação" onChange={changeGenre}/>
                    <label for="actionmovies" class="main-content-genre-title">Ação</label>

                    <input type="radio" name="genreinput" class="main-content-genres-list-field" id="romancemovies" 
                    value="Romance" onChange={changeGenre}/>
                    <label for="romancemovies" class="main-content-genre-title">Romance</label>

                    <input type="radio" name="genreinput" class="main-content-genres-list-field" id="fictionmovies" 
                    value="Ficção Cientifica" onChange={changeGenre}/>
                    <label for="fictionmovies" class="main-content-genre-title">Ficção Científica</label>

                    <input type="radio"  name="genreinput" class="main-content-genres-list-field" id="horrormovies"  
                    value="Terror" onChange={changeGenre}/>
                    <label for="horrormovies" class="main-content-genre-title" >Terror</label>
                </div>
                <CardMovieListAll genre = { getGenre()} listLength ={20} />
            </div>
            <div className="aside-column">
                <Shoplist  Botao={<ConfirmData/>}/>
            </div>
            </div>

  );
}
