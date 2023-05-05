import React,{useState} from "react"
import { CREATE_HOSTEL,UPDATE_HOSTEL_BYID } from "../utils/Api"
import { useLocation, useNavigate } from "react-router-dom"


const AddHostel = () =>{

    const navigate = useNavigate()
    const { state } = useLocation()
    console.log(state)
    const details=
    {
        name:'',
        contact:'',
        email:'',
        location:'',
        facilities:''
    }

    const [data,setData] = useState(state || details)
    const onChangeHandler =(e)=>{setData({
        ...data,
        [e.target.name]:e.target.value
    })}
    const createHostel = async()=>{
        const response = await fetch(CREATE_HOSTEL,{
         method : 'POST',
 
         headers:{
            "Content-Type":"application/json"
         },
         body :JSON.stringify(data)
        })
         await response.json()
         navigate('/')
      }
    const submitHandler =(e)=>{
        //  e.preventDefault()
       
        createHostel()
        setData(details)
       
    }
    const updateHostelById = async(e)=>{
        e.preventDefault()
        console.log(data)
        const update = UPDATE_HOSTEL_BYID + data._id
       
        const response = await fetch(update,{
            method : 'PUT',
            headers:{
                "Content-Type":"application/json"
             },
             body :JSON.stringify(data)
            
        })
        await response.json()
        navigate('/registeredHostel')
        
    }
      
    
    return(
        
         <div className='formDiv'>
            <form className='form'>
              <label >Name :</label><input type='text' name='name'
                value={data.name}
                placeholder='enter hostel name'
                onChange={onChangeHandler}
                /><br/>
           <label >  Contact :</label><input type='text' name='contact'
                value={data.contact}
                placeholder='enter hostel contact'
               onChange={onChangeHandler}
                /><br/>
            <label >  Email :</label><input type='email' name='email'
               value={data.email}
                placeholder='enter hostel owner email'
                onChange={onChangeHandler}
                /><br/>
            <label > Location :</label><input type='text' name='location'
                 value={data.location}
                 placeholder='enter hostel location'
                 onChange={onChangeHandler}
                /><br/>
              <label > Facilities :</label><input type='text' name='facilities'
               value={data.facilities}
                placeholder='enter hostel facilities'
                onChange={onChangeHandler}
                /><br/>
                
                <button onClick={submitHandler} className='submitbtn'>submit</button>
              
             
            <button onClick={updateHostelById} className='updatebtn'>update</button>
            </form>
 
        </div>
    
       
    )
}
export default AddHostel