import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { products } from "../data/product";
const Product = () => {
  return (
    <section className="py-5">
      <Container>
        <h2 className="fw-bold mb-4">Featured Products</h2>
        <Row className="g-4 align-items-center">
          {products.map((p, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3}>
              <div className="product-card text-center border rounded-3 p-3 shadow-sm">
                <div className="image-wrapper mb-3">
                  <img className="product-image img-fluid"
                    src={p.images[0]}
                    alt={p.name}
                    onMouseOver={(e) => (e.currentTarget.src = p.images[1])}
                    onMouseOut={(e) => (e.currentTarget.src = p.images[0])}
                  />
                  {p.discount && (
                    <span className="discount-badge">{p.discount}</span>
                  )}
                  {p.tag && <span className="tag-badge">{p.tag}</span>}
                </div>
                <h6 className="fw-semibold">{p.name}</h6>
                <p className="text-muted mb-1">{p.sku}</p>
                <p className="price-text">{p.price}</p>
                {p.oldPrice && <p className="text-decoration-line-through text-muted">{p.oldPrice}</p>}
                <p className={p.stock ? "text-success" : "text-danger"}>
                  {p.stock ? "✔ In Stock" : "Out of Stock"}
                </p>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <Button variant="primary" className="card-button">
                        Add to Cart
                    </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Product;
