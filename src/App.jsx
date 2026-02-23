import React from 'react'
import NavBar from '../src/componentes/NavBar/NavBar'
import ItemListContainer from '../src/componentes/ItemListContainer/ItemListContainer'
import ItemCount from '../src/componentes/ItemCount/ItemCount'
import ItemDetailContainer from '../src/componentes/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>}/>
        <Route path='/categoria/:idCategoria' element={<ItemListContainer/>}/>
        <Route path='/item/:idItem' element={<ItemDetailContainer/>}/>
      </Routes>
      </BrowserRouter>

    </>
  )
}

export default App