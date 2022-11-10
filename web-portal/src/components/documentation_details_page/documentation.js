import React, { useState } from "react";
import "./documentation.css";
import passportoffices from './../passportoffices.json';
import bank from './../banks.json'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {useForm} from "react-hook-form";
import { checks } from "../checksutility/checks";
import Test from "../testcomponent/test";



const Documentation = () => {
    const{register,formState:{errors},trigger}=useForm();
    // const [selectedFile, setSelectedFile] = useState();
	// const [isFilePicked, setIsFilePicked] = useState(false);

	// const changeHandler = (event) => {
	// 	setSelectedFile(event.target.files[0]);
	// 	setIsSelected(true);
	// };

	// const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	formData.append('File', selectedFile);

	// 	fetch(
	// 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	// };
	











    const params = useParams();
    
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})

    // console.log(employee_code)
    const navigate = useNavigate()
   

    const [image, setImage] = useState('')

  const handleChange = (e) => {
    console.log(e.target.files)
    setImage(e.target.files[0])
  }

  const handleApi = () => {
    //call the api
    const url = 'http://localhost:9002/api/image'

    const formData = new FormData()
    formData.append('image', image)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert(result.data.msg)
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
   
  const [image1, setImage1] = useState('')

  const handleChange1 = (e) => {
    console.log(e.target.files)
    setImage1(e.target.files[0])
  }

  const handleApi1 = () => {
    //call the api
    const url = 'http://localhost:9002/api/image1'

    const formData = new FormData()
    formData.append('image1', image1)
    axios.post(url, formData).then(result => {
      console.log(result.data)
      alert(result.data.msg)
    })
      .catch(error => {
        alert('service error')
        console.log(error)
      })
  }
   


  const[localdetails,setlocaldetails]=useState({})
    
  useEffect(()=>{
      if(stateemployeecode!=null){
      axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
          const localdetailpersonal = res.data['documentation_details']
          setlocaldetails(localdetailpersonal)
          
         
          // setUser({
          //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
          // })
          
      })
      }
  },[])









  const saveandnext = () => {
    employee_code=stateemployeecode.employee_code
    let aadhar_no,pan_no;
   if(errors.adhaar){ 
   alert('enter valid aadhar number')
}
else{
     aadhar_no=document.getElementById("aadhar_no").value
}


if(errors.pan)
{
    alert('enter valid pan no')
}
else{
    pan_no=document.getElementById("pan_no").value

}
   let passport_no=document.getElementById("passport_no").value
   let passport_issue_place=document.getElementById("passport_issue_place").value
   let passport_issue_date=document.getElementById("passport_issue_date").value
   let passport_expiry_date=document.getElementById("passport_expiry_date").value
   let bank_name=document.getElementById("bank_name").value
   let branch=document.getElementById("branch").value

   let bank_account_no=document.getElementById("bank_account_no").value
   let ifsc_code= document.getElementById("ifsc_code").value

   const user={employee_code,aadhar_no,pan_no,passport_no,passport_issue_place,passport_issue_date,passport_expiry_date,bank_name,branch,bank_account_no,ifsc_code}

    if( aadhar_no && pan_no && bank_name && bank_account_no && ifsc_code) {
        axios.post("http://localhost:9002/documentation", user)
        .then( res => {
            alert(res.data.message)
            navigate(`/education/${employee_code}`)
            
            
            
        })
        console.log(user)
    } else {
        alert("invalid input : fill all the fields")
    }
    
}

