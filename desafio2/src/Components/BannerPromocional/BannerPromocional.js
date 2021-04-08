import React, { useState,useEffect } from "react";
import banner from "../../Images/Banner.png";
import "./BannerPromocional.css";
import money from "../../Images/money.png";
import {ShoplistContainer} from '../../Providers/ShoplistContext'
import cupomIcon from '../../Images/cupom-icon.png'
import timerIcon from '../../Images/timer-icon.png'

export default function BannerPromocional () {
    const [visibility, setvisibility] = useState(true);
    const [textodocupom] = useState("HTMLNAOELINGUAGEM")
    const {onClickBanner} = ShoplistContainer.useContainer();
    const [segundos, setSegundos] = useState(59);
    const [minutos, setMinutos] = useState(3)

    const CountDown = () =>{
     if(visibility){
        setTimeout(()=>{
            if(segundos > 0){
                setSegundos(segundos-1);
            }
            if(segundos < 11 && segundos > 0){
                setSegundos(`0${segundos-1}`)
            }
            if(segundos === 0){
                if(minutos > 0){
                    setMinutos(minutos -1)
                    setSegundos(59);
                }else{
                   setvisibility(false) 
                }
            }
        },1000)
     }
        
      
}

    useEffect(() => {
       CountDown()
    },[segundos])
    
    return (
        <div>
            {visibility ? 
                <div className="banner-promocional">
                    <img className="banner-image" src={banner} alt="#" />
                    <img className="money-image" src={money} alt="#" />
                    <div className="banner-left-information">
                        <h2>Aproveite Agora</h2>
                       <div className="banner-left-cupomIcon-cupomText"> 
                            <img src={cupomIcon}/>
                            <h3>Cupom:  <span className="cupomtext" onClick={()=>{
                                setvisibility(!visibility);
                                onClickBanner(textodocupom);
                            }}>{textodocupom}</span></h3>
                        </div>
                    </div> 
                    <div className="banner-right-information">
                        <h2>Finaliza em:</h2>
                        <div className="banner-right-timerIcon-container">
                            <img src={timerIcon}/>
                            <span>
                            00:0{minutos}:{segundos}
                            </span>
                        </div>
                        
                    </div>            
                </div>
                : ''
            }
        </div> 
    )
  }

