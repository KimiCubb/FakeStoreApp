import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Spinner, Alert, Row, Col } from "react-bootstrap";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch product");
        return res.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <Spinner animation="border" className="d-block mx-auto mt-5" />;
  if (error)
    return (
      <Alert variant="danger" className="mt-4">
        {error}
      </Alert>
    );
  if (!product) return null;

  return (
    <Row className="justify-content-center mt-4">
      <Col md={6}>
        <Card>
          <Card.Img
            variant="top"
            src={product.image}
            alt={product.title}
            style={{
              objectFit: "contain",
              height: "300px",
              background: "#f8f9fa",
            }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              <strong>Category:</strong> {product.category}
            </Card.Text>
            <Card.Text>{product.description}</Card.Text>
            <Card.Text>
              <strong>Price:</strong> ${product.price}
            </Card.Text>
            <Button variant="success" disabled className="mb-2 me-2">
              Add to Cart
            </Button>
            <Button
              variant="danger"
              className="mb-2 me-2"
              onClick={async () => {
                if (
                  window.confirm(
                    "Are you sure you want to delete this product?"
                  )
                ) {
                  try {
                    const res = await fetch(
                      `https://fakestoreapi.com/products/${product.id}`,
                      {
                        method: "DELETE",
                      }
                    );
                    if (!res.ok) throw new Error("Failed to delete product");
                    alert("Product deleted!");
                    window.location.href = "/products";
                  } catch (err) {
                    alert("Error: " + err.message);
                  }
                }
              }}
            >
              Delete Product
            </Button>
            <Button
              variant="secondary"
              className="mb-2"
              as="a"
              href={`/products/${product.id}/edit`}
            >
              Edit Product
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default ProductDetails;
