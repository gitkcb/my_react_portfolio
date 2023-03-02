

function Footer() {
    return(
        <footer className="fixed-bottom">
            <div className="text-end" >
                <p className= "fs-5 me-5 mt-1">
                        <strong>My Full Stack Development Portfolio</strong> - a React site by{" "}
                        <a href = "https://github.com/gitkcb" target="_blank" rel="noreferrer" className="hyperlink">
                            Kevin Bell
                        </a>
                        </p>
                    <hr />
                    <p className= "fs-5 me-5">
                    <a href= "/www.linkedin.com/in/kcharlesbell" target="_blank" rel="noreferrer" className="hyperlink"> LinkedIn</a>
                    {" "}
                    |{" "}{" "}
                    <a href="mailto:kcharlesbell@gmail.com" target="_blank" rel="noreferrer" className="hyperlink">kcharlesbell@gmail.com</a>
                </p>
            </div>
            </footer>
    )
}
export default Footer