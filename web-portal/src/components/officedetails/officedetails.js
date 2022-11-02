import React from "react";
import "./officedetails.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useForm} from "react-hook-form";



const Office = () => {
    const{register,formState:{errors},trigger}=useForm();
    const params = useParams();
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})
   

    const navigate = useNavigate()
    
    const[localdetails,setlocaldetails]=useState({})
    useEffect(()=>{
        if(stateemployeecode){
        axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
            const localdetailpersonal = res.data['office_details']
            setlocaldetails(localdetailpersonal)
            
           
            // setUser({
            //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
            // })
            
        })
        }
    },[])
     
  const saveandnext = () => {
    employee_code=stateemployeecode.employee_code
    let designation=document.getElementById('designation').value
    let doj=document.getElementById('doj').value
    let office_location=document.getElementById('office_location').value
    let official_email_id=document.getElementById('official_email_id').value
    // let reference_person_name=document.getElementById('reference_person_name').value
    let designation_of_person=document.getElementById('designation_of_person').value
    let how_do_you_know_about_this_job=document.getElementById('how_do_you_know_about_this_job').value

    const user= { employee_code,designation,doj,office_location,official_email_id,designation_of_person,how_do_you_know_about_this_job}
    if(designation && doj && office_location){
        axios.post("http://localhost:9002/officedetails", user)
        .then( res => {
            alert(res.data.message)
            navigate(`/previousemployment/${employee_code}`)
                 })
        console.log(user)
    } else {
        alert("invalid input : fill all the fields")
    }
    
}

const skip =()=>{
   

    navigate(`/previousemployment/${stateemployeecode.employee_code}`)
}




    
    return (
        <div>
            
    <div className="box"><h2 >Employee Office Details</h2></div>
        <div className="concat">
            <table>
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
                       Designation:
                    </td>
                    <td>
                        <select style={{width: "15em"}} name="designation"  id="designation">
                        <option style={{color:"red"}}>{localdetails?.designation}</option>    
                        <option>Designation</option>
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
                </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       DOJ:
                    </td>
                    <td>
                    <input style={{width: "15em"}} type="date" name="doj"  defaultValue={localdetails?.doj} id="doj"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Office Location:
                    </td>
                    <td>
                        <select style={{width: "15em"}} name="office_location"   id="office_location">
                        <option style={{color:"red"}}>{localdetails?.office_location}</option>
                        <option>Select</option>
                    <option>Noida</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    {/* <td>
                       Official Email ID:
                    </td>
                    <td>
                    <input style={{width: "15em"}} type="email" placeholder="fname.lname@dhurin.in" name="official_email_id"  defaultValue={localdetails?.official_email_id} id="official_email_id"></input>
                </td> */}
                
<label className="col-form-label">Official Email ID:</label>


<td> <input style={{width: "12em"}} name="official_email_id"  defaultValue={localdetails?.official_email_id} id="official_email_id"
type="email" placeholder="fname.lname@dhurin.in"
className={`form-control ${errors.email && "invalid"}`}
{...register("email", { required: "Required" ,
pattern: {
value: /^[a-z](\.?[a-z]){3,}@[Dd][Hh][Uu][Rr][Ii][Nn]\.in$/ ,
message: "Invalid email address",
}})}
onKeyUp={() => {
trigger("email");
}}
 />
 {errors.email && (
 <small className="text-danger">{errors.email.message}</small>
)}

  </td>


                </tr>
                </tbody>
                <tbody><tr>
                    {/* <td>
                       Reference Person Name:
                    </td>
                    <td>
                    <input style={{width: "15em"}} type="text" placeholder="Name of Person who referred you" name="reference_person_name" defaultValue={localdetails?.reference_person_name} id="reference_person_name"></input>
                </td> */}

                </tr>
                </tbody>
                <tbody><tr>
                <td>
                       Designation of the Person:
                    </td>
                    <td>
                        <select style={{width: "15em"}} name="designation_of_person"   id="designation_of_person">
                        <option style={{color:"red"}}>{localdetails?.designation_of_person}</option>
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
                    How do you get to<br></br>
                    know about this job:<br></br><br></br>
                </td>
                <td>
                <textarea rows="3" cols="50" placeholder="eg friends relatives colleagues etc" name="how_do_you_know_about_this_job"  defaultValue={localdetails?.how_do_you_know_about_this_job} id="how_do_you_know_about_this_job"></textarea><br></br>
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
            )
        } 
    
    
    
    
    export default Office