import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { Home } from './pages/Home/Home'
import { Beers } from './pages/Beers/Beers';
import { BeerDetails } from './pages/Beers/BeerDetails';
import { useEffect, useState } from 'react';
import { BeerService } from '../service/beers.service';
import { BeerRandom } from './pages/Beers/BeerRandom';
import { BeerNew } from './pages/Beers/BeerNew';

function App() {
  const [beerList, setBeerList] = useState()

  const beerService = new BeerService()
  const getAllBeersFromApi = async () => setBeerList(await (await beerService.getAllBeers()).json())

  try {
    useEffect(() => getAllBeersFromApi(), [])
  } catch (error) {
    console.error(error)
  }

  const simulateNewBeerFromApi = newBeer => {
    setBeerList([...beerList, newBeer])
  }

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/beers' element={ <Beers beerList={ beerList } /> } />
      <Route path='/beers/:id' element={ <BeerDetails beerList={ beerList } /> } />
      <Route path='/random-beer' element={ <BeerRandom /> } />
      <Route path='/new-beer' element={ <BeerNew simulateNewBeerFromApi={ newBeer => simulateNewBeerFromApi(newBeer) } /> } />
    </Routes>
  )
}

export default App
