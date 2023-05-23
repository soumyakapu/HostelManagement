import AddHostel from './AddHostel';
import Home from './Home';
import HostelRegistered from './HostelRegistered';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import NavBar from './Navbar';
import NotFound from './NotFound';


const Dashboard = ({status}) =>{
 
  const logoutHandler =() =>{
    status(false)
  }

 return(
    <div>
         <BrowserRouter>
      
      <NavBar/>
      <button onClick={logoutHandler} style={{textAlign:'center',marginLeft:'5%',width:'fit-content'}}>LogOut</button>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path='/registeredHostel' element={<HostelRegistered/>}></Route>
      <Route path='/addHostel' element={<AddHostel/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
 )
}
export default Dashboard