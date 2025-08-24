import react from 'react'
 import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
 const Register = () => {
    const navigate = useNavigate()
    //from submit 
    const submitHandler = async(values) => {
        try {
            await axios.post('/users/register', values)
            message.success('Registration Successful')
            navigate('/login')
        } catch (error) {
            message.error('Invalid username or password')
        }
    }
     return(
         <>
             <div className='register-page'>
                 <Form layout='vertical' onFinish={submitHandler}>
                     <h1>Register Form</h1>
                     <Form.Item label="Name" name="name">
                         <Input />
                     </Form.Item>
                      <Form.Item label="Email" name="email">
                         <Input type='email' />
                     </Form.Item>
                      <Form.Item label="Password" name="password">
                         <Input type='password' />
                     </Form.Item>
                     <div className='d-flex justify-content-between'>
                        <Link to="/login" >Already Register ? click here to login</Link>
                        <button className='btn btn-primary' >Register</button>
                     </div>
                 </Form>
             </div>
         </>
     )
 }

export default Register;



