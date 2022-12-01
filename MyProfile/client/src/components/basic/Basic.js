import { Card, CardBody } from "reactstrap"
import "./basic.css"

export const Basic = ({basic}) => {
    return (
        <>
        <h1 className="name"><strong>{basic.name}</strong></h1>
        
                <div><img className="haleyImg" alt="me" src={basic.imageUrl}/></div>
                <p>Email: {basic.email}</p>
                <p>Phone: {basic.phone}</p>
                <p>A little about me... {basic.summary}</p>
        
        </>
    )
}