import { useEffect, useState } from "react"
import { getOneProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState (null)

  const {idItem}= useParams()

  useEffect(() => {
    getOneProduct(idItem)
    .then(respuesta => setProducto (respuesta))
  },[idItem])
  return (
    <div>
      {producto ? <ItemDetail {...producto}/> : <p>Cargando datos...</p>}
    </div>
  )
}



export default ItemDetailContainer