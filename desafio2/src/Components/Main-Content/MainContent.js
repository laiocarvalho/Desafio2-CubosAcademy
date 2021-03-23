import React, {useState, useEffect} from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import CardMovieList from '../CardMovie/CardMovieList/CardMovieList'
import CardMovieListAction from '../CardMovie/CardMovieListAction/CardMovieListAction'
import CardMovieListAll from '../CardMovie/CardMovieListAll/CardMovieListAll'
import Shoplist from '../Shoplist/Shoplist'
import './MainContent.css'


export default function MainContent() {
    
    const [check, setcheck] = useState(false)
    const [checkAction, setcheckAction] = useState(false)

  
 
    return (
        <div className="main-content-conteiner">
            <div className="main-content-column">
            <BannerPromocional/>
            <h3 className="main-content-titles">Top Filmes</h3>
            <CardMovieList/>
            <h3 className="main-content-titles">Filmes</h3>
            <ul className="main-content-genres-list">
                <input type="checkbox" class="main-content-genres-list-field" id="allmovies" />
                <label for="allmovies" class="main-content-genre-title" 
                    onClick={()=>{setcheck(!check)}}> Todos</label>
                      
                <input type="checkbox" class="main-content-genres-list-field" id="actionmovies" />
                <label for="actionmovies" class="main-content-genre-title"
                    onClick={()=>{setcheckAction(!checkAction)}}>Ação</label>

                <input type="checkbox" class="main-content-genres-list-field" id="romancemovies" />
                <label for="romancemovies" class="main-content-genre-title">Romance</label>

                <input type="checkbox" class="main-content-genres-list-field" id="fictionmovies" />
                <label for="fictionmovies" class="main-content-genre-title">Ficção</label>

                <input type="checkbox" class="main-content-genres-list-field" id="horrormovies" />
                <label for="horrormovies" class="main-content-genre-title">Terror</label>
            </ul>
            
            {check ? <CardMovieListAll /> :''}
            {checkAction ? <CardMovieListAction /> :''}

            </div>
            <div className="aside-column">
            <Shoplist/>
            </div>
        </div>
    )
}
