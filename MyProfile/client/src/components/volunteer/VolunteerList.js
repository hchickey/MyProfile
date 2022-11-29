import { useEffect, useState } from "react"
import { getAllVolunteer } from "../../modules/basicManager"
import { Volunteer } from "./Volunteer"


export const VolunteerList = () => {
    const [volunteers, setVolunteer] = useState([])

    const getVolunteer = () => {
        getAllVolunteer().then(setVolunteer)
    }

    useEffect(() => {
        getVolunteer();
    }, [])

    return (
        <>
        <h2>Community Service:</h2>
        <div className="container">
            <div className="row justify-content-center">
                {volunteers.map((volunteer) => (
                    <Volunteer volunteer={volunteer} key={volunteer.id} />
                ))}
            </div>
        </div>
        </>
    )
}