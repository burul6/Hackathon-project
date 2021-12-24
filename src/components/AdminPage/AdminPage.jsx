import React from "react";
import { Row, Col } from "antd";

import AdminProductList from "./AdminProductList";
import AddProductModal from "./AddProductModal";

const AdminPage = () => {
  return (
    <div className="container" style={{ margin: "60px auto" }}>
      <Row>
        <Col span={22}>
          <Col span={22}>
            <AddProductModal />
            <AdminProductList />
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;