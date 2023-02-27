import { useState } from "react"
import { Container, Pagination } from "react-bootstrap"
import { Navigation } from "../../layout/Navigation"
import { BeersList } from "./BeersList"

export const Beers = ({ beerList, apiError, handlePage }) => {
    const [activeItem, setActiveItem] = useState(1)
    const itemsToMap = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <Navigation />
            <Container>
                <Pagination>
                    { itemsToMap.map((elm, idx) => {
                        if (idx === 0) {
                            return (
                                <Pagination.Item key={ idx } active={ idx === activeItem } onClick={ e => {
                                    activeItem > 1 && setActiveItem(activeItem - 1)
                                    handlePage({ previous: true })
                                } } >Previous
                                </Pagination.Item>
                            )
                        } else if (idx > 0 && idx < 6) {
                            return (
                                <Pagination.Item key={ idx } active={ idx === activeItem } onClick={ () => {
                                    setActiveItem(idx)
                                    handlePage({ page: idx })
                                } } >{ idx }
                                </Pagination.Item>
                            )
                        } else if (idx === 6) {
                            return (
                                <Pagination.Item key={ idx } active={ idx === activeItem } onClick={ () => {
                                    activeItem < 5 && setActiveItem(activeItem + 1)
                                    handlePage({ next: true })
                                } } >Next
                                </Pagination.Item>
                            )
                        } else {
                            return undefined
                        }
                    }) }
                </Pagination>
                { !apiError ? <BeersList beerList={ beerList } /> : <><i>Ups, something went wrong showing the beers</i></> }
            </Container>
        </>
    )
}