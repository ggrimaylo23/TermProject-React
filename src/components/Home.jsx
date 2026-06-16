import profilePicture from "../assets/barca-shirt.jpg"

// on home page, have a title, site image, and a short description of the website.
export default function Home() {
    return (
        <main>
            <h1 className="site-title">Gregory Grimaylo</h1>

            <img
                src={profilePicture}
                alt="Gregory Grimaylo"
                className="portfolio-image"
            />

            <h3 className="home-summary">
                My name is Gregory Grimaylo. I am student at the Metropolitan College at Boston Univeristy, pursuing a Master's Degree
                in Software Development. Please explore my portfolio page by following the various links on this page.
            </h3>

        </main>
    );
}