const skip =()=>{
    navigate(`/education/${stateemployeecode['employee_code']}`)
}
const obj={key:"Number",placeholder:"Enter Number"}


    
    return (<div>
    
    
    <div className="box"><h2 >Employee Documentation Details</h2></div>

<div className="contain" style={{marginTop: "-1em"}}>
<table style={{paddingLeft: "5em"}}>
<tbody><tr>
                    <td>
                        Employee Code:
                    </td>
                    <td>
                    {stateemployeecode['employee_code']}
                    </td>
                    </tr>
                </tbody>
                {/* <tbody><tr>
                    <td>
                        Adhaar Number:
                    </td>
                    <td>
                    <input type="text" placeholder="Enter Aadhaar" name="aadhar_no" defaultValue={localdetails?.aadhar_no} id="aadhar_no"></input><br></br>
                    </td>
                    </tr>
                    </tbody> */}
                    <tbody><tr>

<td>

<label className="col-form-label">Adhaar Number:</label>

</td>

<td>  <input  defaultValue={localdetails?.aadhar_no} id="aadhar_no" style={{width: "3.5em"}}

type="text" placeholder="23XX"

className={`form-control ${errors.adhaar && "invalid"}`}

{...register("adhaar", { required: "Required",


maxLength:{

    value:4,

    message: "Invalid Adhaar Number",

  },




pattern: {

   value: /([2-9]){1}([0-9]){3}$/,

  message: "Invalid Adhaar Number",

},



})}

onKeyUp={() => {

trigger("adhaar");

}}

/><span className="astrix" >*</span>

{errors.adhaar && (

<small className="text-danger">{errors.adhaar.message}</small>

)}
<input style={{width: "3.5em"}} defaultValue={localdetails?.aadhar_no} id="aadhar_no"

type="text" placeholder="23XX"

className={`form-control ${errors.adhar && "invalid"}`}

{...register("adhar", { required: "Required",

maxLength:{

value:4,

message: "Invalid Number",

},





pattern: {

   value: /([0-9]){4}$/,

  message: "Invalid Number",

},



})}

onKeyUp={() => {

trigger("adhar");

}}

/><span className="astrix" >*</span>

{errors.adhar && (

<small className="text-danger">{errors.adhar.message}</small>

)}
<input style={{width: "3.5em"}} defaultValue={localdetails?.aadhar_no} id="aadhar_no"

type="text" placeholder="23XX"

className={`form-control ${errors.adhar && "invalid"}`}

{...register("aadhar", { required: "Required",

maxLength:{

value:4,

message: "Invalid Number",

},





pattern: {

   value: /([0-9]){4}$/,

  message: "Invalid Number",

},



})}

onKeyUp={() => {

trigger("aadhar");

}}

/><span className="astrix" >*</span>

{errors.aadhar && (

<small className="text-danger">{errors.aadhar.message}</small>

)}




</td>

</tr>

</tbody>
                    
                    <tbody><tr>
                     <td>
                        Upload Adhaar:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="file" accept="application/pdf"  name="image"  onChange={handleChange} ></input><span className="astrix" >*</span><br></br>
                    <div className="button" ><button type="submit" onClick={handleApi} >Upload</button></div>
                    </td>
                    </tr>
                    </tbody>
                    
                    {/* <tbody><tr>
                    <td>
                        PAN:
                    </td>
                    <td>
                    <input type="text" placeholder="Enter PAN" name="pan_no"  defaultValue={localdetails?.pan_no} id="pan_no" ></input><br></br>
                    </td>
                    </tr>
                    </tbody> */}
                    <tbody><tr>

<td>

<label className="col-form-label">PAN Number:</label>

</td>

<td>  <input defaultValue={localdetails?.pan_no} id="pan_no" style={{width: "12em"}}

type="text" placeholder=" AAAAA9999A"

className={`form-control ${errors.pan && "invalid"}`}

{...register("pan", { required: "Required",



pattern: {

   value:  /([A-Z]){3}[PCTGFABLJH]([A-Z]){1}([0-9]){4}([A-Z]){1}$/,

  message: "Invalid PAN Number",

},



})}

onKeyUp={() => {

trigger("pan");

}}

/><span className="astrix" >*</span>

{errors.pan && (

<small className="text-danger">{errors.pan.message}</small>

)}





</td>

</tr>

</tbody>
                    <tbody><tr>
                     <td>
                        Upload PAN:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="file" accept="application/pdf" name="pan_card"  onChange={handleChange1} ></input><span className="astrix" >*</span><br></br>
                    <div className="button" ><button type="submit" onClick={handleApi1} >Upload</button></div>
                    </td>
                    </tr>
                    </tbody>
                    
                    {/* <tbody><tr>
                    <td>
                        Passport Number:
                    </td>
                    <td>
                    <input type="text" placeholder="Enter Passport Number" name="passport_no" defaultValue={localdetails?.passport_no} id="passport_no"></input><br></br>
                    </td>
                    </tr>
                    </tbody> */}
                    <tbody><tr>

<td>

<label className="col-form-label">Passport Number:</label>

</td>

<td>  <input defaultValue={localdetails?.passport_no} id="passport_no" style={{width: "12em"}}

type="text" placeholder=" AXXXXXXX"

className={`form-control ${errors.passport && "invalid"}`}

{...register("passport", { required: "Required",



pattern: {

   value:   /([A-PR-WY]){1}([1-9]){1}([0-9]){5}([1-9]){1}$/,

  message: "Invalid Passport Number",

},



})}

onKeyUp={() => {

trigger("passport");

}}

/>

{errors.passport && (

<small className="text-danger">{errors.passport.message}</small>

)}

</td>

</tr>

</tbody>
                    
                    <tbody><tr>
                    <td>
                        Place of Issue:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="passport_issue_place" id="passport_issue_place">
                    <option style={{color:"red"}}>{localdetails?.passport_issue_place}</option><br></br>
                        {
                           passportoffices.map((getcity,index)=>(
                            <option  key={index}>{getcity.name}</option>
                           ))
                            
                        }
                    </select>
                </td>
                </tr>
                </tbody>
                
                <tbody><tr>
                    <td>
                       Passport Issue Date:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="date" name="passport_issue_date" defaultValue={localdetails?.passport_issue_date} id="passport_issue_date"></input><br></br>
                </td>
                </tr>
                </tbody>
                
                <tbody><tr>
                    <td>
                    Passport Expiry Date:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="date" name="passport_expiry_date"   defaultValue={localdetails?.passport_expiry_date} id="passport_expiry_date"></input><br></br>
                </td>
                </tr>
                </tbody>
                
                <tbody><tr>
                    <td>
                        Bank:
                    </td>
                    <td>
                    <select style={{width: "12em"}} name="bank_name"  value={localdetails?.bank_name} id="bank_name">
                    <option style={{color:"red"}}>{localdetails?.bank_name}</option><br></br>
                        {
                           bank.map((getbank,index)=>(
                            <option  key={index}>{getbank.name}</option>
                           ))
                            
                        }
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>Branch</td>
                    <td>
                    <input style={{width: "12em"}} type="text" placeholder="Bank branch"  defaultValue={localdetails?.branch} name="branch" id="branch"></input><span className="astrix" >*</span><br></br>

                    </td>
                    </tr></tbody>
                
                <tbody><tr>
                    <td>
                        Bank Account Number:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="text" placeholder="Enter Bank Account Number"  defaultValue={localdetails?.bank_account_no} name="bank_account_no" id="bank_account_no"></input><span className="astrix" >*</span><br></br>
                    </td>
                    </tr>
                    </tbody>
                   
                    <tbody><tr>
                    <td>
                        IFSC Code:
                    </td>
                    <td>
                    <input style={{width: "12em"}} type="text" placeholder="Enter IFSC code" name="ifsc_code"  defaultValue={localdetails?.ifsc_code} id="ifsc_code"></input><span className="astrix" >*</span><br></br>
                    </td>
                    </tr>
                    </tbody>
                    
                    <tbody><tr>
                <td>
            <div className="camp"><br></br>
            <div ><button type="submit" onClick={skip} >Skip</button></div>&nbsp;&nbsp;
            <div ><button type="submit" onClick={saveandnext} >Save and Next</button></div>
            {/* <Test {...obj}>
    
</Test> */}
             </div>
             </td>
                </tr>
                </tbody>
                

                    </table>


    
</div>




    </div>
    )
}
    export default Documentation