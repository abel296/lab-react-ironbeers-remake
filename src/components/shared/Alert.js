import { Toast } from "react-bootstrap"

export const Alert = ({ handleAlert, show, tittle, message }) => {
    return (
        <Toast autohide animation show={ show } delay={ 5000 } onClose={ () => handleAlert(false) }>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">{ tittle }</strong>
            </Toast.Header>
            <Toast.Body>{ message }</Toast.Body>
        </Toast>
    )
}