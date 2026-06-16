import { useState } from "react";

//use state for the form name, email, and message we want to display when the form is successfully
//submitted, or when there is an error with what the user specified for the email
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = (event) => {
    //stops the page from reloading
    event.preventDefault();
    //reset the form submit message when a user clicks submit
    setSuccessMessage("");
    setEmailError("");

    //check whether the email ends with a dot followed by hard coded domains
    const emailEndingPattern = /\.(com|net|org|edu|gov|io)$/i;
    if (!emailEndingPattern.test(email)) {
      //inform the user that they entered an incorrect email
      setEmailError("Please enter a valid email address.");
      return;
    }
    //if valid email, then set the message to be a successful one and clear error message just in case
    setEmailError("");
    setSuccessMessage("Your message has been received!");

    //reset the name, email, and message once the form successfully got submitted.
    setName("");
    setEmail("");
    setMessage("");
  };

  //when an input changes, set the name, email, or message accordingly
  //display the error or success message under the form
  return (
    <main>
      <h1 className="contact-title">Contact Me</h1>

      <div className="form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
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

          <button type="submit">Submit</button>
        </form>
      </div>
      {successMessage && (
        <p className="success-sending-message">{successMessage}</p>
      )}
      {emailError && <p className="email-error-message">{emailError}</p>}
    </main>
  );
}
