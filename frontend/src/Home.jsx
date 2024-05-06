import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import { AuthContext } from "./AuthContext";
import './index.css'

const Home = () => {

  const {userAuth} = useContext(AuthContext);

    return(
      <div>

        {userAuth.is_user_login && <h3 style={{padding: '25px', color: 'green'}}>Welcome @ {userAuth?.user_details?.name}</h3>}
        <div className="home-container">
          <h1>Welcome to Your To-Do Management List App</h1>
          <p>This is a simple to-do list application where you can manage your tasks efficiently.</p>
          {!userAuth.is_user_login && <Link to="/signup" className="link-tag">
            <button>Getting Started</button>
          </Link>}
        </div>
      </div>
    )

}

export default Home;