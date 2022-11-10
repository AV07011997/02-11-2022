import React from "react";
import "./section_page.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";



const Sectionpage = () => {
    const params = useParams();
    const {employee_code}=params;
    const [stateemployeecode,setstateemployeecode]=useState(employee_code)
    const navigate=useNavigate()


const personaldetails = () => {  
    if(stateemployeecode){    
    navigate(`/personaldetails/${stateemployeecode}`)}
    else{
        navigate(`/personaldetails`) 
    }
}

const documentation=()=>{
    navigate(`/documentation/${stateemployeecode}`)
}

const education=()=>{
    navigate(`/education/${stateemployeecode}`)
}
const previousemployment=()=>{
    navigate(`/previousemployment/${stateemployeecode}`)
}
const officedetails=()=>{
    navigate(`/officedetails/${stateemployeecode}`)
}


    
    return (
        <div> 
              <div className="box"><h2 >Section List</h2></div>
              <div className="container" style={{marginTop:"-1em",width:"91.3em"}}>
                <div><button type="submit" onClick={personaldetails} style={{width:"22em"}}>Employee Personal Details</button></div><br></br><br></br><br></br>
                <div><button type="submit" onClick={documentation} style={{width:"22em"}}>Employee Documentation Details</button></div><br></br><br></br><br></br>
                <div><button type="submit" onClick={education} style={{width:"22em"}}>Employee Education Details</button></div><br></br><br></br><br></br>
                <div><button type="submit" onClick={officedetails} style={{width:"22em"}}>Office Details</button></div><br></br><br></br><br></br>
                <div><button type="submit" onClick={previousemployment} style={{width:"22em"}}>Employee Previous Employment Details</button></div><br></br><br></br><br></br></div>
                
                
                 </div>)}
        export default Sectionpage