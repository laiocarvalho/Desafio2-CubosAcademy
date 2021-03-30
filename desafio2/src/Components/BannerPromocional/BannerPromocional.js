import React, { useState } from "react";
import banner from "../../Images/Banner.png";
import "./BannerPromocional.css";
import money from "../../Images/money.png";

export default function BannerPromocional ({ onClick }) {
    const [visibility, setvisibility] = useState(true);
    const [textodocupom,settestodocupom] = useState("HTMLNAOELINGUAGEM")
    return (
        <div>
            {visibility ? 
                <div className="banner-promocional">
                    <img className="banner-image" src={banner} alt="#" />
                    <img className="money-image" src={money} alt="#" />
                    <div className="banner-left-information">
                        <h2>Aproveite Agora</h2>
                        <h3>Cupom:  <span className="cupomtext" onClick={()=>{
                            setvisibility(!visibility);
                            onClick(textodocupom);
                        }}>{textodocupom}</span></h3>
                    </div> 
                    <div className="banner-right-information">
                        
                    </div>            
                </div>
                : ''
            }
        </div> 
    )
  }

