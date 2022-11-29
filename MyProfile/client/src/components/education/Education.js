import { Card, CardBody } from "reactstrap"


export const Education = ({education}) => {
    return (
        <Card>
            <CardBody>
                <h2>School: {education.school}</h2>
                <p>{education.area}</p>
                <p>{education.studyType}</p>
                <footer>{education.startDate}</footer>
                <footer>{education.endDate}</footer>
            </CardBody>
        </Card>
    )
}