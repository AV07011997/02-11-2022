import React from "react"
import "./personaldetails.css"   
import {useForm} from "react-hook-form";

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
// import state from "./../state.json"
import disability from "./../disability.json"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import newpin from "./../newpin.json"




const Personaldetails = ({}) => {


    const[empcode,setemployeecode]=useState()


 

    // const[stateid, setStateid]=useState('');
    // const[district, setDistrict]=useState([]);
    // const[districtid, setDistrictid]= useState('');
    const{register,formState:{errors},trigger}=useForm();
    



    // const handlestate=(e)=>{
    //     const getstateid= e.target.value;
    //     console.log(e.target.value);
    //     //console.log(state.find(state=>state.state_id==getstateid).districts);
    //     const getDistrictdata= (state.find(state=>state.state_id==getstateid)).districts;
    //     setDistrict(getDistrictdata);
    //     setStateid(getstateid);
        
      
    // }
    // const handledistrict = (e)=>{
    //     const districtid= e.target.value;
    //     setDistrictid(districtid);

    // }
    const[state,setState]= useState([]);

    const[district,setDistrict]=useState([]);
    
      const[pin,setPin]=useState([]);
    
      
    
      function getUnique(a){
    let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
    
    return unique;
    
    }
    
     function getUniquestate(newpin){
    
    let temp=[]
    
    for(let x of newpin){
    
    //    console.log(x) 
    
    temp.push(x.state_name)
    
    
    
    
   }
    
   const y=getUnique(temp)
    
    return y
    
     }
    
    function getUniquedistricts(newpin,dt){
    
     let mark=[]
    
     for(let k of dt){
    
     mark.push(k.district_name)
    
    }
    
     const j=getUnique(mark)
    
     return j
    
     
    
    
    
     }
    
     
    
    
    
     useEffect(()=>{
    
     setState(getUniquestate(newpin));
    
     },[])
    

    
     const handleState=(district_id)=> {
    
     const dt=(newpin.filter(x=>x.state_name==district_id));
    
      
    
     
    
     setDistrict(getUniquedistricts(newpin,dt));
    
      
    
     }
    
     const handleDistrict=(pin_id)=> {
    
      const kt=(newpin.filter(x=>x.district_name==pin_id));
    
     
    
   setPin(kt);
    
     }














    const params = useParams();
    var {employee_code}=params;
    var [stateemployeecode,setstateemployeecode]=useState({employee_code})
    const [showhide,setshowhide]=useState("")
    const [showhide1,setshowhide1]=useState("")
    const [showhide2,setshowhide2]=useState("")
   const handleshowhide=(e)=>{
    const getuser=e.target.value
    // console.log(getuser)
    setshowhide(getuser)
    // console.log(showhide)
   }
   const handleshowhide1=(e)=>{
    const getuser=e.target.value
    // console.log(getuser)
    setshowhide1(getuser)
   }
   const handleshowhide2=(e)=>{
    const getuser=e.target.value
    // console.log(getuser)
    setshowhide2(getuser)
   }
    

    // useEffect(()=>{
    //     axios.post("http://localhost:9002/details",stateemployeecode)
    //     .then( res => {
    //         alert(res.data.message)
    //         const a={}
    //         a.push(res.data)
    //              })
    // })
    
    
    const navigate = useNavigate()

    
    
    const[localdetails,setlocaldetails]=useState({})
    
    useEffect(()=>{
        if(stateemployeecode){
        axios.post("http://localhost:9002/details",stateemployeecode).then(res=>{
            const localdetailpersonal = res.data['personal_details']
            setlocaldetails(localdetailpersonal)
            console.log(localdetailpersonal)
            
           
            // setUser({
            //     employee_code:stateemployeecode['employee_code'],full_name:localdetails['Personal Details'].full_name,gender:localdetails.gender,marital_status:localdetails.marital_status,fathers_name:localdetails.fathers_name,mothers_name:localdetails.mothers_name,contact_number:localdetails.contact_number,personal_email_id:localdetails.personal_email_id,dob:localdetails.dob,blood_group:localdetails.blood_group,permanent_address:localdetails.permanent_address
            // })
            
        })
        }
    },[]);



 
// console.log(localdetails)
    
    

   



   
    
    // const handleinputs = e => {
    //     // const { name, value } = e.target
    //     // setUser({ 
    //     //     ...user,
    //     //     [name]: value         
    //     // })
    //     // // console.log(user)
     
       
    // }
     
    const addressFunction =()=> {
        if (document.getElementById(
          "same").checked) {
            
            
        document.getElementById("current_address").value=document.getElementById("permanent_address").value;
            document.getElementById("state_current").value=document.getElementById("state_permanent").value;
            document.getElementById("pincode_current").value=document.getElementById("pincode_permanent").value;
            document.getElementById("district_current").value=document.getElementById("district_permanent").value;
                
            
           
        } 
    }
    
   const [user,setuser]=useState({})
    
    const saveandnext = () => {
             
        // axios.post("http://localhost:9002/getemployeecode")
        //     .then( res => {
        //         // console.log(res.data)
        //              })


        let contact_number,personal_email_id,emergency_contact_number;
        if(stateemployeecode['employee_code']){
            employee_code=stateemployeecode['employee_code']
        }
        else{
            employee_code=document.getElementById('employee_code').value
        }
        
        employee_code=document.getElementById('employee_code').value
        console.log(employee_code)

        if(errors.mobile){
            alert('enter valid personal mobile number')
        }
        else{
             contact_number=document.getElementById('contact_number').value

        }
        if(errors.email){
            alert('enter valid personal email id')
        }
        else{
         personal_email_id=document.getElementById('personal_email_id').value

        }
        if(errors.emergencymobile){
            alert('enter valid emergency contact number')
        }
        else{
        emergency_contact_number=document.getElementById('emergency_contact_number').value

        }
        let full_name=document.getElementById('full_name').value
        let gender=document.getElementById('gender').value
        let marital_status=document.getElementById('marital_status').value
        let fathers_name=document.getElementById('fathers_name').value
        let mothers_name=document.getElementById('mothers_name').value
        let dob=document.getElementById('dob').value
        let blood_group=document.getElementById('blood_group').value
        let permanent_address=document.getElementById('permanent_address').value
        let state_permanent=document.getElementById('state_permanent').value
        let district_permanent=document.getElementById('district_permanent').value
        let pincode_permanent=document.getElementById('pincode_permanent').value
        let current_address=document.getElementById('current_address').value
        let state_current=document.getElementById('state_current').value
        let district_current=document.getElementById('district_current').value
        let pincode_current=document.getElementById('pincode_current').value
        let skype_id=document.getElementById('skype_id').value
        let linked_handle=document.getElementById('linked_handle').value
        let emergency_contact_person=document.getElementById('emergency_contact_person').value
        let relationship=document.getElementById('relationship').value
        let Type_relationship=document.getElementById('Type_relationship')?.value
        let disability=document.getElementById('disability').value
        let disability_type=document.getElementById('disability_type')?.value
        let other_disability_type=document.getElementById('other_disability_type')?.value

        // const user={employee_code,full_name,gender,marital_status,fathers_name,mothers_name,contact_number,personal_email_id,dob,blood_group,permanent_address,state_permanent,district_permanent,pincode_permanent,current_address,state_current,district_current,pincode_current,skype_id,linked_handle,emergency_contact_person,relationship,Type_relationship,emergency_contact_number,disability}
        // console.log(user)
        
        
        // const {employee_code}=user
        // console.log(user.employee_code)
        // var full_name=document.getElementsByName('full_name')
        // // console.log(full_name)
      
        const user={employee_code,full_name,gender,marital_status,fathers_name,mothers_name,contact_number,personal_email_id,dob,blood_group,permanent_address,state_permanent,district_permanent,pincode_permanent,current_address,state_current,district_current,pincode_current,skype_id,linked_handle,emergency_contact_person,relationship,Type_relationship,emergency_contact_number,disability}
    
        if(employee_code && full_name && gender && marital_status && fathers_name && mothers_name && contact_number && personal_email_id && dob && blood_group && permanent_address && state_permanent && district_permanent && pincode_permanent && current_address && state_current && district_current && pincode_current  && linked_handle && emergency_contact_person && relationship && emergency_contact_number && disability){
            axios.post("http://localhost:9002/personaldetails", user)
            .then( res => {
                alert(res.data.message)
                
                navigate(`/documentation/${employee_code}`)
               
                
                
            })
            
        } else {
        //    if((employee_code && full_name && gender && marital_status && fathers_name && mothers_name && contact_number && personal_email_id && dob && blood_group && permanent_address && state_permanent && district_permanent && pincode_permanent && current_address && state_current && district_current && pincode_current && linked_handle && emergency_contact_person && relationship && emergency_contact_number && disability)==undefined)
            // {
                alert("Fill all the fields") 

            // }


            // alert("invalid input : fill all the fields")
        }
        
    }

    const skip =()=>{
        // employee_code=document.getElementById('employee_code')
                // console.log(emp_code)
        
       
        
            navigate(`/documentation/${employee_code}`)

        
       
        // navigate(`/documentation/${user.employee_code}`)
    }
    
    
    return (
        <div>
        <div className="box"><h2>Employee Personal Details</h2></div>
        <div className="container">
          {/* {console.log(stateemployeecode)}   */}
            
               <table>
               { stateemployeecode['employee_code']===undefined &&(<div style={{paddingLeft: "119px"}}>
               <tbody><tr>
                    <td>
                       Employee Code:
                    </td>
                    <td>
                    <input type="text" placeholder="employee code" id="employee_code" name="employee_code"></input>
                </td>
                </tr>
                </tbody>
                </div>)}
                { stateemployeecode['employee_code']  &&(<div style={{paddingLeft: "119px"}} >
               <tbody><tr>
                    <td>
                       Employee Code:
                    </td>
                    <td>
                    {stateemployeecode['employee_code']}
                </td>
                </tr>
                </tbody>
                </div>)}
                
               
               
                <tbody><tr>
                    <td>
                       Full Name:
                    </td>
                    {/* {console.log(localdetails?.full_name)} */}
                    <td>
                    <input  type="text"  defaultValue={localdetails?.full_name}    placeholder="Name" name="full_name" id="full_name"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                
                <tbody><tr>
                    <td>
                        Gender:
                    </td>
                    <td>
                    <div >
                        <select   name="gender" id="gender">
                        <option style={{color:"red"}}>{localdetails?.gender}</option>
                        <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>
                    
                </select><span className="astrix" >*</span>
                
                </div>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Marital Status:
                    </td>
                    <td>
                    <div >
                        <select    name="marital_status" id="marital_status">
                        <option style={{color:"red"}}>{localdetails?.marital_status}</option>
                        <option>Marital status</option>
                    <option>Married</option>
                    <option>Unmarried</option>
                   
                    <option>Divorced</option>
                    
                </select><span className="astrix" >*</span>
                
                </div>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Father's Name:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.fathers_name}     placeholder="Name" name="fathers_name" id="fathers_name"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Mother's Name:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.mothers_name}   placeholder="Name" name="mothers_name" id="mothers_name"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                {/* <tbody><tr>
                    <td>
                       Mobile Number:
                    </td>
                    <td>
                    <input type="tel"  defaultValue={localdetails?.contact_number}   placeholder="9471***" name="contact_number" pattern="\d{10}" title="enter a valid number" id="contact_number"></input>
                </td>
                </tr>
                </tbody> */}
                <tbody><tr>

<td>

<label className="col-form-label">Mobile Number:</label>

</td>

<td>  <input defaultValue={localdetails?.contact_number} id="contact_number" style={{width: "12em"}}

type="text" placeholder="987675..."

className={`form-control ${errors.phone && "invalid"}`}

{...register("phone", { required: "Required",
maxLength:{

    value:10,
   
    message: "Invalid Mobile Number" ,          
   
              },
pattern: {

value: /([6-9]){1}([0-9]){9}$/,

message: "Invalid Mobile Number",

},

})}

onKeyUp={() => {

trigger("phone");

}}

/><span className="astrix" >*</span>

{errors.phone && (

<small className="text-danger">{errors.phone.message}</small>

)}





</td>

</tr>

</tbody>


                {/* <tbody><tr>
                    <td>
                       Personal Email ID:
                    </td>
                    <td>
                    <input type="email" defaultValue={localdetails?.personal_email_id}    placeholder="example1@***" name="personal_email_id" id="personal_email_id"></input>
                </td>
                </tr>
                </tbody> */}
                
                <tbody><tr>
                <td>
              <label className="col-form-label">Personal Email ID:</label>
              </td>
            <td>  <input defaultValue={localdetails?.personal_email_id} id="personal_email_id" style={{width: "12em"}}
                 type="text" placeholder="xyz0123@gmail..."
                 className={`form-control ${errors.email && "invalid"}`}
                 {...register("email", { required: "Required" ,
                 pattern: {
                   value:   /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                   message: "Invalid email address",
                 }})}
                 onKeyUp={() => {
                   trigger("email");
                 }}
              /><span className="astrix" >*</span>
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
              
           
            </td>
            </tr>
            </tbody>


                <tbody><tr>
                    <td>
                       DOB:
                    </td>
                    <td>
                    <input type="date"defaultValue={localdetails?.dob}    name="dob" id="dob"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Blood Group:
                    </td>
                    <td>
                        <div >
                        <select   value={localdetails?.blood_group} name="blood_group" id="blood_group">
                        <option style={{color:"red"}}>{localdetails?.blood_group}</option>
                    <option>A+</option>
                    <option>A-</option>
                    <option>B+</option>
                    <option>B-</option>
                    <option>O+</option>
                    <option>O-</option>
                    <option>AB+</option>
                    <option>AB-</option>
                </select><span className="astrix" >*</span>
                
                </div>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Permanent Address:
                    </td>
                    <td>
                    <textarea rows="3" cols="50" defaultValue={localdetails?.permanent_address}   placeholder="Permanent Address" name="permanent_address" id="permanent_address"></textarea><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        State:
                    </td>
                    <td>
                        <div >
                    <select   id="state_permanent" name="state_permanent" onChange={(e)=>handleState(e.target.value)}>
                    {/* <option >select state</option> */}
                    <option style={{color:"red"}}>{localdetails?.state_permanent}</option>
                    
                        
                        {
                        //    state.map((getstate,index)=>(
                        //     <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                        //    ))
                        (state?.map((getst,index)=>(

                            <option value={getst} key={index}>{getst}</option>

                           )))

                            
                        }
                    </select><span className="astrix" >*</span>
                    </div>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        District:
                    </td>
                    <td>
                    <select value={localdetails?.district_permanent} style={{width: "12em"}} onChange={(e)=>handleDistrict(e.target.value)} id="district_permanent">
                        {/* <option>Select District</option> */}
                        <option style={{color:"red"}}>{localdetails?.district_permanent}</option>

                        {
                            // district?.map((getdistrict,index)=>(
                            // <option value={getdistrict.district_id} key={index}>{getdistrict.district_name}</option>
                        //    ))
                        district?.map((getdis,index)=>(

                            <option value={getdis} key={index}>{getdis}</option>

                           ))
                            
                        }
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Pincode: <br></br><br></br>
                    </td>
                    <td>
                    {/* <input type="text" defaultValue={localdetails?.pincode_permanent} placeholder="Enter your hometown pincode" id="pincode_permanent" name="pincode_permanent"></input><span className="astrix" >*</span><br></br><br></br> */}
                    <select  style={{width: "12em"}}  id="pincode_permanent">

<option>Select Pincode</option>

{

    pin?.map((getpin,index)=>(

    <option value={getpin.pin_id} key={index}>{getpin.pincode}</option>

   ))

   

}

</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                   
                    <td>
                    <input type="checkbox" 
                   id="same" 
                   onChange={addressFunction}
                    />
            <label>
           If permanent address same as current address:
          </label>
                </td>
                </tr>
                </tbody>
                
                <tbody><tr>
                <td>
                    Current Address:
                </td>
                <td>
                <textarea rows="3" cols="50" defaultValue={localdetails?.current_address}  placeholder="Current Address" name="current_address" id="current_address"></textarea><span className="astrix" >*</span>
            </td>
            </tr>
            </tbody>
            <tbody><tr>
                    <td>
                        State:
                    </td>
                    <td>
                    <select value={localdetails?.state_current} name="state_current" id="state_current" onChange={(e)=>handleState(e.target.value)}>
                        <option>Select State</option>
                        {
                        //    state?.map((getstate,index)=>(
                        //     <option value={getstate.state_id} key={index}>{getstate.state_name}</option>
                        //    ))
                        (state?.map((getst,index)=>(

                            <option value={getst} key={index}>{getst}</option>

                           )))

                            
                        }
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        District:
                    </td>
                    <td>
                    {/* <input type="text" placeholder="District Name" id="district_current" name="district_current"></input> */}
                    <select value={localdetails?.district_current} style={{width: "12em"}} onChange={(e)=>handleDistrict(e.target.value)} id="district_current">
                        <option>Select District</option>
                        {
                        //     district?.map((getdistrict,index)=>(
                        //     <option value={getdistrict.district_id} key={index}>{getdistrict.district_name}</option>
                        //    ))
                        district?.map((getdis,index)=>(

                            <option value={getdis} key={index}>{getdis}</option>

                           ))
                            
                            
                        }
                    </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                        Pincode:<br></br><br></br>
                    </td>
                    <td>
                    {/* <input type="text" defaultValue={localdetails?.pincode_current} placeholder="Enter your current city pincode" id="pincode_current" name="pincode_current"></input><span className="astrix" >*</span><br></br><br></br> */}
                    <select  style={{width: "12em"}} id="pincode_current" >

<option>Select Pincode</option>

{

    pin?.map((getpin,index)=>(

    <option value={getpin.pin_id} key={index}>{getpin.pincode}</option>

   ))

   

}

</select>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Skype ID:
                    </td>
                    <td>
                    <input type="ID"  defaultValue={localdetails?.skype_id} placeholder="Unique Skype NAME" id="skype_id" name="skype_id"></input>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Linkedin Handle:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.linked_handle} placeholder="Your custom linkedin URL" id="linked_handle" name="linked_handle"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Emergency Contact Person:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.emergency_contact_person} placeholder="Name of the person" id="emergency_contact_person" name="emergency_contact_person"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                <tbody><tr>
                    <td>
                       Relationship:
                    </td>
                    <td>
                        <select name="relationship" value={localdetails?.relationship} id="relationship" onChange={(e)=>{handleshowhide2(e)}}>
                        <option style={{color:"red"}}>{localdetails?.relationship}</option>
                        <option>Select</option>
                        <option>Father</option>

