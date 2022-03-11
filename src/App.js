
import './styles/App.css'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";


import { Navbar } from './components/UI/Navbar/Navbar';
import { AppRouter } from './components/AppRouter';
const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  )
}


export default App