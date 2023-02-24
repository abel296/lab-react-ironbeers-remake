import { useEffect, useState } from "react"
import { BeerService } from "../../../service/beers.service"
import { Navigation } from "../../layout/Navigation"
import { BeerDetailsCard } from "./BeerDetailsCard"

export const BeerRandom = () => {
    const [randomBeer, setRandomBeer] = useState()

    const beerService = new BeerService()
    const getRandomBeerFromApi = async () => {
        const [response] = await (await beerService.getRandomBeer()).json()
        setRandomBeer(response)
    }

    useEffect(() => getRandomBeerFromApi(), [])

    return (
        <>
            <Navigation />
            { randomBeer && <BeerDetailsCard { ...randomBeer } /> }
        </>
    )
}