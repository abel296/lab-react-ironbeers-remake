import { Container, Table } from "react-bootstrap"
import { BeersListCard } from "./BeersListCard"

export const BeersList = ({ beerList }) => {
    return (
        <Container>
            <Table hover>
                <tbody>
                    { beerList && beerList?.map(elm => <BeersListCard { ...elm } key={ elm.id } />) }
                </tbody>
            </Table>
        </Container>
    )
}