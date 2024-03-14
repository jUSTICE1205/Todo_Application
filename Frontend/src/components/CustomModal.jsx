import React, { useEffect } from "react";
import { Modal, Form, Input, Button } from "antd";

const CustomModal = ({ title, type, record, visible, onCancel }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (record) {
      form.setFieldsValue({
        title: record.title,
        description: record.description
      });
    }
  }, [record, form]);

  const onFinish = (values) => {
    // Handle form submission
  };

  return (
    <Modal
      title={title}
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={form.submit}>
          {type}
        </Button>
      ]}
    >
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Please enter the title' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
        >
          <Input.TextArea />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CustomModal;