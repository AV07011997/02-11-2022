import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Personaldetails from './components/personaldetailspage/personaldetails';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  nav,
  Link
} from "react-router-dom";
import Documentation from './components/documentation_details_page/documentation';
import Sectionpage from './components/section_page/section_page';
import Education from './components/education/education';
import Previousemployment from './components/previousemployment/previousemployment';
import Office from './components/officedetails/officedetails';
import Review from './components/review/review';




function App() {

  const [ user, setLoginUser] = useState({})
  
    return (
    <div className="App">
      <Router>
        {/* <nav>
          <Link to="/">Homepage</Link>
          <Link to="/login">Login</Link>
          <Link to="/personaldetails">Personaldetails</Link>
          <Link to="/documentation">Documentation</Link>
        </nav> */}
        
        
        <Routes>
          <Route exact path="/"element= {
              user? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }>
           
          </Route>
          <Route path="/login" element={<Login setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/personaldetails" element={<Personaldetails setLoginUser={setLoginUser} />} />
          <Route path="/personaldetails/:employee_code" element={<Personaldetails setLoginUser={setLoginUser} />} />
          

          <Route path="/documentation/:employee_code" element={<Documentation setLoginUser={setLoginUser}  />}>
            
          </Route>
          <Route path="/sectionpage/:employee_code" element={<Sectionpage setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/sectionpage" element={<Sectionpage setLoginUser={setLoginUser}/>}>
            
            </Route>
          
          <Route path="/education/:employee_code" element={<Education setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/previousemployment/:employee_code" element={<Previousemployment setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/officedetails/:employee_code" element={<Office setLoginUser={setLoginUser}/>}>
            
          </Route>
          <Route path="/review/:employee_code" element={<Review setLoginUser={setLoginUser}/>}>
            
          </Route>
                 
      </Routes>
      
      </Router>
    </div>
  );
}

export default App;