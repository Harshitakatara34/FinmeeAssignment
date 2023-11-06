import { Heading } from '@chakra-ui/react'
import { Divider } from '@mui/material'
import {Typography} from '@mui/material'
import {Box,Grid,Stack} from '@mui/material'
import React from 'react'

const Section1 = () => {
  return (
    <>
 <div style={{height:"400px",width:"85%",marginTop:"600px",marginLeft:"180px",border:"10px solid red"}}>
    <div style={{height:"100px",width:"70%",border:"1px solid white",borderRadius:"40px",border:"10px solid green"}}>
    <div style={{margin:"auto",marginLeft:"100px"}}>
    <h1 style={{color:"white",fontSize:"20px"}}>Github Universe : Dive into AI,security ,and DevEx</h1>
<p style={{color:"grey",fontSize:"20px",lineHeight:"0px"}}>Get your tickets now to join us on 8-9</p>
   
    </div>
   
 </div>
<div style={{lineHeight:"50px",marginTop:"50px"}}>
<Heading color="white" fontSize={"80px"} marginTop="10px">Let's build from here</Heading>
<p style={{color:"grey",fontSize:"40px",marginTop:"0px"}}>
The AI-powered developer platform to build, scale, and deliver secure software.</p>

</div>
<div style={{display:"flex",justifyContent:"space-between"}}>
<div style={{ display: "flex", flexDirection: "row", width: "600px", height: "70px" }}>
  <div style={{ backgroundColor: "white", flex: "3", borderRadius: "5px" }}></div>
  <div style={{ backgroundColor: "#763FC6", flex: "1.5", borderTopRightRadius: "5px", borderBottomRightRadius: "5px", marginLeft: "-100px" }}></div>
</div>

<Divider/>
<div>
    <p>Start a free trial session</p>
</div>
</div>

<div style={{marginTop:"30px"}}>
<p style={{color:"grey",fontSize:"20px",paddingBottom:"0px",marginTop:"100px"}}>Trusted by the world’s leading organizations ↘︎</p>
<div style={{display:"flex",justifyContent:"space-between",height:"200px",width:"90%"}}>
<img  style={{height:"100px",width:"100px"}} src="https://github.githubassets.com/assets/stripe-e33f3c583b14.svg"/>
<img style={{height:"100px",width:"100px"}} src="https://github.githubassets.com/assets/pinterest-20e7451b691f.svg"/>
<img style={{height:"100px",width:"100px"}} src="https://github.githubassets.com/assets/kpmg-c249f20c5173.svg"/>
<img style={{height:"60px",width:"190px",marginTop:"20px"}} src="https://github.githubassets.com/assets/mercedes-fcf97d2d6ec4.svg"/>
<img style={{height:"100px",width:"130px"}} src="https://github.githubassets.com/assets/pg-f1f19955c4e4.svg"/>
<img style={{height:"100px",width:"130px"}} src="https://github.githubassets.com/assets/telus-df0c2109df99.svg"/>
</div>
</div>

<Heading marginTop={"100px"} color={"white"} fontSize={"40px"}>Productivity</Heading>
<Typography
              // className="maintext"
              variant="h2"
              width="75%"
              sx={{
                fontSize: { lg: "3rem", sm: "2rem", xs: "1.5rem"},
                color: "#7EE787",
                fontWeight: "450",
              }}
            >
              Accelerate high-quality software development.{" "}
              <span style={{ color: "white" }}>
              Our AI-powered platform drives innovation with tools that boost developer velocity.
              
              </span>
            </Typography>
           <img src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png"/>
    </div>
    
    </>
   
  )
}

export default Section1