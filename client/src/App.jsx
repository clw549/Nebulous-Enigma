import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import axios from './api/axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserContext from './context/UserContext'
import SignUp from './components/login-signup/SignUp'
import LogIn from './components/login-signup/LogIn'
import Home from './components/home/Home'
import Prompt from './components/game/Prompt'



function App() {
  const [userData, setUserData] = useState({
    token: null,
    user: null
  })
  const [currentID, setCurrentID] = useState(localStorage.getItem('savedID') ? localStorage.getItem('savedID')
                                                                             : 0)

  // useEffect is a built-in React hook that runs every time a page is rendered
  useEffect(() => {
    // ^^ so login status is constantly checked with updateToken()
    const updateToken = async () => {
      let token = localStorage.getItem('auth-token')

      // no token, remove it from localStorage
      if (token === null) {
        localStorage.setItem('auth-token', '')
        token = ''
      }

      // otherwise get token from api
      const tokenResponse = await axios.post('/tokenIsValid',
        null,
        { headers: { 'x-auth-token': token } }
      )

      if (tokenResponse.data) {
        const userRes = await axios.get('/',
          { headers: { 'x-auth-token': token } }
        )

        setUserData({ token, user: userRes.data })

      } else {
        // set default values
        localStorage.setItem('name', 'Rook')
        localStorage.setItem('username', '')
        localStorage.setItem('savedID', 0)
      }

    }

    updateToken()

  }, [])

  const choiceClicked = async (goTo) => {
    setCurrentID(goTo)
  }

  // uses conditional statements to redirect user from login/signup to home page
  // unsure if this is ideal?
  return (
    <BrowserRouter>
      <UserContext.Provider value={ { userData, setUserData } }>
        <Routes>
          <Route path='/signup' element={ userData.token ? (<Home />)
                                                        : (<SignUp />) } />
          <Route path='/' element={ userData.token ? (<Home />)
                                                   : (<LogIn />) } />
          <Route path='/home' element={ userData.token ? (<Home />)
                                                   : (<LogIn />) } />
          <Route path='/game' element={ <Prompt key={ currentID } currentID={ currentID } choiceClicked={ choiceClicked } /> } />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App
