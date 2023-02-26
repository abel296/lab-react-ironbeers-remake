import { Container } from "react-bootstrap"
import { Navigation } from "../../layout/Navigation"
import { BeersList } from "./BeersList"

export const Beers = ({ beerList, apiError }) => {
    return (
        <>
            <Navigation />
            <Container>
                { !apiError ? <BeersList beerList={ beerList } /> : <><i>Ups, something went wrong showing the beers</i></> }
            </Container>
        </>
    )
}