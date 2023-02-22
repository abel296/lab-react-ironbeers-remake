export const BeersListCard = ({ image_url, name, tagline }) => {
    return (
        <tr>
            <td className="list-element">
                <img src={ image_url } alt={ name }></img>
                <section className="body-list-card">
                    <h2>{ name }</h2>
                    <h5>{ tagline }</h5>
                    <small>Created by: { name }</small>
                </section>
            </td>
        </tr>
    )
}