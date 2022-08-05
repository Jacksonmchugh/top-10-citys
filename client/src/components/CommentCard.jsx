import { useNavigate, Link } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"


const BASE_URL = 'http://localhost:3001'

const Comments = (props) => {
    let navigate = useNavigate()
    
  
    const [comment, setComment] = useState('')
  
    
    
    useEffect(() => {
      const getComments = async() => {
        console.log('get comments')
        let res = await axios.get(`${BASE_URL}/comments`)
          console.log(res.data)
          setComment(res.data)
        }
      getComments()
  }, [props.comment])
  
    return (
      <div className="cities-grid">
        
        
        { comment ? 
          comment.map((comment) => (
            <div className="city-card" >
              <h1>{comment.name}</h1>
              <h2>{comment.body}</h2>
              <h3>{comment.city}</h3>
            </div>
          ))
         : '' }
         
      </div>
    )
  }
  
  export default Cities