import CityCard from '../components/CityCard'
const Cities = ({ cities }) => {
  return (
    <section className="page" id="city-list">
      <div className="flex">
        {cities.map((city) => (
          <div onClick={() => chooseCity(city)} key={city._id}>
            <CityCard city={city} />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Cities
