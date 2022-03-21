
import './styles/App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";


import { Navbar } from './components/UI/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
import { AuthContext } from './context';
import { useEffect, useState } from 'react';
const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  })

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth
    }}>
      <BrowserRouter>
        <Navbar />
        <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  )
}


export default App