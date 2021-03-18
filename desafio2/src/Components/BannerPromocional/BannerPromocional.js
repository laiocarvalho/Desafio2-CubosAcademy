import React from 'react'
import banner from '../../Images/Banner.png'
import './BannerPromocional.css';
import money from '../../Images/money.png'



export default function BannerPromocional () {
    return (
        <div className="banner-promocional">
           <img className="banner-image" src={banner} alt="#" />
           <img className="money-image" src={money} alt="#" />
            <div className="banner-titles-conteiner">
                <h2>Aproveite Agora</h2>
                <h3>Finaliza em:</h3>
                
            </div>
           
            <div className="banner-footer">
                
            </div>
        </div>
    )
}
