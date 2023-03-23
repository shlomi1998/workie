import React from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route,
 Link
} from 'react-router-dom';
import Home from './Home';
import NiceImage from './NiceImage';

function MyRouter() {
 return (
 <Router>
 <div>

 <Link to="/">Home</Link>
 
 <Link to="/image">Nice Image</Link>

 <Routes>

 <Route  path="/" element={<Home />}/>
 <Route  path="/image" element={<NiceImage />}/>


 </Routes>

 </div>
 </Router>


 );
}
export default MyRouter;

