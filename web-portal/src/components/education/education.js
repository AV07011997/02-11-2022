import React from "react";
import "./education.css";
import city from './../city.json';
import state from './../state.json';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import universitylist from './../universitylist.json';
import branches from './../branches.json';
import masterbranches from './../masterbranches.json';


const Education = () => {
    const params=useParams();
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})
    const navigate = useNavigate()
    
    const[localdetails,setlocaldetails]=useState({})

   
    useEffect(()=>{
        if(stateemployeecode){
        axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
            const localdetailpersonal = res.data['educational_details']
            setlocaldetails(localdetailpersonal)
            
           
            // setUser({
            //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
            // })
            
        })
        }
    },[])
     
  const saveandnext = () => {
    employee_code = stateemployeecode.employee_code
    let phd_field=document.getElementById('phd_field')?.value
    let phd_research_topic=document.getElementById('phd_research_topic')?.value
    let university=document.getElementById('university')?.value
    let university_place=document.getElementById('university_place')?.value
    let phd_tenure=document.getElementById('phd_tenure')?.value
    let pg_branch=document.getElementById('pg_branch')?.value
    let pg_degree_university=document.getElementById('pg_degree_university')?.value
    let pg_place=document.getElementById('pg_place')?.value
    let pg_percentage_cgpa=document.getElementById('pg_percentage_cgpa')?.value
    let ug_branch=document.getElementById('ug_branch').value
    let ug_university=document.getElementById('ug_university').value
    let ug_place=document.getElementById('ug_place').value
    let ug_percentage_cgpa=document.getElementById('ug_percentage_cgpa').value
    let matriculation_board=document.getElementById('matriculation_board').value
    let if_state_board=document.getElementById('if_state_board').value
    let matriculation_school_name=document.getElementById('matriculation_school_name').value
    let school_place=document.getElementById('school_place').value
    let matriculation_percentage_cgpa=document.getElementById('matriculation_percentage_cgpa').value
    let intermediate_board=document.getElementById('intermediate_board').value
    let intermediate_state_board_if=document.getElementById('intermediate_state_board_if').value
    let intermediate_school_name=document.getElementById('intermediate_school_name').value
    let intermediate_school_place=document.getElementById('intermediate_school_place').value
    let intermediate_percentage_cgpa= document.getElementById('intermediate_percentage_cgpa').value
    
    const user={employee_code,phd_field,phd_research_topic,university,university_place,phd_tenure,pg_branch ,pg_degree_university, pg_place,pg_percentage_cgpa,ug_branch,ug_university,ug_place, ug_percentage_cgpa,matriculation_board,if_state_board, matriculation_school_name,school_place,matriculation_percentage_cgpa,intermediate_board ,intermediate_state_board_if,intermediate_school_name,intermediate_school_place , intermediate_percentage_cgpa}
    
    if(employee_code && ug_branch && ug_university && ug_place &&  ug_percentage_cgpa && matriculation_board && if_state_board &&  matriculation_school_name && school_place && matriculation_percentage_cgpa && intermediate_board  && intermediate_state_board_if && intermediate_school_name && intermediate_school_place  &&  intermediate_percentage_cgpa){
        axios.post("http://localhost:9002/education", user)
        .then( res => {
            alert(res.data.message)
            navigate(`/officedetails/${employee_code}`)
            
            
            
        })
        console.log(user)
    } else {
        alert("invalid input : fill all the fields")
    }
    
}

