import React, {useState, useEffect} from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import CardMovieListAll from '../CardMovie/CardMovieListAll/CardMovieListAll'
import Shoplist from '../Shoplist/Shoplist'
import './MainContent.css'


export default function MainContent() {
    const [genero, setgenero] = useState();
    const [checkAll, setcheckAll] = useState(false);
    const [cupomText, setcupomText] = useState("");
    const [shopList, setShopList] = useState([]);
    const arr = Array(5)
    console.log(arr)
    const onClickBanner = ()=>{
        setcupomText("HTMLNAOELINGUAGEM")
    }

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
    
    const addItem = () =>{
        setShopList('aa')
        console.log(shopList)
    }
    
    const changeGenre = event =>{
        const target = event.target
        const genero = target.value;     
        setgenero(genero)  
    }
   
    return (
        <div className="main-content-conteiner">
            <div className="main-content-column">
            <BannerPromocional onClick = { onClickBanner }/>
            <h3 className="main-content-titles">Top Filmes</h3>
            <CardMovieListAll listLength ={5}/>
            <h3 className="main-content-titles">Filmes</h3>
            <ul className="main-content-genres-list">
                <input type="radio" name="genreinput" class="main-content-genres-list-field" id="allmovies" value="Todos"
                onChange={changeGenre}/>
                <label for="allmovies" class="main-content-genre-title">Todos</label>

                <input type="radio" name="genreinput" class="main-content-genres-list-field" id="actionmovies" value="Ação"
                onChange={changeGenre}/>
                <label for="actionmovies" class="main-content-genre-title">Ação</label>

                <input type="radio" name="genreinput" class="main-content-genres-list-field" id="romancemovies" value="Romance"
                onChange={changeGenre}/>
                <label for="romancemovies" class="main-content-genre-title">Romance</label>

                <input type="radio" name="genreinput" class="main-content-genres-list-field" id="fictionmovies" value="Ficção Cientifica"
                onChange={changeGenre}/>
                <label for="fictionmovies" class="main-content-genre-title">Ficção Científica</label>

                <input type="radio"  name="genreinput" class="main-content-genres-list-field" id="horrormovies" value="Terror" 
                onChange={changeGenre}/>
                <label for="horrormovies" class="main-content-genre-title" >Terror</label>
            </ul>
            
           
           <CardMovieListAll genre ={ getGenre()} listLength ={20} />

            </div>
            <div className="aside-column">
            <Shoplist inputValue ={cupomText} shoplist ={shopList}/>
            </div>
        </div>
    )
}
