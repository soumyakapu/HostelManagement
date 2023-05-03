

import AddHostel from './components/AddHostel';
import Home from './components/Home';
import HostelRegistered from './components/HostelRegistered';
import {BrowserRouter,Routes,Route, Link} from 'react-router-dom'
import NavBar from './components/Navbar';

function App() {

  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/'element={<Home/>}></Route>
      <Route path='/registeredHostel' element={<HostelRegistered/>}></Route>
      <Route path='/addHostel' element={<AddHostel/>}></Route>
      </Routes>
      </BrowserRouter>
      
      </div>
  );
}

export default App;
