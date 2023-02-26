import { Table } from "react-bootstrap"
import { BeersListCard } from "./BeersListCard"

export const BeersList = ({ beerList }) => {
    return (
        <>
            <Table hover>
                <tbody>
                    { beerList ? beerList.map(elm => <BeersListCard { ...elm } key={ elm.id } />) : <i>Cargando</i> }
                </tbody>
            </Table>
        </>
    )
}