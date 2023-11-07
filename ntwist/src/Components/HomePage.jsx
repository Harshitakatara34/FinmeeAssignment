import React from 'react'
import  "../css/homepage.css"
import iconimage from "../images/home-image-icons-v6.png"
export const HomePage = () => {
  return (
    <>
    
    <div className="homepage"
    >
    
    <div className="content">
        <h1>Data-powered solutions for Industrial Excellence</h1>
        <button style={{backgroundColor:"#007aff"}}>Read More</button>
    </div>

    {/* right div for image */}
    <div className="rightdiv">
        <img src={iconimage}alt='iconimage'/>
    </div>
     
    </div>
    </>
  )
}
