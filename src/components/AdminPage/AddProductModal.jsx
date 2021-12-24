import React, { useContext, useState } from "react";

import { productsContext } from "../../contexts/productsContext";

import { Modal, Button, Form, Input, InputNumber } from "antd";

const AddProductModal = () => {
  const { createProduct } = useContext(productsContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    createProduct(values).then(() => handleCancel());
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add product
      </Button>
      <Modal
        title="Add product"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input title!",
              },
            ]}
          >
              <Input />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input price!",
              },
            ]}
          >
            <InputNumber min={1} style={{width: "100%"}} />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input description!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="SKU"
            name="sku"
            rules={[
              {
                required: true,
                message: "Please input SKU!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[
              {
                required: true,
                message: "Please input category!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Tag"
            name="tag"
            rules={[
              {
                required: true,
                message: "Please input tag!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Dimensions"
            name="dimensions"
            rules={[
              {
                required: true,
                message: "Please input dimensions!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Color"
            name="color"
            rules={[
              {
                required: true,
                message: "Please input color!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 1"
            name="image1"
            rules={[
              {
                required: true,
                message: "Please input URL of image 1!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 2"
            name="image2"
            rules={[
              {
                required: true,
                message: "Please input URL of image 2!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 3"
            name="image3"
            rules={[
              {
                required: true,
                message: "Please input URL of image 3!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 4"
            name="image4"
            rules={[
              {
                required: true,
                message: "Please input URL of image 4!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Image 5"
            name="image5"
            rules={[
              {
                required: true,
                message: "Please input URL of image 5!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 9,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Add product
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddProductModal;
