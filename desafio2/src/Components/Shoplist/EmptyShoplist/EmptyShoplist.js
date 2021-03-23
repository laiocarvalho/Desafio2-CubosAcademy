import React from 'react'
import empty from '../../../Images/EmptyShoplist.png'
import './EmptyShoplist.css'
export default function EmptyShoplist() {
    return (
        <div className="empty-shoplist-conteiner">
        <div className="empty-shoplist-titles">
            <h2>Sua sacola está vazia</h2>
            <p>adicione filmes agora</p>
        </div>
        
        <img className="empty-shoplist-image"src={empty} alt="#" />
    </div>
    )
}
