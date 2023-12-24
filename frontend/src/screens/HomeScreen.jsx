import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
function HomeScreen() {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map(() => {
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product}></Product>
          </Col>;
        })}
      </Row>
    </>
  );
}

export default HomeScreen;