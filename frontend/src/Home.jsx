import React from "react";
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {

    return(
        <div className="home-container">
          <h1>Welcome to Your To-Do Management List App</h1>
          <p>This is a simple to-do list application where you can manage your tasks efficiently.</p>
          <Link to="/signup" className="link-tag">
            <button>Getting Started</button>
          </Link>
        </div>
    )

}

export default Home;