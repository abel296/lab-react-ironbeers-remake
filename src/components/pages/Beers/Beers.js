import { Navigation } from "../../layout/Navigation"
import { BeersList } from "./BeersList"

export const Beers = ({ beerList }) => {
    return (
        <>
            <Navigation />
            <BeersList beerList={ beerList } />
        </>
    )
}