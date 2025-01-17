import React from 'react'

const NavBar = () => {
  return (
    <div>
        
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">STUDENT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/DeleteStudent">Delete</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/SearchStudent">Search</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link" href="/ViewStudent">View</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        
        
        
        
        
        </div>
  )
}

export default NavBar