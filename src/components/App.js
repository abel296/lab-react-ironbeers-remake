import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Home } from './pages/Home/Home'
import { Beers } from './pages/Beers/Beers';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/beers' element={ <Beers /> } />
    </Routes>
  )
}

export default App
