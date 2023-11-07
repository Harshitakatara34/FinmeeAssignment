import React from 'react'
import  '../css/navbar.css'

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="leftdiv">
            <img style={{height:"50px",width:"150px"}} src="https://ntwist.com/wp-content/uploads/2021/12/ntwist-logo-dark.png"/>
        </div>
        <div className="rightdiv">
              <p>Home</p>
              <p>Industries</p>
              <p>AI Software </p>
              <p>Blog</p>
              <p>Contact Us</p>
              

        </div>
    </div>
  )
}
