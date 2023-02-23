import { Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const BeerDetailsCard = ({ image_url, name, attenuation_level, first_brewed, tagline, description, contributed_by, id }) => {
    return (
        <Container>
            <Link className="list-element details-card" to={ `/beers/${ id }` }>
                <img src={ image_url } alt={ name }></img>
                <article className="body-list-card">
                    <article>
                        <h2>{ name }</h2>
                        <h2 className="attenuation">{ attenuation_level }</h2>
                    </article>
                    <article>
                        <h6 className="tagline">{ tagline }</h6>
                        <h6><strong>{ first_brewed }</strong></h6>
                    </article>
                    <article>
                        <h6 className='description'>{ description }</h6>
                    </article>
                    <article>
                        <strong><p className="contribiuted-by">{ contributed_by }</p></strong>
                    </article>
                </article>
            </Link>
        </Container>
    )
}