import cvPic from "./images/cv pic.png"
import mailIcon from "./images/mail.png"
import linkedinIcon from "./images/linkedin.png"

export default function Info() {
    return(
        <div className="info">
            <img src={cvPic} alt="Gohar"/>
            <h1>Gohar Khaleyan</h1>
            <h4>Frontend Developer</h4>
            <p>goharkhaleyan.website</p>
            <div className="buttons">
                <button className="mail">
                    <img src={mailIcon} alt='' className="mailIcon"/>
                    E-mail
                </button>
                <button className="linkedin">
                    <img src={linkedinIcon} alt=''/>
                    Linkedin
                </button>
            </div>
        </div>
    )
}