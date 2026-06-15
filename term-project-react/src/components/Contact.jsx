import { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleSubmit = (event) => {
        //stops the page from reloading
        event.preventDefault();

        //check whether the email ends with a dot followed by hard coded domains
         const emailEndingPattern = /\.(com|net|org|edu|gov|io)$/i;
         if (!emailEndingPattern.test(email)) {
            setEmailError("Please enter a valid email address.")
            return;
         }
         setEmailError("");
         setSuccessMessage("Your message has been received!");

         setName("");
         setEmail("");
         setMessage("");
    }

    return (
        <main>
            <h1>Contact Me</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Your Name:</label>
                    <br />
                    <input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Your Email:</label>
                    <br />
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    {emailError && (
                        <p className="email-error-message">
                            {emailError}
                        </p>
                    )}
                </div>

                <div>
                    <label>Your Message:</label>
                    <br />
                    <textarea
                        id="message"
                        rows="5"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        required
                    />
                </div>

                <button type="submit">
                    Submit
                </button>

            </form>
            {successMessage && (
                <p className="success-sending-message">
                    {successMessage}
                </p>
            )}
        </main>
    
    )
}