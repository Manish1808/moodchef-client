import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './component/signup';
import Signin from './component/signin';
import Home from './component/home';
import Navbar from './component/navbar';
import Navbaro from './component/navbaro';
import Empty from './component/empty';
import Footer from './component/footer';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<><Empty /><Navbar/></>} />
        <Route path="/signup" element={<><Signup /> <Navbaro/> <Footer /></>} />
        <Route path="/signin" element={<><Signin /><Navbaro/> <Footer /></>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App; 
