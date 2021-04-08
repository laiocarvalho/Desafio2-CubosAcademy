import './ConfirmData.css'
import React from 'react'
import {Link} from 'react-router-dom'

export default function ConfirmPurchase({disable}) {
  return (
    <div>
      <Link to="/page3">
        <button className="shoplist-confirm-purchase-button-style" disabled={disable}  > Confirmar Compra</button>
      </Link>
    </div>
  )
}
