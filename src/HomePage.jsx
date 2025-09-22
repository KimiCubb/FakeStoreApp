import React from "react";
import { Alert, Container } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Alert variant="success" className="mt-4 text-center">
        <h1>Welcome to FakeStore!</h1>
      </Alert>
      <p style={{ fontSize: "1.2rem", marginTop: "2rem" }}>
        FakeStore is your one-stop shop for all things imaginary! Founded in
        2025, our mission is to provide the best selection of high-quality,
        fictional products for developers, designers, and dreamers alike.
        Whether you’re browsing for fun or building your next project, FakeStore
        is here to inspire and support your creativity. Enjoy exploring our
        store!
      </p>
    </Container>
  );
}

export default HomePage;
