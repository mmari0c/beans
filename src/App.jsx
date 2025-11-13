import { useState } from 'react'
import { Link } from 'react-router'
import './App.css'

function App() {

  return (
    <div>
      <header>
        <h1>Welcome to the Beans Creator!</h1>
        <p>Here is where you can create your very own set of Beans before sending them off into Blunderdome.</p>
        <Link to="/create-bean">
          <button>Create your first bean!</button>
        </Link>
        {/* <img width={500} src="src/assets/fall-guys.png" alt="Fall Guys" /> */}
      </header>
    </div>

  )
}

export default App
