import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"


export const Work = ({work}) => {
    return (
        <Card>
            <CardBody>
                <h3>{work.company}</h3>
                <p>{work.position}</p>
                <p>
                    <a href= {work.website} target="_blank">View Website</a>
                </p>
                <p>{work.summary}</p>
                <footer>{work.startDate}</footer>
                <footer>{work.endDate}</footer>
            </CardBody>
        </Card>
    )
}