import { Card, CardBody } from "reactstrap"


export const Work = ({work}) => {
    return (
        <Card>
            <CardBody>
                <h3>{work.company}</h3>
                <p>{work.position}</p>
                <p>{work.website}</p>
                <p>{work.summary}</p>
                <footer>{work.startDate}</footer>
                <footer>{work.endDate}</footer>
            </CardBody>
        </Card>
    )
}