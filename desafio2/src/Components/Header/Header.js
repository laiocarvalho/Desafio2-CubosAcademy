import './Header.css'
import React from 'react'
import Logo from '../../Images/Logo.png'
import {BsSearch} from 'react-icons/bs'
import {MdFavoriteBorder} from 'react-icons/md'
import {AiOutlineDollarCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
        <div className="main-header">
            <div className="centraliza-main-header">
                <div>
                    <Link to="/"><img src={Logo} className="main-header-logo" alt="#"/></Link>
                    <div className="input-button-conteiner">
                    <input className="main-header-search-input"type="text" placeholder="Pesquise filmes.."/>
                    <button className="main-header-search-button"><BsSearch/></button>
                    </div>
                </div>
                <ul className="main-header-links">
                    <button className="botao-link"><li className=" favoritos-link"><MdFavoriteBorder /> Favoritos</li></button>
                    <button className="botao-link"><li className=" promocoes-link"><AiOutlineDollarCircle /> Promoções</li></button>
                </ul>

                <div className="main-header-profile-information">
                    <span>Bem vindo</span>
                    <img src="https://picsum.photos/200"  className="main-header-profile-image" alt="#"/>
                </div>
            </div>
            
        </div>
        
    )
}
