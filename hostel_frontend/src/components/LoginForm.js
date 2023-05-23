import { useState } from "react"
import { Link } from "react-router-dom";

const LoginForm = ({status}) =>{
  const[data, setData] = useState({
    username : '',
    password : ''
  });
  const [isValidUser, setIsValidUser] = useState(true)
  const [error, setError] = useState(true)
     const loginbtn =()=>{
        status(true)
    
    }
    const handlerChange = (event) =>{
        setData(event.target.value)
    }
     return(
        <div>
          	<title>Slide Navbar</title>
	<link rel="stylesheet" type="text/css" href="slide navbar style.css"/>
<link href="https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap" rel="stylesheet"></link>
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<label for="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>
        <div className="LoginForm">
        <label for="chk" aria-hidden="true">Login</label>
            {/* <label style={{color:'blueviolet'}}>UserName : </label> */}
             <input type="text"
              placeholder="Enter your name" 
              style={{color:'black'}}
             value={data.username}
             onChange={handlerChange}
             required=""
             /><br/>
             {/* <label style={{color:'blueviolet'}}>Password : </label> */}
             <form>
            <input type="password"
             placeholder="enter password"
             value={data.password}
             onChange={handlerChange}
             required=""
            /><br/>
            <button onClick={loginbtn} >Login</button>
            </form>
        </div>
        </div>
    )
}
export default LoginForm