import { Card, CardBody } from "reactstrap"


export const Volunteer = ({volunteer}) => {
    return (
        <Card>
            <CardBody>
                <h2>{volunteer.organization}</h2>
                <p>{volunteer.sumary}</p>
            </CardBody>
        </Card>
    )
}