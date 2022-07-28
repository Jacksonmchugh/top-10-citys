import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState, useEffect } from 'react'
function CityForm() {
    const [city, newCity]= useState([])
    const initialState ={
        Name: '',
        State:'',
        Populations: '',
        Image: '',
        Visits: '',
        Description:'',
        Likes: ''
    }
    const [formState, setFormState]=useState(initialState)
    useEffect(()=>{
        const getCity = async ()=>{
            try {
                let res = await axios.get('http://localhost:3001/cityform')
                console.log(res.data)
                newCity(res.data)
            } catch(eer) {
                console.log(eer)
            }
        }
        getCity()
    }, [])
    const handleChange = event =>{
        setFormState({...formState,[event.target.id]: event.target.value })
    }
const handleSubmit = async (event)=>{
    event.preventDefault()
    let res = await axios.post('http://localhost:3001/cityform',formState)
    console.log(res)
    setFormState(initialState)
}

    return (
        <div className="form">
            <h1>Add A New City</h1>
            <form onSubmit={ handleSubmit }>
            <input type="text" value={newCity.name} onChange={ handleChange} name={'name'} placeholder={'name'} />
            <input type="text" value={newCity.image} onChange={ handleChange} name={'image'} placeholder={'image'} />
            <input type="text-area" value={newCity.description} onChange={ handleChange} name={'description'} placeholder={'description'} />
            <input type="text" value={newCity.population} onChange={ handleChange} name={'population'} placeholder={'population'} />
            <button>Submit</button>
        </form>
            { city.map((city)=>(
                <div key={city._id}>
                    <h3>Name: {city.name}</h3>
                    <p>State: {city.state}</p>
                    <p>Populations: {city.population}</p>
                    <p>Image: {city.image}</p>
                    <p>Visits: {city.visits}</p>
                    <p>Description: {city.description}</p>
                    <p>Likes: {city.likes}</p>
                    </div>
            ))}
            
        <Link to="/cities">Cities</Link>
        <Link to='/'>Home</Link>
        </div>
        )
            }
    
    export default CityForm
    
    
    
    
    