<option>Mother</option>

<option>Uncle</option>

<option>Aunt</option>

<option>Sibling</option>

<option>Spouse</option>

<option>Friend</option>
                </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                { showhide2==="Other" && (
                <div><tbody><tr>
                    <td>
                       Type of Other Relationship:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.Type_relationship} placeholder="Uncle,Aunt,Local Guardian etc" id="Type_relationship" name="Type_relationship"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody></div>)}
                {/* <tbody><tr>
                    <td>
                      Emergency Contact Number:
                    </td>
                    <td>
                    <input type="text" defaultValue={localdetails?.emergency_contact_number} placeholder="9471***" id="emergency_contact_number" name="emergency_contact_number"></input>
                </td>
                </tr>
                </tbody> */}
                <tbody><tr>

<td>

<label className="col-form-label">Emergency Mobile Number:</label>

</td>

<td>  <input defaultValue={localdetails?.emergency_contact_number} id="emergency_contact_number" style={{width: "12em"}}

type="text" placeholder="987675..."

className={`form-control ${errors.emergencymobile && "invalid"}`}

{...register("emergencymobile", { required: "Required",

maxLength:{

value:10,

message:"Invalid Mobile Number"

},

pattern: {

value: /([6-9]){1}([0-9]){9}$/,

message: "Invalid Mobile Number",

},

})}

