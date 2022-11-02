import React from "react";
import "./previousemployment.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const Previousemployment = () => {

    const [showhide,setshowhide]=useState("")
    
  
    
    
    const handleshowhide=(e)=>{
        const getuser=e.target.value
        // console.log(getuser)
        setshowhide(getuser)
        
       }
    

   
























    
    const params=useParams();
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})
    
    const navigate = useNavigate()
   
    const[localdetails,setlocaldetails]=useState({})
    
    useEffect(()=>{
        if(stateemployeecode){
        axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
            const localdetailpersonal = res.data['previous_employee_details']
            setlocaldetails(localdetailpersonal)
            
           
            // setUser({
            //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
            // })
            
        })
        }
    },[])
     
  const saveandnext = () => {
    employee_code=stateemployeecode.employee_code
    // let last_company_name1=document?.getElementById('last_company_name1').value
    // let designation1=document?.getElementById('designation1').value
    // let doj1=document.getElementById('doj1').value
    // let dol1=document.getElementById('dol1').value
    // let last_company_name2=document.getElementById('last_company_name2').value
    // let designation2=document.getElementById('designation2').value
    // let doj2=document.getElementById('doj2').value
    // let dol2=document.getElementById('last_company_name1').value
    // let last_company_name3=document.getElementById('last_company_name3').value
    // let designation3=document.getElementById('last_company_name1').value
    // let doj3=document.getElementById('doj3').value
    // let dol3=document.getElementById('dol3').value
    // let last_company_name4=document.getElementById('last_company_name4').value
    // let designation4=document.getElementById('designation4').value
    // let doj4=document.getElementById('doj4').value
    // let dol4=document.getElementById('last_company_name1').value

    // let last_company_name5=document.getElementById('last_company_name5').value
    // let designation5=document.getElementById('designation5').value
    // let doj5=document.getElementById('doj5').value
    // let dol5=document.getElementById('dol5').value
    // const user={employee_code,last_company_name1,designation1,doj1,dol1, last_company_name2, designation2,doj2,dol2, last_company_name3,designation3,
    //     doj3,dol3,last_company_name4,designation4, doj4,dol4,last_company_name5,designation5,doj5,dol5}
    const user={}
        axios.post("http://localhost:9002/previousemployment", user)
        .then( res => {
            alert(res.data.message)
            navigate("/")
                 })
        // console.log(user)
   
    
}

