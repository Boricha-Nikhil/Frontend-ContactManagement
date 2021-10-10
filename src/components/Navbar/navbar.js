import React from 'react'
import {Link} from 'react-router-dom'

const NAVBAR = () => {
    return (
        <div>
             <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">
          Contact Book
        </Link>
        <div>
          <Link to="/add" className="btn btn-light ml-auto">
            Create Contact
          </Link>
        </div>
      </div>
    </nav>
        </div>
    )
}

export default NAVBAR
