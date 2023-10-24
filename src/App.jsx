import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

const greeting = "Aquí encontraras una lista entera de todos nuestros productos disponibles:"

  return (
    <>
    <h1>Bienvenido a mi entrega #1 :</h1>
    <NavBar/>
    <ItemListContainer greeting  = {greeting}/>
    </>
  )
}

export default App
