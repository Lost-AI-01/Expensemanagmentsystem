import React, {useState} from "react";
import {Button, Form, Modal, Select, Input, message} from "antd";
import Layouts from "./../components/layout/Layouts";
import Footer from "../components/layout/Footer";
import axios from "axios"
import Spinner from "../components/Spinner";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    //form handling 
    const handleSubmit = async (values) => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
            setLoading(true)
            await axios.post('/transections/add-transection', {...values, userid:user._id})
            setLoading(false);
            message.success('Transections add successfully');
            setShowModal(false);
        } catch (error) {
            setLoading(false);
            message.error('Failed to add the transection')
        }

    }
    return (
        <Layouts>
            {loading && <Spinner />}
        <div className="filters">
            <div>Range Filter</div>
            <div>
                <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add New</button>
            </div> 
        </div>
        <div className="contents">

        </div>
        <Modal title="Add Transection"
         open={showModal} 
         onCancel={() => setShowModal(false) } 
         footer={false}>
            <Form layout="vertical" onFinish={handleSubmit} form={form}>
                <Form.Item label="Amount" name="amount">
                    <Input placeholder="Enter amount" />
                </Form.Item>
                 <Form.Item label="Type" name="type">
                    <Select>
                        <Select.Option value="Income">Income</Select.Option>
                        <Select.Option value="Expense">Expense</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Category" name="category">
                    <Select>
                        <Select.Option value="Salary">Salary</Select.Option>
                        <Select.Option value="business">Business</Select.Option>
                        <Select.Option value="investments">Investments</Select.Option>
                        <Select.Option value="gifts">Gifts</Select.Option>
                        <Select.Option value="housing">Housing</Select.Option>
                        <Select.Option value="food">Food</Select.Option>
                        <Select.Option value="Transport">Transport</Select.Option>
                        <Select.Option value="healthcare">Healthcare</Select.Option>
                        <Select.Option value="education">Education</Select.Option>
                        <Select.Option value="entertainments">Entertainments</Select.Option>
                        <Select.Option value="loans">Loans</Select.Option>
                        <Select.Option value="others">Others</Select.Option>
                    </Select>
                </Form.Item>
                 <Form.Item label="References" name="reference">
                    <Input placeholder="Enter References " />
                </Form.Item>
                <Form.Item label="Description" name="description">
                    <Input placeholder="Add Description" />
                </Form.Item>
                <Form.Item label="Date" name="date">
                    <Input type="date" />
                </Form.Item>
                <div className="d-flex justify-content-end">
                    <Button type="submit" className="btn btn-primary" htmlType="submit">
                        SAVE</Button>
                </div>

            </Form>

        </Modal>
        </Layouts>
    )
}

export default HomePage;