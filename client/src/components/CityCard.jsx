const CityCard = ({ city })=>{
    return(
        <div className="restaurant-card">
            <h2>{city.name}</h2>
            <h4>{city.state}</h4>
            <img scr={city.image} alt={city.image} />
        </div>
    )
}

export default CityCard
