import { Table } from "react-bootstrap"

export const BeersList = ({ beerList }) => {
    return (
        <Table hover >
            <tbody>
                { beerList && beerList?.map(elm => <tr> <td> <img src={ elm.image_url } alt={ elm.name }></img>  { elm.name } </td> </tr>) }
            </tbody>
        </Table>
    )
}