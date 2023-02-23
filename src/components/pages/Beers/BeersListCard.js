import { Link } from "react-router-dom"

export const BeersListCard = ({ image_url, name, tagline, id }) => {
    return (
        <tr>
            <td>
                <Link className="list-element" to={`/beers/${id}`}>
                    <img src={ image_url } alt={ name }></img>
                    <section className="body-list-card">
                        <h2>{ name }</h2>
                        <h5>{ tagline }</h5>
                        <small>Created by: { name }</small>
                    </section>
                </Link>
            </td>
        </tr>
    )
}