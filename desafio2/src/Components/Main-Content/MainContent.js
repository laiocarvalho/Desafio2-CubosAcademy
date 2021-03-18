import React, {useState, useEffect} from 'react'
import BannerPromocional from '../BannerPromocional/BannerPromocional'
import CardMovieList from '../CardMovie/CardMovieList/CardMovieList'
import Shoplist from '../Shoplist/Shoplist'
import './MainContent.css'


export default function MainContent() {
    
    
    return (
        <div className="main-content-conteiner">
            <div className="main-content-column">
            <BannerPromocional />
            <h3 className="main-content-titles">Top Filmes</h3>
            <CardMovieList/>
            <h3 className="main-content-titles">Filmes</h3>
            <CardMovieList/>
            
            
            
            </div>
            <div className="aside-column">
            <Shoplist></Shoplist>
            </div>
              
        </div>
    )
}