onKeyUp={() => {

trigger("emergencymobile");

}}

/><span className="astrix" >*</span>

{errors.emergencymobile && (

<small className="text-danger">{errors.emergencymobile.message}</small>

)}





</td>

</tr>

</tbody>
                <tbody><tr>
                    <td>
                    Are you a person  with disability:
                   
                    </td>
                    <td>
                    <select name="disability"  id="disability" onChange={(e)=>{handleshowhide(e)}}>
                    <option style={{color:"red"}}>{localdetails?.disability}</option>
                    <option>Select</option>
                    <option>Yes</option>
                    <option>No</option>
                    
                </select><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody>
                
            
                { showhide==="Yes" && ( 
                   <div><tbody><tr>
                    <td>
                        Disability Type:
                    </td>
                    <td>
                    <select  id="disability_type" value={localdetails?.disability_type} name="disability_type" onChange={(e)=>{handleshowhide1(e)}} >
                        <option >Select Disability</option>
                        {
                           disability.map((gettype,index)=>(
                            <option  key={index}>{gettype.type}</option>
                           ))
                            
                        }
                    </select ><span className="astrix" >*</span>
                    
                </td>
                </tr>
                </tbody></div>)}

                { (showhide1==="Other" && showhide==="Yes") && (
                    <div><tbody><tr>
                    <td>
                       Other Disability Type:
                    </td>
                    <td>
                    <input type="text" placeholder="Mention any other type" id="other_disability_type" name="other_disability_type"></input><span className="astrix" >*</span>
                </td>
                </tr>
                </tbody></div>)}

            
            <tbody><tr>
                <td>
            <div className="camp">
            <div ><button type="submit" onClick={skip}>Skip</button></div>&nbsp;&nbsp;
            <div ><button type="submit" onClick={saveandnext} >Save and Next</button></div>
             </div>
             </td>
                </tr>
                </tbody>
                
        </table>
       
        </div>
       
        
    </div>
        
)
    } 


export default Personaldetails