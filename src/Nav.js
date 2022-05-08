const globe = "./images/globe.png"
export default function Nav() {
    return(
        <div className="nav">
            <div className="navContainer">
                <img src={globe} alt="globe"/>
                <span>my travel journal</span>
            </div>
        </div>
    )
};