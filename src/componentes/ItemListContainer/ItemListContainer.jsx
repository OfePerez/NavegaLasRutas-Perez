import { useState, useEffect } from "react"
import { getProductos, getProductosPorCategoria } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import { useParams } from "react-router-dom"
const ItemListContainer = (props) => {
  const[productos, setProductos] = useState([])

  const {idCategoria} = useParams()

  useEffect(()=>{
    const funcionProductos = idCategoria ? getProductosPorCategoria : getProductos

    funcionProductos(idCategoria)
    .then(respuesta=> setProductos(respuesta))

  },[idCategoria])

  return (
    <>
      <h2>Instrumentos Musicales</h2>
      <ItemList productos={productos}/>
    </>
  )
}

export default ItemListContainer