import { Card, CardBody } from "reactstrap"
import './skill.css'

export const Skill = ({skill}) => {
    return (
        <>
        <div className="skill">
        <Card>
            <CardBody>
                <h2>{skill.title}</h2>
                <p>{skill.level}</p>
                <footer>{skill.keyword}</footer>
            </CardBody>
        </Card>
        <br/>
        </div>
        </>
    )
}