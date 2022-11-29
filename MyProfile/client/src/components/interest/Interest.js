import { Card, CardBody } from "reactstrap"


export const Interest = ({interest}) => {
    return (
        <Card>
            <CardBody>
                <p>{interest.hobby}</p>
            </CardBody>
        </Card>
    )
}