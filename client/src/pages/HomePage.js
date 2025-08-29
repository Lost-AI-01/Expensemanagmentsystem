import React, {useState} from "react";
import {Form, Modal, Select} from "antd";
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
                    <input type="text"/>
                </Form.Item>
                 <Form.Item label="Type" name="type">
                    <Select>
                        <Select.Option value="Income">Income</Select.Option>
                        <Select.Option value="Expense">Expense</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Category" name="category">
                    <Select>
                        <Select.Option value="Income">Income</Select.Option>
                        <Select.Option value="Expense">Expense</Select.Option>
                    </Select>
                </Form.Item>
            </Form>

        </Modal>
        </Layouts>
    )
}

export default HomePage;