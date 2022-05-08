export default function Card({card}) {
    return(
        <div className="card">
            <img src={card.image} alt=''/>
            <div className="info">
                <div className="firstLine">
                    <span class="material-symbols-outlined">pin_drop</span>
                    <span className="location">{card.location}</span>
                    <a href={card.map} target='blank' className="map">View on Google Map</a>
                </div>
                <h2>{card.title}</h2>
                <span>{`${card.startDate} - ${card.endDate}`}</span>
                <span className="description">{card.description}</span>
            </div>
        </div>
    )
}