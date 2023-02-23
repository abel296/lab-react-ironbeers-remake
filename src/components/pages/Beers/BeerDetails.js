import { useParams } from "react-router-dom"
import { Navigation } from "../../layout/Navigation"
import { BeerDetailsCard } from "./BeerDetailsCard"

export const BeerDetails = ({ beerList }) => {
    const { id } = useParams()
    const beer = beerList && beerList.find(elm => Number(id) === elm.id)

    return (
        <>
            <Navigation />
                { beer && <BeerDetailsCard { ...beer } /> }
        </>
    )
}