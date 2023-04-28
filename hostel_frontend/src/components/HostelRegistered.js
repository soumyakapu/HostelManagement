import React, { useEffect, useState } from 'react'
import { CREATE_HOSTEL, GET_ALL_HOSTELS } from '../utils/Api';

const HostelRegistered =()=>{
    const details=
        {
            name:'',
            contact:'',
            email:'',
            location:'',
            facilities:''
        }
    
    const[hostels, setHostels] = useState([])
    const[data,setData] = useState(details)
    async function getHostelDetails (){
    const response = await fetch(GET_ALL_HOSTELS)
    const jsonData = await response.json()
    setHostels(jsonData)
       console.log(hostels)
    }
    const createHostel = async()=>{
       const response = await fetch(CREATE_HOSTEL,{
        method : 'POST',

        headers:{
           "Content-Type":"application/json"
        },
        body :JSON.stringify(data)
       })
       const jsonData = await response.json()
    //   setHostels(jsonData)
     }
    // 
    useEffect(()=>{     
        getHostelDetails()
    },[])

    const onChangeHandler =(e)=>{setData({
            ...data,
            [e.target.name]:e.target.value
        })}
    const submitHandler =(e)=>{
            e.preventDefault()
           
            createHostel()
            setData(details)
            // setHostels([...hostels,createHostel()])
        }
    
    return(
    <div>
        <h2>Registered Hostels</h2>
        <hr/>
        <div>
            {
                hostels.map((eachHostel)=>{
                    return(
                        <ul key={eachHostel.email}>
                        <li >
                            <div>{eachHostel.name}</div>
                            <div>{eachHostel.contact}</div>
                            <div>{eachHostel.email}</div>
                            <div>{eachHostel.location}</div>
                            <div>{eachHostel.facilities}</div> 
                        </li>
                        </ul>
                    )
                })
            }
            
        </div>
        <div>
            <form onSubmit={submitHandler}>
              <label >Name : </label><input type='text' name='name'
                value={data.name}
                placeholder='enter hostel name'
                onChange={onChangeHandler}
                /><br/>
           <label >  Contact : </label><input type='text' name='contact'
                value={data.contact}
                placeholder='enter hostel contact'
               onChange={onChangeHandler}
                /><br/>
            <label >  Email :  </label><input type='email' name='email'
               value={data.email}
                placeholder='enter hostel owner email'
                onChange={onChangeHandler}
                /><br/>
            <label > Location : </label><input type='text' name='location'
                 value={data.location}
                 placeholder='enter hostel location'
                 onChange={onChangeHandler}
                /><br/>
              <label > Facilities : </label><input type='text' name='facilities'
               value={data.facilities}
                placeholder='enter hostel facilities'
                onChange={onChangeHandler}
                /><br/>
                
                <button type='submit'>submit</button>
             
            </form>
        </div>
    </div>
   
    )
}
export default HostelRegistered;