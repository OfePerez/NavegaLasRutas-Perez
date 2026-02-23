import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
    const imgCartWidget= "https://i.pinimg.com/736x/a2/77/73/a27773a7a4ddf8c6c1b43ae03f53c95e.jpg"
  return (
    <div>
        <img className ="imgCarrito"  src={imgCartWidget} alt="imagen de un carrito de compras" />
    </div>
  )
}

export default CartWidget