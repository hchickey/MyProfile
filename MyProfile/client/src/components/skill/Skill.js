import { Card, CardBody } from "reactstrap"


export const Skill = ({skill}) => {
    return (
        <Card>
            <CardBody>
                <p>{skill.title}</p>
                <p>{skill.level}</p>
                <footer>{skill.keyword}</footer>
            </CardBody>
        </Card>
    )
}