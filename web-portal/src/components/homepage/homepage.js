import React, { useEffect } from "react"
import "./homepage.css"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"
import axios from "axios"
import { click } from "@testing-library/user-event/dist/click"


const Homepage = ({setLoginUser}) => {

    const [search,setsearch]=useState({})
    const[clicked,setclicked]=useState("0")



    const handlechange=e=>{
        const {name,value}=e.target
      setsearch({
        ...search,
        [name]:value
      })
    }

    // console.log(search.search)

    const [post, setPost] = useState([]);
    const navigate=useNavigate()
   
    
    useEffect(()=>{
        axios.post("http://localhost:9002/test").then(res=>{
            // console.log(res.data)
                if(res.data){
                setPost(res.data)}
            })
           
    },[]) 
//    console.log(post)



// search bar 
   const[temp,settemp]=useState()
   const find=()=>{
setclicked("1")

     let local=[]
     for(let x of post)  
     {  var localobj={}
              // console.log(x)
        let a=x.employee_name.toLowerCase()
        let b=search.search.toLowerCase()

        if(a.startsWith(b)){
            console.log(x)
           localobj['employee_code']=x['employee_code']
           localobj['employee_name']=x['employee_name']
           localobj['designation']=x['designation']
           localobj['office_location']=x['office_location']
           localobj['doj']=x['doj']          
           local.push(localobj)
            
        }
        // console.log(localobj)
     }

    //  console.log("called")
    settemp(local)
    }
    console.log(temp)


    
 





    useEffect(()=>{ 
        const local_user=JSON.parse(localStorage.getItem('id'))
    //    console.log(local_user)
       setLoginUser(local_user)
    },[])
    const logout=()=>{
        localStorage.removeItem('id')
        setLoginUser(null)
    }

    // const [post, setPost] = useState([]);
    // const navigate=useNavigate()
    // useEffect(()=>{
    //     axios.post("http://localhost:9002/test").then(res=>{
    //             setPost(res.data)
    //         })
    //     //    console.log(post)
    // },[] )     
    
  const edit= (x)=>{
    navigate(`/sectionpage/${x}`)

    
    // console.log(x)
  }

    const sectionpage=()=>{
        navigate("/sectionpage")
    }
        //   {console.log(post)} 





const review=(x)=>{
    // console.log(x)
    navigate(`/review/${x}`)
}

// if(post)
// {if(post.length===0)
// {     
//     axios.post("http://localhost:9002/test").then(res=>{
//             // console.log(res.data)
//             if(res.data){
//                 setPost(res.data)
// }            })
//     return<>Refresh.......Please wait</>
    
// }}


    return (
         <div>
    
           
        <title>Homepage Dhurin</title>
        <link rel="stylesheet" href="homepage.css"/>
    
    
        
        <div className = "logo" ><img src="logo.png"  alt="logo" width="250" height="100" style={{marginLeft:"55em"}}></img></div><br></br>
        <div className="container" style={{width:"90.5em"}}>
        
        <div>
    
    
    <input type="text" name="search" value={search.search}  onChange={handlechange}></input>
    <button onClick={find}>Search</button>
  
   </div>
        
         <button id = "btn" type="submit" onClick={sectionpage}>Add Employee</button>&nbsp;&nbsp;&nbsp;&nbsp; 
         <button type="submit" onClick={logout}>Logout</button><br></br><br></br>
         {/* <button id = "btn" type="submit" onClick={details}>details</button>&nbsp;&nbsp;&nbsp;&nbsp;  */}
         {/* <button id = "btn" type="submit" onClick={update}>Update</button>&nbsp;&nbsp;&nbsp;&nbsp;  */}

         <table className="employee-data"> 
         
             <thead >
              
                 <tr>
                     <th>Employee ID</th>
                     <th>Employee Name</th>
                     <th>Designation</th>
                     <th>Office City</th>
                     <th>Date of Joining</th>
                     <th>Edit option</th>
                    
                 
                 </tr>
             </thead>
             
           
             {/* <tbody>

                    {
                        temp?.map((item) => (
                            
                            <tr key={item.employee_code}>
                                <td>{item.employee_code}</td>
                                <td><a onClick={()=>{review(item.employee_code)}} style={{cursor:'pointer',color:"blue"}}>{item.employee_name}</a></td>
                                <td>{item.designation}</td>
                                <td>{item.office_location}</td>
                                <td>{item.doj}</td>
                                <td><button onClick={()=>{edit(item.employee_code)}}>Edit</button> </td>
                                

                                
                                
                                
                            </tr>
                        ))
                    }
                </tbody> */}
                
               { clicked === "1" &&(
                
                    <tbody>

{
    temp?.map((item) => (
        
        <tr key={item.employee_code}>
            <td>{item.employee_code}</td>
            <td><a onClick={()=>{review(item.employee_code)}} style={{cursor:'pointer',color:"blue"}}>{item.employee_name}</a></td>
            <td>{item.designation}</td>
            <td>{item.office_location}</td>
            <td>{item.doj}</td>
            <td><button onClick={()=>{edit(item.employee_code)}}>Edit</button> </td>
            

            
            
            
        </tr>
    ))
}
</tbody>
             
               )

               }
                    

        {
            clicked === "0" &&(
                
                    <tbody>

{
    post?.map((item) => (
        
        <tr key={item.employee_code}>
            <td>{item.employee_code}</td>
            <td><a onClick={()=>{review(item.employee_code)}} style={{cursor:'pointer',color:"blue"}}>{item.employee_name}</a></td>
            <td>{item.designation}</td>
            <td>{item.office_location}</td>
            <td>{item.doj}</td>
            <td><button onClick={()=>{edit(item.employee_code)}}>Edit</button> </td>
            

            
            
            
        </tr>
    ))
}
</tbody>
                
            )
        }



                
         </table><br></br>
         </div>
         
         </div>    
    )
}

export default Homepage

