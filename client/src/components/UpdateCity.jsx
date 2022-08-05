
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

import { useState, useEffect } from 'react'

function UpdateCity() {
    const initialState ={
        name: '',
        state:'',
        image: '',
        visits: '',
        population: '',
        description:''
        
    }
    const [city, setCity]= useState({})
    
    const [formState, setFormState]=useState(initialState)
    useEffect(()=>{
        const editCity = async ()=>{
            try {
                let res = await axios.get(`http://localhost:3001/updatecity`)
                console.log(res.data)
                setCity(res.data)
            } catch(eer) {
                console.log(eer)
            }
        }
        editCity()
    }, [])
  
  
  
    const handleChange = event =>{
        setFormState({...formState,[event.target.id]: event.target.value })
    }
   
  
    const handleUpdate = async (event)=>{
        event.preventDefault()
        console.log(formState)
        let res = await axios.post('http://localhost:3001/updatecity',formState)
        console.log(res)
        setFormState(initialState)
    }
    return (
        <div className="form">
            <h1>Update City</h1>
            <form onSubmit={ handleUpdate }>
            <input type="text" id='name' value={city.name} onChange={ handleChange} name={'name'} placeholder={'name'} />
            <input type="text" id='state' value={city.state} onChange={ handleChange} name={'state'} placeholder={'state'} />
            <input type="text" id='image' value={city.image} onChange={ handleChange} name={'image'} placeholder={'image'} />
            <input type="text-area" id='description' value={city.description} onChange={ handleChange} name={'description'} placeholder={'description'} />
            <input type="text" id='population' value={city.population} onChange={ handleChange} name={'population'} placeholder={'population'} />
            <input type="text" id='visits' value={city.visits} onChange={handleChange} name={'visits'} placeholder={'visits'} />
            
            <button type='submit'>Update</button>
        </form>
           
            
        
        </div>
        )
  }
  export default UpdateCity