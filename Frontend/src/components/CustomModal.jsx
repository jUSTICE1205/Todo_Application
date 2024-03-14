import React, { useState } from "react";
import { Button, Modal, Form , Input } from "antd";
import axios from 'axios';

const CustomModal = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    form.submit();
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields(); // Reset form fields when modal is closed
  };

  const onFinish = (values) => {
    setIsModalOpen(false);
    axios.post('http://localhost:8080/todo', {
                title: values.title,
                description: values.description,
            })
                .then(res => {
                console.log("Todo added");
                // Optionally handle response data if needed
                // console.log(res.data);
                })
                .catch(error => {
                });
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        {props.title}
      </Button>
      <Modal
        title={props.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText={props.type}
      >
        <Form
          form={form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please enter the title",
              },
            ]}
          >
            <Input onChange={(e) => setTitle(e.target.value)}/>
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
          >
            <Input.TextArea onChange={(e) => setDescription(e.target.value)} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default CustomModal;