const skip =()=>{
    navigate(`/officedetails/${stateemployeecode.employee_code}`)
}
   
    
    return (
        <div>
            <div className="box"><h2 >Employee Education Details</h2></div>
            <div className="contain" style={{marginTop: "-1em"}}>
            <table style={{paddingLeft: "5em"}}>
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
                        Phd Field:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="phd_field"  id="phd_field" >
                        <option>{localdetails?.phd_field}</option>
                    <option>Select</option>
                    <option>Humanities</option>
                    <option>Science</option>
                    <option>Commerce</option>
                    <option>Engineering</option>
                    <option>Business and Management</option>
                    <option>Law</option>
                    <option>Teaching and Education</option>
                    <option>Social Science</option>
                    <option>Medical</option>
                    <option>Other</option>
                    </select>
                    </td>
                    </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Phd Research Topic:
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="Research Topic" name="phd_research_topic"  defaultValue={localdetails?.phd_research_topic} id="phd_research_topic"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        University:
                    </td>
                    <td>
                    {/* <select name="university"  value={localdetails?.university} id="university">
                        <option>Select University</option>
                    
                    </select> */}
                    <select style={{width: "12em"}}   id="university" >
                        <option>{localdetails?.university}</option>

<option>University</option>

{

   universitylist.map((getuni,index)=>(

    <option  key={index}>{getuni.university}</option>

   ))



}



</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Place:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="university_place"  id="university_place"  >
                       <option>{localdetails?.university_place}</option>
                        <option>Place</option>
                        {
                           city.map((getcity,index)=>(
                            <option  key={index}>{getcity.city}</option>
                           ))
            
                        }
                    
                    </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Phd Tenure: <br></br><br></br>
                    </td>
                    <td>
                    <select  style={{width: "10em"}} name="phd_tenure"  id="phd_tenure" >
                        <option>{localdetails?.phd_tenure}</option>
                    <option> 0-3 Years</option>
                    <option>3-4 Years</option>
                    <option>4-5 Years</option>
                    <option>5-6Years</option>
                    <option>6-7Years</option>
                    <option>7+ Years</option>
                    </select><br></br><br></br>
                    </td>
                    </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Master's Branch:
                    </td>
                    <td>
                    {/* <input style={{width: "11.5em"}} type="text" placeholder="Branch Name" name="pg_branch"  id="pg_branch" defaultValue={localdetails?.pg_branch}></input> */}
                    <select style={{width: "10em"}} type="text" placeholder="Branch Name" name="pg_branch"  id="pg_branch" defaultValue={localdetails?.pg_branch}>

<option>Master Branch</option>

{

   masterbranches.map((getmbranch,index)=>(

    <option value={getmbranch.id} key={index}>{getmbranch.Branch}</option>

   ))



}



</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Master Degree University:
                    </td>
                    <td>
                    {/* <select name="pg_degree_university"  id="pg_degree_university" value={localdetails?.pg_degree_university}>
                        <option>Select University</option>
                    
                    </select> */}
                    <select style={{width: "12em"}}  name="pg_degree_university"  id="pg_degree_university"  >
                        <option>{localdetails?.pg_degree_university}</option>

<option>University</option>

{

   universitylist.map((getuni,index)=>(

    <option  key={index}>{getuni.university}</option>

   ))



}



</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Place:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="pg_place"   id="pg_place">
                        <option>{localdetails?.pg_place}</option>
                        <option>Place</option>
                        {
                           city.map((getcity,index)=>(
                            <option  key={index}>{getcity.city}</option>
                           ))
            
                        }
                    
                    </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Percentage/CGPA: <br></br><br></br>
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="Enter Percentage or CGPA" name="pg_percentage_cgpa"  id="pg_percentage_cgpa" defaultValue={localdetails?.pg_percentage_cgpa}></input><br></br><br></br>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Undergraduate Branch:
                    </td>
                    <td>
                    {/* <input style={{width: "11.5em"}} type="text" placeholder="Branch Name" name="ug_branch"  id="ug_branch" defaultValue={localdetails?.ug_branch}></input><span className="astrix" >*</span> */}
                    <select style={{width: "10em"}} type="text" placeholder="Branch Name" name="ug_branch"  id="ug_branch" defaultValue={localdetails?.ug_branch}>

<option>Select Branch</option>

{

   branches.map((getbranch,index)=>(

    <option value={getbranch.id} key={index}>{getbranch.Branch}</option>

   ))



}



</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Undergraduate Degree University:
                    </td>
                    <td>
                    {/* <select name="ug_university"  id="ug_university" value={localdetails?.ug_university} >
                        <option>Select University</option>
                    
                    </select> */}
                    <select style={{width: "12em"}} name="ug_university"  id="ug_university"  >
                        <option>{localdetails?.ug_university}</option>

<option>University</option>

{

   universitylist.map((getuni,index)=>(

    <option  key={index}>{getuni.university}</option>

   ))



}



</select> 
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Place:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="ug_place"  id="ug_place" >
                        <option>{localdetails?.ug_place}</option>
                        <option>Place</option>
                        {
                           city.map((getcity,index)=>(
                            <option  key={index}>{getcity.city}</option>
                           ))
            
                        }
                    
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Percentage/CGPA: <br></br><br></br>
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="Enter UG Percentage or CGPA" name="ug_percentage_cgpa" id="ug_percentage_cgpa" defaultValue={localdetails?.ug_percentage_cgpa}></input><span className="astrix" >*</span><br></br><br></br>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       12th Board:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="intermediate_board"   id="intermediate_board" >
                        <option>{localdetails?.intermediate_board}</option>
                        <option>State Board</option>
                        <option>CBSE</option>
                        <option>CISCE</option>
                        <option>ICSE</option>
                        <option>NIOS</option>
                        <option>International Baccalaureate (IB)</option>
                        <option>Cambridge International Examinations (CIE)</option>
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       If State Board:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="intermediate_state_board_if"  id="intermediate_state_board_if" >
                        <option>{localdetails?.intermediate_state_board_if}</option>
                        <option>Select State</option>
                        {
                           state.map((getstate,index)=>(
                            <option  key={index}>{getstate.state_name}</option>
                           ))
                            
                        }
                    </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       School Name:
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="School Name" name="intermediate_school_name"   id="intermediate_school_name" defaultValue={localdetails?.intermediate_school_name}></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Place:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="intermediate_school_place"  id="intermediate_school_place">
                        <option>{localdetails?.intermediate_school_place}</option>
                        <option>Place</option>
                        {
                           city.map((getcity,index)=>(
                            <option  key={index}>{getcity.city}</option>
                           ))
            
                        }
                    
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Percentage/CGPA: <br></br><br></br>
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="Enter 12th Percentage or CGPA" name="intermediate_percentage_cgpa"  id="intermediate_percentage_cgpa" defaultValue={localdetails?.intermediate_percentage_cgpa}></input><span className="astrix" >*</span><br></br><br></br>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       10th Board:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="matriculation_board"  id="matriculation_board" >
                        <option>{localdetails?.matriculation_board}</option>
                        <option>State Board</option>
                        <option>CBSE</option>
                        <option>CISCE</option>
                        <option>ICSE</option>
                        <option>NIOS</option>
                        <option>International Baccalaureate (IB)</option>
                        <option>Cambridge International Examinations (CIE)</option>
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       If State Board:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="if_state_board"   id="if_state_board" >
                        <option>{localdetails?.if_state_board}</option>
                        {
                           state.map((getstate,index)=>(
                            <option  key={index}>{getstate.state_name}</option>
                           ))
                            
                        }
                    </select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       School Name:
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="School Name" name="matriculation_school_name"  id="matriculation_school_name" defaultValue={localdetails?.matriculation_school_name}></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Place:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="school_place"  id="school_place">
                        <option>{localdetails?.school_place}</option>
                        {
                           city.map((getcity,index)=>(
                            <option  key={index}>{getcity.city}</option>
                           ))
            
                        }
                    
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td> 
                       Percentage/CGPA: <br></br><br></br>
                    </td>
                    <td>
                    <input style={{width: "11.5em"}} type="text" placeholder="Enter 10th Percentage or CGPA" name="matriculation_percentage_cgpa"  id="matriculation_percentage_cgpa" defaultValue={localdetails?.matriculation_percentage_cgpa}></input><span className="astrix" >*</span> <br></br><br></br>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                <td>
            <div className="camp">
            <div ><button type="submit" onClick={skip}>Skip</button></div>&nbsp;&nbsp;
            <div ><button type="submit" onClick={saveandnext}>Save and Next</button></div>
             </div>
             </td>
                </tr>
                </tbody>
                </table>
                </div>
        </div>
    )}
    export default Education
