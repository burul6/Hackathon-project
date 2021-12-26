import React, { useContext, useState } from "react";
import { Button, Form, Input } from "antd";
import { useAuth } from "../../contexts/authContext";
import { commentsContext } from "../../contexts/commentsContext";
const { TextArea } = Input;

const CommItem = ({id}) => {
    const { createComment} = useContext(commentsContext);
  const {user: {email}} = useAuth();
  const onFinish = (values) => {
    console.log("Success:", values);
    createComment({...values, productId: id,email }, id)
  };
    return (
        <div style={{textAlign:"center"}}>
            <>
      <Form
          name="basic"
          onFinish={onFinish}
          placeholder="Place for your message.. "
          style={{color:'white'}}
          autoComplete="off"
          layout="vertical"
        >
      <Form.Item
            name="comment"
            type="textarea"
            rules={[
              {
                required: true,
                message: "Please paste text!",
              },
            ]}
      >
      <TextArea rows={2} cols={6} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit"  type="danger" style={{height:"44px", width:"50%"}}>
        Add comment 
      </Button>
    </Form.Item>
    </Form>
    </>
        </div>
    );
};

export default CommItem;