const skip =()=>{
    navigate("/")

}
    
    return (
        <div>
    <div className="box"><h2 >Employee Previous Employment Details</h2></div>
        <div className="concat">
            <table>
            <tbody><tr>
                    <td>
                       Select number of experience you want to add:
                    </td>
                    <td>
                        <div >
                        <select  name="no_of_row" id="no_of_row" onChange={(e)=>{handleshowhide(e)}}>
                        {/* <option style={{color:"red"}}>{localdetails?.blood_group}</option> */}
                    <option>select</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>

                </select><span className="astrix" >*</span>
                
                </div>
                </td>
                </tr>
                </tbody>

            {
                showhide==="1" && (
                    <div>
                            <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                 <button>add</button>
                
                    </div>
                )
            }    

            {showhide==="2" && (
                <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
            )

            }             
            

            {
                showhide==="3" && (
                    <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
                )
            }

            {
                showhide==="4" && (
                    <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>  
                )
            }

          {
            showhide==="5" && (
                <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
            )
          }
         
         {
            showhide === "6" && (
                <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(6):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name6"  defaultValue={localdetails?.last_company_name1} id="last_company_name6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation6"  value={localdetails?.designation1} id="designation6">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj6" defaultValue={localdetails?.doj6} id="doj6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol6"   defaultValue={localdetails?.dol6} id="dol6"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
            )
         }
{
    showhide === "7" && (
        <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(6):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name6"  defaultValue={localdetails?.last_company_name1} id="last_company_name6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation6"  value={localdetails?.designation1} id="designation6">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj6" defaultValue={localdetails?.doj6} id="doj6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol6"   defaultValue={localdetails?.dol6} id="dol6"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(7):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name7"  defaultValue={localdetails?.last_company_name7} id="last_company_name7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation7"  value={localdetails?.designation7} id="designation7">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj7" defaultValue={localdetails?.doj7} id="doj7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol7"   defaultValue={localdetails?.dol7} id="dol7"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
    )
}



{
    showhide === "8" && (
        <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(6):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name6"  defaultValue={localdetails?.last_company_name1} id="last_company_name6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation6"  value={localdetails?.designation1} id="designation6">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj6" defaultValue={localdetails?.doj6} id="doj6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol6"   defaultValue={localdetails?.dol6} id="dol6"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(7):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name7"  defaultValue={localdetails?.last_company_name7} id="last_company_name7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation7"  value={localdetails?.designation7} id="designation7">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj7" defaultValue={localdetails?.doj7} id="doj7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol7"   defaultValue={localdetails?.dol7} id="dol7"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(8):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name8"  defaultValue={localdetails?.last_company_name8} id="last_company_name8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation8"  value={localdetails?.designation1} id="designation8">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj8" defaultValue={localdetails?.doj8} id="doj8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol8"   defaultValue={localdetails?.dol8} id="dol8"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
    )
}


{
    showhide === "9" && (
        <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(6):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name6"  defaultValue={localdetails?.last_company_name1} id="last_company_name6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation6"  value={localdetails?.designation1} id="designation6">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj6" defaultValue={localdetails?.doj6} id="doj6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol6"   defaultValue={localdetails?.dol6} id="dol6"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(7):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name7"  defaultValue={localdetails?.last_company_name7} id="last_company_name7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation7"  value={localdetails?.designation7} id="designation7">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj7" defaultValue={localdetails?.doj7} id="doj7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol7"   defaultValue={localdetails?.dol7} id="dol7"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(8):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name8"  defaultValue={localdetails?.last_company_name8} id="last_company_name8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation8"  value={localdetails?.designation1} id="designation8">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj8" defaultValue={localdetails?.doj8} id="doj8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol8"   defaultValue={localdetails?.dol8} id="dol8"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(9):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name9"  defaultValue={localdetails?.last_company_name9} id="last_company_name9"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation9"  value={localdetails?.designation9} id="designation9">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj9" defaultValue={localdetails?.doj9} id="doj9"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol9"   defaultValue={localdetails?.dol9} id="dol9"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
    )
}


{
    showhide === "10" &&(
        <div>
                    <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(1):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name1"  defaultValue={localdetails?.last_company_name1} id="last_company_name1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation1"  value={localdetails?.designation1} id="designation1">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj1" defaultValue={localdetails?.doj1} id="doj1"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol1"   defaultValue={localdetails?.dol1} id="dol1"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                     <tbody><tr>
                    <td>
                       Last Company Name(2):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name2"  defaultValue={localdetails?.last_company_name2} id="last_company_name2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation2"  value={localdetails?.designation2} id="designation2">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj2"  defaultValue={localdetails?.doj2} id="doj2"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol2"  defaultValue={localdetails?.dol2} id="dol2"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(3):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name3"  defaultValue={localdetails?.last_company_name3} id="last_company_name3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation3"  value={localdetails?.designation3} id="designation3">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj3"  defaultValue={localdetails?.doj3} id="doj3"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol3"  defaultValue={localdetails?.dol3} id="dol3"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(4):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name4"   defaultValue={localdetails?.last_company_name4} id="last_company_name4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation4"  value={localdetails?.designation4} id="designation4">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj4"   defaultValue={localdetails?.doj4} id="doj4"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol4"  defaultValue={localdetails?.dol4} id="dol4"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                       Last Company Name(5):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name5"   defaultValue={localdetails?.last_company_name5} id="last_company_name5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation5"  value={localdetails?.designation5} id="designation5">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj5"   defaultValue={localdetails?.doj5} id="doj5"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL: <br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol5"    defaultValue={localdetails?.dol5} id="dol5"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(6):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name6"  defaultValue={localdetails?.last_company_name1} id="last_company_name6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation6"  value={localdetails?.designation1} id="designation6">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj6" defaultValue={localdetails?.doj6} id="doj6"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol6"   defaultValue={localdetails?.dol6} id="dol6"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(7):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name7"  defaultValue={localdetails?.last_company_name7} id="last_company_name7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation7"  value={localdetails?.designation7} id="designation7">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj7" defaultValue={localdetails?.doj7} id="doj7"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol7"   defaultValue={localdetails?.dol7} id="dol7"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(8):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name8"  defaultValue={localdetails?.last_company_name8} id="last_company_name8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation8"  value={localdetails?.designation1} id="designation8">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj8" defaultValue={localdetails?.doj8} id="doj8"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol8"   defaultValue={localdetails?.dol8} id="dol8"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(9):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name9"  defaultValue={localdetails?.last_company_name9} id="last_company_name9"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation9"  value={localdetails?.designation9} id="designation9">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj9" defaultValue={localdetails?.doj9} id="doj9"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol9"   defaultValue={localdetails?.dol9} id="dol9"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>

                <tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode.employee_code}
                    </td>
                    </tr>
                </tbody>
            <tbody><tr>
                    <td>
                       Last Company Name(10):
                    </td>
                    <td>
                    <input type="text" placeholder="Company Name" name="last_company_name10"  defaultValue={localdetails?.last_company_name10} id="last_company_name10"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Designation:
                    </td>
                    <td>
                        <select name="designation10"  value={localdetails?.designation10} id="designation10">
                    <option>Business Analyst</option>
                    <option>Web Developer</option>
                    <option>Data Engineer</option>
                    <option>HR</option>
                    <option>Data Scientist</option>
                    <option>Risk Analyst</option>
                    <option>Finance Manager</option>
                    <option>Branch Head</option>
                    <option>CEO</option>
                    <option>Consultant</option>
                    <option>SME</option>
                    <option>IT Manager</option>
                </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input type="date" name="doj10" defaultValue={localdetails?.doj10} id="doj10"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOL:<br></br><br></br>
                    </td>
                    <td>
                    <input type="date" name="dol10"   defaultValue={localdetails?.dol10} id="dol10"></input><br></br><br></br>
                </td>
                </tr>
                </tbody>


                </div>
    )
}
            
                <tbody><tr>
                <td>
            <div className="camp">
            <div ><button type="submit" onClick={skip}>Skip</button></div>&nbsp;&nbsp;
            <div ><button type="submit" onClick={saveandnext}>Finish</button></div>
             </div>
             </td>
                </tr>
                </tbody>

            </table>
        





            </div>
            </div>
            )
        } 
    
    
    
    
    export default Previousemployment