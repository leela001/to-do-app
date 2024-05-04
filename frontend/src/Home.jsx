import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {

    return(
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Your To-Do Management List App</h1>
            <p style={styles.description}>This is a simple to-do list application where you can manage your tasks efficiently.</p>
            <Link to="/signup" style={styles.link}>
                <button style={styles.button}>Getting Started</button>
            </Link>
        </div>
    )

}

const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px',
    },
    heading: {
      fontSize: '2rem',
      marginBottom: '20px',
    },
    description: {
      fontSize: '1.2rem',
      marginBottom: '30px',
    },
    link: {
      textDecoration: 'none',
    },
    button: {
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

export default Home;