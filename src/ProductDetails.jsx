import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Spinner, Alert, Row, Col, Modal } from "react-bootstrap";
import ProductCard from "./components/ProductCard";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDelete, setShowDelete] = useState(false);
  const [feedback, setFeedback] = useState(null);

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

  const handleDelete = async () => {
    setFeedback(null);
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/${product.id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) throw new Error("Failed to delete product");
      setFeedback({
        type: "success",
        message: "Product deleted! Redirecting...",
      });
      setTimeout(() => (window.location.href = "/products"), 1200);
    } catch (err) {
      setFeedback({ type: "danger", message: "Error: " + err.message });
    }
    setShowDelete(false);
  };

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
        {feedback && (
          <Alert
            variant={feedback.type}
            onClose={() => setFeedback(null)}
            dismissible
          >
            {feedback.message}
          </Alert>
        )}
        <ProductCard product={product} showActions={false} />
        <div className="d-flex flex-wrap justify-content-center mt-3">
          <Button variant="success" disabled className="mb-2 me-2">
            Add to Cart
          </Button>
          <Button
            variant="danger"
            className="mb-2 me-2"
            onClick={() => setShowDelete(true)}
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
        </div>
        <Modal show={showDelete} onHide={() => setShowDelete(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Delete</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to delete this product?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDelete(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </Col>
    </Row>
  );
}

export default ProductDetails;
