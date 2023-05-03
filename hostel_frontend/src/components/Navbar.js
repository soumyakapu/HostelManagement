import { NavLink } from "react-router-dom"

const NavBar = () =>{
    return(
        <div className="nav">
            <NavLink to={'/'}>Home</NavLink>
           <NavLink to={'/registeredHostel'}>RegisteredHostel</NavLink>
           <NavLink to = {'/addHostel'}>RegisterHostel</NavLink>
        </div>
    )

}
export default NavBar