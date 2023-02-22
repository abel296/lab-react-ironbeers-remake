import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const HomeCard = ({ homeImage, tittle, path }) => {
    return (
        <Link to={ path }>
            <Card>
                <Card.Img variant="top" src={ homeImage } />
                <Card.Body>
                    <Card.Title>{ tittle }</Card.Title>
                    <Card.Text >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis placerat dui quis imperdiet rutrum. Vivamus ut rutrum nisl.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}