import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react"


const Login = ({ setLoginUser}) => {
  
//   const[user_data,setuserdata]=useState({})
   
    const navigate = useNavigate()

    const [ user, setUser] = useState({
        userid:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
           
        })
        // console.log(user)
       
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            if(user){
            alert(res.data.message)
            setLoginUser(res.data.user)
            localStorage.setItem('id',JSON.stringify(user))
            navigate("/")
        }else{
                setLoginUser(null)
            }
        })
    }

    return (
        <div className="body"  style={{marginLeft:"34em"}}>
                <div className="login">
            <img src="logo.png" alt="logo"></img>
            <h1 className="heading">Employee Details Portal</h1>            
            <input type="text" name="userid" value={user.userid} onChange={handleChange} placeholder="Enter your userid"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>   
        </div>
        </div>

        
    )
}
export default Login