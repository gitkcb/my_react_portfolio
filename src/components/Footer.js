

function Footer() {
    return(
        <footer className="">
            <div className="text-end" >
                <p className= "fs-5 me-5 mt-1">
                        <strong>My Full Stack Development Portfolio</strong> | {" "}
                        <a href = "https://github.com/gitkcb" target="_blank" rel="noreferrer" className="hyperlink">
                            Github
                        </a>
                        </p>
                    <hr />
                    <p className= "fs-5 me-5">
                    <a href= "https://linkedin.com/in/kcharlesbell" target="_blank" rel="noreferrer" className="hyperlink"> LinkedIn</a>
                    {" "}
                    |{" "}{" "}
                    <a href="mailto:kcharlesbell@gmail.com" target="_blank" rel="noreferrer" className="hyperlink">kcharlesbell@gmail.com</a>
                </p>
            </div>
            </footer>
    )
}
export default Footer