import React, {useState} from "react";
import {Button, Form, Modal, Select, Input} from "antd";
import Layouts from "./../components/layout/Layouts";
import Footer from "../components/layout/Footer";

const HomePage = () => {
    const [showModal, setShowModal] = useState(false);

    //form handling 
    const handleSubmit = (values) => {
        console.log(values)

    }
    return (
        <Layouts>
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
            <Form layout="vertical" onFinish={handleSubmit}>
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
                    <Button type="submit" className="btn btn-primary">
                        SAVE</Button>
                </div>

            </Form>

        </Modal>
        </Layouts>
    )
}

export default HomePage;