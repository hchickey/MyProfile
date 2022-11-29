import { useEffect, useState } from "react"
import { getAllWork } from "../../modules/basicManager"
import { Work } from "./Work"


export const WorkList = () => {
    const [works, setWork] = useState([])

    const getWork = () => {
        getAllWork().then(setWork)
    }

    useEffect(() => {
        getWork();
    }, [])

    return (
        <>
        <h2>Work History:</h2>
        <div className="container">
            <div className="row justify-content-center">
                {works.map((work) => (
                    <Work work={work} key={work.id} />
                ))}
            </div>
        </div>
        </>
    )
}