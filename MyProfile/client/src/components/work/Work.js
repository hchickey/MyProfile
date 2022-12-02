import { Link } from "react-router-dom"
import { Card, CardBody } from "reactstrap"
import './work.css'

export const Work = ({work}) => {
    return (
        <>
        <div className="work">
        <Card>
            <CardBody>
                <h3>{work.company}</h3>
                <p>{work.position}</p>
                <p>
                    <a href= {work.website} target="_blank">View Website</a>
                </p>
                <p>{work.summary}</p>
                <footer>Start Date: {work.startDate}</footer>
                <footer>End Date: {work.endDate}</footer>
            </CardBody>
        </Card>
        <br/>
        </div>
        </>
    )
}