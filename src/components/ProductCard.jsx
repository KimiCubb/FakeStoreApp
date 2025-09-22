// src/components/ProductCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ product, onDelete, onEdit, showActions = true }) {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={product.image}
        alt={product.title}
        style={{ objectFit: "contain", height: "200px", background: "#f8f9fa" }}
      />
      <Card.Body>
        <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        {showActions && (
          <>
            <Button
              as={Link}
              to={`/products/${product.id}`}
              variant="primary"
              size="sm"
              className="me-2 mb-2"
            >
              View Details
            </Button>
            {onEdit && (
              <Button
                as={Link}
                to={`/products/${product.id}/edit`}
                variant="secondary"
                size="sm"
                className="me-2 mb-2"
              >
                Edit
              </Button>
            )}
            {onDelete && (
              <Button
                variant="danger"
                size="sm"
                className="mb-2"
                onClick={() => onDelete(product)}
              >
                Delete
              </Button>
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
