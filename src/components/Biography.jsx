import bioImg from "../assets/biopic.jpg";
//display an image and paragraph about me for the biography
export default function Biography() {
    return (
        <main>
            <h1 className="bio-title">Biography</h1>

            <img src={bioImg} alt="biopic" className="biopic-img"/>
            <p className="bio-text">Hello! My name is Gregory. I am a student at the Metropolitan College at Boston University, pursuing a
                Master's degree in Software Development. I work full time as a Quality Assurance Automation Engineer at
                Johnson Controls. 
                
                In my free time, I enjoy watching sports like soccer and attending concerts.
                My hometown is Swampscott, Massachusetts, and I currently reside in the Greater Boston area. You can check out
                the interests page on my website for further information.

                I also have a Bachelor in Science degree from the University of Massachusetts Amherst studying Computer Science.
                I graduated in May 2023. 
            </p>
        </main>
    )
}