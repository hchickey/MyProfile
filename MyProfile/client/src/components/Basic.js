import { Card, CardBody } from "reactstrap"
import "./basic.css"

export const Basic = ({basic}) => {
    return (
        <Card>
            <CardBody>
                <img className="haleyImg" alt="me" src={basic.imageUrl}/>
                <h1><strong>{basic.name}</strong></h1>
                <p>Email: {basic.email}</p>
                <p>Phone: {basic.phone}</p>
                <p>A little about me... {basic.summary}</p>
            </CardBody>
        </Card>
    )
}