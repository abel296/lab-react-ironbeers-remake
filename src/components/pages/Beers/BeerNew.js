import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { BeerService } from "../../../service/beers.service"
import { Navigation } from "../../layout/Navigation"
import defaultImage from './keg.png'

export const BeerNew = ({ simulateNewBeerFromApi, listLength, handleAlert }) => {
    const [form, setForm] = useState({})
    const [id, setId] = useState(listLength)
    const navigate = useNavigate()
    const beerService = new BeerService()

    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const response = await beerService.createNewBeer(form)
            response.status === 200 && simulateNewBeerFromApi({ ...form, image_url: defaultImage, id: id + 1 })
            setId(id + 1)
            handleAlert(true, 'Info', 'New beer created successfully')
            navigate('/beers')
        } catch (error) {
            console.error(error)
        }
    }

    const handleInputChange = e => {
        const { name, value } = e.target
        const formData = { ...form, [name]: value }
        setForm(formData)
    }

    return (
        <>
            <Navigation />
            <Container className="d-flex flex-column align-items-center">
                <Form onSubmit={ e => handleSubmit(e) } className="col-8">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label column><strong>Name</strong></Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter name" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="tagline">
                        <Form.Label column><strong>Tagline</strong></Form.Label>
                        <Form.Control name="tagline" type="text" placeholder="Enter tagline" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label column><strong>Description</strong></Form.Label>
                        <Form.Control name="description" as="textarea" aria-label="With textarea" placeholder="Enter description" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="first_brewed">
                        <Form.Label column><strong>First_brewed</strong></Form.Label>
                        <Form.Control name="firstBrewed" type="text" placeholder="Enter first brewed" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="brewers_tips">
                        <Form.Label column><strong>Brewers_tips</strong></Form.Label>
                        <Form.Control name="brewersTips" type="text" placeholder="Enter brewers tips" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="attenuation_level">
                        <Form.Label column><strong>Attenuation_level</strong></Form.Label>
                        <Form.Control name="attenuationLevel" type="number" placeholder="Enter attenuation level (number)" onChange={ e => handleInputChange(e) } />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="contributed_by">
                        <Form.Label column><strong>Contributed_by</strong></Form.Label>
                        <Form.Control name="contributor" type="text" placeholder="Enter contributor" onChange={ e => handleInputChange(e) } />
                    </Form.Group>

                    <Button className="form-button" variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}