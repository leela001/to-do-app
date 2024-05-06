import './App.css';
import {Routes, Route} from "react-router-dom"
import Login from './LoginPage';
import Navbar from './Navbar';
import SignUpPage from './SignUpPage';
import HomePage from './HomePage'
import { AuthContextProvider } from './AuthContext';
import Logout from './Logout';
import Home from './Home';
import AboutPage from './AboutPage';

function App() {
  return (
    <div>
      <AuthContextProvider>
        <Navbar />
        {/* <Login /> */}
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUpPage />}/>
          <Route path='/todo' element={<HomePage />}/>
          <Route path='/logout' element={<Logout />} />
          <Route path='/about' element={<AboutPage />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
