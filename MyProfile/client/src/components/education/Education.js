import { Card, CardBody } from "reactstrap"
import './education.css'

export const Education = ({education}) => {
    return (
        <>
        <div className="education">
        <Card>
            <CardBody>
                <h2>{education.school}</h2>
                <p>Study:{education.area}</p>
                <p>{education.studyType}</p>
                <footer>{education.startDate}</footer>
                <footer>{education.endDate}</footer>
            </CardBody>
        </Card>
        <br/>
        </div>
        </>
    )
}