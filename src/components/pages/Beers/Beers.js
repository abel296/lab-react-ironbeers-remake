import { useEffect, useState } from "react"
import { BeerService } from "../../../service/beers.service"
import { Navigation } from "../../layout/Navigation"
import { BeersList } from "./BeersList"

export const Beers = () => {
    const [beerList, setBeerList] = useState()

    const beerService = new BeerService()
    const getAllBeersFromApi = async () => setBeerList(await (await beerService.getAllBeers()).json())

    try {
        useEffect(() => getAllBeersFromApi(), [])
    } catch (error) {
        console.error(error)
    }

    return (
        <>
            <Navigation />
            <BeersList beerList={ beerList } />
        </>
    )
}