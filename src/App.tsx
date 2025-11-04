import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Descripcion from './Componets/info'
import Card from './Componets/card'
import Tools from './Componets/tools'
import Contact from './Componets/contact'

function App() {
  const [count, setCount] = useState(0)

  return (

       <>
       <Descripcion/>
       <Card/>
       <Tools/>
       <Contact/>
       </>
       
     
  )
}

export default App
