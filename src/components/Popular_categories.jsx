import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {categories} from "../data/category_data"; 
const PopularCategories = () => {
  return (
    <section className="py-5 ">
      <Container>
        <h2 className="fw-bold mb-5">Popular Categories</h2>
        <Row className="g-4 align-items-center text-center">
          {categories.map((cat, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2}>
              <div className="d-flex flex-column align-items-center category-card">
                <div className="category-image rounded-circle mb-3">
                  <img src={cat.image} alt={cat.name} className="img-fluid" />
                </div>
                <h6 className="fw-semibold mb-1">{cat.name}</h6>
                {/* <p className="text-muted mb-0">{cat.products} products</p> */}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularCategories;
