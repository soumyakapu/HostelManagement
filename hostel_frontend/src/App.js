

import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn ]= useState(false); 


  useEffect(() => {
  }, [isLoggedIn])


  function toggleTheme(event) {
    const theme = event.target.value;
    
    // Remove any existing theme classes from the body element
    document.body.classList.remove('white-theme', 'black-theme');
    
    // Add the selected theme class to the body element
    if (theme === 'white') {
      document.body.classList.add('white-theme');
    } else if (theme === 'black') {
      document.body.classList.add('black-theme');
    }
  }
  
  // Attach event listener to the theme radio buttons
  const themeRadios = document.querySelectorAll('input[name="theme"]');
  themeRadios.forEach(radio => {
    radio.addEventListener('change', toggleTheme);
  });
  return (
    <>
     {/* <p>Select your preferred theme:</p>
  <label>
    <input type="radio" name="theme" value="white"  onChange={toggleTheme}/> White
  </label>
  <label>
    <input type="radio" name="theme" value="black" onChange={toggleTheme}/> Black
  </label> */}
    <div>
      
    {isLoggedIn ? (
        <Dashboard status = {setIsLoggedIn}/>
      ) : (
        <LoginForm status ={setIsLoggedIn} />
      )}
      
    </div>
      </>
  );
}

export default App;
