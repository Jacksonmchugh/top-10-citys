const CityCard = ({ city })=>{
    return(
        <div className="restaurant-card">
            <h2>{city.name}</h2>
            <h4>{city.state}</h4>
        </div>
    )
}

export default CityCard
