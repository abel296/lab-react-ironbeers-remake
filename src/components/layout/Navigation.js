import { Container, Navbar } from "react-bootstrap"
import { HiHome } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
    return (
        <>
            <Navbar bg="info">
                <Container className="d-flex flex-column align-items-center">
                    <Navbar>
                        <NavLink to={'/'}>
                            <HiHome className="icon-home" color="#ffffff" size={ '2rem' } />
                        </NavLink>
                    </Navbar>
                </Container>
            </Navbar>
        </>
    )
}