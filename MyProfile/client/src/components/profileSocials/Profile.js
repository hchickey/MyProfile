import { Card, CardBody } from "reactstrap"


export const Profile = ({profile}) => {
    return (
        <Card>
            <CardBody>
            <p>{profile.network}</p>
            <p>{profile.userName}</p>
            <p>{profile.url}</p>
            </CardBody>
        </Card>
    )
}