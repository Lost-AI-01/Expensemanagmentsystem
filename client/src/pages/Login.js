import react, {useState} from 'react'
 import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Spinner from "../components/spinner";
 const Login = () => {
    const [loading, setloading] = useState(false)
    const navigate = useNavigate()
    //from submit 
    const submitHandler = async(values) => {
        try {
            setloading(true)
           const {data } =  await axios.post('http://localhost:8080/api/v1/users/login', values)
           setloading(false)
           message.success('login success')
           localStorage.setItem('user', JSON.stringify({...data.user, password:""}));
           navigate("/")
        } catch (error) {
            setloading(false)
            message.error('Something went wrong')
            
        }
    }
     return(
         <>
             <div className='login-page'>
                {loading && <spinner />}
                 <Form layout='vertical' onFinish={submitHandler}>
                     <h1>Login Form</h1>
                      <Form.Item label="email" name="email">
                         <Input type='email' />
                     </Form.Item>
                      <Form.Item label="password" name="password">
                         <Input type='password' />
                     </Form.Item>
                     <div className='d-flex justify-content-between'>
                        <Link to="/register" >Not a user ? click here to Register</Link>
                        <button className='btn btn-primary' >Login</button>
                     </div>
                 </Form>
             </div>
         </>
     )
 }

 export default Login;