import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './components/login-signup/SignUp'
import LogIn from './components/login-signup/LogIn'
import Home from './components/home/Home'
import Prompt from './components/game/Prompt'



function App() {
  const [currentID, setCurrentID] = useState(0)

  const choiceClicked = (goTo) => {
    setCurrentID(goTo)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/' element={ <LogIn /> } />
        <Route path='/home' element={ <Home /> } />
        <Route path='/game' element={ <Prompt currentID={ currentID } choiceClicked={ choiceClicked } /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
