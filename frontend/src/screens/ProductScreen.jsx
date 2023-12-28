import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  
  const { id: productId } = useParams();
  
  useEffect(() => {
    const fetchProduct = async () => {
      const response = (await axios.get(`/api/product/${productId}`)).data;
      setProducts(response);
    };

    setTimeout(() => fetchProduct(),"2000");
  }, [productId]);

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={5}>
          <Image src={products.image} alt={products.name} fluid></Image>
        </Col>
        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>{products.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={products.rating} text={`${products.reviews}`} />
            </ListGroupItem>
            <ListGroupItem>Price: ${products.price}</ListGroupItem>
            <ListGroupItem>Price: ${products.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${products.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      {products.countInstock > 0 ? "In Stock" : "Out of Stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={products.countInstock === 0}
                >
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
