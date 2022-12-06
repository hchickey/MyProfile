import { Card, CardBody } from "reactstrap"
import './social.css'

export const Profile = ({profile}) => {
    return (
        <>
        <div className="social">
        <Card
        color="secondary"
        >
            <CardBody>
            <h2>{profile.network}</h2>
            <p>{profile.userName}</p>
            <p>{profile.url}</p>
            </CardBody>
        </Card>
        <br/>
        </div>
        </>
    )
}