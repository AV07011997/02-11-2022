import React, { useState }  from "react";
import "./preview.css";
import { Navigate, useNavigate } from 'react-router-dom'
// import { useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom";
// import { useState } from "react"
import { useEffect } from "react";

  




 

 


const Review = () => {
    const params = useParams();
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})

    console.log(stateemployeecode)

const navigate=useNavigate()



const home=()=>{
    navigate("/")
}

const[details,setdetails]=useState({})

useEffect(()=>{
    
    axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
       
       console.log(res.data)
    setdetails(res.data)
  
    // console.log(details)        
       
        // setUser({
        //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
        // })
        
    })


},[])


const print=()=>{
    window.print()
}

    
    return (
        <div>
<div className="box"><h2>Detailed Preview</h2> </div>

{/* <div className="person"> */}
<span > 
      <button onClick={home} >Homepage</button>  
        
      </span> 
      <span style={{margin:"41.5em"}}></span>

      <span> 
      <button onClick={print} >Print or Save</button>  
        
      </span> 
      

    <div classname="heading"><h3 style={{paddingRight:"26.5em"}}>Personal Details</h3></div>
     
     <table>
        <tbody><tr>
            <td>
                Employee Code:
                </td>
                <td>
                {stateemployeecode['employee_code']}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Full Name:
                </td>
                <td>
                {details['personal_details']?.full_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Gender:
                </td>
                <td>
                {details['personal_details']?.gender}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Marital Status:
                </td>
                <td>
                {details['personal_details']?.marital_status}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Father's Name:
                </td>
                <td>
                {details['personal_details']?.fathers_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Mother's Name:
                </td>
                <td>
                {details['personal_details']?.mothers_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    
            <td>
                Mobile Number:
                </td>
                <td>
                {details['personal_details']?.contact_number}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    
                    <td>
                        Personal Email Id:
                        </td>
                        <td>
                        {details['personal_details']?.personal_email_id}
                        </td>
                        </tr>
                        </tbody>
                <tbody><tr>
            <td>
                DOB:
                </td>
                <td>
                {details['personal_details']?.dob}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Blood Group:
                </td>
                <td>
                {details['personal_details']?.blood_group}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Permanent Address:
                </td>
                <td>
                {details['personal_details']?.permanent_address}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                State:
                </td>
                <td>
                {details['personal_details']?.state_permanent}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                District:
                </td>
                <td>
                {details['personal_details']?.district_permanent}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Pincode:
                </td>
                <td>
                {details['personal_details']?.pincode_permanent}
                </td>
                </tr>
                </tbody>
               
                <tbody><tr>
            <td>
                Current Address:
                </td>
                <td>
                {details['personal_details']?.current_address}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                State:
                </td>
                <td>
                {details['personal_details']?.state_current}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                District:
                </td>
                <td>
                {details['personal_details']?.district_current}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Pincode:
                </td>
                <td>
                {details['personal_details']?.pincode_current}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Skype Id:
                </td>
                <td>
                {details['personal_details']?.skype_id}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Linkedin Handle:
                </td>
                <td>
                {details['personal_details']?.linked_handle}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Emergency Contact Person 1:
                </td>
                <td>
                {details['personal_details']?.emergency_contact_person}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Relationship:
                </td>
                <td>
                {details['personal_details']?.relationship}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Emergency Contact Number 1:
                </td>
                <td>
                {details['personal_details']?.emergency_contact_number}
                </td>
                </tr>
                </tbody>
              
            <tbody><tr>
            <td>
                Emergency Contact Person 2:
                </td>
                <td>
                {details['personal_details']?.emergency_contact_person2}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Relationship:
                </td>
                <td>
                {details['personal_details']?.relationship2}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Emergency Contact Number 2:
                </td>
                <td>
                {details['personal_details']?.emergency_contact_number3}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Are you a person with disability:
                </td>
                <td>
                {details['personal_details']?.disability}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Disability Type:
                </td>
                <td>
                {details['personal_details']?.disability_type}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Last Updated:
                </td>
                <td>
                {details['personal_details']?.last_updated}
                </td>
                </tr>
                </tbody>
                
            
        
     </table>
     {/* </div> */}
     <div className="document">
    <div classname="heading"><h3 style={{paddingRight:"26.5em"}}>Documentation Details</h3></div>
    <table>
    <tbody><tr>
            <td>
                Employee Code:
                </td>
                <td>
                {stateemployeecode['employee_code']}
                </td>
                </tr>
                </tbody>
        <tbody><tr>
            <td>
                Adhar Number:
                </td>
                <td>
                {details['documentation_details']?.aadhar_no}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               PAN Number:
                </td>
                <td>
                {details['documentation_details']?.pan_no}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Passport Number:
                </td>
                <td>
                {details['documentation_details']?.passport_no}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Place of Issue:
                </td>
                <td>
                {details['documentation_details']?.passport_issue_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Passport Issue Date:
                </td>
                <td>
                {details['documentation_details']?.passport_issue_date}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Passport Expiry Date:
                </td>
                <td>
                {details['documentation_details']?.passport_expiry_date}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Bank:
                </td>
                <td>
                {details['documentation_details']?.bank_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Branch:
                </td>
                <td>
                {details['documentation_details']?.branch}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
                Account Number:
                </td>
                <td>
                {details['documentation_details']?.bank_account_no}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               IFSC Code:
                </td>
                <td>
                {details['documentation_details']?.ifsc_code}
                </td>
                </tr>
                </tbody>
                
                

</table>
    </div>
    <div className="education">
    <div classname="heading"><h3 style={{paddingRight:"26.5em"}}>Education Details</h3></div>
<table>
<tbody><tr>
            <td>
                Employee Code:
                </td>
                <td>
                {stateemployeecode['employee_code']}
                </td>
                </tr>
                </tbody>
<tbody><tr>
            <td>
               Ph.D Field:
                </td>
                <td>
                {details['educational_details']?.phd_field}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Ph.D Reseach Topic:
                </td>
                <td>
                {details['educational_details']?.phd_research_topic}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               University:
                </td>
                <td>
                {details['educational_details']?.university}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Place:
                </td>
                <td>
                {details['educational_details']?.university_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Ph.D Tenure:<br></br><br></br>
                </td>
                <td>
                {details['educational_details']?.phd_tenure}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Master's Branch:
                </td>
                <td>
                {details['educational_details']?.pg_branch}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Master Degree University:
                </td>
                <td>
                {details['educational_details']?.pg_degree_university}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Place:
                </td>
                <td>
                {details['educational_details']?.pg_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Percentage/CGPA:<br></br><br></br>
                </td>
                <td>
                {details['educational_details']?.pg_precentage_cgpa}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Undergraduate Branch:
                </td>
                <td>
                {details['educational_details']?.ug_branch}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
              Undergraduate Degree University:
                </td>
                <td>
                {details['educational_details']?.ug_university}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Place:
                </td>
                <td>
                {details['educational_details']?.ug_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Percentage/CGPA:<br></br><br></br>
                </td>
                <td>
                {details['educational_details']?.ug_percentage_cgpa}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               12th Board:
                </td>
                <td>
                {details['educational_details']?.matriculation_board}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               If State Board:
                </td>
                <td>
                {details['educational_details']?.if_state_board}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
            School Name:
                </td>
                <td>
                {details['educational_details']?.matriculation_school_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Place:
                </td>
                <td>
                {details['educational_details']?.school_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Percentage/CGPA:<br></br><br></br>
                </td>
                <td>
                {details['educational_details']?.matriculation_percentage_cgpa}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               10th Board:
                </td>
                <td>
                {details['educational_details']?.intermediate_board}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               If State Board:
                </td>
                <td>
                {details['educational_details']?.intermediate_state_board_if}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
            School Name:
                </td>
                <td>
                {details['educational_details']?.intermediate_school_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Place:
                </td>
                <td>
                {details['educational_details']?.intermediate_school_place}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Percentage/CGPA:<br></br><br></br>
                </td>
                <td>
                {details['educational_details']?.intermediate_percentage_cgpa}
                </td>
                </tr>
                </tbody>
                



</table>
</div>
<div className="office">
    <div classname="heading"><h3 style={{paddingRight:"26.5em"}}>Office Details</h3></div>
<table>
<tbody><tr>
            <td>
                Employee Code:
                </td>
                <td>
                {stateemployeecode['employee_code']}
                </td>
                </tr>
                </tbody>
<tbody><tr>
            <td>
               Designation:
                </td>
                <td>
                {details['office_details']?.designation}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Date of Joining:
                </td>
                <td>
                {details['office_details']?.doj}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Office Location:
                </td>
                <td>
                {details['office_details']?.office_location}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Official Email Id:
                </td>
                <td>
                {details['office_details']?.offical_email_id}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Reporting Manager Name:
                </td>
                <td>
                {details['office_details']?.reference_person_name}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               Reporting Manager Designation:
                </td>
                <td>
                {details['office_details']?.designation_of_person}
                </td>
                </tr>
                </tbody>
                <tbody><tr>
            <td>
               How do you get to know about this job?:
                </td>
                <td>
                {details['office_details']?.how_do_you_know_about_this_job}
                </td>
                </tr>
                </tbody>
    </table>
    </div>
    <div className="prevemp">
    <div classname="heading"><h3 style={{paddingRight:"26.5em"}}>Previous Employment Details</h3></div>
<table>
<tbody><tr>
    <td>
     Company Name:
        </td>
        </tr>
        </tbody>
        <tbody><tr>
    <td>
     Designation:
        </td>
        </tr>
        </tbody>
        <tbody><tr>
    <td>
     Date of Joining:
        </td>
        </tr>
        </tbody>
        <tbody><tr>
    <td>
     Date of Leaving:
        </td>
        </tr>
        </tbody>
</table>
</div>

</div>  

)



        }
    
    
    
    
    export default Review