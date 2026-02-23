import { useState, createContext } from "react";

const CarritoContext= createContext({
    carrito: [],
    total:0,
    cantidadTotal: 0
,})

export const carritoContext =()=>{

    const [carrito, setCarrito]= useState([])
    const [total, setTotal]= useState(0)
    const [cantidadTotal,setCantidadTotal]= useState(0)

    const agregarAlCarrito=(item,cantidad) =>{
        const productoExistente = carrito.find(productoExistente.item.id ===item.id)
        if (!productoExistente){
            setCarrito(prev=> [...prev, {item, cantidad}])
            setCantidadTotal(prev=> prev + cantidad)
            setTotal(prev=> prev + (item.precio*cantidad))
        }else{
            const carritoActualizado= carrito.map(prod=>{
                if(prod.item.id === item.id){
                    return{...prod, cantidad: prod.cantidad + cantidad}
                }else{
                    return prod
                }
            })
        }
    }

    return(
        <>
        </>
    )
}