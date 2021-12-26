import React from "react";
import { Row, Col } from "antd";

import AdminProductList from "./AdminProductList";
import AddProductModal from "./AddProductModal";
import Header from "../Header/Header";

const AdminPage = () => {
  return (
    <div>
      <div
        style={{
          background:
            "url(https://arredo.qodeinteractive.com/wp-content/uploads/2018/06/main-home-slide-2.jpg)no-repeat center center",
          width: "100%",
          height: "800px",
          backgroundSize: "cover",
          padding: "0 5%",
        }}
      >
        <Header />
        <Row>
          <Col span={22}>
            <Col span={22}>
              <AddProductModal />
              <AdminProductList />
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminPage;
