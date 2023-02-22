import { Container } from "react-bootstrap"
import beers from './beers.png'
import newBeer from './new-beer.png'
import randomBeer from './random-beer.png'
import { HomeCard } from "./HomeCard"

export const Home = () => {
    return (
        <Container className="d-flex flex-column align-items-center">
            <section className="home">
                <HomeCard homeImage={ beers } tittle={ 'All Beers' } path={ '/beers' } />
                <HomeCard homeImage={ randomBeer } tittle={ 'Random Beer' } path={ '/random-beer' } />
                <HomeCard homeImage={ newBeer } tittle={ 'New Beer' } path={ '/new-beer' } />
            </section>
        </Container>
    )
}