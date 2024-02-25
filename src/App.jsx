import React from 'react';
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  
  return (
    <>
      
      <BrowserRouter>

        <NavBar/>

        <Routes>
          
          <Route path='/' element={<ItemListContainer greeting={"Welcome to Store"}/>}/>

          <Route path='/categoria/:categoryId' element={<ItemListContainer/>}/>

          <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>

          <Route path='*' element={<Error/>}/>          

        </Routes>

        <Footer/>

      </BrowserRouter>

      {/* <ItemDetailContainer id={1}/> */}
    </>
  )
}

export default App
