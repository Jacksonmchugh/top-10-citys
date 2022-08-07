function CityForm() {
    const initialState ={
        name: '',
        body:'',
        city: ''
        
        
    }
    const [comment, setComment]= useState({})
    
    const [formState, setFormState]=useState(initialState)
    useEffect(()=>{
        const getComment = async ()=>{
            try {
                let res = await axios.get('http://localhost:3001/commentform')
                console.log(res.data)
                setComment(res.data)
            } catch(eer) {
                console.log(eer)
            }
        }
        getComment()
    }, [])



    const handleChange = event =>{
        setFormState({...formState,[event.target.id]: event.target.value })
    }


    const handleSubmit = async (event)=>{
        event.preventDefault()
        console.log(formState)
        let res = await axios.post('http://localhost:3001/commentform',formState)
        console.log(res)
        setFormState(initialState)
    }


    return (
        <div className="form">
            <h1>Add A Comment</h1>
            <form onSubmit={ handleSubmit }>
            <input type="text" id='name' value={comment.name} onChange={ handleChange} name={'name'} placeholder={'Name'} />
            <input type="text" id='body' value={comment.body} onChange={ handleChange} name={'comment'} placeholder={'Comment'} />
            <input type="text" id='city' value={comment.city} onChange={ handleChange} name={'city'} placeholder={'City'} />
            
            
            
            
            <button type='submit'>Submit</button>
        </form>
        </div>
        )
    }
           
            
        
        
            
            
    
    export default CityForm
    