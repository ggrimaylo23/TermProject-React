// use iframe to display a window inside webpage that shows PDF of my resume
export default function Resume() {
    return (
        <main>
            <h1 className="resume-title">Resume</h1>

            <iframe
                src="/resume.pdf"
                width="100%"
                height="800px"
                title="Resume"
            />
        </main>
    )
}