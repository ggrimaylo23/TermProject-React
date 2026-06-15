import { Link } from "react-router-dom"
import profilePicture from "../assets/barca-shirt.jpg"

export default function Home() {
    return (
        <main>
            <h1>Gregory Grimaylo</h1>

            <img
                src={profilePicture}
                alt="Gregory Grimaylo"
                className="portfolio-image"
            />

            <p>
                My name is Gregory Grimaylo. I am student at the Metropolitan College at Boston Univeristy, pursuing a Master's Degree
                in Software Development. Please explore my portfolio page by following the various links on this page.
            </p>

            <div className="portfolio-links">
                <Link to="/biography" className="home-card">
                    Biography
                </Link>

                <Link to="/interests" className="home-card">
                    Interests
                </Link>

                <Link to="/gallery" className="home-card">
                    Photo Gallery
                </Link>

                <Link to="/resume" className="home-card">
                    Resume
                </Link>

                <Link to="/contact" className="home-card">
                    Contact Me
                </Link>
            </div>
        </main>
    );
}