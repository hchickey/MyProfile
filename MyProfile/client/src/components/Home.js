import "./home.css";

export const Home = () => {
    return (
        <>
            <section className="intro" id="home">
                <h1 className="homeHeader">
                    Hi, <p className="smile">😄</p> I am <strong className="name">Haley Hickey</strong>
                </h1>

                <p className="smallIntro">Developer | Video Editor | Traveler</p>
                <img className="haleyImg" alt="me" src="/profilePic/professionalPic.jpg"/>
            </section>

            <section className="myProjects" id="projects">
                <h2 className="projectsHeader">My Projects</h2>
                <div className="projects">
                    <div className="project">
                        <h3>TN SnoSlush</h3>
                        <img className="projImg" src="/profilePic/snoSlush.png" alt="capstone"/>
                        <p>An app to help users find snowcone places in Tennessee with the best flavors, the most reviews and the closest in location to the user.</p>
                    </div>

                    <div className="project">
                        <h3>World Cuisine</h3>
                        <img className="projImg" src="/profilePic/worldCuisine.png" alt="backend capstone" />
                        <p>An app to help users find recipes from all over the world. This app is perfect for users that travel so they can find some of their favorite recipes from countries they’ve visited in the past.</p>
                    </div>
                </div>
            </section>
        </>
    )
}