import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Descripcion from './Componets/info'
import Proyects from './Componets/proyects'
import Card from './Componets/card'

function App() {
  const [count, setCount] = useState(0)

  return (

       <>
       <Descripcion/>
       <Card/>
       </>
       
     
  )
}

export default App
