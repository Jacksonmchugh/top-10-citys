import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

const CityForm = (props) => {
let navigate = useNavigate()
const handleSubmit = (e) => {
    props.addCity(e)
    navigate('/cities')

}

const newCity = props.newCity

return (
    <div>
        <h1>Add A New City</h1>
        <form onSubmit={ handleSubmit }>
            <input type="text" value={newCity.name} onChange={ props.handleChange} name={'name'} placeholder={'name'} />
            <input type="text" value={newCity.image} onChange={ props.handleChange} name={'image'} placeholder={'image'} />
            <input type="text-area" value={newCity.description} onChange={ props.handleChange} name={'description'} placeholder={'description'} />
            <input type="text" value={newCity.population} onChange={ props.handleChange} name={'population'} placeholder={'population'} />
            <button>Submit</button>
        </form>
    <Link to="/cities">Cities</Link>
    <Link to='/'>Home</Link>
    </div>
);
}

export default CityForm
