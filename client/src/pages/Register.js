import react,{useState} from 'react'
import {Form, Input, message} from 'antd'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import Spinner from "../components/spinner.js";
 const Register = () => {
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    //from submit 
    const submitHandler = async(values) => {
        try {
            setloading(true)
            await axios.post('http://localhost:8080/api/v1/users/register', values)
            message.success('Registration Successful')
            setloading(false)
            navigate('/login')
        } catch (error) {
            setloading(false)
            message.error('Something went wrong')
        }
    }
     return(
         <>
             <div className='register-page'>
                {loading && <spinner />}
                 <Form layout='vertical' onFinish={submitHandler}>
                     <h1>Register Form</h1>
                     <Form.Item label="name" name="name">
                         <Input />
                     </Form.Item>
                      <Form.Item label="email" name="email">
                         <Input type='email' />
                     </Form.Item>
                      <Form.Item label="password" name="password">
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



