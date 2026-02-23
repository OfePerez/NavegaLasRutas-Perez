import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import "./ItemDetail.css"
import { useState } from "react"


const ItemDetail = ({id, nombre, precio, img, stock}) => {

    const [agergarCantidad, setAgregarcantidad]= useState(0)

    const manejarCantidad= (cantidad)=>{

      setAgregarcantidad(cantidad)
    }

  return (
    <div className='contentItem'>
        <h2> {nombre}</h2>
        <h3> ARS $ {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={img} alt={nombre}/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, minus?</p>

        {
          agergarCantidad > 0 ? (<Link to="/cart"> terminar compra</Link>) : (<ItemCount inicial={1}stock={stock} funcionAgregar={manejarCantidad}/>)
        }
    </div>
  )
}

export default ItemDetail